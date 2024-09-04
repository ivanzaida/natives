import { TVehicleIndex } from "../typedefs";

export class VehicleId {
	public readonly vehicleId: TVehicleIndex;

	constructor(view: DataView) {
		if (view.byteLength !== 8) {
			throw new Error('Invalid view size');
		}
		this.vehicleId = view.getInt32(0, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(8));
	}
}