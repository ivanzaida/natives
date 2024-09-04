import { Vector3 } from "../predef";

export class InteriorRsRefNode {
	public readonly nameHash: number;
	public readonly translation: Vector3;
	public readonly rotation: Vector3;
	public readonly numberOfLayoutNodes: number;

	constructor(view: DataView) {
		if (view.byteLength !== 64) {
			throw new Error('Invalid view size');
		}
		this.nameHash = view.getInt32(0, true);
		this.translation = new Vector3(view.getFloat32(8, true), view.getFloat32(16, true), view.getFloat32(24, true));
		this.rotation = new Vector3(view.getFloat32(32, true), view.getFloat32(40, true), view.getFloat32(48, true));
		this.numberOfLayoutNodes = view.getInt32(56, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(64));
	}
}