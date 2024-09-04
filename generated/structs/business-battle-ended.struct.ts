export class BusinessBattleEnded {
	public readonly missionId: number;
	public readonly missionTypeId: number;
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
	public readonly bossKilled: number;
	public readonly goonsKilled: number;
	public readonly targetLocation: number;
	public readonly launchedByBoss: number;
	public readonly starterBossId1: number;
	public readonly starterBossId2: number;
	public readonly playerrole: number;
	public readonly targetskilled: number;
	public readonly timetakentocomplete: number;
	public readonly playersleftinprogress: number;
	public readonly bosstype: number;
	public readonly attacktype: number;
	public readonly packagesstolen: number;
	public readonly participationLevel: number;
	public readonly entitiesstolentype: number;
	public readonly ownnightclub: boolean;
	public readonly objectivelocation: number;
	public readonly deliverylocation: number;
	public readonly collectiontype: number;
	public readonly enemytype: number;
	public readonly enemyvehicle: number;
	public readonly eventitem: number;
	public readonly iscop: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 288) {
			throw new Error('Invalid view size');
		}
		this.missionId = view.getInt32(0, true);
		this.missionTypeId = view.getInt32(8, true);
		this.bossId1 = view.getInt32(16, true);
		this.bossId2 = view.getInt32(24, true);
		this.matchId1 = view.getInt32(32, true);
		this.matchId2 = view.getInt32(40, true);
		this.playerParticipated = view.getInt32(48, true);
		this.timeStart = view.getInt32(56, true);
		this.timeEnd = view.getInt32(64, true);
		this.won = view.getInt32(72, true);
		this.endingReason = view.getInt32(80, true);
		this.cashEarned = view.getInt32(88, true);
		this.rpEarned = view.getInt32(96, true);
		this.bossKilled = view.getInt32(104, true);
		this.goonsKilled = view.getInt32(112, true);
		this.targetLocation = view.getInt32(120, true);
		this.launchedByBoss = view.getInt32(128, true);
		this.starterBossId1 = view.getInt32(136, true);
		this.starterBossId2 = view.getInt32(144, true);
		this.playerrole = view.getInt32(152, true);
		this.targetskilled = view.getInt32(160, true);
		this.timetakentocomplete = view.getInt32(168, true);
		this.playersleftinprogress = view.getInt32(176, true);
		this.bosstype = view.getInt32(184, true);
		this.attacktype = view.getInt32(192, true);
		this.packagesstolen = view.getInt32(200, true);
		this.participationLevel = view.getInt32(208, true);
		this.entitiesstolentype = view.getInt32(216, true);
		this.ownnightclub = view.getInt8(224) === 1;
		this.objectivelocation = view.getInt32(232, true);
		this.deliverylocation = view.getInt32(240, true);
		this.collectiontype = view.getInt32(248, true);
		this.enemytype = view.getInt32(256, true);
		this.enemyvehicle = view.getInt32(264, true);
		this.eventitem = view.getInt32(272, true);
		this.iscop = view.getInt8(280) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(288));
	}
}