import { EventAmbientMission } from "./event-ambient-mission.struct";

export class EventAmbMissionCriminalDamage {
	public readonly data: EventAmbientMission;
	public readonly propertyDamageValue: number;

	constructor(view: DataView) {
		if (view.byteLength !== 104) {
			throw new Error('Invalid view size');
		}
		this.data = new EventAmbientMission(new DataView(view.buffer.slice(0, 96)));
		this.propertyDamageValue = view.getInt32(96, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(104));
	}
}