import { EventAmbientMission } from "./event-ambient-mission.struct";

export class EventAmbMissionKingoftheCastle {
	public readonly data: EventAmbientMission;
	public readonly numOfKings: number;
	public readonly killsAsKing: number;
	public readonly deathsAsKing: number;
	public readonly areaControlPoints: number;

	constructor(view: DataView) {
		if (view.byteLength !== 128) {
			throw new Error('Invalid view size');
		}
		this.data = new EventAmbientMission(new DataView(view.buffer.slice(0, 96)));
		this.numOfKings = view.getInt32(96, true);
		this.killsAsKing = view.getInt32(104, true);
		this.deathsAsKing = view.getInt32(112, true);
		this.areaControlPoints = view.getInt32(120, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(128));
	}
}