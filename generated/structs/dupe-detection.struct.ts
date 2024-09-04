export class DupeDetection {
	public readonly locationBlocked: number;
	public readonly reasonBlocked: number;
	public readonly vehicleModel: number;
	public readonly dupesSold: number;
	public readonly blockedVehicles: number;
	public readonly ownedVehicles: number;
	public readonly garageSpace: number;
	public readonly exploitLevel: number;
	public readonly levelIncrease: number;
	public readonly iFruit: boolean;
	public readonly spareSlot1: number;
	public readonly spareSlot2: number;

	constructor(view: DataView) {
		if (view.byteLength !== 96) {
			throw new Error('Invalid view size');
		}
		this.locationBlocked = view.getInt32(0, true);
		this.reasonBlocked = view.getInt32(8, true);
		this.vehicleModel = view.getInt32(16, true);
		this.dupesSold = view.getInt32(24, true);
		this.blockedVehicles = view.getInt32(32, true);
		this.ownedVehicles = view.getInt32(40, true);
		this.garageSpace = view.getInt32(48, true);
		this.exploitLevel = view.getInt32(56, true);
		this.levelIncrease = view.getInt32(64, true);
		this.iFruit = view.getInt8(72) === 1;
		this.spareSlot1 = view.getInt32(80, true);
		this.spareSlot2 = view.getInt32(88, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(96));
	}
}