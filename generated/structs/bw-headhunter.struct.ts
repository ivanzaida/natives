import { BwBossWork } from "./bw-boss-work.struct";

export class BwHeadhunter {
	public readonly data: BwBossWork;
	public readonly enemiesKilled: number;
	public readonly targetLocation: number;
	public readonly numberOfTargetsKilled: number;
	public readonly launchedByBoss: number;

	constructor(view: DataView) {
		if (view.byteLength !== 144) {
			throw new Error('Invalid view size');
		}
		this.data = new BwBossWork(new DataView(view.buffer.slice(0, 112)));
		this.enemiesKilled = view.getInt32(112, true);
		this.targetLocation = view.getInt32(120, true);
		this.numberOfTargetsKilled = view.getInt32(128, true);
		this.launchedByBoss = view.getInt32(136, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(144));
	}
}