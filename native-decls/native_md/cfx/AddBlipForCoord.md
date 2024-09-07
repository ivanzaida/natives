---
ns: CFX
apiset: server
---
## ADD_BLIP_FOR_COORD

```c
Blip ADD_BLIP_FOR_COORD(float x, float y, float z);
```

Creates a blip for the specified coordinates. You can use `SET_BLIP_` natives to change the blip.

**This is the server-side RPC native equivalent of the client native [ADD\_BLIP\_FOR\_COORD](?_0x5A039BB0BCA604B6).**

## Parameters
* **x**: The X coordinate to create the blip on.
* **y**: The Y coordinate.
* **z**: The Z coordinate.

## Return value
A blip handle.
