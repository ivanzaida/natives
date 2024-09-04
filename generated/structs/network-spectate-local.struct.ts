import { GamerHandle } from "./gamer-handle.struct";

export class NetworkSpectateLocal {
	public readonly gamer: GamerHandle;

	constructor(view: DataView) {
		if (view.byteLength !== 104) {
			throw new Error('Invalid view size');
		}
		this.gamer = new GamerHandle(new DataView(view.buffer.slice(0, 104)));
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(104));
	}
}