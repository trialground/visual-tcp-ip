import MAC from '../network/dataframe/MAC'
import { BIT_ONE, BIT_ZERO } from '@network/helpers/constants';

const mac = new MAC({ isMultiCast: true, isLocal: true, vendorId: [BIT_ONE, BIT_ZERO, BIT_ONE], deviceId: [BIT_ONE] })

console.log(mac.showAddress())