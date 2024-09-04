import { BwBossWork } from "./bw-boss-work.struct";

export class BwPutOutAHit {
	public readonly data: BwBossWork;
	public readonly hitMethodSelected: number;

	constructor(view: DataView) {
		if (view.byteLength !== 120) {
			throw new Error('Invalid view size');
		}
		this.data = new BwBossWork(new DataView(view.buffer.slice(0, 112)));
		this.hitMethodSelected = view.getInt32(112, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(120));
	}
}