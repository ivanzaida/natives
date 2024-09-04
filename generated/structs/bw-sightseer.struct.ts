import { BwBossWork } from "./bw-boss-work.struct";

export class BwSightseer {
	public readonly data: BwBossWork;
	public readonly launchedByBoss: number;
	public readonly numberLocationToWin: number;
	public readonly totalLocation: number;

	constructor(view: DataView) {
		if (view.byteLength !== 136) {
			throw new Error('Invalid view size');
		}
		this.data = new BwBossWork(new DataView(view.buffer.slice(0, 112)));
		this.launchedByBoss = view.getInt32(112, true);
		this.numberLocationToWin = view.getInt32(120, true);
		this.totalLocation = view.getInt32(128, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(136));
	}
}