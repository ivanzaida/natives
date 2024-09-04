export class CncJustice {
	public readonly matchId1: number;
	public readonly matchId2: number;
	public readonly roundNumber: number;
	public readonly stage: number;
	public readonly crookId: number;
	public readonly crookRole: number;
	public readonly crookProgRank: number;
	public readonly copRole: number;
	public readonly copProgRank: number;
	public readonly crookEndurance: number;
	public readonly vOffender: boolean;
	public readonly cashLost: number;
	public readonly wantedLvl: number;
	public readonly cashPenalty: number;
	public readonly type: number;

	constructor(view: DataView) {
		if (view.byteLength !== 120) {
			throw new Error('Invalid view size');
		}
		this.matchId1 = view.getInt32(0, true);
		this.matchId2 = view.getInt32(8, true);
		this.roundNumber = view.getInt32(16, true);
		this.stage = view.getInt32(24, true);
		this.crookId = view.getInt32(32, true);
		this.crookRole = view.getInt32(40, true);
		this.crookProgRank = view.getInt32(48, true);
		this.copRole = view.getInt32(56, true);
		this.copProgRank = view.getInt32(64, true);
		this.crookEndurance = view.getInt32(72, true);
		this.vOffender = view.getInt8(80) === 1;
		this.cashLost = view.getInt32(88, true);
		this.wantedLvl = view.getInt32(96, true);
		this.cashPenalty = view.getInt32(104, true);
		this.type = view.getInt32(112, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(120));
	}
}