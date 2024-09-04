import { EventAmbientMission } from "./event-ambient-mission.struct";

export class EventAmbMissionPlaneDrop {
	public readonly data: EventAmbientMission;
	public readonly routeTaken: number;
	public readonly numCratesCollected: number;
	public readonly numCratesDropped: number;

	constructor(view: DataView) {
		if (view.byteLength !== 120) {
			throw new Error('Invalid view size');
		}
		this.data = new EventAmbientMission(new DataView(view.buffer.slice(0, 96)));
		this.routeTaken = view.getInt32(96, true);
		this.numCratesCollected = view.getInt32(104, true);
		this.numCratesDropped = view.getInt32(112, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(120));
	}
}