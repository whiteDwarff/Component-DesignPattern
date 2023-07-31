<!-- 
  부모 component에서 자식 component에 props를 통해 데이터를 전송하는 방법
  자식 component는 $emit()을 통해 부모 component에 event 전송이 가능함 
-->

<template>
  <div>
    <AppHeader :title="appTitle" />
    <AppContent :items="items" @renew="renewItems"/>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"
import AppContent from "./components/AppContent.vue"

export default {
  data() {
    return {
      appTitle: 'Common Approach',
      items: [10, 20, 30],
    }
  },
  methods: {
    renewItems() {
      this.items = [40, 50, 60];
    }
  },
  components: {
    AppHeader,
    AppContent

  }
}
</script>

<style>

</style>