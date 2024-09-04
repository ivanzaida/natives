import { BcBossChallenge } from "./bc-boss-challenge.struct";

export class BcProtectionRacket {
	public readonly data: BcBossChallenge;
	public readonly deaths: number;
	public readonly cashBagsCollected: number;
	public readonly cashBagsDelivered: number;
	public readonly pickupQuadrant: number;
	public readonly deliveryQuadrant: number;

	constructor(view: DataView) {
		if (view.byteLength !== 152) {
			throw new Error('Invalid view size');
		}
		this.data = new BcBossChallenge(new DataView(view.buffer.slice(0, 112)));
		this.deaths = view.getInt32(112, true);
		this.cashBagsCollected = view.getInt32(120, true);
		this.cashBagsDelivered = view.getInt32(128, true);
		this.pickupQuadrant = view.getInt32(136, true);
		this.deliveryQuadrant = view.getInt32(144, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(152));
	}
}