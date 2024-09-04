import { BwBossWork } from "./bw-boss-work.struct";

export class BwBossOnBossDeathMatch {
	public readonly data: BwBossWork;
	public readonly launchedByBoss: number;
	public readonly invitesSent: number;
	public readonly invitesAccepted: number;

	constructor(view: DataView) {
		if (view.byteLength !== 136) {
			throw new Error('Invalid view size');
		}
		this.data = new BwBossWork(new DataView(view.buffer.slice(0, 112)));
		this.launchedByBoss = view.getInt32(112, true);
		this.invitesSent = view.getInt32(120, true);
		this.invitesAccepted = view.getInt32(128, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(136));
	}
}