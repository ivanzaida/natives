import { BcBossChallenge } from "./bc-boss-challenge.struct";

export class BcCarJacking {
	public readonly data: BcBossChallenge;
	public readonly totalScore: number;

	constructor(view: DataView) {
		if (view.byteLength !== 120) {
			throw new Error('Invalid view size');
		}
		this.data = new BcBossChallenge(new DataView(view.buffer.slice(0, 112)));
		this.totalScore = view.getInt32(112, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(120));
	}
}