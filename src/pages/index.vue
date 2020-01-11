<template>
    <div class="index">
        <div class="container">
           <div class="swiper-box">
               <div class="nav-menu">
                   <ul class="menu-wrap">
                       <li class="menu-item">
                          <a href="javascript:;">手机 电话卡</a>
                          <div class="children">
                              <ul v-for="(item,i) in menuList" :key="i">
                                  <li v-for="(sub,j) in item" :key="j">
                                      <a :href="sub?'/#/product/'+sub.id:''">
                                          <img :src="sub?sub.img: '/imgs/item-box-1.png'" alt="">
                                          {{sub?sub.name :'小米9'}}
                                      </a>
                                  </li>
                              </ul>
                          </div>
                       </li>
                        <li class="menu-item">
                          <a href="javascript:;">电视 盒子</a>
                           <div class="children">
                              <ul v-for="(item,i) in menuList" :key="i">
                                  <li v-for="(sub,j) in item" :key="j">
                                      <a :href="sub?'/#/product/'+sub.id:''">
                                          <img :src="sub?sub.img: '/imgs/item-box-1.png'" alt="">
                                          {{sub?sub.name :'小米9'}}
                                      </a>
                                  </li>
                              </ul>
                          </div>
                       </li>
                        <li class="menu-item">
                          <a href="javascript:;">笔记本 平板</a>
                       </li>
                        <li class="menu-item">
                          <a href="javascript:;">家电 插线板</a>
                       </li>
                        <li class="menu-item">
                          <a href="javascript:;">出行 穿戴</a>
                       </li>
                        <li class="menu-item">
                          <a href="javascript:;">智能 路由器</a>
                       </li>
                        <li class="menu-item">
                          <a href="javascript:;">电源 配件</a>
                       </li>
                        <li class="menu-item">
                          <a href="javascript:;">生活 箱包</a>
                       </li>
                   </ul>
               </div>
               <swiper :options="swiperOption">
                 <swiper-slide v-for="(item,index) in slideList" :key="index">
                      <a :href="'/#/product/'+item.id"><img :src="item.img" alt=""></a>
                 </swiper-slide>
                   <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
               
               </swiper>
           </div>
           <div class="ads-box">
               <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
                   <img :src="item.img" alt="">
               </a>
           </div>
           <div class="banner">
               <a href="/#/product/30">
                   <img src="/imgs/banner-1.png" alt="">
               </a>
           </div>
           </div>
                      <div class="product-box">
               <div class="container">
                  <h2>手机</h2>
                    <div class="wrapper">
                        <div class="banner-left">
                            <a href="/#/product/35">
                                <img src="/imgs/mix-alpha.jpg" alt="">
                            </a>
                        </div>
                        <div class="list-box">
                            <div class="list" v-for="(arr,index) in phoneList" :key="index">
                                <div class="item" v-for="(item,j) in arr" :key="j">
                                        <span :class="{'new-pro':j%2==0}">新品</span>
                                        <div class="item-img">
                                            <img :src="item.mainImage" alt="">
                                        </div>
                                        <div class="item-info">
                                            <h3>{{item.name}}</h3>
                                            <p>{{item.subtitle}}</p>
                                            <p class="price">{{item.price}}元</p>
                                        </div>
                                </div>
                            </div> 
                        </div>
                    </div>
               </div>
               
           </div>
       
        <Service-bar></Service-bar>      
    </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
    ServiceBar
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "42",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "42",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G+专区"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G+专区"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G+专区"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G+专区"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G+专区"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G+专区"
          }
        ]
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg"
        }
      ],
      phoneList: []
    };
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
        this.axios.get('/products',{
            params:{
               categoryId:100012,
               pageSize:8
            }
        }).then((res)=>{
            this.phoneList=[res.list.slice(0,4),res.list.slice(4,8)]
        })
    }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";
.index {
  .swiper-box {
    .nav-menu {
      width: 264px;
      height: 451px;
      position: absolute;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;

      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;

          a {
            position: relative;
            color: #ffffff;
            display: block;
            font-size: 16px;
            padding-left: 30px;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: " ";
              @include bgImg(15px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: #ff6600;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: #ffffff;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid #e5e5e5;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
                a {
                  color: #333333;
                  font-size: 14px;
                }
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 20px;
  }
  .product-box {
    padding: 30px 0 50px;
    background: #f5f5f5;
    h2 {
      font-size: 22px;
      color: #333333;
      height: 21px;
      line-height: 21px;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: #ffffff;
            text-align: center;
            span {
                display: inline-block;
                width: 67px;
                height: 24px;
                font-size: 14px;
                line-height: 24px;
                color: #ffffff;
                &.new-pro{
                     background-color: #7ecf68;
                }
                &.kill-pro{
                    background-color: #e82626;
                }
               
            }
            .item-img {
              img {
                height: 195px;
                width: 100%;
              }
            }
            .item-info {
              h3 {
                font-size: 14px;
                color: #333333;
                line-height: 14px;
                font-weight: bold;
              }
              p {
                color: #999999;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: 14px;
                line-height: 14px;
                font-weight: bold;
                cursor: pointer;
                &::after {
                  content: " ";
                  @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>