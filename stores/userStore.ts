import { defineStore } from 'pinia'
import type { UserData } from '~/stores/types/userData' // Adjust the path accordingly

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userInfo: {
      name: '',
      phone: null,
      email: '',
      password: ''
    } as UserData
  }),
  actions: {
    setUserInfo(userInfo: UserData){
      this.userInfo = userInfo
    },
    resetState() {
      this.userInfo = {
        name: '',
        phone: null,
        email: '',
        password: ''
      }
    }
  },
  getters: {
    userState(): string {
      return this.userInfo.email ? 'loggedIn' : 'loggedOut'
    }  
  }
})
  