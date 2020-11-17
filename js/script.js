// Button next & prev

var app = new Vue({
  el: '#app',
  data: {
    indexImg: 0,
    img: ["img/image1.jpg",
      "img/image2.jpg",
      "img/image3.jpg",
      "img/image4.jpg"],
    
  },
  methods: {
     next: function () {
       this.indexImg ++;

       if(this.indexImg > 3){
         this.indexImg = 0;
       }
     },
     prev: function () {
       this.indexImg --;
       if(this.indexImg < 0){
         this.indexImg = 3;
       }
     }
  },

  // Stampare i pallini




  });
