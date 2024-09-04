import { TEntityIndex } from "../typedefs";

export class EntityId {
	public readonly entityId: TEntityIndex;

	constructor(view: DataView) {
		if (view.byteLength !== 8) {
			throw new Error('Invalid view size');
		}
		this.entityId = view.getInt32(0, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(8));
	}
}