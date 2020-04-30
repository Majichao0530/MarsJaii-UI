<template>
  <div id="app">
    <mj-form :model="model" label-width="70px">
      <mj-form-item label="用户名：">
        <mj-input placeholder="请输入用户名" v-model="model.username" clearable></mj-input>
      </mj-form-item>
      <mj-form-item label="选择：">
        <mj-switch v-model="model.active"></mj-switch>
      </mj-form-item>
      <mj-button type="primary" plain>按钮</mj-button>
    </mj-form>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      model: {
        username: '',
        active: false
      }
    }
  }
}
</script>

<style lang="scss">

</style>
