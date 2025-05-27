<script setup lang="ts">
const props = defineProps({
    input: {
        default: '',
    },
    input2: {
        default: '',
    },
    operation: {
        default: ''
    },
    base: {
        default: 16
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
const isShift = extractNumberAndLetter(props.shift)
let result = 0;
let output = "";
let input = parseInt(props.input, props.base).toString(2).padStart(8, '0');
let input2 = props.input2 != "" ? parseInt(props.input2, props.base).toString(2).padStart(8, '0') : "";
const operation = props.operation
const mask = props.mask
const shift = props.shift
switch (props.operation) {
    case 'NOT':
        let iNOT = parseInt(props.input, props.base)
        result = (~iNOT) & 0xFF
        break;
    case 'AND':
    case 'UNSETTING':
        let iAND = parseInt(props.input, props.base)
        let i2AND = parseInt(props.input2, props.base)
        result = iAND & i2AND
        break;
    case 'OR':
    case 'SETTING':
        let iOR = parseInt(props.input, props.base)
        let i2OR = parseInt(props.input2, props.base)
        result = iOR | i2OR
        break;
    case 'XOR':
    case 'FLIPPING':
        let iXOR = parseInt(props.input, props.base)
        let i2XOR = parseInt(props.input2, props.base)
        result = iXOR ^ i2XOR
        break;
    case 'SHIFTING':
        if (isShift.valid) {
            let iShift = parseInt(props.input, props.base)
            console.log(isShift)
            if (isShift.letter === 'L') {
                result = (iShift << isShift.number) & 0xFF;
            } else {
                result = (iShift >> isShift.number) & 0xFF;
            }
            // console.log(result, props.operation)
        }
        break;
    default: break;
}
output = result.toString(2).padStart(8, '0')
// console.log(output)
</script>
<template>
    <BitPatternOperation :input="input" :input2="input2" :output="output" :operation="operation" :mask="mask"
        :shift="shift" />
</template>