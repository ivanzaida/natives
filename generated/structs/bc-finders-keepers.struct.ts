import { BcBossChallenge } from "./bc-boss-challenge.struct";

export class BcFindersKeepers {
	public readonly data: BcBossChallenge;
	public readonly deaths: number;
	public readonly packagesCollected: number;
	public readonly quadrantSelected: number;

	constructor(view: DataView) {
		if (view.byteLength !== 136) {
			throw new Error('Invalid view size');
		}
		this.data = new BcBossChallenge(new DataView(view.buffer.slice(0, 112)));
		this.deaths = view.getInt32(112, true);
		this.packagesCollected = view.getInt32(120, true);
		this.quadrantSelected = view.getInt32(128, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(136));
	}
}