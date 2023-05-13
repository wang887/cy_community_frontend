# cy_comment_front

#### Description
社区的前端

#### Software Architecture
Software architecture description

#### Installation

1.  xxxx
2.  xxxx
3.  xxxx

#### Instructions

1.  xxxx
2.  xxxx
3.  xxxx

#### Contribution

1.  Fork the repository
2.  Create Feat_xxx branch
3.  Commit your code
4.  Create Pull Request


#### Gitee Feature

1.  You can use Readme\_XXX.md to support different languages, such as Readme\_en.md, Readme\_zh.md
2.  Gitee blog [blog.gitee.com](https://blog.gitee.com)
3.  Explore open source project [https://gitee.com/explore](https://gitee.com/explore)
4.  The most valuable open source project [GVP](https://gitee.com/gvp)
5.  The manual of Gitee [https://gitee.com/help](https://gitee.com/help)
6.  The most popular members  [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)


# 部署
安装Docker见我上一个文章

## 打包
```shell
yarn build
```
打包完成，项目中出现list文件，将此文件利用工具传送到服务器中。
## 安装nginx
1. 寻找docker hub
2. 安装
```shell
docker pull nginx
```
3. 在服务器同list文件夹下编写nginx config配置文件
```shell
vim default.conf
```
default.conf内容如下：
```shell
server {
    listen       80;
    server_name  localhost; # 修改为docker服务宿主机的ip
 
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html =404;
    }
 
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```
该配置文件定义了首页的指向为 /usr/share/nginx/html/index.html, 所以我们可以一会把构建出来的index.html文件和相关的静态资源放到/usr/share/nginx/html目录下。

4. 在服务器同list文件夹下编写Dockerfile文件
```shell
vim Dockerfile
```
Dockerfile内容如下：
```shell
FROM nginx    #该镜像是基于nginx:latest镜像构建的
 
MAINTAINER zouzou  #添加说明
 
RUN rm /etc/nginx/conf.d/default.conf  #删除目录下的default.conf文件
 
ADD default.conf /etc/nginx/conf.d/  #将default.conf复制到/etc/nginx/conf.d/下，用本地的default.conf配置来替换nginx镜像里的默认配置
 
COPY dist/ /usr/share/nginx/html/  #将项目根目录下dist文件夹（构建之后才会生成）下的所有文件复制到镜像/usr/share/nginx/html/目录下
```
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
docker run：基于镜像启动一个容器
 
-d：后台方式启动
 
-p 9090:80: 端口映射，将宿主机的9090端口映射到容器的80端口
 
--name：容器名，我起的叫test
 
xxxx：要启动的镜像名称
```
现在我们已经启动了，访问宿主机的地址:8001就可以看到我们部署的网站了

本文章由 支持