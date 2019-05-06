<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
      <a
        v-for="(n,index) in news"
        :key="index"
        href="javascript:void(0);"
        class="weui-media-box weui-media-box_appmsg"
      >
        <div class="weui-media-box__hd">
          <img
            @click="showGallery(n.author.avatar_url)"
            class="weui-media-box__thumb"
            :src="n.author.avatar_url"
            alt
          >
        </div>
        <!-- 编程式导航，实现首页详情页的关联 -->
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title" v-text="n.author.loginname"></h4>
          <p class="weui-media-box__desc" v-text="n.title"></p>
        </div>
      </a>
    </div>
    <div class="weui-panel__ft">
      <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
        <div @click="loadMore()" class="weui-cell__bd">查看更多</div>
        <span class="weui-cell__ft"></span>
      </a>
    </div>
  </div>
</template>
<script>
import bus from "../bus.js";
export default {
  data() {
    return {
      // 新闻
      news: [],
      //页码
      page: 0
    };
  },
  async created() {
    // this.axios
    //   .get("https://cnodejs.org/api/v1/topics", {
    //     params: {
    //       ID: 12345
    //     }
    //   })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // 以上是基本写法
    //调用函数loadMore
    //触发loadMore
    this.loadMore();
  },
  //点击更多的时候要再次触发ajax，封装函数
  methods: {
    async loadMore() {
      // 以下是es6写法
      this.page += 1;
      let { data } = await this.axios.get("https://cnodejs.org/api/v1/topics", {
        params: {
          page: this.page,
          limit: 10
        }
      });
      this.news = [...this.news, ...data.data];
    },
    showGallery(src) {
      bus.$emit("showGallery", {
        src
      });
    }
  }
};
</script>
<style scoped>
.weui-panel {
  margin-bottom: 50px;
}
</style>


