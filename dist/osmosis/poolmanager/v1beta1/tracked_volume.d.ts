import { Coin, CoinAmino, CoinSDKType } from '../../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../../binary';
export interface TrackedVolume {
    amount: Coin[];
}
export interface TrackedVolumeProtoMsg {
    typeUrl: '/osmosis.poolmanager.v1beta1.TrackedVolume';
    value: Uint8Array;
}
export interface TrackedVolumeAmino {
    amount?: CoinAmino[];
}
export interface TrackedVolumeAminoMsg {
    type: 'osmosis/poolmanager/tracked-volume';
    value: TrackedVolumeAmino;
}
export interface TrackedVolumeSDKType {
    amount: CoinSDKType[];
}
export declare const TrackedVolume: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is TrackedVolume;
    isSDK(o: any): o is TrackedVolumeSDKType;
    isAmino(o: any): o is TrackedVolumeAmino;
    encode(message: TrackedVolume, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TrackedVolume;
    fromPartial(object: Partial<TrackedVolume>): TrackedVolume;
    fromAmino(object: TrackedVolumeAmino): TrackedVolume;
    toAmino(message: TrackedVolume): TrackedVolumeAmino;
    fromAminoMsg(object: TrackedVolumeAminoMsg): TrackedVolume;
    toAminoMsg(message: TrackedVolume): TrackedVolumeAminoMsg;
    fromProtoMsg(message: TrackedVolumeProtoMsg): TrackedVolume;
    toProto(message: TrackedVolume): Uint8Array;
    toProtoMsg(message: TrackedVolume): TrackedVolumeProtoMsg;
};
