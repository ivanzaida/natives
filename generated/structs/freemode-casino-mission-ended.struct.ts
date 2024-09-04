export class FreemodeCasinoMissionEnded {
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
	public readonly bossKilled: number;
	public readonly goonsKilled: number;
	public readonly missionVariation: number;
	public readonly launchMethod: number;
	public readonly ownPenthouse: number;
	public readonly ownGarage: number;
	public readonly ownOffice: number;
	public readonly houseChipsEarned: number;

	constructor(view: DataView) {
		if (view.byteLength !== 248) {
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
		this.bossKilled = view.getInt32(184, true);
		this.goonsKilled = view.getInt32(192, true);
		this.missionVariation = view.getInt32(200, true);
		this.launchMethod = view.getInt32(208, true);
		this.ownPenthouse = view.getInt32(216, true);
		this.ownGarage = view.getInt32(224, true);
		this.ownOffice = view.getInt32(232, true);
		this.houseChipsEarned = view.getInt32(240, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(248));
	}
}