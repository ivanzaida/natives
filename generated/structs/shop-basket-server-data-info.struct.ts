export class ShopBasketServerDataInfo {
	public readonly cashUpdateReceived: boolean;
	public readonly bankCashDifference: number;
	public readonly walletCashDifference: number;
	public readonly inventoryReceived: boolean;
	public readonly numItems: number;

	constructor(view: DataView) {
		if (view.byteLength !== 40) {
			throw new Error('Invalid view size');
		}
		this.cashUpdateReceived = view.getInt8(0) === 1;
		this.bankCashDifference = view.getInt32(8, true);
		this.walletCashDifference = view.getInt32(16, true);
		this.inventoryReceived = view.getInt8(24) === 1;
		this.numItems = view.getInt32(32, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(40));
	}
}