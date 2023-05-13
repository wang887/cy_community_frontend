<template>
    <div>
        <span style="float: right;">
            <small>
                <a>
                    <el-tooltip v-if="heart==0" class="item" effect="dark" content="点赞" placement="top-start">              
                        <span @click="submitHeart()" class="icon is-small">
                            <font-awesome-icon icon="fa-solid fa-heart" style="color: #e5e0e0"/>
                            <span style="margin-left: 3px;"> {{ likeandreplay.like }}</span>
                        </span>
                    </el-tooltip>
                    <el-tooltip v-if="heart==1" class="item" effect="dark" content="取消点赞" placement="top-start">
                        <span @click="cancelHeart()" class="icon is-small">
                            <font-awesome-icon icon="fa-solid fa-heart" style="color: #f20707"/>
                            <span style="margin-left: 3px;"> {{ likeandreplay.like }}</span>
                        </span>
                    </el-tooltip>
                </a>
                &nbsp;&nbsp;&nbsp;&NonBreakingSpace;
                <a>
                    <el-tooltip v-if="isComment == false" class="item" effect="dark" content="回复" placement="top-start">
                        <span @click="replay()" class="icon is-small">
                            <font-awesome-icon icon="fa-regular fa-comment-alt" style="color: #181818"/>
                            <span style="margin-left: 3px;"> {{ likeandreplay.replayNum }}</span>
                        </span>
                    </el-tooltip>
                    <el-tooltip v-if="isComment" class="item" effect="dark" content="回复" placement="top-start">
                        <span @click="unReplay()" class="icon is-small">
                            <font-awesome-icon icon="fa-regular fa-comment-alt" style="color: #181818"/>
                            <span style="margin-left: 3px;"> {{ likeandreplay.replayNum }}</span>
                        </span>
                    </el-tooltip>
                </a>
                &nbsp;&nbsp;
                <a v-if="likeandreplay.isExistFold">
                    <el-tooltip v-if="isFold==false" class="item" effect="dark" content="展开" placement="top-start">
                        <span @click="unFold()">展开</span>
                    </el-tooltip>
                    <el-tooltip v-if="isFold" class="item" effect="dark" content="收取" placement="top-start">
                        <span @click="fold()">收取</span>
                    </el-tooltip>
                </a> 
                <!-- · 2 hrs -->
            </small>
        </span><br>
        <!-- slug:topicId,param parentsId -->
        <lv-comments-form v-if="isComment" 
        :slug="likeandreplay.topicId" 
        :param="{commentId:likeandreplay.commentId,toUserId:likeandreplay.userId}" 
        v-on="$listeners"></lv-comments-form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LvCommentsForm from './CommentsForm'
import {agreeComment,unagreeComment} from '@/api/comments'

export default {
  name: 'LvLikeAndReplay',
  components:{
    LvCommentsForm
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  props: {
    likeandreplay:{
        type: Object,
        required: true
    },
  },
  data(){
    return{
      heart:0,  //控制点赞的
      isComment:false,
      isFold:false   //展开还是收取
    }
  },
  methods:{
    submitHeart(){
        if(this.token != null && this.token !== ''){
            agreeComment(this.likeandreplay.commentId).then((value) => {
                const {code} = value
                if(code == 200){
                    this.$message({
                    message: "评论遵守原则",
                    type: "success",
                    duration: 2000,
                    });
                    this.heart=1;
                    this.likeandreplay.like++;
                    // this.$emit('loadComments', this.likeandreplay.topicId)   //刷新
                }else{
                    this.$message({
                    message: "评论似乎被删除",
                    type: "failed",
                    duration: 2000,
                    });
                }
            })
        }else{
            this.$message.success('请先登录')
        }
    },
    cancelHeart(){
        if(this.token != null && this.token !== ''){
            unagreeComment(this.likeandreplay.commentId).then((value)=>{
            const {code} = value;
            if(code == 200){
                this.heart=0;
                this.likeandreplay.like--;
            }else{
                this.$message({
                  message: "评论似乎被删除",
                  type: "failed",
                  duration: 2000,
                }); 
            }
        })
        }else{
            this.$message.success('请先登录')
        }
    },
    replay(){
        this.$emit('unFold',true) 
        this.isComment = true
    },
    unReplay(){
        this.$emit('unFold',false)
        this.isComment = false
    },
    unFold(){
        this.isFold = true
        this.$emit('unFold',true) 
    },
    fold(){
        this.$emit('unFold',false)
        this.isFold = false
    }
  }
}
</script>