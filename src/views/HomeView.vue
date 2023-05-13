<template>
  <div class="home">
    <div class="box">
      🔔{{ billboard.content }}
    </div>
    <div class="columns">
      <div class="column is-three-quarters">
        <TopicList></TopicList>
      </div>
      <div class="column">
        <CardBar></CardBar>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {getBillboard} from '@/api/billboard'
import CardBar from "@/views/card/CardBar"
import PostList from '@/views/post/index'

export default{
  name: 'HomeView',
  components:{CardBar, TopicList:PostList},  //申明组件   ,TopicList为PostList别名
  data(){
    return{
      billboard:{
        content:''
      }
    }
  },
  created(){
    this.fetchBillboard()
  },
  methods:{
    async fetchBillboard(){
      getBillboard().then((value) => {
        const {data} =  value
        this.billboard = data
      })
    }
  }
}
</script>
