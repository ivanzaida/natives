export class ContrabandMission {
	public readonly bossId1: number;
	public readonly bossId2: number;
	public readonly matchId1: number;
	public readonly matchId2: number;
	public readonly playerParticipated: number;
	public readonly timeStart: number;
	public readonly timeEnd: number;
	public readonly won: number;
	public readonly endingReason: number;
	public readonly cashEarned: number;
	public readonly rpEarned: number;
	public readonly location: number;
	public readonly type: number;
	public readonly subtype: number;
	public readonly warehouseOwned: number;
	public readonly warehouseOwnedCount: number;
	public readonly failureReason: number;
	public readonly missionId: number;

	constructor(view: DataView) {
		if (view.byteLength !== 144) {
			throw new Error('Invalid view size');
		}
		this.bossId1 = view.getInt32(0, true);
		this.bossId2 = view.getInt32(8, true);
		this.matchId1 = view.getInt32(16, true);
		this.matchId2 = view.getInt32(24, true);
		this.playerParticipated = view.getInt32(32, true);
		this.timeStart = view.getInt32(40, true);
		this.timeEnd = view.getInt32(48, true);
		this.won = view.getInt32(56, true);
		this.endingReason = view.getInt32(64, true);
		this.cashEarned = view.getInt32(72, true);
		this.rpEarned = view.getInt32(80, true);
		this.location = view.getInt32(88, true);
		this.type = view.getInt32(96, true);
		this.subtype = view.getInt32(104, true);
		this.warehouseOwned = view.getInt32(112, true);
		this.warehouseOwnedCount = view.getInt32(120, true);
		this.failureReason = view.getInt32(128, true);
		this.missionId = view.getInt32(136, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(144));
	}
}