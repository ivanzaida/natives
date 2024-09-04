export class JobLtsInfo {
	public readonly roundsset: number;
	public readonly roundsplayed: number;
	public readonly cash: number;
	public readonly betCash: number;
	public readonly cashStart: number;
	public readonly cashEnd: number;
	public readonly missionLaunch: number;
	public readonly m_1stHashMac: number;
	public readonly m_1stPosixTime: number;
	public readonly xp: number;
	public readonly highestKillStreak: number;
	public readonly kills: number;
	public readonly deaths: number;
	public readonly suicides: number;
	public readonly rank: number;
	public readonly crewId: number;
	public readonly betWon: number;
	public readonly teamId: number;
	public readonly matchResult: number;
	public readonly jpEarned: number;
	public readonly playlistId: number;
	public readonly celebrationanim: number;
	public readonly quickplayanim: number;
	public readonly ishead2head: boolean;
	public readonly isPlaylistChallenge: boolean;
	public readonly jobVisibilitySetInCorona: boolean;
	public readonly weaponsfixed: boolean;
	public readonly sessionVisible: boolean;
	public readonly leftInProgress: boolean;
	public readonly playlistHashMac: number;
	public readonly playlistPosixTime: number;
	public readonly outfitStyle: number;
	public readonly outfitChoiceType: number;

	constructor(view: DataView) {
		if (view.byteLength !== 264) {
			throw new Error('Invalid view size');
		}
		this.roundsset = view.getInt32(0, true);
		this.roundsplayed = view.getInt32(8, true);
		this.cash = view.getInt32(16, true);
		this.betCash = view.getInt32(24, true);
		this.cashStart = view.getInt32(32, true);
		this.cashEnd = view.getInt32(40, true);
		this.missionLaunch = view.getInt32(48, true);
		this.m_1stHashMac = view.getInt32(56, true);
		this.m_1stPosixTime = view.getInt32(64, true);
		this.xp = view.getInt32(72, true);
		this.highestKillStreak = view.getInt32(80, true);
		this.kills = view.getInt32(88, true);
		this.deaths = view.getInt32(96, true);
		this.suicides = view.getInt32(104, true);
		this.rank = view.getInt32(112, true);
		this.crewId = view.getInt32(120, true);
		this.betWon = view.getInt32(128, true);
		this.teamId = view.getInt32(136, true);
		this.matchResult = view.getInt32(144, true);
		this.jpEarned = view.getInt32(152, true);
		this.playlistId = view.getInt32(160, true);
		this.celebrationanim = view.getInt32(168, true);
		this.quickplayanim = view.getInt32(176, true);
		this.ishead2head = view.getInt8(184) === 1;
		this.isPlaylistChallenge = view.getInt8(192) === 1;
		this.jobVisibilitySetInCorona = view.getInt8(200) === 1;
		this.weaponsfixed = view.getInt8(208) === 1;
		this.sessionVisible = view.getInt8(216) === 1;
		this.leftInProgress = view.getInt8(224) === 1;
		this.playlistHashMac = view.getInt32(232, true);
		this.playlistPosixTime = view.getInt32(240, true);
		this.outfitStyle = view.getInt32(248, true);
		this.outfitChoiceType = view.getInt32(256, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(264));
	}
}