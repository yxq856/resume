<template>
    <div class="my-divider">
        <div class="left">
            <slot></slot>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
export default {
  name: 'my-divider',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.my-divider {
    display: flex;
    height: 50px;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 29px;
    .left {
        box-sizing: content-box;
        width: 180px;
        height: 47px;
        line-height: 47px;
        background-color: #6fac46;
        text-align: center;
    }
    .right {
        box-sizing: content-box;
        flex: 1;
        height: 46px;
        border-bottom: 4px solid #585858;
    }
}
</style>
