export class DjMissionEnded {
	public readonly missionTypeId: number;
	public readonly missionId: number;
	public readonly matchId: number;
	public readonly bossId1: number;
	public readonly bossId2: number;
	public readonly bosstype: number;
	public readonly playerRole: number;
	public readonly launcherRank: number;
	public readonly location: number;
	public readonly playerParticipated: number;
	public readonly won: boolean;
	public readonly endingReason: number;
	public readonly timeTakenToComplete: number;
	public readonly cashEarned: number;
	public readonly rpEarned: number;
	public readonly chipsEarned: number;
	public readonly itemEarned: number;
	public readonly targetsKilled: number;
	public readonly innocentsKilled: number;
	public readonly deaths: number;
	public readonly bottlesDelivered: number;

	constructor(view: DataView) {
		if (view.byteLength !== 168) {
			throw new Error('Invalid view size');
		}
		this.missionTypeId = view.getInt32(0, true);
		this.missionId = view.getInt32(8, true);
		this.matchId = view.getInt32(16, true);
		this.bossId1 = view.getInt32(24, true);
		this.bossId2 = view.getInt32(32, true);
		this.bosstype = view.getInt32(40, true);
		this.playerRole = view.getInt32(48, true);
		this.launcherRank = view.getInt32(56, true);
		this.location = view.getInt32(64, true);
		this.playerParticipated = view.getInt32(72, true);
		this.won = view.getInt8(80) === 1;
		this.endingReason = view.getInt32(88, true);
		this.timeTakenToComplete = view.getInt32(96, true);
		this.cashEarned = view.getInt32(104, true);
		this.rpEarned = view.getInt32(112, true);
		this.chipsEarned = view.getInt32(120, true);
		this.itemEarned = view.getInt32(128, true);
		this.targetsKilled = view.getInt32(136, true);
		this.innocentsKilled = view.getInt32(144, true);
		this.deaths = view.getInt32(152, true);
		this.bottlesDelivered = view.getInt32(160, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(168));
	}
}