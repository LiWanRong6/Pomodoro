<template lang='pug'>
v-app
  v-app-bar(color='primary')
    v-app-bar-title(color='#143423') 
      h3 番茄鐘 Pomodoro
    v-spacer
    v-btn.me-10(icon to='/' color='#143423')
      v-icon mdi-timer
      | time
    v-btn.me-12(icon to='/list' color='#143423')
      v-icon mdi-format-list-bulleted
      | task
    v-btn.me-10(icon to='/settings' color='#143423')
      v-icon mdi-cog
      | setting
    v-btn(icon v-if='notify' @click='toggleNotify' color='#143423')
      v-icon mdi-bell
    v-btn(icon v-else @click='toggleNotify' color='#E5CC9C')
      v-icon mdi-bell-off
  v-main 
    v-container.fill-height.pb-0
      router-view(v-slot='{ Component }')
        keep-alive(include='HomeView')
          component(:is='Component')
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'
const list = useListStore()
const { notify } = storeToRefs(list)
const { toggleNotify } = list
</script>