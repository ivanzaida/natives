export class ArcadeLoveMatch {
	public readonly matchId1: number;
	public readonly matchId2: number;
	public readonly score: number;
	public readonly flying: number;
	public readonly stamina: number;
	public readonly shooting: number;
	public readonly driving: number;
	public readonly stealth: number;
	public readonly maxHealth: number;
	public readonly trueLove: number;
	public readonly nemesis2: number;

	constructor(view: DataView) {
		if (view.byteLength !== 88) {
			throw new Error('Invalid view size');
		}
		this.matchId1 = view.getInt32(0, true);
		this.matchId2 = view.getInt32(8, true);
		this.score = view.getInt32(16, true);
		this.flying = view.getInt32(24, true);
		this.stamina = view.getInt32(32, true);
		this.shooting = view.getInt32(40, true);
		this.driving = view.getInt32(48, true);
		this.stealth = view.getInt32(56, true);
		this.maxHealth = view.getInt32(64, true);
		this.trueLove = view.getInt32(72, true);
		this.nemesis2 = view.getInt32(80, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(88));
	}
}