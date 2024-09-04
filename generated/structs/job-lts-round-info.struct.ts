export class JobLtsRoundInfo {
	public readonly roundNumber: number;
	public readonly roundsplayed: number;
	public readonly cash: number;
	public readonly betCash: number;
	public readonly cashStart: number;
	public readonly cashEnd: number;
	public readonly missionLaunch: number;
	public readonly m_1stHashMac: number;
	public readonly m_1stPosixTime: number;
	public readonly xp: number;
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
	public readonly leftInProgress: boolean;
	public readonly playlistHashMac: number;
	public readonly playlistPosixTime: number;
	public readonly outfitStyle: number;
	public readonly outfitChoiceType: number;

	constructor(view: DataView) {
		if (view.byteLength !== 200) {
			throw new Error('Invalid view size');
		}
		this.roundNumber = view.getInt32(0, true);
		this.roundsplayed = view.getInt32(8, true);
		this.cash = view.getInt32(16, true);
		this.betCash = view.getInt32(24, true);
		this.cashStart = view.getInt32(32, true);
		this.cashEnd = view.getInt32(40, true);
		this.missionLaunch = view.getInt32(48, true);
		this.m_1stHashMac = view.getInt32(56, true);
		this.m_1stPosixTime = view.getInt32(64, true);
		this.xp = view.getInt32(72, true);
		this.kills = view.getInt32(80, true);
		this.deaths = view.getInt32(88, true);
		this.suicides = view.getInt32(96, true);
		this.rank = view.getInt32(104, true);
		this.crewId = view.getInt32(112, true);
		this.betWon = view.getInt32(120, true);
		this.teamId = view.getInt32(128, true);
		this.matchResult = view.getInt32(136, true);
		this.jpEarned = view.getInt32(144, true);
		this.playlistId = view.getInt32(152, true);
		this.leftInProgress = view.getInt8(160) === 1;
		this.playlistHashMac = view.getInt32(168, true);
		this.playlistPosixTime = view.getInt32(176, true);
		this.outfitStyle = view.getInt32(184, true);
		this.outfitChoiceType = view.getInt32(192, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(200));
	}
}