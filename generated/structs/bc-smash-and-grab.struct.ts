import { BcBossChallenge } from "./bc-boss-challenge.struct";

export class BcSmashAndGrab {
	public readonly data: BcBossChallenge;
	public readonly deaths: number;
	public readonly storesHeldUp: number;
	public readonly deliveriesMade: number;
	public readonly cashLost: number;
	public readonly cashDelivered: number;

	constructor(view: DataView) {
		if (view.byteLength !== 152) {
			throw new Error('Invalid view size');
		}
		this.data = new BcBossChallenge(new DataView(view.buffer.slice(0, 112)));
		this.deaths = view.getInt32(112, true);
		this.storesHeldUp = view.getInt32(120, true);
		this.deliveriesMade = view.getInt32(128, true);
		this.cashLost = view.getInt32(136, true);
		this.cashDelivered = view.getInt32(144, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(152));
	}
}