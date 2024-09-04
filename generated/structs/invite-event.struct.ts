import { GamerHandle } from "./gamer-handle.struct";
import { ESessionType, EInviteFlags } from "../enums";

export class InviteEvent {
	public readonly inviter: GamerHandle;
	public readonly gameMode: number;
	public readonly sessionType: ESessionType;
	public readonly isViaParty: boolean;
	public readonly aimType: number;
	public readonly activityType: number;
	public readonly activityId: number;
	public readonly isSctv: boolean;
	public readonly nFlags: EInviteFlags;
	public readonly numBosses: number;

	constructor(view: DataView) {
		if (view.byteLength !== 176) {
			throw new Error('Invalid view size');
		}
		this.inviter = new GamerHandle(new DataView(view.buffer.slice(0, 104)));
		this.gameMode = view.getInt32(104, true);
		this.sessionType = view.getInt32(112, true);
		this.isViaParty = view.getInt8(120) === 1;
		this.aimType = view.getInt32(128, true);
		this.activityType = view.getInt32(136, true);
		this.activityId = view.getInt32(144, true);
		this.isSctv = view.getInt8(152) === 1;
		this.nFlags = view.getInt32(160, true);
		this.numBosses = view.getInt32(168, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(176));
	}
}