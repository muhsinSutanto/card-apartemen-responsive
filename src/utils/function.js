export const filterPhoneNumber = (str) => {
   const regex = /(\d+)/g;
   return str.replace(regex, function (match) {
      if (match.length === 8) {
         return match.slice(0, 4) + "xxxx";
      } else {
         return match;
      }
   });
};
