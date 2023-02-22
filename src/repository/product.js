export class Product {
   constructor(url) {
      this.url = url;
   }

   async getProducCard() {
      try {
         const res = await fetch(this.url);
         const resJson = await res.json();
         return resJson;
      } catch (err) {
         console.log(err.response);
      }
   }
}
