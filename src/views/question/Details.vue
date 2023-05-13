<template>
    <div style="all:initial">
        <el-card shadow="never">
            <article class="media">
                <div class="media-content">
                    <div class="content">
                        <div class="tags are-medium">
                            <span class="tag">All</span>
                            <span class="tag">Medium</span>
                            <span class="tag">Size</span>
                        </div>
                        <h3>这个问题？</h3>
                        <div>
                            <div class="buttons">
                                <button class="button is-small is-info">Primary</button>&nbsp;
                                <button class="button is-small is-outlined is-info" style=" color: blue;">
                                    <span class="icon is-small">
                                        <font-awesome-icon icon="fa-solid fa-pencil-alt" style="color:blue"/>
                                    </span>
                                    &nbsp;
                                    <span>写回答</span>
                                </button>&nbsp;
                                <a>
                                    <span>
                                        <font-awesome-icon icon="fa-solid fa-heart" style="color: #e5e0e0"></font-awesome-icon>
                                    </span>&nbsp;
                                    <small>好问题</small>
                                </a>&nbsp;&nbsp;
                                <a>
                                    <span>
                                        <font-awesome-icon icon="fa-regular fa-comment-alt" style="color: #181818"/>
                                    </span>&nbsp;
                                    <small>评论</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </el-card>
        <!-- 回答内容页面 -->
        <answer-page></answer-page>
    </div>
</template>

<script>
import AnswerPage from './answer'

export default{
    name: 'Answer',
    components:{AnswerPage}

}

</script>