export class CasinoMetric {
	public readonly gameType: number;
	public readonly matchType: number;
	public readonly tableId: number;
	public readonly handId: number;
	public readonly endReason: number;
	public readonly allIn: boolean;
	public readonly chipsDelta: number;
	public readonly finalChipBalance: number;
	public readonly totalPot: number;
	public readonly playersAtTable: number;
	public readonly viewedLegalScreen: boolean;
	public readonly ownPenthouse: boolean;
	public readonly betAmount1: number;
	public readonly betAmount2: number;
	public readonly winAmount: number;
	public readonly win: boolean;
	public readonly cheat: boolean;
	public readonly timePlayed: number;
	public readonly isHost: boolean;
	public readonly hostId: number;
	public readonly membership: number;

	constructor(view: DataView) {
		if (view.byteLength !== 168) {
			throw new Error('Invalid view size');
		}
		this.gameType = view.getInt32(0, true);
		this.matchType = view.getInt32(8, true);
		this.tableId = view.getInt32(16, true);
		this.handId = view.getInt32(24, true);
		this.endReason = view.getInt32(32, true);
		this.allIn = view.getInt8(40) === 1;
		this.chipsDelta = view.getInt32(48, true);
		this.finalChipBalance = view.getInt32(56, true);
		this.totalPot = view.getInt32(64, true);
		this.playersAtTable = view.getInt32(72, true);
		this.viewedLegalScreen = view.getInt8(80) === 1;
		this.ownPenthouse = view.getInt8(88) === 1;
		this.betAmount1 = view.getInt32(96, true);
		this.betAmount2 = view.getInt32(104, true);
		this.winAmount = view.getInt32(112, true);
		this.win = view.getInt8(120) === 1;
		this.cheat = view.getInt8(128) === 1;
		this.timePlayed = view.getInt32(136, true);
		this.isHost = view.getInt8(144) === 1;
		this.hostId = view.getInt32(152, true);
		this.membership = view.getInt32(160, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(168));
	}
}