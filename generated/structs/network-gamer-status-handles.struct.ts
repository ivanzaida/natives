import { GamerHandle } from "./gamer-handle.struct";

export class NetworkGamerStatusHandles {
	public readonly gamers: GamerHandle[];

	constructor(view: DataView) {
		if (view.byteLength !== 10400) {
			throw new Error('Invalid view size');
		}
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(10400));
	}
}