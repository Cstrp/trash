<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'custom-btn',

}
</script>

<style scoped>
.btn {
    width: 40%;
    margin-top: 15px;
    align-self: flex-end;
    color: teal;
    padding: 10px 20px;
    background: none;
    border: 2px solid aquamarine;
    border-radius: 10px;
}
</style>
