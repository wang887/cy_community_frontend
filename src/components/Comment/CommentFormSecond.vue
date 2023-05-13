<template>
    <article class="media">
      <div class="media-content">
        <form @submit.prevent="onSubmit">
          <b-field>
            <b-input
              v-model.lazy="commentText"
              type="textarea"
              maxlength="400"
              placeholder="Add a comment..."
              :disabled="isLoading"
            ></b-input>
          </b-field>
          <nav class="level">
            <div class="level-left">
              <b-button
                type="is-primary"
                native-type="submit"
                class="level-item"
                :disabled="isLoading"
              >
                提交
              </b-button>
            </div>
          </nav>
        </form>
      </div>
    </article>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  import { pushComment } from '@/api/comments'
  
  export default {
    name: 'LvCommentsForm',
    data() {
      return {
        commentText: '',
        isLoading: false
      }
    },
    props: {
      slug: {
        type: String,
        default: null
      },
      param:{
        type: String,
        default: null
      }
    },
    computed: {
      ...mapGetters([
        'token'
      ])
    },
    methods: {
      async onSubmit() {
        alert("secondFoerm")
        this.$emit('loadCommentsFromSecond', this.slug)   //刷新
        // if(this.token != null && this.token !== ''){
        //   this.isLoading = true
        //   try {
        //     let postData = {}
        //     // console.log(this.commentText)
        //     postData['content'] = this.commentText
        //     postData['topic_id'] = this.slug
        //     postData['parents_id']= this.param;
        //     await pushComment(postData)
        //     var params={
                
        //     }
        //     this.$emit('loadCommentsFromSecond', this.slug)   //刷新
        //     this.$message.success('留言成功')
        //     this.commentText=''
        //   } catch (e) {
        //     this.$buefy.toast.open({
        //       message: `Cannot comment this story. ${e}`,
        //       type: 'is-danger'
        //     })
        //   } finally {
        //     this.isLoading = false
        //   }
        // }else{
        //   this.$message.success('请先登录')
        // }
      }
    }
}
  </script>
  