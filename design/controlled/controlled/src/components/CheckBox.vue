<template>
  <div>
    <input type="checkbox" :value="value" @click="toggleCheckBox">
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  methods: {
    toggleCheckBox() {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style>

</style>