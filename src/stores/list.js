import { defineStore } from 'pinia'


const time =parseInt(import.meta.env.VITE_TIME)
const timebreak =parseInt(import.meta.env.VITE_TIMEBREAK)

export const useListStore=defineStore({
  id:'list',
  state(){
    return{
      items:[],
      finished:[],
      current:'',
      id:1,
      break:false,
      timebreak:time,
      notify:false
    }
  },
  actions:{
    addItem(data){
      this.items.push({
        id:this.id++,
        name:data,
        edit:false,
        model:data
      })
    },
    delItem(index){
      this.items.splice(index,1)
    },
    editItem(index){
      this.items[index].edit=true
    },
    confirmEditItem(index){
      this.items[index].name=this.items[index].model
      this.items[index].edit=false

    },
    cancelEditItem(index){
      this.items[index].model=this.items[index].name
      this.items[index].edit=false
    },
    countdown(){
      this.timebreak--
    },
    start(){
      this.current=this.break?'休息一下':this.items.shift().name
    },
    finish(){
      if(!this.break){
        this.finished.push({
          name:this.current,
          id:this.id++
        })
      }
      const oldCurrent=this.current
      const notification=new Notification('代辦事項完成',{body:oldCurrent})
      this.current=''
      if(this.items.length > 0){
        this.break = !this.break
      }
      this.timebreak = this.break?timebreak:time
    },
    toggleNotify(){
      if(!this.notify && 'Notification' in window){
        Notification.requestPermission(permission => {
          if(permission ==='granted'){
            this.notify=true
          }
        })
      }else{
        this.notify=false
      }
    }
  },
  persist:{
    key:'pomodoro-list'
  }
})