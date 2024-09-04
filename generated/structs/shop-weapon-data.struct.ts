import { getStringFromDataView } from "../predef";

export class ShopWeaponData {
	public readonly lockHash: number;
	public readonly nameHash: number;
	public readonly id: number;
	public readonly cost: number;
	public readonly ammoCost: number;
	public readonly ammoType: number;
	public readonly defaultClipSize: number;
	public readonly label: string;
	public readonly weaponDesc: string;
	public readonly weaponTt: string;
	public readonly weaponUppercase: string;

	constructor(view: DataView) {
		if (view.byteLength !== 184) {
			throw new Error('Invalid view size');
		}
		this.lockHash = view.getInt32(0, true);
		this.nameHash = view.getInt32(8, true);
		this.id = view.getInt32(16, true);
		this.cost = view.getInt32(24, true);
		this.ammoCost = view.getInt32(32, true);
		this.ammoType = view.getInt32(40, true);
		this.defaultClipSize = view.getInt32(48, true);
		this.label = getStringFromDataView(view, 56, 87);
		this.weaponDesc = getStringFromDataView(view, 88, 119);
		this.weaponTt = getStringFromDataView(view, 120, 151);
		this.weaponUppercase = getStringFromDataView(view, 152, 183);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(184));
	}
}