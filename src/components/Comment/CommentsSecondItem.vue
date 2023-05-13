<template>
    <article class="media">
        <figure class="media-left">
      <p class="image is-24x24">
        <img :src="`https://www.gravatar.cn/avatar/${secondcomment.userId}?s=164&d=monsterid`"/>
      </p>
    </figure>
      <div class="media-content" >
        <div class="content">
          <p>
            <router-link :to="{ path: `/member/${secondcomment.username}/home` }">
              <strong>{{ secondcomment.username }}</strong>
            </router-link>
            :@
            <router-link :to="{ path: `/member/${secondcomment.toUsername}/home` }">
              {{ secondcomment.toUsername }}
            </router-link>
            <small class="ml-2">{{ secondcomment.createTime | date }}</small>
            <br />
            {{ secondcomment.content }}
            <lv-like-and-replay
            :likeandreplay="likeandreplay"
            v-on="$listeners"
            ></lv-like-and-replay>
          </p>
        </div>
      </div>
    </article>
</template>
  
<script>
import LvLikeAndReplay from './LikeAndReplay.vue';

export default {
  name: 'LvCommentsSecondItem',
  components:{
    LvLikeAndReplay
  },
  props: {
    secondcomment: {
      type: Object,
      required: true
    },
    commentParentId:{
      type: String,
      required: true
    }
  },
  data(){
    return {
      likeandreplay:{}
    }
  },
  created:function(){
    this.likeandreplay.like = this.secondcomment.support
    this.likeandreplay.userId = this.secondcomment.userId
    this.likeandreplay.commentId = this.commentParentId
    this.likeandreplay.topicId = this.secondcomment.topicId
  },
  methods:{
  }
}
</script>
  
  
  