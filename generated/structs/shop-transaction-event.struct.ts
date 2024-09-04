export class ShopTransactionEvent {
	public readonly id: number;
	public readonly type: number;
	public readonly resultCode: number;
	public readonly action: number;
	public readonly serviceid: number;
	public readonly bank: number;
	public readonly wallet: number;

	constructor(view: DataView) {
		if (view.byteLength !== 56) {
			throw new Error('Invalid view size');
		}
		this.id = view.getInt32(0, true);
		this.type = view.getInt32(8, true);
		this.resultCode = view.getInt32(16, true);
		this.action = view.getInt32(24, true);
		this.serviceid = view.getInt32(32, true);
		this.bank = view.getInt32(40, true);
		this.wallet = view.getInt32(48, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(56));
	}
}