<template>
  <div>
    <!-- 搜索 -->
    <div class="search">
      <!-- 搜索框 -->
      <div class="input-box">
        <input type="text" placeholder="搜索">
      </div>
      <!-- 搜索结果 -->
      <div class="input-res"></div>
    </div>

    <!-- 焦点图 -->
    <swiper class="banner" indicator-dots indicator-color="rgba(255, 255, 255, 0.6)" indicator-active-color="#fff">
      <swiper-item v-for="(banner, key) in bannerList" :key="key">
        <navigator :url="banner.navigator_url">
          <image :src="banner.image_src"></image>
        </navigator>
      </swiper-item>
    </swiper>

    <!-- 导航 -->
    <div class="navs">
      <navigator :url="catItem.navigator_url" v-for="(catItem, key) in catList" :key="key">
        <image :src="catItem.image_src"></image>
      </navigator>
    </div>

    <!-- 楼层 -->
    <div class="floors">
      <div class="floor" v-for="(floor, floorKey) in floorsList" :key="floorKey">
        <div class="title">
          <image :name="floor.floor_title.name" :src="floor.floor_title.image_src"></image>
        </div>
        <div class="pics">
          <navigator :url="floorItem.navigator_url" v-for="(floorItem, itemKey) in floor.product_list" :key="itemKey">
            <image :src="floorItem.image_src" :width="floorItem.image_width"></image>
          </navigator>
        </div>
      </div>
    </div>

    <!-- 返回顶部 -->
    <span class="backTop" @click="goTop" v-show="!isTop"></span>
  </div>
</template>

<script>
import request from '@/utils/request'
  export default {
    data () {
      return {
        bannerList: [],
        catList: [],
        floorsList: [],
        isTop: true
      }
    },
    methods: {
      // 加载焦点图
      async loadBanner () {
        let { message } = await request({
          url: '/api/public/v1/home/swiperdata',
          method: 'GET'
        })
        this.bannerList = message
      },
      // 加载分类图标
      async loadCatList () {
        let { message } = await request({
          url: '/api/public/v1/home/catitems',
          method: 'GET'
        })
        this.catList = message
      },
      // 加载楼层数据
      async loadFloors () {
        let { message } = await request({
          url: '/api/public/v1/home/floordata',
          method: 'GET'
        })
        this.floorsList = message
      },
      // 回到顶部
      goTop () {
        // 调用小程序原生接口回到顶部--滚动到指定位置
        mpvue.pageScrollTo({
          scrollTop: 0,
          duration: 500
        })
      }
    },
    mounted () {
      this.loadBanner()
      this.loadCatList()
      this.loadFloors()
    },
    onPullDownRefresh () {
      this.loadBanner()
      this.loadCatList()
      this.loadFloors()
      mpvue.stopPullDownRefresh()
    },
    onPageScroll (ev) {
      this.isTop = ev.scrollTop < 200
    }
  }
</script>

<style scoped lang="less">
//  搜索
.search .input-box {
  background-color: #ea4451;
  padding: 20rpx 30rpx;
  input {
    height: 60rpx;
    font-size: 27rpx;
    background-color: #fff;
    border-radius: 8rpx;
    padding-left: 15rpx;
    color: #666;
  }
}

// 焦点图
.banner {
  width: 750rpx;
  height: 340rpx;
  navigator {
    width: 100%;
    height: 100%;
  }
}

//  导航
.navs {
  display: flex;
  justify-content: space-between;
  padding: 30rpx 40rpx;
  navigator {
    width: 128rpx;
    height: 140rpx;
  }
}

// 楼层
.floors {
  .floor {
    .title {
      width: 750rpx;
      height: 60rpx;
      background-color: #f4f4f4;
      padding: 27rpx 0 15rpx;
    }
    .pics {
      padding: 20rpx 18rpx;
      overflow: hidden;
      navigator {
        height: 188rpx;
        margin-left: 10rpx;
        margin-bottom: 10rpx;
        float: left;
      }
    }

    .pics navigator:nth-child(2), .pics navigator:nth-child(5) {
      width: 273rpx;
    }
    .pics navigator:nth-child(3), .pics navigator:nth-child(4) {
      width: 193rpx;
    }
  }
  .floor:first-child .pics navigator:first-child, .pics navigator:first-child {
    width: 232rpx;
    height: 386rpx;
    margin-left: 0;
  }
  .floor:first-child .pics navigator {
    width: 233rpx;
  }
}

// 返回顶部
.backTop {
  position: fixed;
  bottom: 60rpx;
  right: 30rpx;
  width: 88rpx;
  height: 88rpx;
  // display: block;
  border-radius: 50%;
  background-color: #f4f4f4;
}
</style>
