export class CasinoMetricLight {
	public readonly matchType: number;
	public readonly tableId: number;
	public readonly endReason: number;
	public readonly chipsDelta: number;
	public readonly finalChipBalance: number;
	public readonly duration: number;
	public readonly viewedLegalScreen: boolean;
	public readonly betAmount1: number;
	public readonly betAmount2: number;
	public readonly cheatCount: number;
	public readonly isHost: boolean;
	public readonly hostId: number;
	public readonly handsPlayed: number;
	public readonly winCount: number;
	public readonly loseCount: number;
	public readonly membership: number;

	constructor(view: DataView) {
		if (view.byteLength !== 128) {
			throw new Error('Invalid view size');
		}
		this.matchType = view.getInt32(0, true);
		this.tableId = view.getInt32(8, true);
		this.endReason = view.getInt32(16, true);
		this.chipsDelta = view.getInt32(24, true);
		this.finalChipBalance = view.getInt32(32, true);
		this.duration = view.getInt32(40, true);
		this.viewedLegalScreen = view.getInt8(48) === 1;
		this.betAmount1 = view.getInt32(56, true);
		this.betAmount2 = view.getInt32(64, true);
		this.cheatCount = view.getInt32(72, true);
		this.isHost = view.getInt8(80) === 1;
		this.hostId = view.getInt32(88, true);
		this.handsPlayed = view.getInt32(96, true);
		this.winCount = view.getInt32(104, true);
		this.loseCount = view.getInt32(112, true);
		this.membership = view.getInt32(120, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(128));
	}
}