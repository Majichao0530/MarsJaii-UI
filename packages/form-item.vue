<template>
  <div class="mj-form-item">
    <label class="mj-form-item_label" :style="labelStyle">{{label}}</label>
    <div class="mj-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MjFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form'],
  computed: {
    labelStyle () {
      return {
        width: this.Form.labelWidth
      }
    }
  }
}
</script>

<style lang="scss">
  .mj-form-item{
    margin-bottom: 25px;
    .mj-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .mj-form-item_content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidde;
    }
  }
</style>
