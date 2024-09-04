import { CasinoMetricLight } from "./casino-metric-light.struct";

export class InsideTrackMetricLight {
	public readonly casinoMetric: CasinoMetricLight;
	public readonly individualGameCount: number;
	public readonly mainEventCount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 144) {
			throw new Error('Invalid view size');
		}
		this.casinoMetric = new CasinoMetricLight(new DataView(view.buffer.slice(0, 128)));
		this.individualGameCount = view.getInt32(128, true);
		this.mainEventCount = view.getInt32(136, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(144));
	}
}