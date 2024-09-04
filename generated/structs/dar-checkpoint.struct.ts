export class DarCheckpoint {
	public readonly startLocation: number;
	public readonly checkpoint1Complete: number;
	public readonly timeTakenToCompleteCheckpoint1: number;
	public readonly checkpoint2Complete: number;
	public readonly timeTakenToCompleteCheckpoint2: number;
	public readonly checkpoint3Complete: number;
	public readonly timeTakenToCompleteCheckpoint3: number;
	public readonly checkpoint4Complete: number;
	public readonly timeTakenToCompleteCheckpoint4: number;
	public readonly endLocation: number;
	public readonly darAcquired: number;
	public readonly totalTimeSpent: number;
	public readonly cashEarned: number;
	public readonly rPEarned: number;
	public readonly replay: number;
	public readonly failedReason: number;
	public readonly rockstarAccountIndicator: number;

	constructor(view: DataView) {
		if (view.byteLength !== 136) {
			throw new Error('Invalid view size');
		}
		this.startLocation = view.getInt32(0, true);
		this.checkpoint1Complete = view.getInt32(8, true);
		this.timeTakenToCompleteCheckpoint1 = view.getInt32(16, true);
		this.checkpoint2Complete = view.getInt32(24, true);
		this.timeTakenToCompleteCheckpoint2 = view.getInt32(32, true);
		this.checkpoint3Complete = view.getInt32(40, true);
		this.timeTakenToCompleteCheckpoint3 = view.getInt32(48, true);
		this.checkpoint4Complete = view.getInt32(56, true);
		this.timeTakenToCompleteCheckpoint4 = view.getInt32(64, true);
		this.endLocation = view.getInt32(72, true);
		this.darAcquired = view.getInt32(80, true);
		this.totalTimeSpent = view.getInt32(88, true);
		this.cashEarned = view.getInt32(96, true);
		this.rPEarned = view.getInt32(104, true);
		this.replay = view.getInt32(112, true);
		this.failedReason = view.getInt32(120, true);
		this.rockstarAccountIndicator = view.getInt32(128, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(136));
	}
}