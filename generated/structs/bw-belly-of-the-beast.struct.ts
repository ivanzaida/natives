import { BwBossWork } from "./bw-boss-work.struct";

export class BwBellyOfTheBeast {
	public readonly data: BwBossWork;
	public readonly launchedByBoss: number;
	public readonly vehicleType: number;
	public readonly pickupLocation: number;
	public readonly deliveryLocation: number;

	constructor(view: DataView) {
		if (view.byteLength !== 144) {
			throw new Error('Invalid view size');
		}
		this.data = new BwBossWork(new DataView(view.buffer.slice(0, 112)));
		this.launchedByBoss = view.getInt32(112, true);
		this.vehicleType = view.getInt32(120, true);
		this.pickupLocation = view.getInt32(128, true);
		this.deliveryLocation = view.getInt32(136, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(144));
	}
}