import { GamerHandle } from "./gamer-handle.struct";
import { EGamerStatus } from "../enums";

export class NetworkGetGamerStatusResultStruct {
	public readonly gamer: GamerHandle;
	public readonly nStatus: EGamerStatus;

	constructor(view: DataView) {
		if (view.byteLength !== 112) {
			throw new Error('Invalid view size');
		}
		this.gamer = new GamerHandle(new DataView(view.buffer.slice(0, 104)));
		this.nStatus = view.getInt32(104, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(112));
	}
}