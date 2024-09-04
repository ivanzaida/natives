export class SpentOnBase {
	public readonly location: number;
	public readonly locationAmount: number;
	public readonly style: number;
	public readonly styleAmount: number;
	public readonly graphics: number;
	public readonly graphicsAmount: number;
	public readonly orbcannon: number;
	public readonly orbcannonAmount: number;
	public readonly secroom: number;
	public readonly secroomAmount: number;
	public readonly lounge: number;
	public readonly loungeAmount: number;
	public readonly livingquarter: number;
	public readonly livingquarterAmount: number;
	public readonly privacyglass: number;
	public readonly privacyglassAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 128) {
			throw new Error('Invalid view size');
		}
		this.location = view.getInt32(0, true);
		this.locationAmount = view.getInt32(8, true);
		this.style = view.getInt32(16, true);
		this.styleAmount = view.getInt32(24, true);
		this.graphics = view.getInt32(32, true);
		this.graphicsAmount = view.getInt32(40, true);
		this.orbcannon = view.getInt32(48, true);
		this.orbcannonAmount = view.getInt32(56, true);
		this.secroom = view.getInt32(64, true);
		this.secroomAmount = view.getInt32(72, true);
		this.lounge = view.getInt32(80, true);
		this.loungeAmount = view.getInt32(88, true);
		this.livingquarter = view.getInt32(96, true);
		this.livingquarterAmount = view.getInt32(104, true);
		this.privacyglass = view.getInt32(112, true);
		this.privacyglassAmount = view.getInt32(120, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(128));
	}
}