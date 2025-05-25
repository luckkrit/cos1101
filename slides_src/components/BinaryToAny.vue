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
function splitIntoChunks(str: string, chunkSize = 3): string[][] {
    const results: string[][][] = []
    if (str.includes('.')) {
        const integral = str.split('.')[0]
        const fractional = str.split('.')[1]
        results.push(splitIntoChunksFromRight(integral, chunkSize))
        results.push(splitIntoChunksFromLeft(fractional, chunkSize))
        if (props.from == 2) {

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


const inputChunks = splitIntoChunks(props.input, props.chunkFrom)
const outputChunks: string[][] = []

inputChunks.forEach((chunk) => {
    if (chunk.join('') !== '.') {

        let convert = parseInt(chunk.join(''), props.from).toString(props.to).toUpperCase()
        if (props.to == 2) {
            if (convert.length < props.chunkTo) {
                const l = props.chunkTo - convert.length
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

// console.log(inputChunks, outputChunks)
</script>
<template>
    <div class="flex justify-center gap-3 my-3 h-24">
        <div class="flex flex-col justify-evenly">
            <div class="h-6 flex items-center">
                <template v-if="props.from == 2">Binary</template>
                <template v-if="props.from == 16">Hexadecimal</template>
                <template v-if="props.from == 8">Octal</template>
            </div>
            <div class="h-4 flex items-center">&nbsp;</div>
            <div class="h-6 flex items-center">
                <template v-if="props.to == 2">Binary</template>
                <template v-if="props.to == 16">Hexadecimal</template>
                <template v-if="props.to == 8">Octal</template>
            </div>
        </div>
        <template v-for="(chunks, index) in inputChunks" :key="index">
            <div class="flex flex-col items-center">
                <div class="flex">
                    <template v-for="(chunk, index2) in chunks" :key="index2">
                        <NumberBox :number="chunk" v-if="chunk != '.'" isSmall="true" />
                        <div class="flex items-center h-6" v-if="chunk == '.'">&#9679;</div>
                    </template>
                </div>
                <span class="text-3xl" v-if="chunks.join() !== '.'">&darr;</span>
                <span class="text-3xl" v-if="chunks.join() === '.'">&nbsp;</span>
                <div class="flex">
                    <template v-if="index < outputChunks.length">
                        <template v-for="(chunk, index2) of outputChunks[index]" :key="index2">
                            <NumberBox v-if="chunk !== '.'" :number="chunk" result="true" isSmall="true" />
                            <div class="flex items-center h-6" v-if="chunk == '.'">&#9679;</div>
                        </template>
                    </template>
                </div>
            </div>
        </template>
    </div>
</template>