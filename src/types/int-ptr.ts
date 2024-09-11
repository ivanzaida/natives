export class IntPtr {
    public readonly dataView: DataView;
    
    constructor() {
        this.dataView = new DataView(new ArrayBuffer(8));
    }

    public get value(): number {
        return this.dataView.getInt32(0, true);
    }

    public static fromValue(value: number): IntPtr {
        const ptr = new IntPtr();
        ptr.dataView.setInt32(0, value, true);
        return ptr;
    }
}