import { GamerHandle } from "./gamer-handle.struct";

export class AdminInvitedEvent {
	public readonly inviter: GamerHandle;
	public readonly isSctv: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 112) {
			throw new Error('Invalid view size');
		}
		this.inviter = new GamerHandle(new DataView(view.buffer.slice(0, 104)));
		this.isSctv = view.getInt8(104) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(112));
	}
}