<template lang='pug'>
v-row#home.text-center.fill-height.fluid.justify-center.align-center
  v-col.justify-center.bg-white.pb-10(cols='6')
    h1.text-h1.font-weight-bold.mt-10.mb-10.text-primary {{ timeText }}
    h1.text-h4.font-weight-bold.mt-15.mb-5.text-primary {{ currentText }}
    v-btn.mx-4(icon  color='#FF8042' size="x-large" v-if='status !== 1' @click='startTimer')
      v-icon(color='#FFF' size="x-large") mdi-play
    v-btn.mx-4(icon color='#D53030' size="x-large" v-else  @click='pauseTimer')
      v-icon(color='#FFF' size="x-large") mdi-pause
    v-btn.mx-4(icon color='#779899'  variant="outlined" v-if='current.length > 0' @click='finishTimer(true)')
      v-icon mdi-skip-next
</template>

<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useListStore } from '../stores/list'
import { useSettingsStore } from '../stores/settings'

const list = useListStore()
const { current, items, timebreak } = storeToRefs(list)
const { countdown, start, finish } = list

const settings = useSettingsStore()
const { selectedAlarmFile } = storeToRefs(settings)

const currentText = computed(() => {
  return current.value.length > 0 ? current.value : items.value.length > 0 ? '點擊開始' : '無代辦事項'
})

const timeText = computed(() => {
  const m = Math.floor(timebreak.value / 60).toString().padStart(2, '0')
  const s = (timebreak.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})


let timer
const status = ref(0)

const startTimer = () => {
  if (status.value === 0 && items.value.length > 0) {
    start()
  }
  if (current.value.length > 0) {
    status.value = 1
    timer = setInterval(() => {
      countdown()
      if (timebreak.value === 0) {
        finishTimer(false)
      }
    }, 1000)
  }
}

const pauseTimer = () => {
  status.value = 2
  clearInterval(timer)
}

const finishTimer = (skip) => {
  clearInterval(timer)
  status.value = 0
  finish()
  if (!skip) {
    const audio = new Audio()
    audio.src = selectedAlarmFile.value
    audio.play()
  }
  if (items.value.length > 0) {
    startTimer()
  }
}

</script>