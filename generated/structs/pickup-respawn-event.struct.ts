import { TPickupIndex, TModelNames } from "../typedefs";
import { EPickupType } from "../enums";

export class PickupRespawnEvent {
	public readonly pickupIndex: TPickupIndex;
	public readonly pickupType: EPickupType;
	public readonly pickupModel: TModelNames;

	constructor(view: DataView) {
		if (view.byteLength !== 24) {
			throw new Error('Invalid view size');
		}
		this.pickupIndex = view.getInt32(0, true);
		this.pickupType = view.getInt32(8, true);
		this.pickupModel = view.getInt32(16, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(24));
	}
}