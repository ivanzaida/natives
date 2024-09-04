import { TPickupIndex, TPlayerIndex, TModelNames } from "../typedefs";
import { EPickupType } from "../enums";

export class PickupEvent {
	public readonly pickupIndex: TPickupIndex;
	public readonly playerIndex: TPlayerIndex;
	public readonly pickupType: EPickupType;
	public readonly pickupAmount: number;
	public readonly pickupCustomModel: TModelNames;
	public readonly pickupCollected: number;

	constructor(view: DataView) {
		if (view.byteLength !== 48) {
			throw new Error('Invalid view size');
		}
		this.pickupIndex = view.getInt32(0, true);
		this.playerIndex = view.getInt32(8, true);
		this.pickupType = view.getInt32(16, true);
		this.pickupAmount = view.getInt32(24, true);
		this.pickupCustomModel = view.getInt32(32, true);
		this.pickupCollected = view.getInt32(40, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(48));
	}
}