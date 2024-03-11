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

      couponActId : '',
      couponDiscount : 0,
      totalPrice : 0,

    
  }),

  actions: {

    // removeAdditionalService(serviceId) {
    //   this.reserveItem.add_spec_service = this.reserveItem.add_spec_service.filter(service => service.ID !== serviceId);
    // }


    removeAdditionalService(serviceId) {
      this.reserveItem.add_spec_service = this.reserveItem.add_spec_service.filter(service => service.ID !== serviceId);
      this.calculateTotalPrice();
    },
    calculateTotalPrice() {
      let total = 0;

      if (this.reserveItem.main_service) {
        total += Number(this.reserveItem.main_service.SERVICE_PRICE);
      }

      for (const service of this.reserveItem.add_spec_service) {
        total += Number(service.ADD_SERVICE_PRICE);
      }

      this.totalPrice = total - Number(this.couponDiscount);
    }

  }
  
});



