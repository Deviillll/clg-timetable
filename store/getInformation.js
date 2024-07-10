
import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Create the store
const useInformationStore = create(
  persist(
    (set) => ({
      Group: '', 
      Class: '', 
      TimeSlot: '',
      
      //  update functions...
      setGroup: (newGroup) => set({ Group: newGroup }),
      setClass: (newClass) => set({ Class: newClass }),
      setTimeSlot: (newTimeSlot) => set({ TimeSlot: newTimeSlot }),
    }),


    // store the state data in local storage
    {
      name: 'information-store', // Unique name for the persisted state
      storage: createJSONStorage(() => localStorage), // Use local storage for persistence
      // Other options as needed (e.g., blacklist certain properties)
    }
  )
);

export default useInformationStore;















// import { create } from 'zustand';

// const useInformationStore = create((set) => {
//   return {
//   Group:"",
//     // create a function that updates the group
//     getGroup: (newGroup) => set((state) => ({ Group: newGroup }))
//     ,
//     Class:"",
//     // create a function that updates the class
//     getClass: () => set((state) => ({ Class: state.Class }))
//     ,
//     TimeSlot:"",
//     // create a function that updates the timeslot
//     getTimeSlot: () => set((state) => ({ TimeSlot: state.TimeSlot }))
   
//   };
// });

// export default useInformationStore;
