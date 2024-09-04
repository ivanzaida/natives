import { EMpOutfitEnum } from "../enums";

export class MpOutfitsDataRequest {
	public readonly male: boolean;
	public readonly eOutfit: EMpOutfitEnum;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.male = view.getInt8(0) === 1;
		this.eOutfit = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}