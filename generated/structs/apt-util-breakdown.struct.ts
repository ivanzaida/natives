export class AptUtilBreakdown {
	public readonly lowAptFees: number;
	public readonly medAptFees: number;
	public readonly highAptFees: number;
	public readonly yachtFees: number;
	public readonly facilityFees: number;
	public readonly penthouseFees: number;
	public readonly kosatkaFees: number;
	public readonly cleanerFees: number;

	constructor(view: DataView) {
		if (view.byteLength !== 64) {
			throw new Error('Invalid view size');
		}
		this.lowAptFees = view.getInt32(0, true);
		this.medAptFees = view.getInt32(8, true);
		this.highAptFees = view.getInt32(16, true);
		this.yachtFees = view.getInt32(24, true);
		this.facilityFees = view.getInt32(32, true);
		this.penthouseFees = view.getInt32(40, true);
		this.kosatkaFees = view.getInt32(48, true);
		this.cleanerFees = view.getInt32(56, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(64));
	}
}