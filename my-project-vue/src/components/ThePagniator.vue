<template>
  <div v-if="totalPages > 1" class="the-paginator">
    <button
      v-for="item in totalPages"
      type="button"
      class="the-paginator__item"
      :class="{
        'the-paginator__item--active': page === item,
      }"
      :key="item"
      @click="setPage(item)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
  export default {
    emits: ["setPage"],
    props: {
      page: {
        type: Number,
        default: 1,
      },
      totalPages: {
        type: Number,
        default: 1,
      },
    },
    methods: {
      setPage(page) {
        this.$emit("setPage", page);
      },
    },
  };
</script>

<style lang="less">
  .the-paginator {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    &__item {
      list-style: none;
      padding: 5px;
      background-color: @brown;
      color: @white;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        @media (hover: hover) {
          background-color: @light_orange;
        }
      }

      &:active {
        background-color: @light_orange;
      }

      &--active {
        background-color: @light_orange;
      }
    }
  }
</style>