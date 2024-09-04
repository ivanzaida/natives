export class SpentOnBunker {
	public readonly location: number;
	public readonly locationAmount: number;
	public readonly style: number;
	public readonly styleAmount: number;
	public readonly personalquarter: number;
	public readonly personalquarterAmount: number;
	public readonly firingrange: number;
	public readonly firingrangeAmount: number;
	public readonly gunlocker: number;
	public readonly gunlockerAmount: number;
	public readonly caddy: number;
	public readonly caddyAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 96) {
			throw new Error('Invalid view size');
		}
		this.location = view.getInt32(0, true);
		this.locationAmount = view.getInt32(8, true);
		this.style = view.getInt32(16, true);
		this.styleAmount = view.getInt32(24, true);
		this.personalquarter = view.getInt32(32, true);
		this.personalquarterAmount = view.getInt32(40, true);
		this.firingrange = view.getInt32(48, true);
		this.firingrangeAmount = view.getInt32(56, true);
		this.gunlocker = view.getInt32(64, true);
		this.gunlockerAmount = view.getInt32(72, true);
		this.caddy = view.getInt32(80, true);
		this.caddyAmount = view.getInt32(88, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(96));
	}
}