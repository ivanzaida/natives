import { getStringFromDataView } from "../predef";

export class TattooShopItemValues {
	public readonly lockHash: number;
	public readonly id: number;
	public readonly collection: number;
	public readonly preset: number;
	public readonly cost: number;
	public readonly facing: number;
	public readonly updateGroup: number;
	public readonly label: string;

	constructor(view: DataView) {
		if (view.byteLength !== 88) {
			throw new Error('Invalid view size');
		}
		this.lockHash = view.getInt32(0, true);
		this.id = view.getInt32(8, true);
		this.collection = view.getInt32(16, true);
		this.preset = view.getInt32(24, true);
		this.cost = view.getInt32(32, true);
		this.facing = view.getInt32(40, true);
		this.updateGroup = view.getInt32(48, true);
		this.label = getStringFromDataView(view, 56, 87);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(88));
	}
}