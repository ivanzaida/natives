export class HubEntry {
	public readonly type: number;
	public readonly properties: number;
	public readonly access: number;
	public readonly cost: number;
	public readonly bossId1: number;
	public readonly bossId2: number;
	public readonly playerRole: number;
	public readonly bpulled: boolean;
	public readonly binvited: boolean;
	public readonly properties2: number;
	public readonly vehicle: number;
	public readonly crewId: number;
	public readonly private: boolean;
	public readonly vehicleType: number;
	public readonly hubId: number;

	constructor(view: DataView) {
		if (view.byteLength !== 120) {
			throw new Error('Invalid view size');
		}
		this.type = view.getInt32(0, true);
		this.properties = view.getInt32(8, true);
		this.access = view.getInt32(16, true);
		this.cost = view.getInt32(24, true);
		this.bossId1 = view.getInt32(32, true);
		this.bossId2 = view.getInt32(40, true);
		this.playerRole = view.getInt32(48, true);
		this.bpulled = view.getInt8(56) === 1;
		this.binvited = view.getInt8(64) === 1;
		this.properties2 = view.getInt32(72, true);
		this.vehicle = view.getInt32(80, true);
		this.crewId = view.getInt32(88, true);
		this.private = view.getInt8(96) === 1;
		this.vehicleType = view.getInt32(104, true);
		this.hubId = view.getInt32(112, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(120));
	}
}