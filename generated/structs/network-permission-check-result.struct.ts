export class NetworkPermissionCheckResult {
	public readonly checkId: number;
	public readonly isAllowed: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.checkId = view.getInt32(0, true);
		this.isAllowed = view.getInt8(8) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}