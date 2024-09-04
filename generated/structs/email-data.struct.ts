import { getStringFromDataView } from "../predef";
import { GamerHandle } from "./gamer-handle.struct";

export class EmailData {
	public readonly id: number;
	public readonly createPosixTime: number;
	public readonly senderName: string;
	public readonly senderHandle: GamerHandle;
	public readonly subject: string[];
	public readonly contents: string[];
	public readonly image: number;

	constructor(view: DataView) {
		if (view.byteLength !== 1312) {
			throw new Error('Invalid view size');
		}
		this.id = view.getInt32(0, true);
		this.createPosixTime = view.getInt32(8, true);
		this.senderName = getStringFromDataView(view, 16, 47);
		this.senderHandle = new GamerHandle(new DataView(view.buffer.slice(48, 152)));
		this.subject = [getStringFromDataView(view, 152, 215), getStringFromDataView(view, 216, 279)];
		this.contents = [getStringFromDataView(view, 280, 343), getStringFromDataView(view, 344, 407), getStringFromDataView(view, 408, 471), getStringFromDataView(view, 472, 535), getStringFromDataView(view, 536, 599), getStringFromDataView(view, 600, 663), getStringFromDataView(view, 664, 727), getStringFromDataView(view, 728, 791), getStringFromDataView(view, 792, 855), getStringFromDataView(view, 856, 919), getStringFromDataView(view, 920, 983), getStringFromDataView(view, 984, 1047), getStringFromDataView(view, 1048, 1111), getStringFromDataView(view, 1112, 1175), getStringFromDataView(view, 1176, 1239), getStringFromDataView(view, 1240, 1303)];
		this.image = view.getInt32(1304, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(1312));
	}
}