import { TVehicleIndex, TPedIndex } from "../typedefs";

export class TimedExplosionEvent {
	public readonly vehicleIndex: TVehicleIndex;
	public readonly culpritIndex: TPedIndex;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.vehicleIndex = view.getInt32(0, true);
		this.culpritIndex = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}