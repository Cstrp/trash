<template>
    <div class="post">
        <div class="post-item">
            <div><strong>{{ post.title }}</strong></div>
            <div><strong>{{ post.description }}</strong></div>
        </div>

        <div class="post-action">
            <custom-btn @click="$emit('delete', post)">Delete</custom-btn>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
.post {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border: 3px solid aquamarine;
    margin-top: 15px;
}

.post-item {
    width: 100%;
}

.post-action {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 20%;
}

</style>
