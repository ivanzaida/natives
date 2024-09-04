import { EventAmbientMission } from "./event-ambient-mission.struct";

export class EventAmbMissionVehicleTarget {
	public readonly data: EventAmbientMission;
	public readonly vehicleType: number;

	constructor(view: DataView) {
		if (view.byteLength !== 104) {
			throw new Error('Invalid view size');
		}
		this.data = new EventAmbientMission(new DataView(view.buffer.slice(0, 96)));
		this.vehicleType = view.getInt32(96, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(104));
	}
}