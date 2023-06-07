<template>
    <input :value="modelValue" @input="updInput" type="text" class="input"/>
</template>

<script>
export default {
    name: "custom-input",
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updInput(e) {
            this.$emit("update:modelValue", e.target.value);
        }
    }
}
</script>

<style scoped>
.input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid aquamarine;
    margin-bottom: 10px;
}
</style>
