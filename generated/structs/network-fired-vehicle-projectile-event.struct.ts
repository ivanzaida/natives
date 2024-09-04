import { TVehicleIndex, TPedIndex, TEntityIndex } from "../typedefs";

export class NetworkFiredVehicleProjectileEvent {
	public readonly firingVehicleIndex: TVehicleIndex;
	public readonly firingPedIndex: TPedIndex;
	public readonly firedProjectileIndex: TEntityIndex;
	public readonly weaponType: number;

	constructor(view: DataView) {
		if (view.byteLength !== 32) {
			throw new Error('Invalid view size');
		}
		this.firingVehicleIndex = view.getInt32(0, true);
		this.firingPedIndex = view.getInt32(8, true);
		this.firedProjectileIndex = view.getInt32(16, true);
		this.weaponType = view.getInt32(24, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(32));
	}
}