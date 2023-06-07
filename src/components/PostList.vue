<template>
    <div v-if="posts.length > 0">
        <h3>Post list</h3>
        <post-item v-for="post of posts" :key="post.id" :post="post" @delete="$emit('delete', post)"/>
    </div>
    <h2 v-else style="color: red">Posts is empty</h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
    components: {PostItem},
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
</style>
