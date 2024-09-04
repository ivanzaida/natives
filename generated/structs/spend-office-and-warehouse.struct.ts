export class SpendOfficeAndWarehouse {
	public readonly location: number;
	public readonly locationAmount: number;
	public readonly style: number;
	public readonly styleAmount: number;
	public readonly paGender: number;
	public readonly paGenderAmount: number;
	public readonly signage: number;
	public readonly signageAmount: number;
	public readonly gunLocker: number;
	public readonly gunLockerAmount: number;
	public readonly vault: number;
	public readonly vaultAmount: number;
	public readonly personalQuarters: number;
	public readonly personalQuartersAmount: number;
	public readonly warehouseSize: number;
	public readonly warehouseSizeAmount: number;
	public readonly smallWarehouses: number;
	public readonly mediumWarehouses: number;
	public readonly largeWarehouses: number;
	public readonly modShop: number;
	public readonly modShopAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 168) {
			throw new Error('Invalid view size');
		}
		this.location = view.getInt32(0, true);
		this.locationAmount = view.getInt32(8, true);
		this.style = view.getInt32(16, true);
		this.styleAmount = view.getInt32(24, true);
		this.paGender = view.getInt32(32, true);
		this.paGenderAmount = view.getInt32(40, true);
		this.signage = view.getInt32(48, true);
		this.signageAmount = view.getInt32(56, true);
		this.gunLocker = view.getInt32(64, true);
		this.gunLockerAmount = view.getInt32(72, true);
		this.vault = view.getInt32(80, true);
		this.vaultAmount = view.getInt32(88, true);
		this.personalQuarters = view.getInt32(96, true);
		this.personalQuartersAmount = view.getInt32(104, true);
		this.warehouseSize = view.getInt32(112, true);
		this.warehouseSizeAmount = view.getInt32(120, true);
		this.smallWarehouses = view.getInt32(128, true);
		this.mediumWarehouses = view.getInt32(136, true);
		this.largeWarehouses = view.getInt32(144, true);
		this.modShop = view.getInt32(152, true);
		this.modShopAmount = view.getInt32(160, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(168));
	}
}