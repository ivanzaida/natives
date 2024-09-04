export class SpendHangar {
	public readonly location: number;
	public readonly locationAmount: number;
	public readonly flooring: number;
	public readonly flooringAmount: number;
	public readonly furnitures: number;
	public readonly furnituresAmount: number;
	public readonly workshop: number;
	public readonly workshopAmount: number;
	public readonly style: number;
	public readonly styleAmount: number;
	public readonly lighting: number;
	public readonly lightingAmount: number;
	public readonly livingQuarter: number;
	public readonly livingQuarterAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 112) {
			throw new Error('Invalid view size');
		}
		this.location = view.getInt32(0, true);
		this.locationAmount = view.getInt32(8, true);
		this.flooring = view.getInt32(16, true);
		this.flooringAmount = view.getInt32(24, true);
		this.furnitures = view.getInt32(32, true);
		this.furnituresAmount = view.getInt32(40, true);
		this.workshop = view.getInt32(48, true);
		this.workshopAmount = view.getInt32(56, true);
		this.style = view.getInt32(64, true);
		this.styleAmount = view.getInt32(72, true);
		this.lighting = view.getInt32(80, true);
		this.lightingAmount = view.getInt32(88, true);
		this.livingQuarter = view.getInt32(96, true);
		this.livingQuarterAmount = view.getInt32(104, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(112));
	}
}