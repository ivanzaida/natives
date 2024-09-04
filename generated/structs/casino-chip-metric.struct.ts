export class CasinoChipMetric {
	public readonly action: number;
	public readonly transactionId: number;
	public readonly cashAmount: number;
	public readonly chipsAmount: number;
	public readonly reason: number;
	public readonly cashBalance: number;
	public readonly chipBalance: number;
	public readonly item: number;

	constructor(view: DataView) {
		if (view.byteLength !== 64) {
			throw new Error('Invalid view size');
		}
		this.action = view.getInt32(0, true);
		this.transactionId = view.getInt32(8, true);
		this.cashAmount = view.getInt32(16, true);
		this.chipsAmount = view.getInt32(24, true);
		this.reason = view.getInt32(32, true);
		this.cashBalance = view.getInt32(40, true);
		this.chipBalance = view.getInt32(48, true);
		this.item = view.getInt32(56, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(64));
	}
}