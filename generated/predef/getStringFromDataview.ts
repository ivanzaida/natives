export const getStringFromDataView = (dataView: DataView, offset: number, end = dataView.byteLength): string => {
    let text = '';
    let val = -1;
  
    while (offset < dataView.byteLength && offset < end) {
      val = dataView.getUint8(offset++);
      if (val === 0) break;
      text += String.fromCharCode(val);
    }
  
    return text;
  };
  