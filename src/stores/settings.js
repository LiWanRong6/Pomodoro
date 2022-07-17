import { defineStore } from 'pinia'

export const useSettingsStore = defineStore({
  id: 'settings',
  state() {
    return {
      selectedAlarm: 1,
      alarms: [
        { id: 1, name: 'alarm', file: new URL('../assets/alarm.mp3', import.meta.url).href },
        { id: 2, name: 'yay', file: new URL('../assets/yay.mp3', import.meta.url).href },
      ]
    }
  },
  getters: {
    selectedAlarmFile() {
      const idx = this.alarms.findIndex(a => a.id === this.selectedAlarm)
      return this.alarms[idx].file
    }
  },
  persist: {
    key: 'pomodoro-settings',
    paths: ['selectedAlarm']
  }
})