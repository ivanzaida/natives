export class SpentOnTiltrotor {
	public readonly aircraft: number;
	public readonly aircraftAmount: number;
	public readonly interiortint: number;
	public readonly interiortintAmount: number;
	public readonly turret: number;
	public readonly turretAmount: number;
	public readonly weaponworkshop: number;
	public readonly weaponworkshopAmount: number;
	public readonly vehicleworkshop: number;
	public readonly vehicleworkshopAmount: number;
	public readonly countermeasures: number;
	public readonly countermeasuresAmount: number;
	public readonly bombs: number;
	public readonly bombsAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 112) {
			throw new Error('Invalid view size');
		}
		this.aircraft = view.getInt32(0, true);
		this.aircraftAmount = view.getInt32(8, true);
		this.interiortint = view.getInt32(16, true);
		this.interiortintAmount = view.getInt32(24, true);
		this.turret = view.getInt32(32, true);
		this.turretAmount = view.getInt32(40, true);
		this.weaponworkshop = view.getInt32(48, true);
		this.weaponworkshopAmount = view.getInt32(56, true);
		this.vehicleworkshop = view.getInt32(64, true);
		this.vehicleworkshopAmount = view.getInt32(72, true);
		this.countermeasures = view.getInt32(80, true);
		this.countermeasuresAmount = view.getInt32(88, true);
		this.bombs = view.getInt32(96, true);
		this.bombsAmount = view.getInt32(104, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(112));
	}
}