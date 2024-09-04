export class CncSwitch {
	public readonly matchId1: number;
	public readonly matchId2: number;
	public readonly roundNumber: number;
	public readonly prevRole: number;
	public readonly newRole: number;
	public readonly newEmote: number;
	public readonly slot: number;
	public readonly cashLost: number;

	constructor(view: DataView) {
		if (view.byteLength !== 64) {
			throw new Error('Invalid view size');
		}
		this.matchId1 = view.getInt32(0, true);
		this.matchId2 = view.getInt32(8, true);
		this.roundNumber = view.getInt32(16, true);
		this.prevRole = view.getInt32(24, true);
		this.newRole = view.getInt32(32, true);
		this.newEmote = view.getInt32(40, true);
		this.slot = view.getInt32(48, true);
		this.cashLost = view.getInt32(56, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(64));
	}
}