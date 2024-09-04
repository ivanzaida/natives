export class BuyAutoshop {
	public readonly location: number;
	public readonly locationAmount: number;
	public readonly style: number;
	public readonly styleAmount: number;
	public readonly tint: number;
	public readonly tintAmount: number;
	public readonly emblem: number;
	public readonly emblemAmount: number;
	public readonly crewName: number;
	public readonly crewNameAmount: number;
	public readonly staff: number;
	public readonly staffAmount: number;
	public readonly lift: number;
	public readonly liftAmount: number;
	public readonly personalQuarter: number;
	public readonly personalQuarterAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 128) {
			throw new Error('Invalid view size');
		}
		this.location = view.getInt32(0, true);
		this.locationAmount = view.getInt32(8, true);
		this.style = view.getInt32(16, true);
		this.styleAmount = view.getInt32(24, true);
		this.tint = view.getInt32(32, true);
		this.tintAmount = view.getInt32(40, true);
		this.emblem = view.getInt32(48, true);
		this.emblemAmount = view.getInt32(56, true);
		this.crewName = view.getInt32(64, true);
		this.crewNameAmount = view.getInt32(72, true);
		this.staff = view.getInt32(80, true);
		this.staffAmount = view.getInt32(88, true);
		this.lift = view.getInt32(96, true);
		this.liftAmount = view.getInt32(104, true);
		this.personalQuarter = view.getInt32(112, true);
		this.personalQuarterAmount = view.getInt32(120, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(128));
	}
}