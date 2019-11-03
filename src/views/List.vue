<template>
    <section class="list-tab">
        <paginate
        :page-count="20"
        :click-handler="functionName"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'className'">
        </paginate>
    </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
    /* eslint-disable no-console */

    name: 'list',
    components: {
    },
    data: function(){
        return {
        }
    },
    methods:{
        functionName(){

        }
    },
    mounted(){
        // this.$store.dispatch("PullJobs");
    }
}
</script>
