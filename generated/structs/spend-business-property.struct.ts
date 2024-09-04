export class SpendBusinessProperty {
	public readonly businessId: number;
	public readonly businessType: number;
	public readonly businessUpgradeType: number;

	constructor(view: DataView) {
		if (view.byteLength !== 24) {
			throw new Error('Invalid view size');
		}
		this.businessId = view.getInt32(0, true);
		this.businessType = view.getInt32(8, true);
		this.businessUpgradeType = view.getInt32(16, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(24));
	}
}