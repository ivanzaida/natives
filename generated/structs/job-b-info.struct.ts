export class JobBInfo {
	public readonly ishost: boolean;
	public readonly role: number;
	public readonly cashcutpercentage: number;
	public readonly kills: number;
	public readonly deaths: number;
	public readonly clothes: number;
	public readonly cash: number;
	public readonly cashStart: number;
	public readonly cashEnd: number;
	public readonly missionLaunch: number;
	public readonly xp: number;
	public readonly suicides: number;
	public readonly rank: number;
	public readonly crewId: number;
	public readonly teamId: number;
	public readonly matchResult: number;
	public readonly jpEarned: number;
	public readonly celebrationanim: number;
	public readonly quickplayanim: number;
	public readonly sessionVisible: boolean;
	public readonly leftInProgress: boolean;
	public readonly leaderscashcutpercentage: number;
	public readonly lesterCalled: number;
	public readonly heistRootConstentId: number;
	public readonly timePlanningBoard: number;
	public readonly outfitChoiceBy: number;
	public readonly outfitChoiceType: number;
	public readonly outfitStyle: number;
	public readonly difficulty: number;
	public readonly m_1stperson: number;
	public readonly medal: number;
	public readonly teamLivesUsed: number;
	public readonly failureReason: number;
	public readonly failureRole: number;
	public readonly usedQuickRestart: number;
	public readonly usedTripSkip: number;
	public readonly spookedCops: number;
	public readonly cashLost: number;
	public readonly cashPickedUp: number;
	public readonly minigameTimeTaken0: number;
	public readonly minigameNumberOfTimes0: number;
	public readonly minigameTimeTaken1: number;
	public readonly minigameNumberOfTimes1: number;
	public readonly heistSessionHashMac: number;
	public readonly heistSessionIdPosixTime: number;
	public readonly maskChoice: number;

	constructor(view: DataView) {
		if (view.byteLength !== 368) {
			throw new Error('Invalid view size');
		}
		this.ishost = view.getInt8(0) === 1;
		this.role = view.getInt32(8, true);
		this.cashcutpercentage = view.getInt32(16, true);
		this.kills = view.getInt32(24, true);
		this.deaths = view.getInt32(32, true);
		this.clothes = view.getInt32(40, true);
		this.cash = view.getInt32(48, true);
		this.cashStart = view.getInt32(56, true);
		this.cashEnd = view.getInt32(64, true);
		this.missionLaunch = view.getInt32(72, true);
		this.xp = view.getInt32(80, true);
		this.suicides = view.getInt32(88, true);
		this.rank = view.getInt32(96, true);
		this.crewId = view.getInt32(104, true);
		this.teamId = view.getInt32(112, true);
		this.matchResult = view.getInt32(120, true);
		this.jpEarned = view.getInt32(128, true);
		this.celebrationanim = view.getInt32(136, true);
		this.quickplayanim = view.getInt32(144, true);
		this.sessionVisible = view.getInt8(152) === 1;
		this.leftInProgress = view.getInt8(160) === 1;
		this.leaderscashcutpercentage = view.getInt32(168, true);
		this.lesterCalled = view.getInt32(176, true);
		this.heistRootConstentId = view.getInt32(184, true);
		this.timePlanningBoard = view.getInt32(192, true);
		this.outfitChoiceBy = view.getInt32(200, true);
		this.outfitChoiceType = view.getInt32(208, true);
		this.outfitStyle = view.getInt32(216, true);
		this.difficulty = view.getInt32(224, true);
		this.m_1stperson = view.getInt32(232, true);
		this.medal = view.getInt32(240, true);
		this.teamLivesUsed = view.getInt32(248, true);
		this.failureReason = view.getInt32(256, true);
		this.failureRole = view.getInt32(264, true);
		this.usedQuickRestart = view.getInt32(272, true);
		this.usedTripSkip = view.getInt32(280, true);
		this.spookedCops = view.getInt32(288, true);
		this.cashLost = view.getInt32(296, true);
		this.cashPickedUp = view.getInt32(304, true);
		this.minigameTimeTaken0 = view.getInt32(312, true);
		this.minigameNumberOfTimes0 = view.getInt32(320, true);
		this.minigameTimeTaken1 = view.getInt32(328, true);
		this.minigameNumberOfTimes1 = view.getInt32(336, true);
		this.heistSessionHashMac = view.getInt32(344, true);
		this.heistSessionIdPosixTime = view.getInt32(352, true);
		this.maskChoice = view.getInt32(360, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(368));
	}
}