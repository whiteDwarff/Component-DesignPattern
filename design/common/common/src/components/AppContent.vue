<template>
  <div>
    <li v-for="item of items" :key="item">
      {{ item }}
    </li>
    <button @click="$emit('renew')">renew Items</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      // required : 필수값이다 ~~
      required: true,
    }
  }
}
</script>

<style>

</style>