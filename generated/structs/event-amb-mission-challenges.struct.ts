import { EventAmbientMission } from "./event-ambient-mission.struct";

export class EventAmbMissionChallenges {
	public readonly data: EventAmbientMission;
	public readonly challengeType: number;
	public readonly challengeScore: number;

	constructor(view: DataView) {
		if (view.byteLength !== 112) {
			throw new Error('Invalid view size');
		}
		this.data = new EventAmbientMission(new DataView(view.buffer.slice(0, 96)));
		this.challengeType = view.getInt32(96, true);
		this.challengeScore = view.getFloat32(104, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(112));
	}
}