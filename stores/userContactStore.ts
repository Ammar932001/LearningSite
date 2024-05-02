import { defineStore } from 'pinia'
import type { UserContact } from '~/stores/types/userContactData' 

export const useUserContactStore = defineStore('userContactInfo', {
  state: () => ({
    userInfo: {
      name: '',
      phone: null,
      email: '',
      message: ''
    } as UserContact
  }),
  actions: {
    setUserInfo(userInfo: UserContact){
      this.userInfo = userInfo
    },
    resetState() {
      this.userInfo = {
        name: '',
        phone: null,
        email: '',
        message: ''
      }
    }
  },
})
  