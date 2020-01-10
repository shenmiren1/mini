<template>
    <div class="index">
        <div class="container">
           <div class="swiper-box">
               <swiper :options="swiperOption">
                 <swiper-slide v-for="(item,index) in swiperOption" :key="index">
                      <a :href="'/#/product/'+item.id"><img :src="item.img" alt=""></a>
                 </swiper-slide>
               </swiper>
           </div>
           <div class="ads-box"></div>
           <div class="banner"></div>
           <div class="product-box"></div>

           </div>
       
        <Service-bar></Service-bar>      
    </div>
</template>

<script>
 import ServiceBar from './../components/ServiceBar'
 import { swiper, swiperSlide } from 'vue-awesome-swiper'
 import 'swiper/dist/css/swiper.css'
export default {
    name:'index',
    components:{
        swiper,
        swiperSlide,
        ServiceBar
    },
    data(){
        return{
            swiperOption:{

            },
            slideList:[
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:'45',
                    img:'/imgs/slider/slide-2.jpg'
                },
                {
                    id:'46',
                    img:'/imgs/slider/slide-3.jpg'
                },
                {
                    id:'42',
                    img:'/imgs/slider/slide-4.jpg'
                },
                {
                    id:'42',
                    img:'/imgs/slider/slide-5.jpg'
                }
            ]
        }
    }
  
}
</script>

<style lang="scss">
    .swiper-container{

    }
</style>