import { getStringFromDataView } from "../predef";

export class NetworkClanDesc {
	public readonly id: number;
	public readonly clanName: string;
	public readonly clanTag: string;
	public readonly memberCount: number;
	public readonly isSystemClan: number;
	public readonly isOpenClan: number;
	public readonly rankName: string;
	public readonly rankOrder: number;
	public readonly createdTimePosix: number;
	public readonly clanColorRed: number;
	public readonly clanColorGreen: number;
	public readonly clanColorBlue: number;

	constructor(view: DataView) {
		if (view.byteLength !== 176) {
			throw new Error('Invalid view size');
		}
		this.id = view.getInt32(0, true);
		this.clanName = getStringFromDataView(view, 8, 71);
		this.clanTag = getStringFromDataView(view, 72, 79);
		this.memberCount = view.getInt32(80, true);
		this.isSystemClan = view.getInt32(88, true);
		this.isOpenClan = view.getInt32(96, true);
		this.rankName = getStringFromDataView(view, 104, 135);
		this.rankOrder = view.getInt32(136, true);
		this.createdTimePosix = view.getInt32(144, true);
		this.clanColorRed = view.getInt32(152, true);
		this.clanColorGreen = view.getInt32(160, true);
		this.clanColorBlue = view.getInt32(168, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(176));
	}
}