import { Vector3 } from "../predef";

export class InteriorLayoutNode {
	public readonly nameHash: number;
	public readonly translation: Vector3;
	public readonly rotation: Vector3;
	public readonly purchasable: boolean;
	public readonly numberOfGroupNodes: number;

	constructor(view: DataView) {
		if (view.byteLength !== 72) {
			throw new Error('Invalid view size');	
		}
		this.nameHash = view.getInt32(0, true);
		this.translation = new Vector3(view.getFloat32(8, true), view.getFloat32(16, true), view.getFloat32(24, true));
		this.rotation = new Vector3(view.getFloat32(32, true), view.getFloat32(40, true), view.getFloat32(48, true));
		this.purchasable = view.getInt8(56) === 1;
		this.numberOfGroupNodes = view.getInt32(64, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(72));
	}
}