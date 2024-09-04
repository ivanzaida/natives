export class CasinoStoryMissionEnded {
	public readonly matchCreator: number;
	public readonly sessionType: number;
	public readonly playlistId: number;
	public readonly kills: number;
	public readonly deaths: number;
	public readonly cash: number;
	public readonly cashStart: number;
	public readonly cashEnd: number;
	public readonly missionLaunch: number;
	public readonly difficulty: number;
	public readonly firstPerson: number;
	public readonly medal: number;
	public readonly teamLivesUsed: number;
	public readonly failureReason: number;
	public readonly usedQuickRestart: number;
	public readonly isHost: boolean;
	public readonly isSessionVisible: boolean;
	public readonly leftInProgress: boolean;
	public readonly spookedCops: boolean;
	public readonly playingTime: number;
	public readonly xp: number;
	public readonly suicides: number;
	public readonly rank: number;
	public readonly crewId: number;
	public readonly result: number;
	public readonly jobPoints: number;
	public readonly usedVoiceChat: boolean;
	public readonly heistSessionId: number;
	public readonly closedJob: boolean;
	public readonly privateJob: boolean;
	public readonly fromClosedFreemode: boolean;
	public readonly fromPrivateFreemode: boolean;
	public readonly bossUuid: number;
	public readonly bossUuid2: number;
	public readonly bossType: number;
	public readonly failedStealth: number;
	public readonly missionId: number;
	public readonly missionVariation: number;
	public readonly ownPenthouse: boolean;
	public readonly ownGarage: boolean;
	public readonly ownOffice: boolean;
	public readonly houseChipsEarned: number;
	public readonly restartPoint: number;
	public readonly launchedByPlayer: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 352) {
			throw new Error('Invalid view size');
		}
		this.matchCreator = view.getInt32(0, true);
		this.sessionType = view.getInt32(8, true);
		this.playlistId = view.getInt32(16, true);
		this.kills = view.getInt32(24, true);
		this.deaths = view.getInt32(32, true);
		this.cash = view.getInt32(40, true);
		this.cashStart = view.getInt32(48, true);
		this.cashEnd = view.getInt32(56, true);
		this.missionLaunch = view.getInt32(64, true);
		this.difficulty = view.getInt32(72, true);
		this.firstPerson = view.getInt32(80, true);
		this.medal = view.getInt32(88, true);
		this.teamLivesUsed = view.getInt32(96, true);
		this.failureReason = view.getInt32(104, true);
		this.usedQuickRestart = view.getInt32(112, true);
		this.isHost = view.getInt8(120) === 1;
		this.isSessionVisible = view.getInt8(128) === 1;
		this.leftInProgress = view.getInt8(136) === 1;
		this.spookedCops = view.getInt8(144) === 1;
		this.playingTime = view.getInt32(152, true);
		this.xp = view.getInt32(160, true);
		this.suicides = view.getInt32(168, true);
		this.rank = view.getInt32(176, true);
		this.crewId = view.getInt32(184, true);
		this.result = view.getInt32(192, true);
		this.jobPoints = view.getInt32(200, true);
		this.usedVoiceChat = view.getInt8(208) === 1;
		this.heistSessionId = view.getInt32(216, true);
		this.closedJob = view.getInt8(224) === 1;
		this.privateJob = view.getInt8(232) === 1;
		this.fromClosedFreemode = view.getInt8(240) === 1;
		this.fromPrivateFreemode = view.getInt8(248) === 1;
		this.bossUuid = view.getInt32(256, true);
		this.bossUuid2 = view.getInt32(264, true);
		this.bossType = view.getInt32(272, true);
		this.failedStealth = view.getInt32(280, true);
		this.missionId = view.getInt32(288, true);
		this.missionVariation = view.getInt32(296, true);
		this.ownPenthouse = view.getInt8(304) === 1;
		this.ownGarage = view.getInt8(312) === 1;
		this.ownOffice = view.getInt8(320) === 1;
		this.houseChipsEarned = view.getInt32(328, true);
		this.restartPoint = view.getInt32(336, true);
		this.launchedByPlayer = view.getInt8(344) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(352));
	}
}