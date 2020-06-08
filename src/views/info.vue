<template>
    <div class='container-info'>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>个人信息</span>
            </div>
            <!--基本信息 -->
            <div>
                <el-row :gutter="20">
                    <el-col :span="4">姓名：杨晓倩</el-col>
                    <el-col :span="3">性别：女</el-col>
                    <el-col :span="4">年龄：26</el-col>
                    <el-col :span="9">工作经验：3年</el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4">学历：本科</el-col>
                    <el-col :span="7">联系方式：151-7965-5238</el-col>
                    <el-col :span="9">邮箱：yangxqzs@163.com</el-col>
                </el-row>
            </div>
            <!-- 求职意向 -->
            <my-divider>求职意向</my-divider>
            <div>
                <el-row :gutter="20">
                    <el-col :span="8">求职意向：web前端工程师</el-col>
                    <el-col :span="6">工作地点：北京</el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">目前状态：离职（随时到岗）</el-col>
                    <el-col :span="6">期望薪资：面议</el-col>
                </el-row>
            </div>
            <!-- 专业技能 -->
            <my-divider>专业技能</my-divider>
        </el-card>
    </div>
</template>

<script>
import MyDivider from '@/components/divider'
export default {
  components: {
    MyDivider
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.container-info{
    // position: relative;
    // top: 0;
    // left: 0;
    // width: 100%;
    // height: 100%;
    // background-color: tomato;
    .el-row {
        font-size: 20px;
        margin-bottom: 20px;
        font-family: "Microsoft YaHei";
    }
}
</style>
