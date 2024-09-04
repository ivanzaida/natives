import { ESessionType } from "../enums";

export class SummonEvents {
	public readonly gameMode: number;
	public readonly sessionType: ESessionType;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.gameMode = view.getInt32(0, true);
		this.sessionType = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}