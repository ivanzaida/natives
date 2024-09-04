export class ShopVehicleModData {
	public readonly lockHash: number;
	public readonly nameHash: number;
	public readonly cost: number;

	constructor(view: DataView) {
		if (view.byteLength !== 24) {
			throw new Error('Invalid view size');
		}
		this.lockHash = view.getInt32(0, true);
		this.nameHash = view.getInt32(8, true);
		this.cost = view.getInt32(16, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(24));
	}
}