import { CasinoMetric } from "./casino-metric.struct";

export class InsideTrackMetric {
	public readonly casinoMetric: CasinoMetric;
	public readonly gameChoice: number;
	public readonly horseChoice: number;

	constructor(view: DataView) {
		if (view.byteLength !== 184) {
			throw new Error('Invalid view size');
		}
		this.casinoMetric = new CasinoMetric(new DataView(view.buffer.slice(0, 168)));
		this.gameChoice = view.getInt32(168, true);
		this.horseChoice = view.getInt32(176, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(184));
	}
}