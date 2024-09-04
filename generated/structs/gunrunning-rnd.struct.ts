export class GunrunningRnd {
	public readonly bossId1: number;
	public readonly bossId2: number;
	public readonly startorEnd: number;
	public readonly upgradeType: number;
	public readonly staffPercentage: number;
	public readonly supplyAmount: number;
	public readonly productionAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 56) {
			throw new Error('Invalid view size');
		}
		this.bossId1 = view.getInt32(0, true);
		this.bossId2 = view.getInt32(8, true);
		this.startorEnd = view.getInt32(16, true);
		this.upgradeType = view.getInt32(24, true);
		this.staffPercentage = view.getInt32(32, true);
		this.supplyAmount = view.getInt32(40, true);
		this.productionAmount = view.getInt32(48, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(56));
	}
}