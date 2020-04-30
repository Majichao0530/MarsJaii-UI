<template>
  <div class="mj-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MjCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
