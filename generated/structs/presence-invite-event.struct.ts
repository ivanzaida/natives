import { getStringFromDataView } from "../predef";
import { GamerHandle } from "./gamer-handle.struct";

export class PresenceInviteEvent {
	public readonly inviter: string;
	public readonly gamer: GamerHandle;
	public readonly activityType: number;
	public readonly activityId: number;
	public readonly inviteId: number;
	public readonly scTv: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 200) {
			throw new Error('Invalid view size');
		}
		this.inviter = getStringFromDataView(view, 0, 63);
		this.gamer = new GamerHandle(new DataView(view.buffer.slice(64, 168)));
		this.activityType = view.getInt32(168, true);
		this.activityId = view.getInt32(176, true);
		this.inviteId = view.getInt32(184, true);
		this.scTv = view.getInt8(192) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(200));
	}
}