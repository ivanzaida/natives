export class Navdata {
	public readonly fSlideToCoordHeading: number;
	public readonly fMaxSlopeNavigable: number;
	public readonly fClampMaxSearchDistance: number;

	constructor(view: DataView) {
		if (view.byteLength !== 24) {
			throw new Error('Invalid view size');
		}
		this.fSlideToCoordHeading = view.getFloat32(0, true);
		this.fMaxSlopeNavigable = view.getFloat32(8, true);
		this.fClampMaxSearchDistance = view.getFloat32(16, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(24));
	}
}