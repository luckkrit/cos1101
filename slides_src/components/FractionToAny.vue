<script setup lang="ts">
function getFractionLength(num: number) {
    const str = num.toString();
    const decimalIndex = str.indexOf('.');
    return decimalIndex === -1 ? 0 : str.length - decimalIndex - 1;
}
function subtract(a: number, b: number, decimals = 2) {
    const factor = Math.pow(10, decimals);
    return (Math.round(a * factor) - Math.round(b * factor)) / factor;
}
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
const fractions: number[] = []
const destinations: any[] = []
let source = props.number * 1;
source = source % 1
let oNumber = source;
for (let i = 0; i < props.step; i++) {
    let result = source * props.base
    const l = getFractionLength(result)
    let integral = result - (result % 1)
    let fraction = subtract(result, integral)
    fractions.push(fraction)

    if (props.base == 16) {
        let integralS = integral.toString(16).toUpperCase()
        destinations.push(integralS)
    } else {
        destinations.push(integral)
    }
    if (fraction > 0) {
        source = fraction;
    } else {
        break;
    }
}
// console.log("f ", fractions, destinations)
</script>
<template>

    <div class="flex justify-center h-36">
        <div class="flex flex-row gap-3 my-3">
            <div class="flex flex-col mx-10 justify-evenly">
                <div>Decimal</div>
                <div class="text-3xl">&nbsp;</div>
                <div class="flex">
                    <div v-if="props.base == 2">Binary</div>
                    <div v-if="props.base == 8">Octal</div>
                    <div v-if="props.base == 16">Hexadecimal</div>
                    <div class="px-10">&#9679;</div>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <NumberBox :number="oNumber" :selected="props.step == 0" :isLarge="true" />
                <template v-if="props.step > 0">
                    <span class="text-3xl">&darr;</span>
                    <NumberBox :number="destinations[0]" :result="true" />
                </template>
            </div>
            <template v-if="props.step > 0" v-for="(fraction, index) in fractions" :key="fraction">
                <span class="text-3xl">&rarr;</span>
                <div class="flex flex-col items-center">
                    <NumberBox :number="fraction" :selected="props.step == index + 1" :isLarge="true" />
                    <span v-if="index + 1 < destinations.length" class="text-3xl">&darr;</span>
                    <NumberBox v-if="index + 1 < destinations.length" :number="destinations[index + 1]"
                        :result="true" />
                </div>
            </template>
        </div>
    </div>
</template>