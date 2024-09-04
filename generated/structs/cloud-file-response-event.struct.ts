export class CloudFileResponseEvent {
	public readonly requestId: number;
	public readonly wasSuccessful: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.requestId = view.getInt32(0, true);
		this.wasSuccessful = view.getInt8(8) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}