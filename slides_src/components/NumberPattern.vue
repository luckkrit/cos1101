<script setup lang="ts">
const props = defineProps({
    from: {
        default: 2
    },
    to: {
        default: 16
    },
    chunk: {
        default: 3
    }
})
</script>
<template>
    <div class="flex my-2 justify-center">
        <template v-for="(n, index) in parseInt(props.to)" :key="index">
            <div class="flex flex-col">
                <div
                    class="border border-black dark:border-white bg-yellow-400 text-black h-10 w-14 flex justify-center items-center">
                    {{ parseInt(n, 10).toString(2).padStart(props.chunk, '0') }}</div>
                <div class="border border-black dark:border-white h-10 w-14 flex justify-center items-center">{{ n }}
                </div>
            </div>
        </template>
        <div class="flex flex-col">
            <div class="border border-black dark:border-white h-10 w-20 flex justify-center items-center">
                Memory
            </div>
            <div class="border border-black dark:border-white h-10 w-20 flex justify-center items-center">Value
            </div>
        </div>

    </div>
</template>