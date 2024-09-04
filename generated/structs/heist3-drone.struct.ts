export class Heist3Drone {
	public readonly missionName: number;
	public readonly playthroughId: number;
	public readonly endReason: number;
	public readonly time: number;
	public readonly totalDroneTases: number;
	public readonly totalDroneTranq: number;
	public readonly nano: boolean;
	public readonly cpCollected: number;
	public readonly targetsKilled: number;

	constructor(view: DataView) {
		if (view.byteLength !== 72) {
			throw new Error('Invalid view size');
		}
		this.missionName = view.getInt32(0, true);
		this.playthroughId = view.getInt32(8, true);
		this.endReason = view.getInt32(16, true);
		this.time = view.getInt32(24, true);
		this.totalDroneTases = view.getInt32(32, true);
		this.totalDroneTranq = view.getInt32(40, true);
		this.nano = view.getInt8(48) === 1;
		this.cpCollected = view.getInt32(56, true);
		this.targetsKilled = view.getInt32(64, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(72));
	}
}