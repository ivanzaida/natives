import { CasinoMetricLight } from "./casino-metric-light.struct";

export class BlackjackMetricLight {
	public readonly casinoMetric: CasinoMetricLight;
	public readonly dealerBlackjackCount: number;
	public readonly playerBlackjackCount: number;
	public readonly surrenderCount: number;
	public readonly bustCount: number;
	public readonly m_7CardCharlieCount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 168) {
			throw new Error('Invalid view size');
		}
		this.casinoMetric = new CasinoMetricLight(new DataView(view.buffer.slice(0, 128)));
		this.dealerBlackjackCount = view.getInt32(128, true);
		this.playerBlackjackCount = view.getInt32(136, true);
		this.surrenderCount = view.getInt32(144, true);
		this.bustCount = view.getInt32(152, true);
		this.m_7CardCharlieCount = view.getInt32(160, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(168));
	}
}