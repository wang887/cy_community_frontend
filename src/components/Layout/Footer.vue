<template>
  <footer class="footer has-text-grey-light has-background-grey-darker">
    <div class="container">
      <div class="">
        <span>简洁、实用、美观</span>

        <span style="float: right">
          <router-link :to="{path:'/admin/login'}">
            管理员登录
          </router-link>
          |
          <a href="/?lang=zh_CN">中文</a> |
          <a href="/?lang=en_US">English</a>
        </span>
      </div>

      <div>
        <span>{{ title }} ALL RIGHTS RESERVED</span>
        <div style="float: right">
          <template>
            <b-taglist attached>
              <b-tag type="is-dark" size="is-normal">Design</b-tag>
              <b-tag type="is-info" size="is-normal">{{ author }}</b-tag>

              <b-tag type="is-dark" size="is-normal">Copy</b-tag>
              <b-tag type="is-info" size="is-normal">豆约翰</b-tag>
            </b-taglist>
          </template>
        </div>
      </div>
    </div>
    <BackTop></BackTop>
  </footer>
</template>

<script>
import BackTop from "@/components/Backtop/BackTop";

export default {
  name: "Footer",
  components: {
    BackTop
  },
  data() {
    return {
      title: "© " + new Date().getFullYear() + ' 昌羽',
      author: '昌羽',
    };
  },
};
</script>

<style scoped>

footer {
  margin-top: 120px;
  height: 150px;
}
footer a{
  color: #bfbfbf;
}

</style>