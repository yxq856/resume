<template>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>工作经历</span>
        <el-button @click="this.dialogFormVisible=true" style="float: right; padding: 3px 0" type="text">添加工作经历</el-button>
      </div>
      <!-- 时间线 -->
      <div class="work-container">
        <el-timeline class="work-timeline">
          <el-timeline-item v-for="(item,index) in gsArr" :key="index" :timestamp="item.time" placement="top">
            <el-card>
              <div style="display:flex">
                <h3 style="width:50%" >{{item.name}}</h3>
                <p> {{item.gw}}</p>
              </div>

              <p>主要职责</p>
              <ul>
                <li v-for="(item1,index ) in item.zz" :key="item1+index">{{item1}}</li>
              </ul>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
      <!-- 模态框 -->
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>

</template>

<script>
export default {
  data () {
    return {
      gsArr: [
        {
          name: '青岛华夏星火网络科技有限公司',
          time: '2018/08-2020/04',
          gw: 'web前端开发工程师',
          zz: [
            '根据设计师的原型图精准还原 Web 页面',
            'Web 前端表现层与前后端交互的设计和开发',
            '开发基于 HTML5 技术的可灵活性定制，可扩展的前端 UI 组件',
            'Web 页面的维护与性能优化',
            '学习前端的新技术'
          ]
        },
        {
          name: '南昌乐酷科技有限公司',
          time: '2017/11-2018/07',
          gw: 'web前端开发工程师',
          zz: [
            '负责前端页面制作和交互开发',
            '负责项目前端代码的修改调试和开发',
            '和团队紧密合作，实现设计想法',
            '维护公司线上产品',
            '和后端开发团队紧密结合，确保代码有效对接'
          ]
        }
      ],
      // 模态框是否显示
      dialogFormVisible: false
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
</style>
