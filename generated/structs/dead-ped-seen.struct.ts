import { TPedIndex } from "../typedefs";

export class DeadPedSeen {
	public readonly deadPedId: TPedIndex;
	public readonly findingPedId: TPedIndex;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.deadPedId = view.getInt32(0, true);
		this.findingPedId = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}