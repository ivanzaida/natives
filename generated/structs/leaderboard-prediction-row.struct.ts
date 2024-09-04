export class LeaderboardPredictionRow {
	public readonly id: number;
	public readonly numColumns: number;
	public readonly columnsBitSets: number;
	public readonly fColumnData: number[];
	public readonly columnData: number[];

	constructor(view: DataView) {
		if (view.byteLength !== 536) {
			throw new Error('Invalid view size');
		}
		this.id = view.getInt32(0, true);
		this.numColumns = view.getInt32(8, true);
		this.columnsBitSets = view.getInt32(16, true);
		this.fColumnData = [view.getFloat32(24, true), view.getFloat32(32, true), view.getFloat32(40, true), view.getFloat32(48, true), view.getFloat32(56, true), view.getFloat32(64, true), view.getFloat32(72, true), view.getFloat32(80, true), view.getFloat32(88, true), view.getFloat32(96, true), view.getFloat32(104, true), view.getFloat32(112, true), view.getFloat32(120, true), view.getFloat32(128, true), view.getFloat32(136, true), view.getFloat32(144, true), view.getFloat32(152, true), view.getFloat32(160, true), view.getFloat32(168, true), view.getFloat32(176, true), view.getFloat32(184, true), view.getFloat32(192, true), view.getFloat32(200, true), view.getFloat32(208, true), view.getFloat32(216, true), view.getFloat32(224, true), view.getFloat32(232, true), view.getFloat32(240, true), view.getFloat32(248, true), view.getFloat32(256, true), view.getFloat32(264, true), view.getFloat32(272, true)];
		this.columnData = [view.getInt32(280, true), view.getInt32(288, true), view.getInt32(296, true), view.getInt32(304, true), view.getInt32(312, true), view.getInt32(320, true), view.getInt32(328, true), view.getInt32(336, true), view.getInt32(344, true), view.getInt32(352, true), view.getInt32(360, true), view.getInt32(368, true), view.getInt32(376, true), view.getInt32(384, true), view.getInt32(392, true), view.getInt32(400, true), view.getInt32(408, true), view.getInt32(416, true), view.getInt32(424, true), view.getInt32(432, true), view.getInt32(440, true), view.getInt32(448, true), view.getInt32(456, true), view.getInt32(464, true), view.getInt32(472, true), view.getInt32(480, true), view.getInt32(488, true), view.getInt32(496, true), view.getInt32(504, true), view.getInt32(512, true), view.getInt32(520, true), view.getInt32(528, true)];
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(536));
	}
}