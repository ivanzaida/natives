import { TPlayerIndex, TVehicleIndex } from "../typedefs";

export class PlayerEnteredVehicleEvent {
	public readonly playerIndex: TPlayerIndex;
	public readonly vehicleIndex: TVehicleIndex;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.playerIndex = view.getInt32(0, true);
		this.vehicleIndex = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}