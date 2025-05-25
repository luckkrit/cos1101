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
        if (from == 2) {
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
})


const chunkFrom = props.from == 8 ? 3 : 4
const chunkTo = props.to == 8 ? 3 : 4
const inputChunks = splitIntoChunks(props.input, props.from, chunkFrom)
let outputChunks: string[][] = []

inputChunks.forEach((chunk) => {
    if (chunk.join('') !== '.') {

        let convert = parseInt(chunk.join(''), props.from).toString(2).toUpperCase()
        if (props.to == 2) {
            if (convert.length < chunkTo) {
                const l = chunkTo - convert.length
                for (let i = 0; i < l; i++) {
                    convert = '0' + convert;
                }
            }
        }
        outputChunks.push([...convert])
    } else {
        outputChunks.push(chunk)
    }
})
console.log("r", outputChunks.flat().join(''))
const outputChunks2: string[][] = []

outputChunks.forEach((chunk) => {
    if (chunk.join('') !== '.') {

        let convert = parseInt(chunk.join(''), 2).toString(2).toUpperCase()
        if (convert.length < chunkTo) {
            const l = chunkTo - convert.length
            for (let i = 0; i < l; i++) {
                convert = '0' + convert;
            }
        }
        outputChunks2.push([...convert])
    } else {
        outputChunks2.push(chunk)
    }
})
const outputS = outputChunks2.flat().join('')
outputChunks = splitIntoChunks(outputS, 2, 4)
// console.log("r", outputChunks)

const base2 = inputChunks
const baseOutput: string[][] = []
const base2Chunks: string[] = outputChunks.flat()
const count = chunkFrom - 2
const count2 = chunkTo - 2
console.log(base2, base2Chunks)
// console.log(inputChunks, base2Chunks, outputChunks, count)

</script>

<template>
    <div class="flex justify-center my-2">
        <div class="flex flex-col items-center w-fit">
            <!-- Line -->
            <div class="flex">
                <template v-for="(chunks, index) in inputChunks" :key="index">
                    <div class="flex flex-col items-center" v-for="(chunk, index2) in chunks" :key="index2">
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
            </div>
            <!-- Numbers -->
            <div class="flex">
                <NumberBox v-for="(chunk, index) in base2Chunks" :key="index" :number="chunk" />
            </div>
            <!-- Line -->
            <div class="flex">
                <template v-for="(chunks, index) of outputChunks" :key="index">
                    <div class="flex flex-col items-center" v-for="(chunk, index2) of chunks" :key="index2">
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
            </div>
        </div>
    </div>
</template>