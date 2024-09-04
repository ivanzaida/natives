import { BwBossWork } from "./bw-boss-work.struct";

export class BwAssault {
	public readonly data: BwBossWork;
	public readonly launchedByBoss: number;
	public readonly locationSelected: number;

	constructor(view: DataView) {
		if (view.byteLength !== 128) {
			throw new Error('Invalid view size');
		}
		this.data = new BwBossWork(new DataView(view.buffer.slice(0, 112)));
		this.launchedByBoss = view.getInt32(112, true);
		this.locationSelected = view.getInt32(120, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(128));
	}
}