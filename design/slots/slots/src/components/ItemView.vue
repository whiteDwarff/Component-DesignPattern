<template>
  <li>
    <slot>
      <!-- 등록하는 곳에서 정의할 영역, slot은 상위 component에서 데이터를 정의한다.  -->
    </slot>

    
    <!-- props를 사용할 경우  -->
    <!-- {{ item }} -->
  </li>
</template>

<script>
export default {
  // props: {
  //   item: String
  // }
}
</script>

<style>

</style>