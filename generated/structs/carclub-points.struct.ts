export class CarclubPoints {
	public readonly bossId1: number;
	public readonly bossId2: number;
	public readonly matchId: number;
	public readonly method: number;
	public readonly amount: number;
	public readonly itemBought: number;
	public readonly streak: number;
	public readonly memberLevel: number;
	public readonly levelUp: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 72) {
			throw new Error('Invalid view size');
		}
		this.bossId1 = view.getInt32(0, true);
		this.bossId2 = view.getInt32(8, true);
		this.matchId = view.getInt32(16, true);
		this.method = view.getInt32(24, true);
		this.amount = view.getInt32(32, true);
		this.itemBought = view.getInt32(40, true);
		this.streak = view.getInt32(48, true);
		this.memberLevel = view.getInt32(56, true);
		this.levelUp = view.getInt8(64) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(72));
	}
}