import { BwBossWork } from "./bw-boss-work.struct";

export class BwHuntTheBoss {
	public readonly data: BwBossWork;
	public readonly launchedByBoss: number;
	public readonly variationPlayed: number;

	constructor(view: DataView) {
		if (view.byteLength !== 128) {
			throw new Error('Invalid view size');
		}
		this.data = new BwBossWork(new DataView(view.buffer.slice(0, 112)));
		this.launchedByBoss = view.getInt32(112, true);
		this.variationPlayed = view.getInt32(120, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(128));
	}
}