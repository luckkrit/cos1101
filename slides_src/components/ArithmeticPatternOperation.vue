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
    shift: {
        default: ''
    }
})
function toTwosComplementBinary(num: number, bits = 8) {
    if (num >= 0) {
        return num.toString(2).padStart(bits, '0');
    } else {
        // สำหรับจำนวนลบ: เพิ่ม 2^bits เพื่อได้ Two's Complement
        return (Math.pow(2, bits) + num).toString(2);
    }
}

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
let result = 0;
let output = "";
const { number, letter, valid } = extractNumberAndLetter(props.shift)
const inputs = props.input.split('')
switch (props.operation) {
    case "ARITHMETIC":
        if (letter === 'L' && valid) {
            let iL = parseInt(props.input, props.base)
            iL = (iL << 24) >> 24 // force 32bit sign to 8bit sign
            result = iL << number;
            // ตรวจสอบ overflow
            let overflow = result < -128 || result > 127;

            if (overflow) {
                // console.warn("Overflow detected! Result may be invalid.");
                // Truncate ให้อยู่ในช่วง 8-bit
                result = ((result % 256) + 256) % 256;
                if (result > 127) result -= 256;
            }
            output = toTwosComplementBinary(result, 8)
            // console.log(output)
            // output = output.padEnd(8, "0")
        } else if (valid && letter === 'R') {
            let iR = parseInt(props.input, props.base)
            iR = (iR << 24) >> 24 // force 32bit sign to 8bit sign
            result = iR >> number;
            output = toTwosComplementBinary(result, 8)
        }
        break;
    default: break;
}
const outputs = output.split('')
</script>

<template>

    <div class="flex justify-center items-center my-3">
        <div class="flex gap-10">
            <div class="flex flex-col justify-center">
                <div class="flex items-center font-bold text-xl h-10">
                    {{ letter === 'L' ? 'Arithmetic Left' : 'Arithmetic Right' }}
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex">
                    <template v-if="letter === 'R'" v-for="(n, index) of inputs" :key="index">
                        <div class="size-10 flex justify-center items-center bg-amber-700 text-white"
                            v-if="index < number">
                            {{ n }}
                        </div>
                        <div v-if="index >= number && (outputs.length - index) > number"
                            class="size-10 flex justify-center items-center ">
                            {{ n }}
                        </div>
                        <div v-if="(outputs.length - index) <= number"
                            class="size-10 flex justify-center items-center text-red-500">
                            {{ n }}
                        </div>
                    </template>
                    <template v-if="letter === 'L'" v-for="(n, index) of inputs" :key="index">
                        <div v-if="index < number" class="size-10 flex justify-center items-center text-red-500">
                            {{ n }}
                        </div>
                        <div v-if="index >= number" class="size-10 flex justify-center items-center">
                            {{ n }}
                        </div>
                    </template>
                </div>
                <div class="flex bg-slate-400 border-t-2 border-black dark:border-white">
                    <template v-if="letter === 'R'" v-for="(n, index) of outputs" :key="index">
                        <div class="size-10 flex justify-center items-center bg-amber-700 text-white"
                            v-if="index === 0">
                            {{ n }}
                        </div>
                        <div class="size-10 flex justify-center items-center bg-amber-700 text-white"
                            v-if="index > 0 && index <= number">
                            {{ n }}
                        </div>
                        <div v-if="index > number" class="size-10 flex justify-center items-center ">
                            {{ n }}
                        </div>
                    </template>
                    <template v-if="letter === 'L'" v-for="(n, index) of outputs" :key="index">
                        <div v-if="index + number < outputs.length" class="size-10 flex justify-center items-center ">
                            {{ n }}
                        </div>
                        <div v-if="(outputs.length - index) <= number"
                            class="size-10 flex justify-center items-center bg-amber-700 text-white">
                            {{ n }}
                        </div>
                    </template>

                </div>
            </div>
            <div class="flex flex-col items-center justify-evenly">
                <div>Original</div>
                <div>After Shift</div>
            </div>
        </div>
    </div>
</template>