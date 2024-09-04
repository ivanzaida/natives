import { GamerHandle } from "./gamer-handle.struct";
import { getStringFromDataView } from "../predef";

export class GamerInfo {
	public readonly handle: GamerHandle;
	public readonly name: string;

	constructor(view: DataView) {
		if (view.byteLength !== 168) {
			throw new Error('Invalid view size');
		}
		this.handle = new GamerHandle(new DataView(view.buffer.slice(0, 104)));
		this.name = getStringFromDataView(view, 104, 167);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(168));
	}
}