export class MapNav {
	public readonly tUBlips: number;
	public readonly cloudMissBlips: number;
	public readonly seriesBlips: number;
	public readonly collectBlips: number;
	public readonly rank: number;
	public readonly leftBy: number;
	public readonly waypoint: number;

	constructor(view: DataView) {
		if (view.byteLength !== 56) {
			throw new Error('Invalid view size');
		}
		this.tUBlips = view.getInt32(0, true);
		this.cloudMissBlips = view.getInt32(8, true);
		this.seriesBlips = view.getInt32(16, true);
		this.collectBlips = view.getInt32(24, true);
		this.rank = view.getInt32(32, true);
		this.leftBy = view.getInt32(40, true);
		this.waypoint = view.getInt32(48, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(56));
	}
}