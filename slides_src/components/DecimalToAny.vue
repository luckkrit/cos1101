<script setup lang="ts">

const props = defineProps({
    number: {
        default: 0,
    },
    step: {
        default: 0
    },
    base: {
        default: 2
    }
})
const quotients: number[] = []
const destinations: any[] = []
let source = props.number * 1;
for (let i = 0; i < props.step; i++) {
    let quotient = (source / props.base) - ((source / props.base) % 1);
    let destination = source % props.base;
    if (props.base == 16) {
        let destinationS = destination.toString(16).toUpperCase()
        destinations.push(destinationS)
    } else {
        destinations.push(destination)
    }
    quotients.push(quotient);
    if (quotient > 0) {
        source = quotient;
    } else {
        break;
    }
}
// console.log(quotients, destinations)
</script>
<template>

    <div class="flex justify-center h-36">
        <div class="flex flex-col mx-10 justify-evenly">
            <div>Decimal</div>
            <div class="text-3xl">&nbsp;</div>
            <div class="flex">
                <div v-if="props.base == 2">Binary</div>
                <div v-if="props.base == 8">Octal</div>
                <div v-if="props.base == 16">Hexadecimal</div>
            </div>
        </div>
        <div class="flex flex-row-reverse gap-3 my-3">
            <div class="flex flex-col items-center">
                <NumberBox :number="props.number" :selected="props.step == 0" />
                <template v-if="props.step > 0">
                    <span class="text-3xl">&darr;</span>
                    <NumberBox :number="destinations[0]" :result="true" />
                </template>
            </div>
            <template v-if="props.step > 0" v-for="(quotient, index) in quotients" :key="quotient">
                <span class="text-3xl">&larr;</span>
                <div class="flex flex-col items-center">
                    <NumberBox :number="quotient" :selected="props.step == index + 1" />
                    <span v-if="index + 1 < destinations.length" class="text-3xl">&darr;</span>
                    <NumberBox v-if="index + 1 < destinations.length" :number="destinations[index + 1]" result="true" />
                </div>
            </template>
        </div>
    </div>
</template>