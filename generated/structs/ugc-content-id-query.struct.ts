import { getStringFromDataView } from "../predef";

export class UgcContentIdQuery {
	public readonly contentId: string[];

	constructor(view: DataView) {
		if (view.byteLength !== 1536) {
			throw new Error('Invalid view size');
		}
		this.contentId = [getStringFromDataView(view, 0, 23), getStringFromDataView(view, 24, 47), getStringFromDataView(view, 48, 71), getStringFromDataView(view, 72, 95), getStringFromDataView(view, 96, 119), getStringFromDataView(view, 120, 143), getStringFromDataView(view, 144, 167), getStringFromDataView(view, 168, 191), getStringFromDataView(view, 192, 215), getStringFromDataView(view, 216, 239), getStringFromDataView(view, 240, 263), getStringFromDataView(view, 264, 287), getStringFromDataView(view, 288, 311), getStringFromDataView(view, 312, 335), getStringFromDataView(view, 336, 359), getStringFromDataView(view, 360, 383), getStringFromDataView(view, 384, 407), getStringFromDataView(view, 408, 431), getStringFromDataView(view, 432, 455), getStringFromDataView(view, 456, 479), getStringFromDataView(view, 480, 503), getStringFromDataView(view, 504, 527), getStringFromDataView(view, 528, 551), getStringFromDataView(view, 552, 575), getStringFromDataView(view, 576, 599), getStringFromDataView(view, 600, 623), getStringFromDataView(view, 624, 647), getStringFromDataView(view, 648, 671), getStringFromDataView(view, 672, 695), getStringFromDataView(view, 696, 719), getStringFromDataView(view, 720, 743), getStringFromDataView(view, 744, 767), getStringFromDataView(view, 768, 791), getStringFromDataView(view, 792, 815), getStringFromDataView(view, 816, 839), getStringFromDataView(view, 840, 863), getStringFromDataView(view, 864, 887), getStringFromDataView(view, 888, 911), getStringFromDataView(view, 912, 935), getStringFromDataView(view, 936, 959), getStringFromDataView(view, 960, 983), getStringFromDataView(view, 984, 1007), getStringFromDataView(view, 1008, 1031), getStringFromDataView(view, 1032, 1055), getStringFromDataView(view, 1056, 1079), getStringFromDataView(view, 1080, 1103), getStringFromDataView(view, 1104, 1127), getStringFromDataView(view, 1128, 1151), getStringFromDataView(view, 1152, 1175), getStringFromDataView(view, 1176, 1199), getStringFromDataView(view, 1200, 1223), getStringFromDataView(view, 1224, 1247), getStringFromDataView(view, 1248, 1271), getStringFromDataView(view, 1272, 1295), getStringFromDataView(view, 1296, 1319), getStringFromDataView(view, 1320, 1343), getStringFromDataView(view, 1344, 1367), getStringFromDataView(view, 1368, 1391), getStringFromDataView(view, 1392, 1415), getStringFromDataView(view, 1416, 1439), getStringFromDataView(view, 1440, 1463), getStringFromDataView(view, 1464, 1487), getStringFromDataView(view, 1488, 1511), getStringFromDataView(view, 1512, 1535)];
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(1536));
	}
}