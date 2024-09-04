import { ContrabandMission } from "./contraband-mission.struct";

export class BuyContrabandMission {
	public readonly data: ContrabandMission;
	public readonly startVolume: number;
	public readonly endVolume: number;
	public readonly startWarehouseCapacity: number;
	public readonly endWarehouseCapacity: number;
	public readonly contrabandDestroyed: number;
	public readonly contrabandDelivered: number;
	public readonly fromHackerTruck: number;
	public readonly properties: number;
	public readonly properties2: number;

	constructor(view: DataView) {
		if (view.byteLength !== 216) {
			throw new Error('Invalid view size');
		}
		this.data = new ContrabandMission(new DataView(view.buffer.slice(0, 144)));
		this.startVolume = view.getInt32(144, true);
		this.endVolume = view.getInt32(152, true);
		this.startWarehouseCapacity = view.getInt32(160, true);
		this.endWarehouseCapacity = view.getInt32(168, true);
		this.contrabandDestroyed = view.getInt32(176, true);
		this.contrabandDelivered = view.getInt32(184, true);
		this.fromHackerTruck = view.getInt32(192, true);
		this.properties = view.getInt32(200, true);
		this.properties2 = view.getInt32(208, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(216));
	}
}