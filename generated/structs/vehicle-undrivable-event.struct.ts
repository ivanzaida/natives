import { TVehicleIndex, TEntityIndex } from "../typedefs";

export class VehicleUndrivableEvent {
	public readonly vehicleId: TVehicleIndex;
	public readonly damagerIndex: TEntityIndex;
	public readonly weaponUsed: number;

	constructor(view: DataView) {
		if (view.byteLength !== 24) {
			throw new Error('Invalid view size');
		}
		this.vehicleId = view.getInt32(0, true);
		this.damagerIndex = view.getInt32(8, true);
		this.weaponUsed = view.getInt32(16, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(24));
	}
}