import { BIT_ONE } from "./constants";

/**
 * Set bit value for a bit sequence, the index starts with 1 (not zero)
 */
export function setBitValueAt(index: number, value: boolean, bits: BitFlow) {
    if (index < 1) {
        return
    }
    bits[index - 1] = value
}

export function setBitValueRange(
    from: number,
    to: number,
    bitsToSet: BitFlow,
    bits: BitFlow
) {
    if (from < 1 || to > bits.length) {
        return
    }
    const lenOfBitsToSet = bitsToSet.length
    for (let i = to, j = lenOfBitsToSet; i >= from && j > 0; i--, j--) {
        bits[i - 1] = bitsToSet[j - 1]
    }
}

export function formatBitFlow(bitflow: BitFlow) {
    let accumulator = ''
    for (let i = 0; i < bitflow.length; ++i) {
        accumulator += bitflow[i] === BIT_ONE ? '1' : '0'
        if ((i + 1) % 8 === 0) {
            accumulator += ' '
        }
    }
    return `<${accumulator.trim()}>`
}