<template>
  <div class="tabs">
    <!-- closable 显示是否可关闭 -->
    <el-tag
      size="small"
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      close: "closeTag",
    }),
    changeMenu(item) {
      this.$router.push({ name: item.name });
    },
    handleClose(tag, index) {
      const length = this.tags.length - 1; //当前长度-1 能获取到当前路由的tag的index
      this.close(tag);
      if (tag.name !== this.$route.name) {
        //如果是在a路由删除的b路由的tag 焦点就不变
        return;
      }
      if (index === length) {
        //当前页面在当前路由的tag，即点的最右侧的tag,则点击过后焦点向左移
        this.$router.push({
          name: this.tags[index-1].name,
        });
      } else {
        //焦点处于中间
        this.$router.push({
          name: this.tags[index ].name,
        });
      }
    },
  },
  computed: {
      ...mapState({
        tags: (state) => state.tab.tabsList,
      }),
    },
};
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer; //鼠标图标变为 手
  }
}
</style>