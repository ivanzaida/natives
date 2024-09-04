import { getStringFromDataView } from "../predef";
import { GamerHandle } from "./gamer-handle.struct";

export class LeaderboardCachedDisplayData {
	public readonly id: number;
	public readonly gamerName: string;
	public readonly coDriverName: string;
	public readonly gamerHandle: GamerHandle;
	public readonly coDriverHandle: GamerHandle;
	public readonly customVehicle: boolean;
	public readonly rank: number;
	public readonly rowFlags: number;
	public readonly numColumns: number;
	public readonly columnsBitSets: number;
	public readonly fColumnData: number[];
	public readonly columnData: number[];

	constructor(view: DataView) {
		if (view.byteLength !== 896) {
			throw new Error('Invalid view size');
		}
		this.id = view.getInt32(0, true);
		this.gamerName = getStringFromDataView(view, 8, 71);
		this.coDriverName = getStringFromDataView(view, 72, 135);
		this.gamerHandle = new GamerHandle(new DataView(view.buffer.slice(136, 240)));
		this.coDriverHandle = new GamerHandle(new DataView(view.buffer.slice(240, 344)));
		this.customVehicle = view.getInt8(344) === 1;
		this.rank = view.getInt32(352, true);
		this.rowFlags = view.getInt32(360, true);
		this.numColumns = view.getInt32(368, true);
		this.columnsBitSets = view.getInt32(376, true);
		this.fColumnData = [view.getFloat32(384, true), view.getFloat32(392, true), view.getFloat32(400, true), view.getFloat32(408, true), view.getFloat32(416, true), view.getFloat32(424, true), view.getFloat32(432, true), view.getFloat32(440, true), view.getFloat32(448, true), view.getFloat32(456, true), view.getFloat32(464, true), view.getFloat32(472, true), view.getFloat32(480, true), view.getFloat32(488, true), view.getFloat32(496, true), view.getFloat32(504, true), view.getFloat32(512, true), view.getFloat32(520, true), view.getFloat32(528, true), view.getFloat32(536, true), view.getFloat32(544, true), view.getFloat32(552, true), view.getFloat32(560, true), view.getFloat32(568, true), view.getFloat32(576, true), view.getFloat32(584, true), view.getFloat32(592, true), view.getFloat32(600, true), view.getFloat32(608, true), view.getFloat32(616, true), view.getFloat32(624, true), view.getFloat32(632, true)];
		this.columnData = [view.getInt32(640, true), view.getInt32(648, true), view.getInt32(656, true), view.getInt32(664, true), view.getInt32(672, true), view.getInt32(680, true), view.getInt32(688, true), view.getInt32(696, true), view.getInt32(704, true), view.getInt32(712, true), view.getInt32(720, true), view.getInt32(728, true), view.getInt32(736, true), view.getInt32(744, true), view.getInt32(752, true), view.getInt32(760, true), view.getInt32(768, true), view.getInt32(776, true), view.getInt32(784, true), view.getInt32(792, true), view.getInt32(800, true), view.getInt32(808, true), view.getInt32(816, true), view.getInt32(824, true), view.getInt32(832, true), view.getInt32(840, true), view.getInt32(848, true), view.getInt32(856, true), view.getInt32(864, true), view.getInt32(872, true), view.getInt32(880, true), view.getInt32(888, true)];
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(896));
	}
}