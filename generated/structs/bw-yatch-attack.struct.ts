import { BwBossWork } from "./bw-boss-work.struct";

export class BwYatchAttack {
	public readonly data: BwBossWork;
	public readonly launchedByBoss: number;
	public readonly totalCapturingScore: number;
	public readonly totalUnderAttackScore: number;

	constructor(view: DataView) {
		if (view.byteLength !== 136) {
			throw new Error('Invalid view size');
		}
		this.data = new BwBossWork(new DataView(view.buffer.slice(0, 112)));
		this.launchedByBoss = view.getInt32(112, true);
		this.totalCapturingScore = view.getInt32(120, true);
		this.totalUnderAttackScore = view.getInt32(128, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(136));
	}
}