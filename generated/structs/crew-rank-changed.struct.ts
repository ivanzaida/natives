import { getStringFromDataView } from "../predef";

export class CrewRankChanged {
	public readonly clanId: number;
	public readonly rankOrder: number;
	public readonly promotion: boolean;
	public readonly rankName: string;

	constructor(view: DataView) {
		if (view.byteLength !== 56) {
			throw new Error('Invalid view size');
		}
		this.clanId = view.getInt32(0, true);
		this.rankOrder = view.getInt32(8, true);
		this.promotion = view.getInt8(16) === 1;
		this.rankName = getStringFromDataView(view, 24, 55);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(56));
	}
}