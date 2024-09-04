import { getStringFromDataView } from "../predef";

export class ShopWeaponComponentData {
	public readonly modType: number;
	public readonly isDefault: boolean;
	public readonly lockHash: number;
	public readonly componentName: number;
	public readonly id: number;
	public readonly cost: number;
	public readonly label: string;
	public readonly componentDesc: string;

	constructor(view: DataView) {
		if (view.byteLength !== 112) {
			throw new Error('Invalid view size');
		}
		this.modType = view.getInt32(0, true);
		this.isDefault = view.getInt8(8) === 1;
		this.lockHash = view.getInt32(16, true);
		this.componentName = view.getInt32(24, true);
		this.id = view.getInt32(32, true);
		this.cost = view.getInt32(40, true);
		this.label = getStringFromDataView(view, 48, 79);
		this.componentDesc = getStringFromDataView(view, 80, 111);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(112));
	}
}