<template>
    <div class="app">
        <post-form @create="createPost" />
        <post-list :posts="posts" @delete="deletePost"/>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default {
    components: {
        PostForm,
        PostList
    },
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'Title #1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quisquam?'
                },
                {
                    id: 2,
                    title: 'Title #2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quisquam?'
                },
                {
                    id: 3,
                    title: 'Title #3',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quisquam?'
                },
                {
                    id: 4,
                    title: 'Title #4',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quisquam?'
                },
                {
                    id: 5,
                    title: 'Title #5',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quisquam?'
                },
            ]
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
        },
        deletePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px
}
</style>
