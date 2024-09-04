import { BcBossChallenge } from "./bc-boss-challenge.struct";

export class BcSalvage {
	public readonly data: BcBossChallenge;
	public readonly checkpointsCollected: number;
	public readonly rebreathersCollected: number;
	public readonly deaths: number;

	constructor(view: DataView) {
		if (view.byteLength !== 136) {
			throw new Error('Invalid view size');
		}
		this.data = new BcBossChallenge(new DataView(view.buffer.slice(0, 112)));
		this.checkpointsCollected = view.getInt32(112, true);
		this.rebreathersCollected = view.getInt32(120, true);
		this.deaths = view.getInt32(128, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(136));
	}
}