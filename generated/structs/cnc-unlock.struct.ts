export class CncUnlock {
	public readonly item: number;
	public readonly itemType: number;
	public readonly itemRank: number;
	public readonly itemRole: number;
	public readonly progRank: number;
	public readonly tknSpend: number;
	public readonly tknBalance: number;
	public readonly moneySpend: number;
	public readonly moneyBalance: number;

	constructor(view: DataView) {
		if (view.byteLength !== 72) {
			throw new Error('Invalid view size');
		}
		this.item = view.getInt32(0, true);
		this.itemType = view.getInt32(8, true);
		this.itemRank = view.getInt32(16, true);
		this.itemRole = view.getInt32(24, true);
		this.progRank = view.getInt32(32, true);
		this.tknSpend = view.getInt32(40, true);
		this.tknBalance = view.getInt32(48, true);
		this.moneySpend = view.getInt32(56, true);
		this.moneyBalance = view.getInt32(64, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(72));
	}
}