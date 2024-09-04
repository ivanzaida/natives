import { BwBossWork } from "./bw-boss-work.struct";

export class BwFragileGoods {
	public readonly data: BwBossWork;
	public readonly destroyDisconnectedRatio: number;
	public readonly targetLocation: number;
	public readonly startLocation: number;
	public readonly rivalGangDestination: number;
	public readonly launchedByBoss: number;

	constructor(view: DataView) {
		if (view.byteLength !== 152) {
			throw new Error('Invalid view size');
		}
		this.data = new BwBossWork(new DataView(view.buffer.slice(0, 112)));
		this.destroyDisconnectedRatio = view.getFloat32(112, true);
		this.targetLocation = view.getInt32(120, true);
		this.startLocation = view.getInt32(128, true);
		this.rivalGangDestination = view.getInt32(136, true);
		this.launchedByBoss = view.getInt32(144, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(152));
	}
}