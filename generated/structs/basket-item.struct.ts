export class BasketItem {
	public readonly catalogKey: number;
	public readonly extraInventoryKey: number;
	public readonly price: number;
	public readonly statvalue: number;

	constructor(view: DataView) {
		if (view.byteLength !== 32) {
			throw new Error('Invalid view size');
		}
		this.catalogKey = view.getInt32(0, true);
		this.extraInventoryKey = view.getInt32(8, true);
		this.price = view.getInt32(16, true);
		this.statvalue = view.getInt32(24, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(32));
	}
}