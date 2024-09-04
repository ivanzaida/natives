import { CasinoMetric } from "./casino-metric.struct";

export class Luckysevenmetric {
	public readonly casinoMetric: CasinoMetric;
	public readonly rewardType: number;
	public readonly rewardItem: number;
	public readonly rewardAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 192) {
			throw new Error('Invalid view size');
		}
		this.casinoMetric = new CasinoMetric(new DataView(view.buffer.slice(0, 168)));
		this.rewardType = view.getInt32(168, true);
		this.rewardItem = view.getInt32(176, true);
		this.rewardAmount = view.getInt32(184, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(192));
	}
}