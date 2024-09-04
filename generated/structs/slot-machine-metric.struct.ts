import { CasinoMetric } from "./casino-metric.struct";

export class SlotMachineMetric {
	public readonly casinoMetric: CasinoMetric;
	public readonly machineStyle: number;

	constructor(view: DataView) {
		if (view.byteLength !== 176) {
			throw new Error('Invalid view size');
		}
		this.casinoMetric = new CasinoMetric(new DataView(view.buffer.slice(0, 168)));
		this.machineStyle = view.getInt32(168, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(176));
	}
}