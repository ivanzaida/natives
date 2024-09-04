import { EConnectionResponseTypes } from "../enums";
import { GamerHandle } from "./gamer-handle.struct";

export class ConnectionResponseEvent {
	public readonly nResponse: EConnectionResponseTypes;
	public readonly reponseCode: number;
	public readonly gamer: GamerHandle;

	constructor(view: DataView) {
		if (view.byteLength !== 120) {
			throw new Error('Invalid view size');
		}
		this.nResponse = view.getInt32(0, true);
		this.reponseCode = view.getInt32(8, true);
		this.gamer = new GamerHandle(new DataView(view.buffer.slice(16, 120)));
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(120));
	}
}