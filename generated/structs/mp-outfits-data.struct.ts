export class MpOutfitsData {
	public readonly componentDrawableId: number[];
	public readonly componentTextureId: number[];
	public readonly propDrawableId: number[];
	public readonly propTextureId: number[];
	public readonly dLcTattooOverlay: number[];

	constructor(view: DataView) {
		if (view.byteLength !== 360) {
			throw new Error('Invalid view size');
		}
		this.componentDrawableId = [view.getInt32(0, true), view.getInt32(8, true), view.getInt32(16, true), view.getInt32(24, true), view.getInt32(32, true), view.getInt32(40, true), view.getInt32(48, true), view.getInt32(56, true), view.getInt32(64, true), view.getInt32(72, true), view.getInt32(80, true), view.getInt32(88, true)];
		this.componentTextureId = [view.getInt32(96, true), view.getInt32(104, true), view.getInt32(112, true), view.getInt32(120, true), view.getInt32(128, true), view.getInt32(136, true), view.getInt32(144, true), view.getInt32(152, true), view.getInt32(160, true), view.getInt32(168, true), view.getInt32(176, true), view.getInt32(184, true)];
		this.propDrawableId = [view.getInt32(192, true), view.getInt32(200, true), view.getInt32(208, true), view.getInt32(216, true), view.getInt32(224, true), view.getInt32(232, true), view.getInt32(240, true), view.getInt32(248, true), view.getInt32(256, true)];
		this.propTextureId = [view.getInt32(264, true), view.getInt32(272, true), view.getInt32(280, true), view.getInt32(288, true), view.getInt32(296, true), view.getInt32(304, true), view.getInt32(312, true), view.getInt32(320, true), view.getInt32(328, true)];
		this.dLcTattooOverlay = [view.getInt32(336, true), view.getInt32(344, true), view.getInt32(352, true)];
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(360));
	}
}