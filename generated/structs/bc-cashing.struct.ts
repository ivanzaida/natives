import { BcBossChallenge } from "./bc-boss-challenge.struct";

export class BcCashing {
	public readonly data: BcBossChallenge;
	public readonly machinesHacked: number;
	public readonly failedMinigamesRatio: number;
	public readonly wantedLevelReached: number;

	constructor(view: DataView) {
		if (view.byteLength !== 136) {
			throw new Error('Invalid view size');
		}
		this.data = new BcBossChallenge(new DataView(view.buffer.slice(0, 112)));
		this.machinesHacked = view.getInt32(112, true);
		this.failedMinigamesRatio = view.getFloat32(120, true);
		this.wantedLevelReached = view.getInt32(128, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(136));
	}
}