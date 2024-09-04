import { TPedIndex, TEntityIndex } from "../typedefs";

export class NetworkFiredDummyProjectileEvent {
	public readonly firingPedIndex: TPedIndex;
	public readonly firedProjectileIndex: TEntityIndex;
	public readonly weaponType: number;

	constructor(view: DataView) {
		if (view.byteLength !== 24) {
			throw new Error('Invalid view size');
		}
		this.firingPedIndex = view.getInt32(0, true);
		this.firedProjectileIndex = view.getInt32(8, true);
		this.weaponType = view.getInt32(16, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(24));
	}
}