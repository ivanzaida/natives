import { EventAmbientMission } from "./event-ambient-mission.struct";

export class EventAmbMissionCheckpointCollection {
	public readonly data: EventAmbientMission;
	public readonly quarterMapChosen: number;
	public readonly numCheckpointsCollected: number;
	public readonly notCollectedCheckpoints_0: number;
	public readonly notCollectedCheckpoints_1: number;
	public readonly notCollectedCheckpoints_2: number;
	public readonly notCollectedCheckpoints_3: number;
	public readonly notCollectedCheckpoints_4: number;
	public readonly notCollectedCheckpoints_5: number;
	public readonly notCollectedCheckpoints_6: number;
	public readonly notCollectedCheckpoints_7: number;
	public readonly notCollectedCheckpoints_8: number;
	public readonly notCollectedCheckpoints_9: number;

	constructor(view: DataView) {
		if (view.byteLength !== 192) {
			throw new Error('Invalid view size');
		}
		this.data = new EventAmbientMission(new DataView(view.buffer.slice(0, 96)));
		this.quarterMapChosen = view.getInt32(96, true);
		this.numCheckpointsCollected = view.getInt32(104, true);
		this.notCollectedCheckpoints_0 = view.getInt32(112, true);
		this.notCollectedCheckpoints_1 = view.getInt32(120, true);
		this.notCollectedCheckpoints_2 = view.getInt32(128, true);
		this.notCollectedCheckpoints_3 = view.getInt32(136, true);
		this.notCollectedCheckpoints_4 = view.getInt32(144, true);
		this.notCollectedCheckpoints_5 = view.getInt32(152, true);
		this.notCollectedCheckpoints_6 = view.getInt32(160, true);
		this.notCollectedCheckpoints_7 = view.getInt32(168, true);
		this.notCollectedCheckpoints_8 = view.getInt32(176, true);
		this.notCollectedCheckpoints_9 = view.getInt32(184, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(192));
	}
}