<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-24x24">
        <img :src="`https://www.gravatar.cn/avatar/${comment.userId}?s=164&d=monsterid`">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
         <p>
          <router-link :to="{ path: `/member/${comment.username}/home` }">
            <strong>{{ comment.username }}</strong>
          </router-link>
          
          <small class="ml-2">{{ comment.createTime | date }}</small>
          <br />
          {{ comment.content }}
          <lv-like-and-replay
          :likeandreplay="likeandreplay"
          v-on="$listeners"
          @unFold="unFold"
          ></lv-like-and-replay>
        </p>
      </div>
      <lv-comments-second-item
      v-if="isUnFold"
      v-for="secondcomment in comment.child"
      :key="`secondcomment-${secondcomment.id}`"
      :secondcomment="secondcomment"
      :commentParentId="commentParentId"
      v-on="$listeners"
      >
    </lv-comments-second-item>
    </div>
  </article>
</template>

<script>
import LvCommentsSecondItem from './CommentsSecondItem';
import LvCommentsForm from './CommentsForm'
import LvLikeAndReplay from './LikeAndReplay';

export default {
  name: 'LvCommentsItem',
  components:{
    LvCommentsSecondItem,
    LvCommentsForm,
    LvLikeAndReplay
  },
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  data(){
    return{
      heart:0,  //控制点赞的
      isUnFold:false,
      isComment:false,
      likeandreplay:{},
      commentParentId:''
    }
  },
  created: function(){
    this.likeandreplay.like = this.comment.support
    this.likeandreplay.userId = this.comment.userId
    this.likeandreplay.commentId=this.comment.id
    this.likeandreplay.topicId=this.comment.topicId
    this.commentParentId = this.comment.id
    this.likeandreplay.replayNum = this.comment.replayNum
    this.likeandreplay.isExistFold = true
  },
  methods:{
    unFold(b){
      this.isUnFold=b;
    }
  }
}
</script>


