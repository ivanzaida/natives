import { EventAmbientMission } from "./event-ambient-mission.struct";

export class EventAmbMissionUrbanWarfare {
	public readonly data: EventAmbientMission;
	public readonly vehicleType: number;
	public readonly waveReached: number;

	constructor(view: DataView) {
		if (view.byteLength !== 112) {
			throw new Error('Invalid view size');
		}
		this.data = new EventAmbientMission(new DataView(view.buffer.slice(0, 96)));
		this.vehicleType = view.getInt32(96, true);
		this.waveReached = view.getInt32(104, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(112));
	}
}