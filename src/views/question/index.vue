<template>
    <div class="columns">
      <div class="column is-three-quarters">
        <question-list></question-list>
      </div>
      <div class="column">
        <CardBar></CardBar>
      </div>
    </div>
</template>


<script>
    import CardBar from '@/views/card/CardBar'
    import QuestionList from '@/views/question/questionList'

    export default{
        name: 'Question',
        components: {CardBar, QuestionList}
    }
</script>

<style>
</style>