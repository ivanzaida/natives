import { getStringFromDataView } from "../predef";

export class ShopPedProp {
	public readonly lockHash: number;
	public readonly nameHash: number;
	public readonly locate: number;
	public readonly propIndex: number;
	public readonly textureIndex: number;
	public readonly cost: number;
	public readonly anchorPoint: number;
	public readonly shopEnum: number;
	public readonly character: number;
	public readonly textLabel: string;

	constructor(view: DataView) {
		if (view.byteLength !== 104) {
			throw new Error('Invalid view size');
		}
		this.lockHash = view.getInt32(0, true);
		this.nameHash = view.getInt32(8, true);
		this.locate = view.getInt32(16, true);
		this.propIndex = view.getInt32(24, true);
		this.textureIndex = view.getInt32(32, true);
		this.cost = view.getInt32(40, true);
		this.anchorPoint = view.getInt32(48, true);
		this.shopEnum = view.getInt32(56, true);
		this.character = view.getInt32(64, true);
		this.textLabel = getStringFromDataView(view, 72, 103);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(104));
	}
}