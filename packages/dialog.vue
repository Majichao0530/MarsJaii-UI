<template>
  <transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave">
    <div class="mj-dialog__wrapper" v-show="visible" @click.self="handleClose">
        <!-- .self功能：只有点击自己才触发 解决冒泡捕获 -->
      <div class="mj-dialog" :style="{width: width, marginTop: top}">
        <div class="mj-dialog__header">
          <slot name="title">
            <span class="mj-dialog__title">{{title}}</span>
          </slot>
          <button class="mj-dialog__headerbtn" @click="handleClose">
            <i class="mj-icon-close"></i>
          </button>
        </div>
        <div class="mj-dialog__body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="mj-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MjDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    },
    afterEnter () {
      this.$emit('opened')
    },
    afterLeave () {
      this.$emit('closed')
    }
  }
}
</script>

<style lang="scss" scoped>
/*
scoped会给当前组件的模板中的所有的元素都添加一个随机的属性
同时scoped也会给当前的组件中所有的样式也添加一个对应的属性选择器
做到样式只影响对应属性
*/
.mj-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);
  .mj-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;
    &__header {
      padding: 20px 20px 10px;
      .mj-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .mj-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .mj-button:first-child {
        // ::v-deep 深度作用选择器【scss】
        // less /deep/ css >>> 文档在vue-loader**
        margin-right: 20px;
      }
    }
  }
}
// 利用关键帧实现动画
.dialog-fade-enter-active {
  animation: dialog-fade-in .4s;
}
.dialog-fade-leave-active {
  animation: dialog-fade-out .4s;
}
@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
