<template>
    <div class='container'>
        <el-card>
          <div slot="header" class="clearfix">
            <span>项目经验</span>
            <el-button style="float: right; padding: 3px 0" type="text">添加项目</el-button>
          </div>
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="新桃园后台管理系统（商家）" name="1">
              <h3>项目描述：</h3>
              <p>这是一款利用 vue 框架搭建的一个后台管理系统，主要实现了商家登录，订单模块，用户中心，商品模块等</p>
              <h3>项目职责：</h3>
              <ul>
                <li>使用 Element-ui 实现整体的页面布局</li>
                <li>对 axios 进行进一步封装,对登录模块进行优化（请求拦截器设置 token ,前置导航守卫控制访问权限</li>
                <li>首页模块主要通过 echarts 图表来展示统计信息</li>
                <li>负责订单模块，主要完成接单，拒单，查询订单及用户售后维权的相关操作</li>
                <li>负责商品模块，展示商品列表，对商品进行发布，下架，编辑等管理</li>
                <li>负责用户模块，对用户在本店的消费情况进行统计</li>
                <li>负责评论模块，渲染用户的评论列表并且对评论内容进行回复</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="新桃园（APP）" name="2">
              <h3>项目描述：</h3>
              <p>这是一款服务于用户的客户端，可以为用户提供生活的上的方便，可以足不出户就买到自己想要的东西，价格实惠，物美价廉</p>
              <h3>项目职责：</h3>
              <ul>
                <li>使用 vant-ui 进行布局，通过 postcss-pxtorem 和 lib-flexsible 来实现 rem 适配</li>
                <li>负责首页模块，实现图片懒加载，避免加载时造成资源的浪费</li>
                <li>负责用户的登录模块，用户的登录信息利用 vuex 和本地存储进行管理</li>
                <li>负责用户的购物车模块，实现商品数量的增加和减少，商品是否选中，计算总价等功能</li>
                <li>负责用户的个人中心模块，渲染个人信息，订单情况等</li>
                <li>负责商品详情页模块，通过商品 id(路由传参)去后台获取数据并渲染</li>
                <li>负责搜索功能，通过 axios 获取联想关键字，通过正则匹配出关键字设置为高亮显示，并且添加历史记录</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="新桃园后台管理系统（公司）" name="3">
              <h3>项目描述：</h3>
              <p>该系统主要是用于公司对入驻的商家进行管理，对商铺等级进行管理等</p>
              <h3>项目职责：</h3>
              <ul>
                <li>利用 vue-cli 搭建项目，利用 element-ui 对页面进行布局</li>
                <li>使用 vue-router 实现不同页面之前的跳转</li>
                <li>使用 axios 来与服务器端进行交互，发送或者获取并渲染数据</li>
                <li>商铺模块主要处理店铺申请，对店铺设置等级，对店铺信息进行认证等</li>
                <li>商家管理主要通过服务端获取商家的信息列表</li>
                <li>个人中心模块，主要更改个人信息</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="会过精选（小程序）" name="4">
              <h3>项目描述:</h3>
              <p>该程序主要是通过线上精选商城的模式，为品质消费人群提供超值价格、专享增值服务的商品</p>
              <h3>项目职责：</h3>
              <ul>
                <li>利用 uni-app 搭建项目，flex 进行基础布局，less 进行预编译</li>
                <li>利用 uni-app 封装好的 uni.request 进行网络请求</li>
                <li>首页使用触底加载数据，提高请求速度，使得用户体验更好</li>
                <li>返回顶部主要是通过 onPageScroll 来监听滚动条的滚动，从而控制是否显示该图标，点击调用 API（pageSrcrollTo）返回顶部</li>
                <li>分类模块主要是通过记录当前点击的一级标题的下标来进行切换并进行显示相应的二三级数据</li>
                <li>购物车模块主要是对商品的数量以及是否选购该商品进行控制</li>
                <li>商品详情主要是通过 id 获取并渲染数据，而且可以对该商品进行加购或者收藏等</li>
                <li>个人中心主要是通过 getUserInfo 获取个人信息以及渲染个人订单记录</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="新闻后台管理系统" name="5">
              <h3>项目描述：</h3>
              <p>该系统主要是让管理员来对文章进行管理，可以对文章进行发布，对文章类别进行管理，统计文章的相关数据，修改个人信息等</p>
              <h3>项目职责：</h3>
              <ul>
                <li>利用 div+css 进行页面的布局，使用 jquery 来操作 dom</li>
                <li>利用 jquery 封装的 ajax 来与服务端进行交互</li>
                <li>负责登录模块，获取用户名和密码发送 ajax 请求到接口，根据返回结果进行相关的提示</li>
                <li>负责首页模块 ，获取管理员的登陆信息并渲染，完成退出登录功能，通过 echarts 图标渲染文章的相关数据</li>
                <li>文章类别管理：获取文章类别，利用模板引擎渲染数据；删除利用事件委托绑定点击事件，根据 id 进行删除；新增和编辑是对 bootstrap 的模态框完成相关的操作（获取，新增，删除</li>
                <li>利用 jquery.pagination 插件来实现分页功能</li>
                <li>文章发布：利用 tinymce 富文本编辑器进行布局，用 FormData 来收集表达各项的数据并发送给服务端</li>
                <li>个人中心：管理员对个人信息进行修改，通过 formdata 收集数据并发送至服务端</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="汇能咨讯系统" name="6">
              <h3>项目描述：</h3>
              <p>该网站每日更新大量能源资讯,页岩气,新能源,光伏,电力,燃气,煤炭,铁矿石,铁精粉等信息,并提供专业的技术指导和数据分析</p>
              <h3>项目职责：</h3>
              <ul>
                <li>通过 div+css 实现页面的基本布局</li>
                <li>通过 jquery 操作 dom 来实现 tab 栏的切换</li>
                <li>利用 ajax 获取服务器端数据并进行渲染</li>
                <li>使用 Swiper4 插件来实现图片的轮播效果</li>
                <li>根据文章的 id 跳转到文章的详情页，将获取到的数据渲染到页面</li>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: '1'
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">

</style>
