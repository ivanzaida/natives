import { EBgScriptTypes } from "../enums";

export class LaunchData {
	public readonly id: number;
	public readonly scriptType: EBgScriptTypes;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.id = view.getInt32(0, true);
		this.scriptType = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}