<template>
  <section>
    <!--是否登录-->
    <login-welcome />

    <!--今日赠言-->
    <tip-card />

    <!-- 赏金 -->
    <!-- <Money /> -->

    <!--资源推介-->
    <PromotionCard />
  </section>
</template>

<script>
import TipCard from '@/views/card/Tip'
import PromotionCard from '@/views/card/Promotion'
import LoginWelcome from '@/views/card/LoginWelcome'
import Money from '@/views/card/Money'

export default {
  name: 'CardBar',
  components: { LoginWelcome, PromotionCard, TipCard, Money }
}
</script>

<style scoped>
</style>
