export class ShopData {
	public readonly name: number;
	public readonly price: number;
	public readonly description: number;

	constructor(view: DataView) {
		if (view.byteLength !== 24) {
			throw new Error('Invalid view size');
		}
		this.name = view.getInt32(0, true);
		this.price = view.getInt32(8, true);
		this.description = view.getInt32(16, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(24));
	}
}