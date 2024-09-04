import { GamerHandle } from "./gamer-handle.struct";
import { ParameterData } from "./parameter-data.struct";

export class TransitionParameterEvent {
	public readonly gamer: GamerHandle;
	public readonly numberParams: number;
	public readonly nParameterData: ParameterData[];

	constructor(view: DataView) {
		if (view.byteLength !== 272) {
			throw new Error('Invalid view size');
		}
		this.gamer = new GamerHandle(new DataView(view.buffer.slice(0, 104)));
		this.numberParams = view.getInt32(104, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(272));
	}
}