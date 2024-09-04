import { EEndReason } from "../enums";

export class SessionEndEvent {
	public readonly nEndReason: EEndReason;

	constructor(view: DataView) {
		if (view.byteLength !== 8) {
			throw new Error('Invalid view size');
		}
		this.nEndReason = view.getInt32(0, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(8));
	}
}