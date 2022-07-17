<template lang="pug">
v-row#list
  v-col(cols='12')
    h1.text-center 代辦事項
  v-col(cols='12')
    v-text-field.font-weight-bold.text-center.py-2(variant='outlined' single-line color='#02362c' v-model='newItem' :rules='[required]' append-icon='mdi-plus' @click:append='onInputSumbit' @keydown.enter='onInputSumbit')
    v-table
      tbody
        tr(v-if='items.length === 0')
          h3.pa-3(colspan='2') 沒有代辦事項
        tr(v-for='(item, index) in items')
          td
            v-text-field.pt-5(variant='plain' v-if='item.edit' v-model='item.model' autofocus) 
            h3.pa-3(v-else) {{ item.name }}
          td.text-right
            h3.pa-3(v-if='item.edit')
              v-btn(icon variant='plain' color='green' @click='confirmEditItem(index)')
                v-icon mdi-check
              v-btn(icon variant='plain' color='red' @click='cancelEditItem(index)')
                v-icon mdi-undo
            h3.pa-3(v-else)
              v-btn(icon variant='plain' @click='editItem(index)')
                v-icon mdi-pencil
              v-btn(icon variant='plain' color='red' @click='delItem(index)')
                v-icon mdi-delete
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'

const newItem = ref('')

const required = value => {
  return !!value
}

const list = useListStore()
// 解構 data ，要動態更新，使用 storeToRefs
const { items } = storeToRefs(list)
// 解構 function
const { addItem, delItem, editItem, confirmEditItem, cancelEditItem } = list

const onInputSumbit = () => {
  const valid = required(newItem.value)

  if (!valid) return
  addItem(newItem.value)
  newItem.value = ''
}
</script>