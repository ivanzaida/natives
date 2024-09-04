export class ItemHashArray {
	public readonly hashs: number[];

	constructor(view: DataView) {
		if (view.byteLength !== 64) {
			throw new Error('Invalid view size');
		}
		this.hashs = [view.getInt32(0, true), view.getInt32(8, true), view.getInt32(16, true), view.getInt32(24, true), view.getInt32(32, true), view.getInt32(40, true), view.getInt32(48, true), view.getInt32(56, true)];
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(64));
	}
}