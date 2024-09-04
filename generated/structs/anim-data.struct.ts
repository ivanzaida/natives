import { EAnimationPlaybackType, EAnimationFlags, EIkControlFlags } from "../enums";
import { getStringFromDataView } from "../predef";

export class AnimData {
	public readonly type: EAnimationPlaybackType;
	public readonly dictionary0: string;
	public readonly anim0: string;
	public readonly phase0: number;
	public readonly rate0: number;
	public readonly weight0: number;
	public readonly dictionary1: string;
	public readonly anim1: string;
	public readonly phase1: number;
	public readonly rate1: number;
	public readonly weight1: number;
	public readonly dictionary2: string;
	public readonly anim2: string;
	public readonly phase2: number;
	public readonly rate2: number;
	public readonly weight2: number;
	public readonly filter: number;
	public readonly blendInDelta: number;
	public readonly blendOutDelta: number;
	public readonly timeToPlay: number;
	public readonly flags: EAnimationFlags;
	public readonly ikFlags: EIkControlFlags;

	constructor(view: DataView) {
		if (view.byteLength !== 320) {
			throw new Error('Invalid view size');
		}
		this.type = view.getInt32(0, true);
		this.dictionary0 = getStringFromDataView(view, 8, 39);
		this.anim0 = getStringFromDataView(view, 40, 71);
		this.phase0 = view.getFloat32(72, true);
		this.rate0 = view.getFloat32(80, true);
		this.weight0 = view.getFloat32(88, true);
		this.dictionary1 = getStringFromDataView(view, 96, 127);
		this.anim1 = getStringFromDataView(view, 128, 159);
		this.phase1 = view.getFloat32(160, true);
		this.rate1 = view.getFloat32(168, true);
		this.weight1 = view.getFloat32(176, true);
		this.dictionary2 = getStringFromDataView(view, 184, 215);
		this.anim2 = getStringFromDataView(view, 216, 247);
		this.phase2 = view.getFloat32(248, true);
		this.rate2 = view.getFloat32(256, true);
		this.weight2 = view.getFloat32(264, true);
		this.filter = view.getInt32(272, true);
		this.blendInDelta = view.getFloat32(280, true);
		this.blendOutDelta = view.getFloat32(288, true);
		this.timeToPlay = view.getInt32(296, true);
		this.flags = view.getInt32(304, true);
		this.ikFlags = view.getInt32(312, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(320));
	}
}