export class VideoClipMetric {
	public readonly characterHash: number;
	public readonly timeOfDay: number;
	public readonly weather: number;
	public readonly wantedLevel: boolean;
	public readonly pedDensity: number;
	public readonly vehicleDensity: number;
	public readonly restrictedArea: boolean;
	public readonly invulnerability: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 64) {
			throw new Error('Invalid view size');
		}
		this.characterHash = view.getInt32(0, true);
		this.timeOfDay = view.getInt32(8, true);
		this.weather = view.getInt32(16, true);
		this.wantedLevel = view.getInt8(24) === 1;
		this.pedDensity = view.getInt32(32, true);
		this.vehicleDensity = view.getInt32(40, true);
		this.restrictedArea = view.getInt8(48) === 1;
		this.invulnerability = view.getInt8(56) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(64));
	}
}