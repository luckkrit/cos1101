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


const inputChunks = splitIntoChunks(props.input, 8, props.chunkFrom)
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

// got base 2 then convert to base 16
const input2 = outputChunks.flat().join('')
const inputChunks2: string[][] = splitIntoChunks(input2, 2, 4)
const outputChunks2: string[][] = []
inputChunks2.forEach((chunk) => {
    if (chunk.join('') !== '.') {

        let convert = parseInt(chunk.join(''), 2).toString(16).toUpperCase()
        outputChunks2.push([...convert])
    } else {
        outputChunks2.push(chunk)
    }
})

const input3 = outputChunks2.flat().join('')
console.log(input3)
// got base 16 then convert to base 2
const inputChunks3: string[][] = splitIntoChunks(input3, 16, 1)
const outputChunks3: string[][] = []
inputChunks3.forEach((chunk) => {
    if (chunk.join('') !== '.') {

        let convert = parseInt(chunk.join(''), 16).toString(2)
        if (convert.length < 4) {
            const l = 4 - convert.length
            for (let i = 0; i < l; i++) {
                convert = '0' + convert;
            }
        }
        outputChunks3.push([...convert])
    } else {
        outputChunks3.push(chunk)
    }
})

// outputChunks.forEach((chunk) => {
//     if (chunk.join('') !== '.') {
//         if (chunk.length < 4) {
//             const l = 4 - chunk.length
//             for (let i = 0; i < l; i++) {
//                 chunk = '0' + chunk;
//             }
//         }
//         outputChunks2.push([...convert])
//     } else {
//         outputChunks2.push(chunk)
//     }
// })
// console.log(outputChunks2.flat().join())

</script>

<template>
</template>