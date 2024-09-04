export class BuySub {
	public readonly submarineAmount: number;
	public readonly color: number;
	public readonly colorAmount: number;
	public readonly flag: number;
	public readonly flagAmount: number;
	public readonly antiAircraftAmount: number;
	public readonly missileStation: number;
	public readonly missileStationAmount: number;
	public readonly sonar: number;
	public readonly sonarAmount: number;
	public readonly weaponWorkshop: number;
	public readonly weaponWorkshopAmount: number;
	public readonly iavisa: number;
	public readonly avisaPoolAmount: number;
	public readonly iseasparrow: number;
	public readonly seasparrowPoolAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 128) {
			throw new Error('Invalid view size');
		}
		this.submarineAmount = view.getInt32(0, true);
		this.color = view.getInt32(8, true);
		this.colorAmount = view.getInt32(16, true);
		this.flag = view.getInt32(24, true);
		this.flagAmount = view.getInt32(32, true);
		this.antiAircraftAmount = view.getInt32(40, true);
		this.missileStation = view.getInt32(48, true);
		this.missileStationAmount = view.getInt32(56, true);
		this.sonar = view.getInt32(64, true);
		this.sonarAmount = view.getInt32(72, true);
		this.weaponWorkshop = view.getInt32(80, true);
		this.weaponWorkshopAmount = view.getInt32(88, true);
		this.iavisa = view.getInt32(96, true);
		this.avisaPoolAmount = view.getInt32(104, true);
		this.iseasparrow = view.getInt32(112, true);
		this.seasparrowPoolAmount = view.getInt32(120, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(128));
	}
}