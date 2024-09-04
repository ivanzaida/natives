import { EPickupType } from "../enums";
import { TPlayerIndex, TModelNames } from "../typedefs";

export class AmbientPickupEvent {
	public readonly pickupType: EPickupType;
	public readonly pickupAmount: number;
	public readonly playerIndex: TPlayerIndex;
	public readonly pickupModel: TModelNames;
	public readonly playerGift: boolean;
	public readonly droppedByPed: boolean;
	public readonly pickupCollected: number;
	public readonly pickupIndex: number;

	constructor(view: DataView) {
		if (view.byteLength !== 64) {
			throw new Error('Invalid view size');
		}
		this.pickupType = view.getInt32(0, true);
		this.pickupAmount = view.getInt32(8, true);
		this.playerIndex = view.getInt32(16, true);
		this.pickupModel = view.getInt32(24, true);
		this.playerGift = view.getInt8(32) === 1;
		this.droppedByPed = view.getInt8(40) === 1;
		this.pickupCollected = view.getInt32(48, true);
		this.pickupIndex = view.getInt32(56, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(64));
	}
}