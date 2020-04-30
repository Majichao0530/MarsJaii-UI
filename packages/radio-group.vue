<template>
  <div class="mj-radio-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MjRadioGroup',
  props: {
    value: null
  },
  provide () {
    return {
      RadioGroup: this
    }
  }
}
</script>

<style>

</style>
