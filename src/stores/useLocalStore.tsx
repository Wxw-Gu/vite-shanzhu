import create from 'zustand'

interface Local {
  hasRead: 'yes' | 'no'
  setHasReadWelcomes: (flag: boolean) => void
}

const init = localStorage.getItem('hasRead') === 'yes'

export const useLocalStore = create<Local>(set => ({
  hasRead: init ? 'yes' : 'no',
  setHasReadWelcomes: (flag: boolean) => {
    localStorage.setItem('hasRead', flag ? 'yes' : 'no')
    set({ hasRead: flag ? 'yes' : 'no' })
  },
}))
