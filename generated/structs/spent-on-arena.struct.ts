export class SpentOnArena {
	public readonly location: number;
	public readonly locationAmount: number;
	public readonly style: number;
	public readonly styleAmount: number;
	public readonly graphics: number;
	public readonly graphicsAmount: number;
	public readonly colour: number;
	public readonly colourAmount: number;
	public readonly floor: number;
	public readonly floorAmount: number;
	public readonly mechanic: number;
	public readonly mechanicAmount: number;
	public readonly personalQuarters: number;
	public readonly personalQuartersAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 112) {
			throw new Error('Invalid view size');
		}
		this.location = view.getInt32(0, true);
		this.locationAmount = view.getInt32(8, true);
		this.style = view.getInt32(16, true);
		this.styleAmount = view.getInt32(24, true);
		this.graphics = view.getInt32(32, true);
		this.graphicsAmount = view.getInt32(40, true);
		this.colour = view.getInt32(48, true);
		this.colourAmount = view.getInt32(56, true);
		this.floor = view.getInt32(64, true);
		this.floorAmount = view.getInt32(72, true);
		this.mechanic = view.getInt32(80, true);
		this.mechanicAmount = view.getInt32(88, true);
		this.personalQuarters = view.getInt32(96, true);
		this.personalQuartersAmount = view.getInt32(104, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(112));
	}
}