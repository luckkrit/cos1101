<script setup lang="ts">

function splitIntoChunksFromRight(str: string, chunkSize = 3) {

    const chunks: string[][] = [];

    for (let i = str.length; i > 0; i -= chunkSize) {
        const start = Math.max(0, i - chunkSize);
        let chunk = str.slice(start, i).split('')
        chunks.unshift(chunk);
    }

    return [...chunks];
}
function splitIntoChunksFromLeft(str: string, chunkSize = 3): string[][] {
    const chunks: string[][] = [];

    for (let i = 0; i < str.length; i += chunkSize) {
        const end = Math.min(i + chunkSize, str.length);
        let chunk = str.slice(i, end).split('');
        chunks.push(chunk);
    }

    return [...chunks];
}
function splitIntoChunks(str: string, from: number, chunkSize = 3): string[][] {
    const results: string[][][] = []
    if (str.includes('.')) {
        const integral = str.split('.')[0]
        const fractional = str.split('.')[1]
        results.push(splitIntoChunksFromRight(integral, chunkSize))
        results.push(splitIntoChunksFromLeft(fractional, chunkSize))
        if (from == 2) {

            for (let i = 0; i < results[0].length; i++) {
                let chunk = results[0][i]
                if (chunk.length < chunkSize) {
                    let l = chunkSize - chunk.length;
                    for (let j = 0; j < l; j++) {
                        chunk.unshift('0')
                    }
                }
            }
            for (let i = 0; i < results[1].length; i++) {

                let chunk = results[1][i]
                if (chunk.length < chunkSize) {
                    let l = chunkSize - chunk.length;
                    for (let j = 0; j < l; j++) {
                        chunk.push('0')
                    }
                }
            }
        }
        results.splice(1, 0, [['.']]);
        return results.flat();
    } else {

        const results = splitIntoChunksFromRight(str, chunkSize);
        if (props.from == 2) {
            for (let i = 0; i < results[0].length; i++) {
                let chunk = results[0]
                if (chunk.length < chunkSize) {
                    let l = chunkSize - chunk.length;
                    for (let j = 0; j < l; j++) {
                        chunk.unshift('0')
                    }
                }
            }
        }
        return results;
    }

}

const props = defineProps({
    input: {
        default: '',
    },
    step: {
        default: 0
    },
    from: {
        default: 2
    },
    to: {
        default: 16
    },
    chunkFrom: {
        default: 4
    },
    chunkTo: {
        default: 4
    }
})

const chunkFrom = props.from == 8 ? 3 : 4
const chunkTo = props.to == 16 ? 4 : 3
const inputChunks = splitIntoChunks(props.input, props.from, 1)
const outputChunks: string[][] = []

inputChunks.forEach((chunk) => {
    if (chunk.join('') !== '.') {

        let convert = parseInt(chunk.join(''), props.from).toString(2).toUpperCase()
        if (convert.length < chunkFrom) {
            const l = chunkFrom - convert.length
            for (let i = 0; i < l; i++) {
                convert = '0' + convert;
            }
        }
        outputChunks.push([...convert])
    } else {
        outputChunks.push(chunk)
    }
})

// got base 2 then convert to base 16
const input2 = outputChunks.flat().join('')
console.log(input2)
const inputChunks2: string[][] = splitIntoChunks(input2, 2, chunkTo)
const outputChunks2: string[][] = []
inputChunks2.forEach((chunk) => {
    if (chunk.join('') !== '.') {

        let convert = parseInt(chunk.join(''), 2).toString(props.to).toUpperCase()
        outputChunks2.push([...convert])
    } else {
        outputChunks2.push(chunk)
    }
})

const input3 = outputChunks2.flat().join('')
console.log(input3)
// got base 16 then convert to base 2
const inputChunks3: string[][] = splitIntoChunks(input3, props.to, 1)
const outputChunks3: string[][] = []
inputChunks3.forEach((chunk) => {
    if (chunk.join('') !== '.') {

        let convert = parseInt(chunk.join(''), props.to).toString(2)

        if (convert.length < chunkTo) {
            const l = chunkTo - convert.length
            for (let i = 0; i < l; i++) {
                convert = '0' + convert;
            }
        }
        outputChunks3.push([...convert])
    } else {
        outputChunks3.push(chunk)
    }
})

const count = chunkFrom - 2;
const count2 = chunkTo - 2;


