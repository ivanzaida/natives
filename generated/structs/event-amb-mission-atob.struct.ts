import { EventAmbientMission } from "./event-ambient-mission.struct";

export class EventAmbMissionAtob {
	public readonly data: EventAmbientMission;
	public readonly vehicleType: number;
	public readonly parTimeBeaten: number;
	public readonly type: number;

	constructor(view: DataView) {
		if (view.byteLength !== 120) {
			throw new Error('Invalid view size');
		}
		this.data = new EventAmbientMission(new DataView(view.buffer.slice(0, 96)));
		this.vehicleType = view.getInt32(96, true);
		this.parTimeBeaten = view.getInt32(104, true);
		this.type = view.getInt32(112, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(120));
	}
}