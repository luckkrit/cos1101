<script setup lang="ts">

const props = defineProps({
    number: {
        default: 0,
    },
    selected: {
        default: false
    },
    result: {
        default: false
    },
    normal: {
        default: true
    },
    isLarge: {
        default: false
    },
    isSmall: {
        default: false
    },
    input: {
        default: false
    }
})

</script>
<template>
    <div class="size-10 text-black flex justify-center items-center border border-black dark:border-white"
        :class="[
            { 'bg-black text-white': props.selected && !props.result, 'bg-purple-300 text-black': !props.selected && !props.result, 'bg-yellow-300 text-black': props.result && !props.selected, 'w-16 h-10': props.isLarge, 'size-6': props.isSmall, 'bg-white': props.input }]">
        {{ props.number
        }}</div>
</template>