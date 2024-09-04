import { BcBossChallenge } from "./bc-boss-challenge.struct";

export class BcRunningRiot {
	public readonly data: BcBossChallenge;
	public readonly deaths: number;
	public readonly numberOfKills: number;

	constructor(view: DataView) {
		if (view.byteLength !== 128) {
			throw new Error('Invalid view size');
		}
		this.data = new BcBossChallenge(new DataView(view.buffer.slice(0, 112)));
		this.deaths = view.getInt32(112, true);
		this.numberOfKills = view.getInt32(120, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(128));
	}
}