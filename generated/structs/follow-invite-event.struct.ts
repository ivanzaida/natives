import { GamerHandle } from "./gamer-handle.struct";

export class FollowInviteEvent {
	public readonly inviter: GamerHandle;

	constructor(view: DataView) {
		if (view.byteLength !== 104) {
			throw new Error('Invalid view size');
		}
		this.inviter = new GamerHandle(new DataView(view.buffer.slice(0, 104)));
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(104));
	}
}