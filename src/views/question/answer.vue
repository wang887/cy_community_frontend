<template>
    <div>
        <div class="box">
            <div>
                <span style="float: left;">3个回复</span>
                <span style="float: right;">默认排序</span>
            </div>
            <br/><br/>
            <div class="answer-list">
                <div class="columns">
                    <div class="column is-1">
                        <p class="image is-48x48" style="margin-left: 30%;">
                            <img src="https://bulma.io/images/placeholders/128x128.png">
                        </p>
                    </div>
                    <div class="column">
                        <p><strong>作者</strong></p>
                        <p><small>职业：IT</small></p>
                    </div>
                </div>
            <!-- </div> -->
                <div style="margin-left: 3%;margin-right: 3%;">
                    5. 部署
        ```shell
        docker build -f Dockerfile -t "xxxx" . --no-cache
        ```
        注意不要少了最后的“.”(点)   -t是给镜像命名，.(点)是基于当前目录的Dockerfile来构建镜像

        6. 查看镜像
        ```shell
        docker images
        ```
        7. 启动镜像
        ```shell
        docker run -d -p 8001:80 --name test xxxx
        ```
        必须保证，服务器8001端口，可访问。在安全组设置。
        解释：
        ```shell
                </div>
                <br/>
                <div class="buttons" style="margin-left: 3%;">
                    <button class="button is-small is-outlined is-info" style=" color: blue;">
                        <span class="icon is-small">
                            <font-awesome-icon icon="fa-solid fa-pencil-alt" style="color:blue"/>
                        </span>
                        &nbsp;
                        <span>赞同</span>
                    </button>&nbsp;
                    <a>
                        <span>
                            <font-awesome-icon icon="fa-solid fa-heart" style="color: #e5e0e0"></font-awesome-icon>
                        </span>&nbsp;
                        <small>喜欢</small>
                    </a>&nbsp;&nbsp;
                    <a>
                        <span>
                            <font-awesome-icon icon="fa-regular fa-comment-alt" style="color: #181818"/>
                        </span>&nbsp;
                            <small>评论</small>
                        </a>
                </div>
            </div>

            <br/>



            <div class="answer-list">
                <div class="columns">
                    <div class="column is-1">
                        <p class="image is-48x48" style="margin-left: 30%;">
                            <img src="https://bulma.io/images/placeholders/128x128.png">
                        </p>
                    </div>
                    <div class="column">
                        <p><strong>作者</strong></p>
                        <p><small>职业：IT</small></p>
                    </div>
                </div>
            <!-- </div> -->
            <div style="margin-left: 3%;margin-right: 3%;">
                5. 部署
    ```shell
    docker build -f Dockerfile -t "xxxx" . --no-cache
    ```
            </div>
            <br/>
            <div class="buttons" style="margin-left: 3%;">
                <button class="button is-small is-outlined is-info" style=" color: blue;">
                    <span class="icon is-small">
                        <font-awesome-icon icon="fa-solid fa-pencil-alt" style="color:blue"/>
                    </span>
                    &nbsp;
                    <span>赞同</span>
                </button>&nbsp;
                <a>
                    <span>
                        <font-awesome-icon icon="fa-solid fa-heart" style="color: #e5e0e0"></font-awesome-icon>
                    </span>&nbsp;
                    <small>喜欢</small>
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
</template>

<script>
</script>