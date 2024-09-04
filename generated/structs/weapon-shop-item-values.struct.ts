import { getStringFromDataView } from "../predef";

export class WeaponShopItemValues {
	public readonly lockHash: number;
	public readonly id: number;
	public readonly cost: number;
	public readonly label: string;

	constructor(view: DataView) {
		if (view.byteLength !== 56) {
			throw new Error('Invalid view size');
		}
		this.lockHash = view.getInt32(0, true);
		this.id = view.getInt32(8, true);
		this.cost = view.getInt32(16, true);
		this.label = getStringFromDataView(view, 24, 55);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(56));
	}
}