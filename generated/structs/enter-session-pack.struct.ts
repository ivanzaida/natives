export class EnterSessionPack {
	public readonly enterpProp: number;
	public readonly enterpVeh: number;
	public readonly enterpWeapon: number;
	public readonly enterpTattoo1: number;
	public readonly enterpTattoo2: number;
	public readonly enterpClothing1: number;
	public readonly enterpClothing2: number;

	constructor(view: DataView) {
		if (view.byteLength !== 56) {
			throw new Error('Invalid view size');
		}
		this.enterpProp = view.getInt32(0, true);
		this.enterpVeh = view.getInt32(8, true);
		this.enterpWeapon = view.getInt32(16, true);
		this.enterpTattoo1 = view.getInt32(24, true);
		this.enterpTattoo2 = view.getInt32(32, true);
		this.enterpClothing1 = view.getInt32(40, true);
		this.enterpClothing2 = view.getInt32(48, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(56));
	}
}