export class NetSignallingInfo {
	public readonly totalMemSize: number;
	public readonly currentMemUsage: number;
	public readonly maxMemUsage: number;

	constructor(view: DataView) {
		if (view.byteLength !== 24) {
			throw new Error('Invalid view size');
		}
		this.totalMemSize = view.getInt32(0, true);
		this.currentMemUsage = view.getInt32(8, true);
		this.maxMemUsage = view.getInt32(16, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(24));
	}
}