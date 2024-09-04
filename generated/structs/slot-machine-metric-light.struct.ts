import { CasinoMetricLight } from "./casino-metric-light.struct";

export class SlotMachineMetricLight {
	public readonly casinoMetric: CasinoMetricLight;
	public readonly machineStyle: number;

	constructor(view: DataView) {
		if (view.byteLength !== 136) {
			throw new Error('Invalid view size');
		}
		this.casinoMetric = new CasinoMetricLight(new DataView(view.buffer.slice(0, 128)));
		this.machineStyle = view.getInt32(128, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(136));
	}
}