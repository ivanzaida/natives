import { EventAmbientMission } from "./event-ambient-mission.struct";

export class EventAmbMissionDeadDrop {
	public readonly data: EventAmbientMission;
	public readonly numTimesBagExchangeHands: number;
	public readonly timeBagHeld: number;

	constructor(view: DataView) {
		if (view.byteLength !== 112) {
			throw new Error('Invalid view size');
		}
		this.data = new EventAmbientMission(new DataView(view.buffer.slice(0, 96)));
		this.numTimesBagExchangeHands = view.getInt32(96, true);
		this.timeBagHeld = view.getInt32(104, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(112));
	}
}