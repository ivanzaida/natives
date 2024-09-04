import { getStringFromDataView } from "../predef";
import { GamerHandle } from "./gamer-handle.struct";

export class ConnectionRequestEvent {
	public readonly gamerTag: string;
	public readonly gamer: GamerHandle;

	constructor(view: DataView) {
		if (view.byteLength !== 136) {
			throw new Error('Invalid view size');
		}
		this.gamerTag = getStringFromDataView(view, 0, 31);
		this.gamer = new GamerHandle(new DataView(view.buffer.slice(32, 136)));
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(136));
	}
}