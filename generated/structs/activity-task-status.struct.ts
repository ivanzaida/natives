import { getStringFromDataView } from "../predef";

export class ActivityTaskStatus {
	public readonly inProgressTasks: string[];
	public readonly completedTasks: string[];

	constructor(view: DataView) {
		if (view.byteLength !== 2048) {
			throw new Error('Invalid view size');
		}
		this.inProgressTasks = [getStringFromDataView(view, 0, 31), getStringFromDataView(view, 32, 63), getStringFromDataView(view, 64, 95), getStringFromDataView(view, 96, 127), getStringFromDataView(view, 128, 159), getStringFromDataView(view, 160, 191), getStringFromDataView(view, 192, 223), getStringFromDataView(view, 224, 255), getStringFromDataView(view, 256, 287), getStringFromDataView(view, 288, 319), getStringFromDataView(view, 320, 351), getStringFromDataView(view, 352, 383), getStringFromDataView(view, 384, 415), getStringFromDataView(view, 416, 447), getStringFromDataView(view, 448, 479), getStringFromDataView(view, 480, 511), getStringFromDataView(view, 512, 543), getStringFromDataView(view, 544, 575), getStringFromDataView(view, 576, 607), getStringFromDataView(view, 608, 639), getStringFromDataView(view, 640, 671), getStringFromDataView(view, 672, 703), getStringFromDataView(view, 704, 735), getStringFromDataView(view, 736, 767), getStringFromDataView(view, 768, 799), getStringFromDataView(view, 800, 831), getStringFromDataView(view, 832, 863), getStringFromDataView(view, 864, 895), getStringFromDataView(view, 896, 927), getStringFromDataView(view, 928, 959), getStringFromDataView(view, 960, 991), getStringFromDataView(view, 992, 1023)];
		this.completedTasks = [getStringFromDataView(view, 1024, 1055), getStringFromDataView(view, 1056, 1087), getStringFromDataView(view, 1088, 1119), getStringFromDataView(view, 1120, 1151), getStringFromDataView(view, 1152, 1183), getStringFromDataView(view, 1184, 1215), getStringFromDataView(view, 1216, 1247), getStringFromDataView(view, 1248, 1279), getStringFromDataView(view, 1280, 1311), getStringFromDataView(view, 1312, 1343), getStringFromDataView(view, 1344, 1375), getStringFromDataView(view, 1376, 1407), getStringFromDataView(view, 1408, 1439), getStringFromDataView(view, 1440, 1471), getStringFromDataView(view, 1472, 1503), getStringFromDataView(view, 1504, 1535), getStringFromDataView(view, 1536, 1567), getStringFromDataView(view, 1568, 1599), getStringFromDataView(view, 1600, 1631), getStringFromDataView(view, 1632, 1663), getStringFromDataView(view, 1664, 1695), getStringFromDataView(view, 1696, 1727), getStringFromDataView(view, 1728, 1759), getStringFromDataView(view, 1760, 1791), getStringFromDataView(view, 1792, 1823), getStringFromDataView(view, 1824, 1855), getStringFromDataView(view, 1856, 1887), getStringFromDataView(view, 1888, 1919), getStringFromDataView(view, 1920, 1951), getStringFromDataView(view, 1952, 1983), getStringFromDataView(view, 1984, 2015), getStringFromDataView(view, 2016, 2047)];
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(2048));
	}
}