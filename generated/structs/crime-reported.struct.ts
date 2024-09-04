import { ECrimeType } from "../enums";

export class CrimeReported {
	public readonly changedWantedLevel: boolean;
	public readonly crimeType: ECrimeType;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.changedWantedLevel = view.getInt8(0) === 1;
		this.crimeType = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}