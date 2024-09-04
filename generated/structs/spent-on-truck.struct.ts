export class SpentOnTruck {
	public readonly vehicle: number;
	public readonly vehicleAmount: number;
	public readonly trailer: number;
	public readonly trailerAmount: number;
	public readonly slot1: number;
	public readonly slot1Amount: number;
	public readonly slot2: number;
	public readonly slot2Amount: number;
	public readonly slot3: number;
	public readonly slot3Amount: number;
	public readonly colorscheme: number;
	public readonly colorschemeAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 96) {
			throw new Error('Invalid view size');
		}
		this.vehicle = view.getInt32(0, true);
		this.vehicleAmount = view.getInt32(8, true);
		this.trailer = view.getInt32(16, true);
		this.trailerAmount = view.getInt32(24, true);
		this.slot1 = view.getInt32(32, true);
		this.slot1Amount = view.getInt32(40, true);
		this.slot2 = view.getInt32(48, true);
		this.slot2Amount = view.getInt32(56, true);
		this.slot3 = view.getInt32(64, true);
		this.slot3Amount = view.getInt32(72, true);
		this.colorscheme = view.getInt32(80, true);
		this.colorschemeAmount = view.getInt32(88, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(96));
	}
}