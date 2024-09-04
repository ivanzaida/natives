export class AmbientJobData {
	public readonly v1: number;
	public readonly v2: number;
	public readonly v3: number;
	public readonly v4: number;

	constructor(view: DataView) {
		if (view.byteLength !== 32) {
			throw new Error('Invalid view size');
		}
		this.v1 = view.getInt32(0, true);
		this.v2 = view.getInt32(8, true);
		this.v3 = view.getInt32(16, true);
		this.v4 = view.getInt32(24, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(32));
	}
}