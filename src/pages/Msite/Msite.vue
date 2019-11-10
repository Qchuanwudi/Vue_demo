<template>
  <section class="msite">
    <!--首页头部-->
    <GshopHeader :title="address.name?address.name:'定位中...'">
      <template v-slot:right>
        <span class="header_login">
          <span class="header_login_text">登录|注册</span>
        </span>
      </template>
      <span slot="left" class="header_search">
        <i class="iconfont icon-sousuo"></i>
      </span>
    </GshopHeader>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(category, index) in newCateGorys" :key="index">
            <a
              href="javascript:"
              class="link_to_food"
              v-for="(categoryItem, index) in category"
              :key="index"
            >
              <div class="food_container">
                <img :src="`https://fuss10.elemecdn.com${categoryItem.image_url}`" />
              </div>
              <span>{{categoryItem.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <ShopList />
  </section>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import { mapState } from "vuex";
import _ from "lodash";
import ShopList from "../../components/ShopList/ShopList";
export default {
  components: { ShopList },

  async mounted() {
    this.$store.dispatch("getAddressAction");
    this.$store.dispatch("getCategorysAction");
    // new Swiper(".swiper-container", {
    //   loop: true,
    //   pagination: {
    //     el: ".swiper-pagination"
    //   }
    // });
  },
  computed: {
    ...mapState({
      address: state => state.address,
      categorys: state => state.categorys
    }),
    newCateGorys() {
      return _.chunk(this.categorys, 8);
    }
  },
  /*解决swiper插件优先加载导致轮播图无法滚动*/
  watch: {
    categorys() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }
  /*解决swiper插件优先加载导致轮播图无法滚动*/
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixins.styl'

.msite // 首页
  width 100%

  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff

    .swiper-container
      width 100%
      height 100%

      .swiper-wrapper
        width 100%
        height 100%

        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          height 100%

          .link_to_food
            width 25%

            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0

              img
                display inline-block
                width 50px
                height 50px

            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666

      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
</style>
