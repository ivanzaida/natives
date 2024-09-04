import { GamerHandle } from "./gamer-handle.struct";

export class ToFreemodeGamers {
	public readonly gamers: GamerHandle[];

	constructor(view: DataView) {
		if (view.byteLength !== 3328) {
			throw new Error('Invalid view size');
		}
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(3328));
	}
}