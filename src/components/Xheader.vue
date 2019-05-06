<template>
  <h2 @click="showActionsheet">好好看,好好学</h2>
</template>
<script>
import state from "../observable.js";
export default {
  methods: {
    showActionsheet() {
      state.isActionsheet = true;
    }
  },
  computed: {
    state(){
      return state;
    }
  }
};
</script>

<style scoped>
h2 {
  font-size: 18px;
  width: 100%;
  height: 50px;
  background: red;
  color: #ffffff;
  text-align: center;
  line-height: 50px;
}
</style>


