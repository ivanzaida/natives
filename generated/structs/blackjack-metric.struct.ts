import { CasinoMetric } from "./casino-metric.struct";

export class BlackjackMetric {
	public readonly casinoMetric: CasinoMetric;
	public readonly stand: boolean;
	public readonly hit: boolean;
	public readonly double: boolean;
	public readonly split: boolean;
	public readonly outcome: number;

	constructor(view: DataView) {
		if (view.byteLength !== 208) {
			throw new Error('Invalid view size');
		}
		this.casinoMetric = new CasinoMetric(new DataView(view.buffer.slice(0, 168)));
		this.stand = view.getInt8(168) === 1;
		this.hit = view.getInt8(176) === 1;
		this.double = view.getInt8(184) === 1;
		this.split = view.getInt8(192) === 1;
		this.outcome = view.getInt32(200, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(208));
	}
}