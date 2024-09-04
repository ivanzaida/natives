export class YachtEnded {
	public readonly bossId1: number;
	public readonly bossId2: number;
	public readonly matchId1: number;
	public readonly matchId2: number;
	public readonly missionId: number;
	public readonly missionTypeId: number;
	public readonly isboss: number;
	public readonly bosstype: number;
	public readonly playerrole: number;
	public readonly playerParticipated: number;
	public readonly won: number;
	public readonly launchMethod: number;
	public readonly endingReason: number;
	public readonly cashEarned: number;
	public readonly rpEarned: number;
	public readonly bossKilled: number;
	public readonly goonsKilled: number;
	public readonly yachtLocation: number;
	public readonly targetskilled: number;
	public readonly timetakentocomplete: number;
	public readonly playersleftinprogress: number;
	public readonly waterBombs: number;
	public readonly lockOn: number;

	constructor(view: DataView) {
		if (view.byteLength !== 184) {
			throw new Error('Invalid view size');
		}
		this.bossId1 = view.getInt32(0, true);
		this.bossId2 = view.getInt32(8, true);
		this.matchId1 = view.getInt32(16, true);
		this.matchId2 = view.getInt32(24, true);
		this.missionId = view.getInt32(32, true);
		this.missionTypeId = view.getInt32(40, true);
		this.isboss = view.getInt32(48, true);
		this.bosstype = view.getInt32(56, true);
		this.playerrole = view.getInt32(64, true);
		this.playerParticipated = view.getInt32(72, true);
		this.won = view.getInt32(80, true);
		this.launchMethod = view.getInt32(88, true);
		this.endingReason = view.getInt32(96, true);
		this.cashEarned = view.getInt32(104, true);
		this.rpEarned = view.getInt32(112, true);
		this.bossKilled = view.getInt32(120, true);
		this.goonsKilled = view.getInt32(128, true);
		this.yachtLocation = view.getInt32(136, true);
		this.targetskilled = view.getInt32(144, true);
		this.timetakentocomplete = view.getInt32(152, true);
		this.playersleftinprogress = view.getInt32(160, true);
		this.waterBombs = view.getInt32(168, true);
		this.lockOn = view.getInt32(176, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(184));
	}
}