import { GamerHandle } from "./gamer-handle.struct";
import { EInviteStatus } from "../enums";
import { getStringFromDataView } from "../predef";

export class PresenceInviteReplyEvent {
	public readonly inviter: GamerHandle;
	public readonly nInviteStatus: EInviteStatus;
	public readonly characterRank: number;
	public readonly clanTag: string;
	public readonly decisionMade: boolean;
	public readonly decision: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 152) {
			throw new Error('Invalid view size');
		}
		this.inviter = new GamerHandle(new DataView(view.buffer.slice(0, 104)));
		this.nInviteStatus = view.getInt32(104, true);
		this.characterRank = view.getInt32(112, true);
		this.clanTag = getStringFromDataView(view, 120, 135);
		this.decisionMade = view.getInt8(136) === 1;
		this.decision = view.getInt8(144) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(152));
	}
}