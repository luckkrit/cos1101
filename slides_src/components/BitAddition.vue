<script setup lang="ts">
let carrys: Map<string, string[]> = new Map();
let inputs: string[] = []
let inputs2: string[] = []
let outputs: string[] = []
const props = defineProps({
    input: {
        default: '',
    },
    input2: {
        default: '',
    },
    carry: {
        default: ''
    },
    operation: {
        default: ''
    },
    base: {
        default: 2
    },
    labelB: {
        default: 'B'
    }
})
let input = props.input
let input2 = props.input2
inputs = input.split('')
inputs2 = input2.split('')
if (props.carry.length > 0) {
    const cs = props.carry.split('')
    for (let i = -1; i < inputs.length; i++) {
        carrys.set(`${i}`, [cs[i]])
    }
} else {
    for (let i = -1; i < inputs.length; i++) {
        carrys.set(`${i}`, [])
    }
}
if (inputs.length === inputs2.length) {
    for (let i = inputs.length - 1; i > -1; i--) {
        let a = 0;
        let b = 0;
        let c = 0;
        try {
            a = parseInt(inputs[i], 2) & 0xFF
        } catch (e) {

        }
        try {
            b = parseInt(inputs2[i], 2) & 0xFF
        } catch (e) {

        }
        try {
            const cs = carrys.get(`${i}`)
            if (cs !== undefined) {
                c = parseInt(cs?.join(''), 2) & 0xFF
            }
        } catch (e) {

        }
        let d = (a + b + c).toString(2)
        // console.log(i, a, b, c, d)
        if (d.length > 1) {
            outputs.unshift(d[1])
            if (i - 1 > -2) {
                const cs = carrys.get(`${i - 1}`)
                if (cs !== undefined) {
                    cs.push(d[0])
                }
            }
        } else {
            outputs.unshift(d[0])
        }
    }
}
// console.log(carrys, inputs, inputs2, outputs)
</script>
<template>
    <div class="flex justify-center">
        <div class="flex flex-col">
            <div class="flex">
                <template v-for="(n, index) of carrys" :key="index">
                    <div v-if="index === 0" class="flex justify-center items-center size-10">
                        {{ carrys.get(`${index - 1}`)?.join('') }}
                    </div>
                    <div v-if="index > 0" class="flex justify-center items-center size-10 text-purple-500">
                        {{ carrys.get(`${index - 1}`)?.join('') }}
                    </div>
                </template>
                <div
                    class="text-purple-500 font-bold border-l border-l-dark dark:border-l-white  flex justify-center items-center w-14 h-10">
                    Carry</div>
            </div>
            <div class="flex">
                <div class="size-10">&nbsp;</div>
                <template v-for="(n, index) of inputs" :key="index">
                    <div class="flex justify-center items-center size-10">
                        {{ n }}
                    </div>
                </template>
                <div
                    class="font-bold border-l border-l-dark dark:border-l-white  flex justify-center items-center w-14 h-10">
                    A
                </div>
            </div>
            <div class="flex">
                <div
                    class="size-10 border-b border-b-dark dark:border-b-white flex justify-center items-center bg-amber-500 text-white">
                    +</div>
                <template v-for="(n, index) of inputs2" :key="index">
                    <div class="flex justify-center items-center size-10 border-b border-b-dark dark:border-b-white ">
                        {{ n }}
                    </div>
                </template>
                <div
                    class="font-bold border-l border-l-dark dark:border-l-white flex justify-center items-center min-w-14 px-3 h-10">
                    {{ props.labelB }}
                </div>
            </div>
            <div class="flex">
                <div class="size-10 flex justify-center items-center bg-slate-500 text-white">
                </div>
                <template v-for="(n, index) of outputs" :key="index">
                    <div class="flex justify-center items-center size-10 bg-slate-500 text-white">
                        {{ n }}
                    </div>
                </template>
                <div
                    class="font-bold border-l border-l-dark dark:border-l-white  flex justify-center items-center w-14 h-10 bg-slate-500 text-white">
                    R
                </div>
            </div>
        </div>
    </div>
</template>