export class ArcadeCabinet {
	public readonly gameType: number;
	public readonly matchId: number;
	public readonly numPlayers: number;
	public readonly level: number;
	public readonly powerUps: number;
	public readonly kills: number;
	public readonly timePlayed: number;
	public readonly score: number;
	public readonly reward: number;
	public readonly challenges: number;
	public readonly location: number;

	constructor(view: DataView) {
		if (view.byteLength !== 88) {
			throw new Error('Invalid view size');
		}
		this.gameType = view.getInt32(0, true);
		this.matchId = view.getInt32(8, true);
		this.numPlayers = view.getInt32(16, true);
		this.level = view.getInt32(24, true);
		this.powerUps = view.getInt32(32, true);
		this.kills = view.getInt32(40, true);
		this.timePlayed = view.getInt32(48, true);
		this.score = view.getInt32(56, true);
		this.reward = view.getInt32(64, true);
		this.challenges = view.getInt32(72, true);
		this.location = view.getInt32(80, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(88));
	}
}