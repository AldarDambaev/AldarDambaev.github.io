<template>
  <div>
    <PageHeader :activeTab="activeTab" @setTab="(value) => onSetTab(value)" />

    <PageHeader :activeTab="activeTab" @setTab="(value) => onSetTab(value)" />

    <PageRules v-if="activeTab === 'rules'" />
    <PageContacts v-else-if="activeTab === 'contacts'" />
    <PageHome v-else />
  </div>
</template>

<script>
  import PageHeader from "@/components/PageHeader.vue";
  import PageHome from "@/components/page/PageHome.vue";
  import PageRules from "@/components/page/PageRules.vue";
  import PageContacts from "@/components/page/PageContacts.vue";

  export default {
    components: {
      PageHeader,
      PageHome,
      PageRules,
      PageContacts,
    },
    data() {
      return {
        activeTab: "home",
      };
    },
    methods: {
      onSetTab(value) {
        this.activeTab = value;
      },
    },
  };
</script>