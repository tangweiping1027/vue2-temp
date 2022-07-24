<template>
    <div class="hello">hello-world</div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String,
        },
        methods: {
            onClick() {
                this.$emit('click')
            },
        },
    }
</script>
