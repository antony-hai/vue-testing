<template>
<section>
    <div :style="{'marginBottom': '20px'}">这个是测试的options1 {{ $route.path }}</div>
    <div>
      <Button type="info" ghost @click="addProductCount">增加count</Button>
      <Button type="warning" ghost @click="decreaseProductCont">减少count</Button>
      <Button type="success" ghost @click="setCountAsync">0.5秒后随机设置</Button>
    </div>
    <div class="store-count">{{ count }}</div>
</section>

</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  methods: {
    ...mapActions("card", ["setCountAsync"]),
    ...mapMutations("card", ["addProductCount", "decreaseProductCont"])
  },
  computed: {
    ...mapState({
      count: ({ card }) => card.count
    })
  }
};
</script>

<style lang="less" scoped>
.store-count {
  font-size: 30px;
  font-weight: 500px;
}
</style>
