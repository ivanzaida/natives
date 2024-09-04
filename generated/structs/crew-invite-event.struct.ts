import { getStringFromDataView } from "../predef";

export class CrewInviteEvent {
	public readonly clanId: number;
	public readonly crewName: string;
	public readonly crewTag: string;
	public readonly rankName: string;
	public readonly hasMessage: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 88) {
			throw new Error('Invalid view size');
		}
		this.clanId = view.getInt32(0, true);
		this.crewName = getStringFromDataView(view, 8, 39);
		this.crewTag = getStringFromDataView(view, 40, 47);
		this.rankName = getStringFromDataView(view, 48, 79);
		this.hasMessage = view.getInt8(80) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(88));
	}
}