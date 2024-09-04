export class StatHash {
	public readonly statHash: number;

	constructor(view: DataView) {
		if (view.byteLength !== 8) {
			throw new Error('Invalid view size');
		}
		this.statHash = view.getInt32(0, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(8));
	}
}