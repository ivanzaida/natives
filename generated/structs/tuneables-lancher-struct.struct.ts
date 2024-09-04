import { EGETunablesContexts } from "../enums";

export class TuneablesLancherStruct {
	public readonly eContext: EGETunablesContexts;
	public readonly eContextSubType: EGETunablesContexts;
	public readonly fillRankTuneables: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 24) {
			throw new Error('Invalid view size');
		}
		this.eContext = view.getInt32(0, true);
		this.eContextSubType = view.getInt32(8, true);
		this.fillRankTuneables = view.getInt8(16) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(24));
	}
}