export class BuyAgency {
	public readonly location: number;
	public readonly locationAmount: number;
	public readonly style: number;
	public readonly styleAmount: number;
	public readonly wallpaper: number;
	public readonly wallpaperAmount: number;
	public readonly tint: number;
	public readonly tintAmount: number;
	public readonly personalQuarter: number;
	public readonly personalQuarterAmount: number;
	public readonly weaponWorkshop: number;
	public readonly weaponWorkshopAmount: number;
	public readonly vehicleWorkshop: number;
	public readonly vehicleWorkshopAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 112) {
			throw new Error('Invalid view size');
		}
		this.location = view.getInt32(0, true);
		this.locationAmount = view.getInt32(8, true);
		this.style = view.getInt32(16, true);
		this.styleAmount = view.getInt32(24, true);
		this.wallpaper = view.getInt32(32, true);
		this.wallpaperAmount = view.getInt32(40, true);
		this.tint = view.getInt32(48, true);
		this.tintAmount = view.getInt32(56, true);
		this.personalQuarter = view.getInt32(64, true);
		this.personalQuarterAmount = view.getInt32(72, true);
		this.weaponWorkshop = view.getInt32(80, true);
		this.weaponWorkshopAmount = view.getInt32(88, true);
		this.vehicleWorkshop = view.getInt32(96, true);
		this.vehicleWorkshopAmount = view.getInt32(104, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(112));
	}
}