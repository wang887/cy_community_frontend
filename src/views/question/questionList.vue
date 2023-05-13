<template>
    <div>
        <el-card shadow="never">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="最新问题" name="first">
                    <div class="columns">
                        <div class="column is-10">
                            <article class="media">
                                <figure class="media-left">
                                    <p class="image is-24x24">
                                    <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>Barbara Middleton &nbsp;  的提问</strong>  &nbsp; <small>时间 &nbsp;期待你的回答</small>
                                            <p>    
                                                <router-link :to="{name:'question-detail'}">
                                                    <span>这个问题？</span>
                                                </router-link>
                                            </p>
                                            <small>1回答 · 0关注</small>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="column" style="align-self: center;">
                            <button class="button is-info" style=" color: white;">
                                <span class="icon is-small">
                                    <font-awesome-icon icon="fa-solid fa-pencil-alt" style="color: #fffff"/>
                                </span>
                                &nbsp;
                                <span>写回答</span>
                            </button>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="人气问题" name="second">人气问题</el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>

export default{
    name: 'QuestionItem',
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style>
</style>