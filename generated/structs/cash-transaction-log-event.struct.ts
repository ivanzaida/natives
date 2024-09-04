import { ETransactionIds, ETransactionTypes } from "../enums";
import { GamerHandle } from "./gamer-handle.struct";
import { getStringFromDataView } from "../predef";

export class CashTransactionLogEvent {
	public readonly transactionId: number;
	public readonly iId: ETransactionIds;
	public readonly iType: ETransactionTypes;
	public readonly amount: number;
	public readonly itemId: number;
	public readonly gamer: GamerHandle;
	public readonly stringAmount: string;

	constructor(view: DataView) {
		if (view.byteLength !== 208) {
			throw new Error('Invalid view size');
		}
		this.transactionId = view.getInt32(0, true);
		this.iId = view.getInt32(8, true);
		this.iType = view.getInt32(16, true);
		this.amount = view.getInt32(24, true);
		this.itemId = view.getInt32(32, true);
		this.gamer = new GamerHandle(new DataView(view.buffer.slice(40, 144)));
		this.stringAmount = getStringFromDataView(view, 144, 207);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(208));
	}
}