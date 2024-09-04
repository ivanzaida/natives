export class HeistPrepEnded {
	public readonly missionId: number;
	public readonly missionTypeId: number;
	public readonly matchId1: number;
	public readonly matchId2: number;
	public readonly bossId1: number;
	public readonly bossId2: number;
	public readonly playerParticipated: number;
	public readonly playerRole: number;
	public readonly timeStart: number;
	public readonly timeEnd: number;
	public readonly won: number;
	public readonly endingReason: number;
	public readonly cashEarned: number;
	public readonly rpEarned: number;
	public readonly targetsKilled: number;
	public readonly innocentsKilled: number;
	public readonly deaths: number;
	public readonly launcherRank: number;
	public readonly timeTakenToComplete: number;
	public readonly playersLeftInProgress: number;
	public readonly location: number;
	public readonly invitesSent: number;
	public readonly invitesAccepted: number;
	public readonly heistSessionId: number;
	public readonly ownBase: number;
	public readonly ownCannon: number;
	public readonly ownSecurityRoom: number;
	public readonly ownLounge: number;
	public readonly ownLivingQuarters: number;
	public readonly ownTiltRotor: number;
	public readonly orbitalCannonShots: number;
	public readonly orbitalCannonKills: number;
	public readonly assasinationLevel1Calls: number;
	public readonly assasinationLevel2Calls: number;
	public readonly assasinationLevel3Calls: number;
	public readonly prepCompletionType: number;
	public readonly timeSpentHacking: number;
	public readonly failedStealth: number;
	public readonly quickRestart: number;
	public readonly starterBossId1: number;
	public readonly starterBossId2: number;
	public readonly sessionId: number;
	public readonly bossType: number;
	public readonly attackType: number;
	public readonly timeTakenForObjective: number;
	public readonly entitiesStolen: number;

	constructor(view: DataView) {
		if (view.byteLength !== 368) {
			throw new Error('Invalid view size');
		}
		this.missionId = view.getInt32(0, true);
		this.missionTypeId = view.getInt32(8, true);
		this.matchId1 = view.getInt32(16, true);
		this.matchId2 = view.getInt32(24, true);
		this.bossId1 = view.getInt32(32, true);
		this.bossId2 = view.getInt32(40, true);
		this.playerParticipated = view.getInt32(48, true);
		this.playerRole = view.getInt32(56, true);
		this.timeStart = view.getInt32(64, true);
		this.timeEnd = view.getInt32(72, true);
		this.won = view.getInt32(80, true);
		this.endingReason = view.getInt32(88, true);
		this.cashEarned = view.getInt32(96, true);
		this.rpEarned = view.getInt32(104, true);
		this.targetsKilled = view.getInt32(112, true);
		this.innocentsKilled = view.getInt32(120, true);
		this.deaths = view.getInt32(128, true);
		this.launcherRank = view.getInt32(136, true);
		this.timeTakenToComplete = view.getInt32(144, true);
		this.playersLeftInProgress = view.getInt32(152, true);
		this.location = view.getInt32(160, true);
		this.invitesSent = view.getInt32(168, true);
		this.invitesAccepted = view.getInt32(176, true);
		this.heistSessionId = view.getInt32(184, true);
		this.ownBase = view.getInt32(192, true);
		this.ownCannon = view.getInt32(200, true);
		this.ownSecurityRoom = view.getInt32(208, true);
		this.ownLounge = view.getInt32(216, true);
		this.ownLivingQuarters = view.getInt32(224, true);
		this.ownTiltRotor = view.getInt32(232, true);
		this.orbitalCannonShots = view.getInt32(240, true);
		this.orbitalCannonKills = view.getInt32(248, true);
		this.assasinationLevel1Calls = view.getInt32(256, true);
		this.assasinationLevel2Calls = view.getInt32(264, true);
		this.assasinationLevel3Calls = view.getInt32(272, true);
		this.prepCompletionType = view.getInt32(280, true);
		this.timeSpentHacking = view.getInt32(288, true);
		this.failedStealth = view.getInt32(296, true);
		this.quickRestart = view.getInt32(304, true);
		this.starterBossId1 = view.getInt32(312, true);
		this.starterBossId2 = view.getInt32(320, true);
		this.sessionId = view.getInt32(328, true);
		this.bossType = view.getInt32(336, true);
		this.attackType = view.getInt32(344, true);
		this.timeTakenForObjective = view.getInt32(352, true);
		this.entitiesStolen = view.getInt32(360, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(368));
	}
}