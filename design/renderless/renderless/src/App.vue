<template>
  <div>
    <!-- renderless : 표현하지 않는 component, 데이터 제공만 함 -->
    <FetchData 
    url="https://jsonplaceholder.typicode.com/users/1"/>

    <div slot-scope="{response, loading}">
      <div v-if="!loading">
        {{ response }}
      </div>
      <div v-if="loading">loading.. </div>
    </div>
  </div>
</template>

<script>
import FetchData from "./components/FetchData.vue"
export default {
  components: {
    FetchData
  }
}
</script>

<style>

</style>