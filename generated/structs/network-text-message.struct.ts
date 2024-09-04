import { getStringFromDataView } from "../predef";
import { GamerHandle } from "./gamer-handle.struct";

export class NetworkTextMessage {
	public readonly textMessage: string;
	public readonly fromGamer: GamerHandle;

	constructor(view: DataView) {
		if (view.byteLength !== 168) {
			throw new Error('Invalid view size');
		}
		this.textMessage = getStringFromDataView(view, 0, 63);
		this.fromGamer = new GamerHandle(new DataView(view.buffer.slice(64, 168)));
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(168));
	}
}