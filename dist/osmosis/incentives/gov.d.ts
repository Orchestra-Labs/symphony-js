import { CreateGroup, CreateGroupAmino, CreateGroupSDKType } from './group';
import { BinaryReader, BinaryWriter } from '../../binary';
/**
 * CreateGroupsProposal is a type for creating one or more groups via
 * governance. This is useful for creating groups without having to pay
 * creation fees.
 */
export interface CreateGroupsProposal {
    $typeUrl?: '/osmosis.incentives.CreateGroupsProposal';
    title: string;
    description: string;
    createGroups: CreateGroup[];
}
export interface CreateGroupsProposalProtoMsg {
    typeUrl: '/osmosis.incentives.CreateGroupsProposal';
    value: Uint8Array;
}
/**
 * CreateGroupsProposal is a type for creating one or more groups via
 * governance. This is useful for creating groups without having to pay
 * creation fees.
 */
export interface CreateGroupsProposalAmino {
    title?: string;
    description?: string;
    create_groups?: CreateGroupAmino[];
}
export interface CreateGroupsProposalAminoMsg {
    type: 'osmosis/incentives/create-groups-proposal';
    value: CreateGroupsProposalAmino;
}
/**
 * CreateGroupsProposal is a type for creating one or more groups via
 * governance. This is useful for creating groups without having to pay
 * creation fees.
 */
export interface CreateGroupsProposalSDKType {
    $typeUrl?: '/osmosis.incentives.CreateGroupsProposal';
    title: string;
    description: string;
    create_groups: CreateGroupSDKType[];
}
export declare const CreateGroupsProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is CreateGroupsProposal;
    isSDK(o: any): o is CreateGroupsProposalSDKType;
    isAmino(o: any): o is CreateGroupsProposalAmino;
    encode(message: CreateGroupsProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CreateGroupsProposal;
    fromPartial(object: Partial<CreateGroupsProposal>): CreateGroupsProposal;
    fromAmino(object: CreateGroupsProposalAmino): CreateGroupsProposal;
    toAmino(message: CreateGroupsProposal): CreateGroupsProposalAmino;
    fromAminoMsg(object: CreateGroupsProposalAminoMsg): CreateGroupsProposal;
    toAminoMsg(message: CreateGroupsProposal): CreateGroupsProposalAminoMsg;
    fromProtoMsg(message: CreateGroupsProposalProtoMsg): CreateGroupsProposal;
    toProto(message: CreateGroupsProposal): Uint8Array;
    toProtoMsg(message: CreateGroupsProposal): CreateGroupsProposalProtoMsg;
};
