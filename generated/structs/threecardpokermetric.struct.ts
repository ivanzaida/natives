import { CasinoMetric } from "./casino-metric.struct";

export class Threecardpokermetric {
	public readonly casinoMetric: CasinoMetric;
	public readonly pairPlus: boolean;
	public readonly outcome: number;

	constructor(view: DataView) {
		if (view.byteLength !== 184) {
			throw new Error('Invalid view size');
		}
		this.casinoMetric = new CasinoMetric(new DataView(view.buffer.slice(0, 168)));
		this.pairPlus = view.getInt8(168) === 1;
		this.outcome = view.getInt32(176, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(184));
	}
}