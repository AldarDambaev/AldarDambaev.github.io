<template>
  <form class="search-form" @submit.prevent="onSubmit">
    <input
      type="search"
      name="search"
      v-model="search"
      class="search-form__input"
      placeholder="Поиск"
    />

    <button type="submit" class="search-form__btn">Найти</button>
  </form>
</template>

<script>
  export default {
    emits: ["search"],
    data() {
      return {
        search: "",
      };
    },
    methods: {
      onSubmit() {
        this.$emit("search", this.search.trim());
      },
    },
  };
</script>

<style lang="less">
  .search-form {
    display: flex;
    gap: 20px;
    &__input {
      box-sizing: border-box;
      width: 300px;
      height: 50px;
      padding: 0 15px;
      border: 2px solid @brown;
      background-color: transparent;
    }
    &__btn {
      box-sizing: border-box;
      width: 120px;
      height: 50px;
      padding: 5px 20px;
      background-color: @brown;
      color: @white;
    }
  }
</style>