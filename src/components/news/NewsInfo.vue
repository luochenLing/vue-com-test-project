<template>
    <div>
      新闻详情{{$route.params.id}}
      {{msg}}
      <comment-box></comment-box>
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            
        };
    },
    components:{
        "comment-box":comment
    }   
}
</script>

<style lang="scss" scoped>

</style>