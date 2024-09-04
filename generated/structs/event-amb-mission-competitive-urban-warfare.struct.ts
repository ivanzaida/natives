import { EventAmbientMission } from "./event-ambient-mission.struct";

export class EventAmbMissionCompetitiveUrbanWarfare {
	public readonly data: EventAmbientMission;
	public readonly waveReached: number;
	public readonly killsPerPlayer: number;

	constructor(view: DataView) {
		if (view.byteLength !== 112) {
			throw new Error('Invalid view size');
		}
		this.data = new EventAmbientMission(new DataView(view.buffer.slice(0, 96)));
		this.waveReached = view.getInt32(96, true);
		this.killsPerPlayer = view.getInt32(104, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(112));
	}
}