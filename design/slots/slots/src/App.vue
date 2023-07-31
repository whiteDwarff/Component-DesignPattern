<template>
  <div>
    <ul>
        <ItemVue>아이템1</ItemVue>
        <ItemVue>아이템2</ItemVue>
        <ItemVue>아이템3</ItemVue>
        <ItemVue>아이템4</ItemVue>
        <ItemVue>아이템5</ItemVue>

        <br>
        <br>
        <hr>
        <br>
        <br>

        <ItemVue v-for="item of items" :key="item">{{ item }}</ItemVue>

        <br>
        <br>
        <hr>
        <br>
        <br>

        <ItemVue>item 1</ItemVue>
        <ItemVue>
          <div style="color: blue;">
            item 2 <button>BUTTON</button>
          </div>
        </ItemVue>
        <ItemVue>
          <div>
            <img src="./assets/logo.png">
          </div>
        </ItemVue>

    </ul>

    <!-- props를 사용할 경우  -->
    <!-- <ItemVue v-for="item of items" :key="item" :item="item"></ItemVue> -->
  </div>
</template>

<script>
import ItemVue from "./components/ItemView.vue"
export default {
  data() {
    return {
      items: ['item1', 'item2', 'item3', 'item4', 'item5']
    }
  },
  components: {
    ItemVue,
  }
}
</script>

<style>

</style>