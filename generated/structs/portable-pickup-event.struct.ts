import { TObjectIndex, TNetworkIndex, TPlayerIndex, TModelNames } from "../typedefs";

export class PortablePickupEvent {
	public readonly pickupId: TObjectIndex;
	public readonly pickupNetId: TNetworkIndex;
	public readonly playerIndex: TPlayerIndex;
	public readonly pickupModel: TModelNames;

	constructor(view: DataView) {
		if (view.byteLength !== 32) {
			throw new Error('Invalid view size');
		}
		this.pickupId = view.getInt32(0, true);
		this.pickupNetId = view.getInt32(8, true);
		this.playerIndex = view.getInt32(16, true);
		this.pickupModel = view.getInt32(24, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(32));
	}
}