<template>
  <div>
    <PageHeader />
    <ListArticles />
  </div>
</template>

<script>
  import PageHeader from "@/components/PageHeader.vue";
  import ListArticles from "@/components/ListArticles.vue";

  export default {
    components: {
      PageHeader,
      ListArticles,
      
    },
  };
</script>