export class NetworkGameStructure {
	public readonly options: number[];

	constructor(view: DataView) {
		if (view.byteLength !== 80) {
			throw new Error('Invalid view size');
		}
		this.options = [view.getInt32(0, true), view.getInt32(8, true), view.getInt32(16, true), view.getInt32(24, true), view.getInt32(32, true), view.getInt32(40, true), view.getInt32(48, true), view.getInt32(56, true), view.getInt32(64, true), view.getInt32(72, true)];
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(80));
	}
}