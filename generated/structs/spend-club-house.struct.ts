export class SpendClubHouse {
	public readonly propertyId: number;
	public readonly propertyIdAmount: number;
	public readonly muralType: number;
	public readonly muralTypeAmount: number;
	public readonly wallStyle: number;
	public readonly wallStyleAmount: number;
	public readonly wallHangingStyle: number;
	public readonly wallHangingStyleAmount: number;
	public readonly furnitureStyle: number;
	public readonly furnitureStyleAmount: number;
	public readonly emblem: number;
	public readonly emblemAmount: number;
	public readonly gunLocker: number;
	public readonly gunLockerAmount: number;
	public readonly modShop: number;
	public readonly modShopAmount: number;
	public readonly signage: number;
	public readonly signageAmount: number;
	public readonly font: number;
	public readonly fontAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 160) {
			throw new Error('Invalid view size');
		}
		this.propertyId = view.getInt32(0, true);
		this.propertyIdAmount = view.getInt32(8, true);
		this.muralType = view.getInt32(16, true);
		this.muralTypeAmount = view.getInt32(24, true);
		this.wallStyle = view.getInt32(32, true);
		this.wallStyleAmount = view.getInt32(40, true);
		this.wallHangingStyle = view.getInt32(48, true);
		this.wallHangingStyleAmount = view.getInt32(56, true);
		this.furnitureStyle = view.getInt32(64, true);
		this.furnitureStyleAmount = view.getInt32(72, true);
		this.emblem = view.getInt32(80, true);
		this.emblemAmount = view.getInt32(88, true);
		this.gunLocker = view.getInt32(96, true);
		this.gunLockerAmount = view.getInt32(104, true);
		this.modShop = view.getInt32(112, true);
		this.modShopAmount = view.getInt32(120, true);
		this.signage = view.getInt32(128, true);
		this.signageAmount = view.getInt32(136, true);
		this.font = view.getInt32(144, true);
		this.fontAmount = view.getInt32(152, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(160));
	}
}