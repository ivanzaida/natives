import { TPedIndex } from "../typedefs";
import { EArrestEventTypes } from "../enums";

export class PlayerArrestEvent {
	public readonly arresterIndex: TPedIndex;
	public readonly arresteeIndex: TPedIndex;
	public readonly arrestEventType: EArrestEventTypes;

	constructor(view: DataView) {
		if (view.byteLength !== 24) {
			throw new Error('Invalid view size');
		}
		this.arresterIndex = view.getInt32(0, true);
		this.arresteeIndex = view.getInt32(8, true);
		this.arrestEventType = view.getInt32(16, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(24));
	}
}