import { ECheatEventTypes } from "../enums";

export class CheatEvent {
	public readonly cheatType: ECheatEventTypes;

	constructor(view: DataView) {
		if (view.byteLength !== 8) {
			throw new Error('Invalid view size');
		}
		this.cheatType = view.getInt32(0, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(8));
	}
}