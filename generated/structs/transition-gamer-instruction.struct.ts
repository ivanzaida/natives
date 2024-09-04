import { GamerHandle } from "./gamer-handle.struct";
import { getStringFromDataView } from "../predef";

export class TransitionGamerInstruction {
	public readonly fromGamer: GamerHandle;
	public readonly toGamer: GamerHandle;
	public readonly gamerTag: string;
	public readonly instruction: number;
	public readonly instructionParam: number;

	constructor(view: DataView) {
		if (view.byteLength !== 288) {
			throw new Error('Invalid view size');
		}
		this.fromGamer = new GamerHandle(new DataView(view.buffer.slice(0, 104)));
		this.toGamer = new GamerHandle(new DataView(view.buffer.slice(104, 208)));
		this.gamerTag = getStringFromDataView(view, 208, 271);
		this.instruction = view.getInt32(272, true);
		this.instructionParam = view.getInt32(280, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(288));
	}
}