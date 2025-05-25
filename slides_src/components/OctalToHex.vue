<script setup lang="ts">

import NumberBox from './NumberBox.vue';

</script>

<template>
    <div class="flex flex-col items-end w-fit">

        <div class="flex">
            <div class="flex flex-col items-center">
                <NumberBox number="1" />
                <div class="flex">
                    <div class="h-10 border-l">&nbsp;</div>
                </div>
                <div class="flex">
                    <div class="size-10 border-0 border-t border-l">&nbsp;</div>
                    <div class="size-10 border-0 border-t">&nbsp;</div>
                    <div class="size-10 border-0 border-t">&nbsp;</div>
                    <div class="size-10 border-0 border-t border-r">&nbsp;</div>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <NumberBox number="1" />
                <div class="flex">
                    <div class="h-10 border-l">&nbsp;</div>
                </div>
                <div class="flex">
                    <div class="size-10 border-0 border-t border-l">&nbsp;</div>
                    <div class="size-10 border-0 border-t">&nbsp;</div>
                    <div class="size-10 border-0 border-t">&nbsp;</div>
                    <div class="size-10 border-0 border-t border-r">&nbsp;</div>
                </div>
            </div>
        </div>
        <div class="flex">
            <NumberBox number="1" />
            <NumberBox number="1" />
            <NumberBox number="1" />
            <NumberBox number="1" />
            <NumberBox number="0" />
            <NumberBox number="0" />
            <NumberBox number="0" />
            <NumberBox number="0" />
        </div>
    </div>
</template>