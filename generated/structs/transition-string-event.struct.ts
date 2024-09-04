import { GamerHandle } from "./gamer-handle.struct";
import { getStringFromDataView } from "../predef";

export class TransitionStringEvent {
	public readonly gamer: GamerHandle;
	public readonly parameterId: number;
	public readonly parameter: string;

	constructor(view: DataView) {
		if (view.byteLength !== 144) {
			throw new Error('Invalid view size');
		}
		this.gamer = new GamerHandle(new DataView(view.buffer.slice(0, 104)));
		this.parameterId = view.getInt32(104, true);
		this.parameter = getStringFromDataView(view, 112, 143);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(144));
	}
}