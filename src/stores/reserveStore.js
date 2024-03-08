import { defineStore } from 'pinia';


// function getSavedReserveItems() {
//   const savedReserveItems = localStorage.getItem('my_service_order');
//   if (savedReserveItems) {
//     return JSON.parse(savedReserveItems);
//   } else {
//     return [];
//   }
// }

export const useReserveStore = defineStore('reserve', {

  state: () => ({
      // reserveItem : getSavedReserveItems(),

      reserveItem : [],
    
  }),

  actions: {
    
  }
  
});



