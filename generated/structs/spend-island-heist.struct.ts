export class SpendIslandHeist {
	public readonly airstrike: number;
	public readonly heavyWeapon: number;
	public readonly sniper: number;
	public readonly airSupport: number;
	public readonly idrone: number;
	public readonly weaponStash: number;
	public readonly suppressor: number;
	public readonly replay: number;
	public readonly prep: number;
	public readonly prepItem: number;

	constructor(view: DataView) {
		if (view.byteLength !== 80) {
			throw new Error('Invalid view size');
		}
		this.airstrike = view.getInt32(0, true);
		this.heavyWeapon = view.getInt32(8, true);
		this.sniper = view.getInt32(16, true);
		this.airSupport = view.getInt32(24, true);
		this.idrone = view.getInt32(32, true);
		this.weaponStash = view.getInt32(40, true);
		this.suppressor = view.getInt32(48, true);
		this.replay = view.getInt32(56, true);
		this.prep = view.getInt32(64, true);
		this.prepItem = view.getInt32(72, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(80));
	}
}