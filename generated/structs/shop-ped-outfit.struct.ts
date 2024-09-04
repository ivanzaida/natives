import { getStringFromDataView } from "../predef";

export class ShopPedOutfit {
	public readonly lockHash: number;
	public readonly nameHash: number;
	public readonly cost: number;
	public readonly numberOfProps: number;
	public readonly numberOfComponents: number;
	public readonly shopEnum: number;
	public readonly character: number;
	public readonly textLabel: string;

	constructor(view: DataView) {
		if (view.byteLength !== 88) {
			throw new Error('Invalid view size');
		}
		this.lockHash = view.getInt32(0, true);
		this.nameHash = view.getInt32(8, true);
		this.cost = view.getInt32(16, true);
		this.numberOfProps = view.getInt32(24, true);
		this.numberOfComponents = view.getInt32(32, true);
		this.shopEnum = view.getInt32(40, true);
		this.character = view.getInt32(48, true);
		this.textLabel = getStringFromDataView(view, 56, 87);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(88));
	}
}