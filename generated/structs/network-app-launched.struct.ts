import { EAppLaunchFlags } from "../enums";

export class NetworkAppLaunched {
	public readonly nFlags: EAppLaunchFlags;

	constructor(view: DataView) {
		if (view.byteLength !== 8) {
			throw new Error('Invalid view size');
		}
		this.nFlags = view.getInt32(0, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(8));
	}
}