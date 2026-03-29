<template>
    <main>
        <div class="list-articles">
            <div class="list-articles__list">
                <CardArticle 
                v-for="(item, index) in newslist" 
                :key="index"
                :title="item.title"
                :description="item.description"
                class="list-articles__card"
                />
            </div>
        </div>
    </main>
</template>

<script>
    import CardArticle from '@/components/card/CardArticle.vue';
    import newslist from '@/json/news.json';

    export default {
        components: {
            CardArticle,
        },
        data() {
            return {
                newslist: newslist
            }
        }
    }
</script>

<style lang="less">
.list-articles {
    padding-bottom: 20px;
    &__container {
        .container();
    }
    &__card {
        margin-bottom: 15px;
    }
}
</style>