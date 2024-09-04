import { TPedIndex } from "../typedefs";

export class PedLeftBehind {
	public readonly pedIndex: TPedIndex;
	public readonly reason: number;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.pedIndex = view.getInt32(0, true);
		this.reason = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}