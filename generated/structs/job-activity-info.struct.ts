export class JobActivityInfo {
	public readonly cash: number;
	public readonly betCash: number;
	public readonly cashStart: number;
	public readonly cashEnd: number;
	public readonly missionLaunch: number;
	public readonly originalHashMac: number;
	public readonly originalPosixTime: number;
	public readonly isTeamDeathmatch: boolean;
	public readonly leftInProgress: boolean;
	public readonly dnf: boolean;
	public readonly aggregateScore: boolean;
	public readonly xp: number;
	public readonly highestKillStreak: number;
	public readonly kills: number;
	public readonly deaths: number;
	public readonly suicides: number;
	public readonly rank: number;
	public readonly crewId: number;
	public readonly vehicleId: number;
	public readonly betWon: number;
	public readonly survivedWave: number;
	public readonly teamId: number;
	public readonly matchType: number;
	public readonly raceType: number;
	public readonly raceSubtype: number;
	public readonly matchResult: number;
	public readonly jpEarned: number;
	public readonly numLaps: number;
	public readonly playlistId: number;
	public readonly celebrationanim: number;
	public readonly quickplayanim: number;
	public readonly stuntLaunchCorona: number;
	public readonly ishead2head: boolean;
	public readonly isPlaylistChallenge: boolean;
	public readonly jobVisibilitySetInCorona: boolean;
	public readonly weaponsfixed: boolean;
	public readonly sessionVisible: boolean;
	public readonly jobDifficulty: number;
	public readonly outfitStyle: number;
	public readonly outfitChoiceType: number;
	public readonly playlistHashMac: number;
	public readonly playlistPosixTime: number;
	public readonly totalPoints: number;
	public readonly largeTargetsHit: number;
	public readonly mediumTargetsHit: number;
	public readonly smallTargetsHit: number;
	public readonly tinyTargetsHit: number;

	constructor(view: DataView) {
		if (view.byteLength !== 376) {
			throw new Error('Invalid view size');
		}
		this.cash = view.getInt32(0, true);
		this.betCash = view.getInt32(8, true);
		this.cashStart = view.getInt32(16, true);
		this.cashEnd = view.getInt32(24, true);
		this.missionLaunch = view.getInt32(32, true);
		this.originalHashMac = view.getInt32(40, true);
		this.originalPosixTime = view.getInt32(48, true);
		this.isTeamDeathmatch = view.getInt8(56) === 1;
		this.leftInProgress = view.getInt8(64) === 1;
		this.dnf = view.getInt8(72) === 1;
		this.aggregateScore = view.getInt8(80) === 1;
		this.xp = view.getInt32(88, true);
		this.highestKillStreak = view.getInt32(96, true);
		this.kills = view.getInt32(104, true);
		this.deaths = view.getInt32(112, true);
		this.suicides = view.getInt32(120, true);
		this.rank = view.getInt32(128, true);
		this.crewId = view.getInt32(136, true);
		this.vehicleId = view.getInt32(144, true);
		this.betWon = view.getInt32(152, true);
		this.survivedWave = view.getInt32(160, true);
		this.teamId = view.getInt32(168, true);
		this.matchType = view.getInt32(176, true);
		this.raceType = view.getInt32(184, true);
		this.raceSubtype = view.getInt32(192, true);
		this.matchResult = view.getInt32(200, true);
		this.jpEarned = view.getInt32(208, true);
		this.numLaps = view.getInt32(216, true);
		this.playlistId = view.getInt32(224, true);
		this.celebrationanim = view.getInt32(232, true);
		this.quickplayanim = view.getInt32(240, true);
		this.stuntLaunchCorona = view.getInt32(248, true);
		this.ishead2head = view.getInt8(256) === 1;
		this.isPlaylistChallenge = view.getInt8(264) === 1;
		this.jobVisibilitySetInCorona = view.getInt8(272) === 1;
		this.weaponsfixed = view.getInt8(280) === 1;
		this.sessionVisible = view.getInt8(288) === 1;
		this.jobDifficulty = view.getInt32(296, true);
		this.outfitStyle = view.getInt32(304, true);
		this.outfitChoiceType = view.getInt32(312, true);
		this.playlistHashMac = view.getInt32(320, true);
		this.playlistPosixTime = view.getInt32(328, true);
		this.totalPoints = view.getInt32(336, true);
		this.largeTargetsHit = view.getInt32(344, true);
		this.mediumTargetsHit = view.getInt32(352, true);
		this.smallTargetsHit = view.getInt32(360, true);
		this.tinyTargetsHit = view.getInt32(368, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(376));
	}
}