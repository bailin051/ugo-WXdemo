<template>
  <div>
    <!-- 搜索 -->
    <div class="search">
      <!-- 搜索框 -->
      <div class="input-box">
        <input type="text" >
      </div>
      <!-- 搜索结果 -->
      <div class="input-res"></div>
    </div>

    <!-- 焦点图 -->
    <swiper class="banner" indicator-dots indicator-color="rgba(255, 255, 255, 0.6)" indicator-active-color="#fff">
      <swiper-item>
        <navigator url="">
          <image src="/static/uploads/banner1.png"></image>
        </navigator>
      </swiper-item>
      <swiper-item>
        <navigator url="">
          <image src="/static/uploads/banner2.png"></image>
        </navigator>
      </swiper-item>
      <swiper-item>
        <navigator url="">
          <image src="/static/uploads/banner3.png"></image>
        </navigator>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

</script>

<style scoped>
/* 搜索 */
.search .input-box {
  background-color: #ea4451;
  padding: 20rpx 30rpx;
}
.search .input-box input {
  height: 60px;
  font-size: 27rpx;
  background-color: #fff;
  border-radius: 8rpx;
  padding-left: 15rpx;
  color: #666;
}

/* 焦点图 */
.banner {
  width: 750rpx;
  height: 340rpx;
}

.banner navigator {
  width: 100%;
  height: 100%;
}
</style>
