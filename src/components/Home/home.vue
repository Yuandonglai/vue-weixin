<template>
  <div>
    <Xheader/>
    <Ssearch/>
    <Xfooter/>
    <Spanel/>
    <Xgallery/>
    <Xactionsheet/>
  </div>
</template>
<script>
import Xheader from "../../components/Xheader.vue";
import Ssearch from "../../components/Ssearch.vue";
import Xfooter from "../../components/Xfooter.vue";
import Spanel from "../../components/Spanel.vue";
import Xgallery from "../../components/Xgallery.vue";
import Xactionsheet from "../../components/Xactionsheet.vue";
export default {
  name: "App",
  components: {
    Xheader,
    Ssearch,
    Xfooter,
    Spanel,
    Xgallery,
    Xactionsheet
  }
};
</script>
