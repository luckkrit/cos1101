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
        if (str.split('.').length == 2) {

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
        }
        return results.flat();
    } else {

        const results = splitIntoChunksFromRight(str, chunkSize);
        if (props.from == 2) {
            if (results.length == 1) {

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


</script>

<template>
    <div class="flex flex-col items-end w-fit">
        <!-- Line -->
        <div class="flex">
            <div class="flex flex-col items-center">
                <NumberBox number="1" />
                <div class="flex">
                    <div class="h-10 border-l">&nbsp;</div>
                </div>
                <div class="flex">
                    <div class="size-10 border-0 border-t border-l">&nbsp;</div>
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
                    <div class="size-10 border-0 border-t border-r">&nbsp;</div>
                </div>
            </div>
        </div>
        <!-- Numbers -->
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
        <!-- Line -->
        <div class="flex">
            <div class="flex flex-col items-center">
                <div class="flex">
                    <div class="size-10 border-0 border-b border-l">&nbsp;</div>
                    <div class="size-10 border-0 border-b">&nbsp;</div>
                    <div class="size-10 border-0 border-b">&nbsp;</div>
                    <div class="size-10 border-0 border-b border-r">&nbsp;</div>
                </div>
                <div class="flex">
                    <div class="h-10 border-l">&nbsp;</div>
                </div>
                <NumberBox number="1" />
            </div>
            <div class="flex flex-col items-center">
                <div class="flex">
                    <div class="size-10 border-0 border-b border-l">&nbsp;</div>
                    <div class="size-10 border-0 border-b">&nbsp;</div>
                    <div class="size-10 border-0 border-b">&nbsp;</div>
                    <div class="size-10 border-0 border-b border-r">&nbsp;</div>
                </div>
                <div class="flex">
                    <div class="h-10 border-l">&nbsp;</div>
                </div>
                <NumberBox number="1" />
            </div>
        </div>
    </div>
</template>