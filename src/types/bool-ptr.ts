export class BoolPtr {
    public readonly dataView: DataView;

    constructor() {
        this.dataView = new DataView(new ArrayBuffer(8));
    }

    public get value(): boolean {
        return this.dataView.getInt32(0, true) === 1;
    }
}