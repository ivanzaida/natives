import { ENetScMembershipEventType } from "../enums";
import { NetScMembershipInfo } from "./net-sc-membership-info.struct";

export class NetScMembershipStatusEventData {
	public readonly eventType: ENetScMembershipEventType;
	public readonly membershipInfo: NetScMembershipInfo;
	public readonly prevInfo: NetScMembershipInfo;

	constructor(view: DataView) {
		if (view.byteLength !== 56) {
			throw new Error('Invalid view size');
		}
		this.eventType = view.getInt32(0, true);
		this.membershipInfo = new NetScMembershipInfo(new DataView(view.buffer.slice(8, 32)));
		this.prevInfo = new NetScMembershipInfo(new DataView(view.buffer.slice(32, 56)));
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(56));
	}
}