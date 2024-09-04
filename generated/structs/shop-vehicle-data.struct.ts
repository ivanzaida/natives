import { getStringFromDataView } from "../predef";

export class ShopVehicleData {
	public readonly lockHash: number;
	public readonly nameHash: number;
	public readonly cost: number;
	public readonly textLabel: string;

	constructor(view: DataView) {
		if (view.byteLength !== 56) {
			throw new Error('Invalid view size');
		}
		this.lockHash = view.getInt32(0, true);
		this.nameHash = view.getInt32(8, true);
		this.cost = view.getInt32(16, true);
		this.textLabel = getStringFromDataView(view, 24, 55);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(56));
	}
}