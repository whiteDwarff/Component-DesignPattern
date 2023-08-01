<template>
  <!-- v-model을 통한 상위/하위 component간 input 데이터 전달  -->
  <div>
    <!-- v-model : 
      @input event와 :value의 값으로 동작이 됨,
      v-model을 통해 CheckBox component에 value가 넘어감(boolean 값)
    -->
    <CheckBox v-model="checked" @input="changeState"/>
  </div>
</template>

<script>
import CheckBox from "./components/CheckBox.vue"
export default {
  data() {
    return {
      checked: false,
    }
  },
  components: {
    CheckBox
  },
  methods: {
    changeState(event) {
      this.checked = event;
      console.log(this.checked)
    }
  }
}
</script>

<style>

</style>