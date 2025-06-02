<script setup lang="ts">

const props = defineProps({
    title: {
        default: ''
    },
    icon: {
        default: ''
    }
})
</script>
<template>
    <div class="mb-12 p-6 border rounded-2xl bg-sky-50 border-l-4 border-l-sky-600">
        <h2 class="text-sky-950 text-3xl mb-5 flex items-center"><span class="text-2xl mr-2">{{ props.icon }}</span> {{
            props.title }}</h2>
        <div
            class="p-6 border rounded-2xl my-5 bg-amber-200 bg-gradient-to-r from-orange-200 from-10% to-orange-400 text-black">
            <slot></slot>
        </div>
    </div>
</template>