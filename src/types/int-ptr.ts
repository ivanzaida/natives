export class IntPtr {
    public readonly dataView: DataView;
    
    constructor() {
        this.dataView = new DataView(new ArrayBuffer(8));
    }

    public get value(): number {
        return this.dataView.getInt32(0, true);
    }
}