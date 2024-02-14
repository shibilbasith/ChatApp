import { create } from 'zustand'

const useSelectedUser = create((set)=>({
    selectedUser: null,
	setSelectedUser: (messages) => set({ messages }),
}))

export default useSelectedUser