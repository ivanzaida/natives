export class BwBossWork {
	public readonly boss1: number;
	public readonly boss2: number;
	public readonly match1: number;
	public readonly match2: number;
	public readonly playerParticipated: number;
	public readonly timeStart: number;
	public readonly timeEnd: number;
	public readonly won: number;
	public readonly endingReason: number;
	public readonly cashEarned: number;
	public readonly rpEarned: number;
	public readonly bossKilled: number;
	public readonly goonsKilled: number;
	public readonly deaths: number;

	constructor(view: DataView) {
		if (view.byteLength !== 112) {
			throw new Error('Invalid view size');
		}
		this.boss1 = view.getInt32(0, true);
		this.boss2 = view.getInt32(8, true);
		this.match1 = view.getInt32(16, true);
		this.match2 = view.getInt32(24, true);
		this.playerParticipated = view.getInt32(32, true);
		this.timeStart = view.getInt32(40, true);
		this.timeEnd = view.getInt32(48, true);
		this.won = view.getInt32(56, true);
		this.endingReason = view.getInt32(64, true);
		this.cashEarned = view.getInt32(72, true);
		this.rpEarned = view.getInt32(80, true);
		this.bossKilled = view.getInt32(88, true);
		this.goonsKilled = view.getInt32(96, true);
		this.deaths = view.getInt32(104, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(112));
	}
}