// Array img - points

var app = new Vue({
  el: '#app',
  data: {
    point: "fas fa-circle",
    indexImg: 0,
    img: ["img/image1.jpg",
      "img/image2.jpg",
      "img/image3.jpg",
      "img/image4.jpg"],

  },

  // Funzioni next e prev
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
});
