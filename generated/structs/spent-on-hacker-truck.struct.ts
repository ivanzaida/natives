export class SpentOnHackerTruck {
	public readonly truck: number;
	public readonly truckAmount: number;
	public readonly tint: number;
	public readonly tintAmount: number;
	public readonly pattern: number;
	public readonly patternAmount: number;
	public readonly missileLauncher: number;
	public readonly missileLauncherAmount: number;
	public readonly droneStation: number;
	public readonly droneStationAmount: number;
	public readonly weaponWorkshop: number;
	public readonly weaponWorkshopAmount: number;
	public readonly bike: number;
	public readonly bikeAmount: number;
	public readonly bikeWorkshop: number;
	public readonly bikeWorkshopAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 128) {
			throw new Error('Invalid view size');
		}
		this.truck = view.getInt32(0, true);
		this.truckAmount = view.getInt32(8, true);
		this.tint = view.getInt32(16, true);
		this.tintAmount = view.getInt32(24, true);
		this.pattern = view.getInt32(32, true);
		this.patternAmount = view.getInt32(40, true);
		this.missileLauncher = view.getInt32(48, true);
		this.missileLauncherAmount = view.getInt32(56, true);
		this.droneStation = view.getInt32(64, true);
		this.droneStationAmount = view.getInt32(72, true);
		this.weaponWorkshop = view.getInt32(80, true);
		this.weaponWorkshopAmount = view.getInt32(88, true);
		this.bike = view.getInt32(96, true);
		this.bikeAmount = view.getInt32(104, true);
		this.bikeWorkshop = view.getInt32(112, true);
		this.bikeWorkshopAmount = view.getInt32(120, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(128));
	}
}