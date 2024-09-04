import { EBailReason } from "../enums";

export class BailEvent {
	public readonly nBailReason: EBailReason;
	public readonly bailErrorCode: number;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.nBailReason = view.getInt32(0, true);
		this.bailErrorCode = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}