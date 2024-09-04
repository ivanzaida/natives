export class DispatchEnded {
	public readonly matchCreator: number;
	public readonly sessionType: number;
	public readonly playlistId: number;
	public readonly launchMethod: number;
	public readonly endingReason: number;
	public readonly timeTakenToComplete: number;
	public readonly targetsKilled: number;
	public readonly cashEarned: number;
	public readonly rpEarned: number;

	constructor(view: DataView) {
		if (view.byteLength !== 72) {
			throw new Error('Invalid view size');
		}
		this.matchCreator = view.getInt32(0, true);
		this.sessionType = view.getInt32(8, true);
		this.playlistId = view.getInt32(16, true);
		this.launchMethod = view.getInt32(24, true);
		this.endingReason = view.getInt32(32, true);
		this.timeTakenToComplete = view.getInt32(40, true);
		this.targetsKilled = view.getInt32(48, true);
		this.cashEarned = view.getInt32(56, true);
		this.rpEarned = view.getInt32(64, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(72));
	}
}