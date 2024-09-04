export class NetworkRequestDelay {
	public readonly delayTimeMs: number;

	constructor(view: DataView) {
		if (view.byteLength !== 8) {
			throw new Error('Invalid view size');
		}
		this.delayTimeMs = view.getInt32(0, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(8));
	}
}