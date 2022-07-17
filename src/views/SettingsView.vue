<template lang='pug'>
v-row#setting
  v-col(cols='12')
    h1.text-center 選擇休息時，聽的音樂
    h3.text-center ( 目前選擇的音樂： {{ selectedAlarm }} )
  v-col(cols='12')
    h4.text-right 
    v-table
      thead
        tr
          th.text-center 名稱
          th.text-center 試聽
          th.text-start 選擇
      tbody
        tr(v-for='alarm in alarms')
          td.text-center {{ alarm.name }}
          td.text-center 
            audio(controls :src='alarm.file')
          td.text-start
            v-radio(v-model='selectedAlarm' :value='alarm.id')
</template>

<script setup>
import { useSettingsStore } from '../stores/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()

// 不會即時更新
// const {selectedAlarm}=settings

// 使用 storeToRefs 會變成響應式，就會即時更新了
const { selectedAlarm, alarms } = storeToRefs(settings)

</script>