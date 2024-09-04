export class NetworkRosChanged {
	public readonly validCredentials: boolean;
	public readonly validRockstarId: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.validCredentials = view.getInt8(0) === 1;
		this.validRockstarId = view.getInt8(8) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}