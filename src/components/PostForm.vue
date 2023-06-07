<template>
    <form class="form" @submit.prevent>
        <custom-input v-model="post.title" type="text" placeholder="title"/>
        <custom-input v-model="post.description" class="input" type="text"
                      placeholder="description"/>
        <custom-btn class="btn" type="submit" @click="create">Create</custom-btn>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                description: ''
            }
        }

    },
    methods: {
        create() {
            this.post.id = new Date();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                description: ''
            };

        },
    }
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
}

.input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid aquamarine;
    margin-bottom: 10px;
}


</style>
