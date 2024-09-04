import { EWeaponType } from "../enums";

export class WeaponInfo {
	public readonly eWeaponType: EWeaponType;
	public readonly ammoCount: number;
	public readonly modsAsBitfield: number;
	public readonly tint: number;
	public readonly camo: number;

	constructor(view: DataView) {
		if (view.byteLength !== 40) {
			throw new Error('Invalid view size');
		}
		this.eWeaponType = view.getInt32(0, true);
		this.ammoCount = view.getInt32(8, true);
		this.modsAsBitfield = view.getInt32(16, true);
		this.tint = view.getInt32(24, true);
		this.camo = view.getInt32(32, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(40));
	}
}