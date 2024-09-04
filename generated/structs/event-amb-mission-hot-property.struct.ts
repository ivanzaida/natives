import { EventAmbientMission } from "./event-ambient-mission.struct";

export class EventAmbMissionHotProperty {
	public readonly data: EventAmbientMission;
	public readonly numTimesBriefcaseExchangeHands: number;
	public readonly timeBriefecaseHeld: number;

	constructor(view: DataView) {
		if (view.byteLength !== 112) {
			throw new Error('Invalid view size');
		}
		this.data = new EventAmbientMission(new DataView(view.buffer.slice(0, 96)));
		this.numTimesBriefcaseExchangeHands = view.getInt32(96, true);
		this.timeBriefecaseHeld = view.getInt32(104, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(112));
	}
}