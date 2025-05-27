<script setup lang="ts">
const props = defineProps({
    input: {
        default: '',
    },
    input2: {
        default: '',
    },
    output: {
        default: '',
    },
    operation: {
        default: ''
    },
    mask: {
        default: ''
    },
    shift: {
        default: ''
    }
})

function extractNumberAndLetter(input: string): { valid: boolean, number: number, letter: string } {
    const regex = /^([0-9])([L|R])|([L|R])([0-9])$/;
    const match = input.match(regex);

    if (match) {
        let number = 0, letter = '';

        if (match[1] && match[2]) {
            // Format: 5L (number-letter)
            number = parseInt(match[1])
            letter = match[2];
        } else if (match[3] && match[4]) {
            // Format: L5 (letter-number)
            letter = match[3];
            number = parseInt(match[4]);
        }

        return { number, letter, valid: true };
    }

    return { valid: false, number: 0, letter: '' };
}
const { number, letter, valid } = extractNumberAndLetter(props.mask)
const shift = extractNumberAndLetter(props.shift)
const outputs = props.output.split('')
const inputs = props.input.split('')
// console.log(number, letter, valid)
</script>
<template>

    <div class="flex justify-center items-center my-3">
        <div class="flex gap-10">
            <div class="flex flex-col justify-center">
                <div v-if="operation !== 'SHIFTING'" class="flex items-center font-bold text-xl h-10">
                    {{ operation }}
                </div>
                <div v-if="operation === 'SHIFTING' && shift.letter == 'L'"
                    class="flex items-center font-bold text-xl h-10">
                    &larr;
                </div>
                <div v-if="operation === 'SHIFTING' && shift.letter == 'R'"
                    class="flex items-center font-bold text-xl h-10">
                    &rarr;
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex">
                    <div class="size-10 flex justify-center items-center" v-for="(n, index) in inputs" :key="index"
                        :class="{ 'bg-amber-700 text-white': shift.valid && operation === 'SHIFTING' && ((index < shift.number && shift.letter == 'L') || (outputs.length - index <= shift.number && shift.letter == 'R')) }">
                        {{ n }}
                    </div>
                </div>
                <div v-if="props.input2.length > 0" class="flex border-t-2 border-black dark:border-white">
                    <div class="size-10 flex justify-center items-center" v-for="(n, index) in props.input2.split('')"
                        :key="index">{{ n }}
                    </div>
                </div>
                <div v-if="operation !== 'SHIFTING'"
                    class="flex text-red-500 bg-slate-400 border-t-2 border-black dark:border-white">
                    <div class="size-10 flex justify-center items-center" v-for="(n, index) in outputs"
                        :class="{ 'bg-amber-700 text-white': valid && operation === 'MASK' && ((index < number && letter == 'L') || (outputs.length - index <= number && letter == 'R')) }"
                        :key="index">{{ n }}
                    </div>
                </div>
                <div v-if="operation === 'SHIFTING'"
                    class="flex bg-slate-400 border-t-2 border-black dark:border-white">
                    <div class="size-10 flex justify-center items-center" v-for="(n, index) in outputs"
                        :class="{ 'text-red-500': shift.valid && operation === 'SHIFTING' && ((index < shift.number && shift.letter == 'R') || (outputs.length - index <= shift.number && shift.letter == 'L')) }"
                        :key="index">{{ n }}
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-evenly">
                <div v-if="operation !== 'SHIFTING'">Input</div>
                <div v-if="operation === 'SHIFTING'" class="flex items-center font-bold text-xl h-10">
                    Original
                </div>
                <div v-if="valid && operation === 'MASK'">MASK</div>
                <div v-if="!valid && operation != 'NOT' && operation !== 'SHIFTING' && operation !== 'MASK'">Input2
                </div>
                <div v-if="operation !== 'SHIFTING'">Output</div>
                <div v-if="operation === 'SHIFTING'" class="flex items-center font-bold text-xl h-10">
                    After ship
                </div>
            </div>
        </div>
    </div>
</template>