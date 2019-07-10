import { setBitValueAt, setBitValueRange, formatBitFlow } from '@network/helpers'
import { BIT_ONE, BIT_ZERO } from '@network/helpers/constants'

interface MACAddressConstructor {
    isMultiCast: boolean,
    isLocal: boolean,
    vendorId: BitFlow,
    deviceId: BitFlow
}

export default class MACAddress {
    private _bits: BitFlow = new Array<Bit>(48)

    constructor({
        isMultiCast,
        isLocal,
        vendorId,
        deviceId
    }: MACAddressConstructor) {
        this.setAddressType(isMultiCast)
        this.setAddressScope(isLocal)
        this.setVendorId(vendorId)
        this.setDeviceId(deviceId)
    }

    public setAddressType(isMultiCast: boolean) {
        // 0: Single Cast, 1: Multi Cast
        setBitValueAt(1, isMultiCast ? BIT_ONE : BIT_ZERO, this._bits)
    }

    public setAddressScope(isLocal: boolean) {
        // 0: Global Address, 1: Local Address
        setBitValueAt(2, isLocal ? BIT_ONE : BIT_ZERO, this._bits)
    }

    public setVendorId(vendorId: BitFlow) {
        setBitValueRange(3, 24, vendorId, this._bits)
    }

    public setDeviceId(deviceId: BitFlow) {
        setBitValueRange(25, 48, deviceId, this._bits)
    }

    public showAddress() {
        return formatBitFlow(this._bits)
    }
}