const inputChunksB: string[][] = []
const inputChunksA: string[][] = []
for (let i = 0; i < inputChunks.length; i++) {
    let chunk = inputChunks[i]
    if (chunk.indexOf('.') == 0) {
        break;
    } else {
        inputChunksB.push(chunk)
    }
}
let isAppend = false;
for (let i = 0; i < inputChunks.length; i++) {
    let chunk = inputChunks[i]
    if (chunk.indexOf('.') == 0) {
        isAppend = true
        continue;
    } else if (isAppend) {
        inputChunksA.push(chunk)
    }
}
isAppend = false
const outputChunks3B: string[][] = []
const outputChunks3A: string[][] = []
for (let i = 0; i < outputChunks3.length; i++) {
    let chunk = outputChunks3[i]
    if (chunk.indexOf('.') == 0) {
        break;
    } else {
        outputChunks3B.push(chunk)
    }
}
for (let i = 0; i < outputChunks3.length; i++) {
    let chunk = outputChunks3[i]
    if (chunk.indexOf('.') == 0) {
        isAppend = true
        continue;
    } else if (isAppend) {
        outputChunks3A.push(chunk)
    }
}
isAppend = false
const outputChunks2B: string[][] = []
const outputChunks2A: string[][] = []
for (let i = 0; i < outputChunks2.length; i++) {
    let chunk = outputChunks2[i]
    if (chunk.indexOf('.') == 0) {
        break;
    } else {
        outputChunks2B.push(chunk)
    }
}
for (let i = 0; i < outputChunks2.length; i++) {
    let chunk = outputChunks2[i]
    if (chunk.indexOf('.') == 0) {
        isAppend = true
        continue;
    } else if (isAppend) {
        outputChunks2A.push(chunk)
    }
}
</script>

<template>
    <div class="flex justify-center my-2">
        <!-- Integral -->
        <div class="flex flex-col items-end w-fit">
            <!-- Line -->
            <div class="flex">
                <template v-for="(chunks, index) in inputChunksB" :key="index">
                    <template v-for="(chunk, index2) in chunks" :key="index2">
                        <div v-if="chunk != '.'" class="flex flex-col items-center">
                            <NumberBox :number="chunk" input="true" />
                            <div class="flex">
                                <div class="h-10 border-l">&nbsp;</div>
                            </div>
                            <div class="flex">
                                <div class="size-10 border-0 border-t border-l">&nbsp;</div>
                                <div class="size-10 border-0 border-t" v-for="n in count" :key="n">&nbsp;</div>
                                <div class="size-10 border-0 border-t border-r">&nbsp;</div>
                            </div>
                        </div>
                    </template>
                </template>
            </div>
            <!-- Numbers -->
            <div class="flex">
                <template v-for="(chunk, index) in outputChunks3B.flat()" :key="index">
                    <NumberBox v-if="chunk != '.'" :number="chunk" />
                </template>
            </div>
            <!-- Line -->
            <div class="flex">
                <template v-for="(chunks, index) of outputChunks2B" :key="index">
                    <template v-for="(chunk, index2) of chunks" :key="index2">
                        <div v-if="chunk != '.'" class="flex flex-col items-center">
                            <div class="flex">
                                <div class="size-10 border-0 border-b border-l">&nbsp;</div>
                                <div class="size-10 border-0 border-b" v-for="n in count2" :key="n">&nbsp;</div>
                                <div class="size-10 border-0 border-b border-r">&nbsp;</div>
                            </div>
                            <div class="flex">
                                <div class="h-10 border-l">&nbsp;</div>
                            </div>
                            <NumberBox :number="chunk" result="true" />
                        </div>
                    </template>
                </template>
            </div>
        </div>

        <div class="flex flex-col justify-between mx-4" v-if="inputChunksA.length > 0">

            <div class="">
                &#9679;
            </div>
            <div class="">
                &#9679;
            </div>
            <div class="">
                &#9679;
            </div>
        </div>

        <!-- Fractional -->
        <div class="flex flex-col items-start w-fit">
            <!-- Line -->
            <div class="flex">
                <template v-for="(chunks, index) in inputChunksA" :key="index">
                    <template v-for="(chunk, index2) in chunks" :key="index2">
                        <div v-if="chunk != '.'" class="flex flex-col items-center">
                            <NumberBox :number="chunk" input="true" />
                            <div class="flex">
                                <div class="h-10 border-l">&nbsp;</div>
                            </div>
                            <div class="flex">
                                <div class="size-10 border-0 border-t border-l">&nbsp;</div>
                                <div class="size-10 border-0 border-t" v-for="n in count" :key="n">&nbsp;</div>
                                <div class="size-10 border-0 border-t border-r">&nbsp;</div>
                            </div>
                        </div>
                    </template>
                </template>
            </div>
            <!-- Numbers -->
            <div class="flex">
                <template v-for="(chunk, index) in outputChunks3A.flat()" :key="index">
                    <NumberBox v-if="chunk != '.'" :number="chunk" />
                </template>
            </div>
            <!-- Line -->
            <div class="flex">
                <template v-for="(chunks, index) of outputChunks2A" :key="index">
                    <template v-for="(chunk, index2) of chunks" :key="index2">
                        <div v-if="chunk != '.'" class="flex flex-col items-center">
                            <div class="flex">
                                <div class="size-10 border-0 border-b border-l">&nbsp;</div>
                                <div class="size-10 border-0 border-b" v-for="n in count2" :key="n">&nbsp;</div>
                                <div class="size-10 border-0 border-b border-r">&nbsp;</div>
                            </div>
                            <div class="flex">
                                <div class="h-10 border-l">&nbsp;</div>
                            </div>
                            <NumberBox :number="chunk" result="true" />
                        </div>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>