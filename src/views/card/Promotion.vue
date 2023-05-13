<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>🥂 推广</span>
    </div>
    <div>
      <p v-for="(item, index) in list" :key="index" class="block">
        <a :href="item.link" target="_blank">{{ item.title }}</a>
      </p>
      <!-- body -->
    </div>
  </el-card>
</template>

<script>
import { getPromotionsList } from '@/api/promotion'

export default {
  name: 'Promotion',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    fetchList() {
      getPromotionsList().then((response) => {
        const { data } = response
        this.list = data
      })
    }
  }
}
</script>

<style scoped>
</style>
