export class Inventory {
	public readonly action: number;
	public readonly reason: number;
	public readonly crewId: number;
	public readonly location: number;
	public readonly shopType: number;
	public readonly itemCategory: number;
	public readonly itemHash: number;
	public readonly itemDelta: number;
	public readonly purchaseId: number;
	public readonly takeAll: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 80) {
			throw new Error('Invalid view size');
		}
		this.action = view.getInt32(0, true);
		this.reason = view.getInt32(8, true);
		this.crewId = view.getInt32(16, true);
		this.location = view.getInt32(24, true);
		this.shopType = view.getInt32(32, true);
		this.itemCategory = view.getInt32(40, true);
		this.itemHash = view.getInt32(48, true);
		this.itemDelta = view.getInt32(56, true);
		this.purchaseId = view.getInt32(64, true);
		this.takeAll = view.getInt8(72) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(80));
	}
}