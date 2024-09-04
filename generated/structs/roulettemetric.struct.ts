import { CasinoMetric } from "./casino-metric.struct";

export class Roulettemetric {
	public readonly casinoMetric: CasinoMetric;
	public readonly iBetStraight: boolean;
	public readonly iBetSplit: boolean;
	public readonly iBetStreet: boolean;
	public readonly iBetCorner: boolean;
	public readonly iBetFiveNumber: boolean;
	public readonly iBetSixLine: boolean;
	public readonly oBetRed: boolean;
	public readonly oBetBlack: boolean;
	public readonly oBetOddNumber: boolean;
	public readonly oBetEvenNumber: boolean;
	public readonly oBetLowBracket: boolean;
	public readonly oBetHighBracket: boolean;
	public readonly oBetDozen: boolean;
	public readonly oBetColumn: boolean;
	public readonly winningNumber: number;
	public readonly winningColour: number;

	constructor(view: DataView) {
		if (view.byteLength !== 296) {
			throw new Error('Invalid view size');
		}
		this.casinoMetric = new CasinoMetric(new DataView(view.buffer.slice(0, 168)));
		this.iBetStraight = view.getInt8(168) === 1;
		this.iBetSplit = view.getInt8(176) === 1;
		this.iBetStreet = view.getInt8(184) === 1;
		this.iBetCorner = view.getInt8(192) === 1;
		this.iBetFiveNumber = view.getInt8(200) === 1;
		this.iBetSixLine = view.getInt8(208) === 1;
		this.oBetRed = view.getInt8(216) === 1;
		this.oBetBlack = view.getInt8(224) === 1;
		this.oBetOddNumber = view.getInt8(232) === 1;
		this.oBetEvenNumber = view.getInt8(240) === 1;
		this.oBetLowBracket = view.getInt8(248) === 1;
		this.oBetHighBracket = view.getInt8(256) === 1;
		this.oBetDozen = view.getInt8(264) === 1;
		this.oBetColumn = view.getInt8(272) === 1;
		this.winningNumber = view.getInt32(280, true);
		this.winningColour = view.getInt32(288, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(296));
	}
}