export class SpendOfficeGarage {
	public readonly location: number;
	public readonly locationAmount: number;
	public readonly numbering: number;
	public readonly numberingAmount: number;
	public readonly numberingStyle: number;
	public readonly numberingStyleAmount: number;
	public readonly lighting: number;
	public readonly lightingAmount: number;
	public readonly wall: number;
	public readonly wallAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 80) {
			throw new Error('Invalid view size');
		}
		this.location = view.getInt32(0, true);
		this.locationAmount = view.getInt32(8, true);
		this.numbering = view.getInt32(16, true);
		this.numberingAmount = view.getInt32(24, true);
		this.numberingStyle = view.getInt32(32, true);
		this.numberingStyleAmount = view.getInt32(40, true);
		this.lighting = view.getInt32(48, true);
		this.lightingAmount = view.getInt32(56, true);
		this.wall = view.getInt32(64, true);
		this.wallAmount = view.getInt32(72, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(80));
	}
}