---
ns: CFX
apiset: server
---
## ADD_BLIP_FOR_RADIUS

```c
Blip ADD_BLIP_FOR_RADIUS(float posX, float posY, float posZ, float radius);
```

Create a blip with a radius for the specified coordinates (it doesnt create the blip sprite, so you need to use [AddBlipCoords](#\_0xC6F43D0E))
Example image:
![example](https://i.imgur.com/9hQl3DB.png)

**This is the server-side RPC native equivalent of the client native [ADD\_BLIP\_FOR\_RADIUS](?_0x46818D79B1F7499A).**

## Parameters
* **posX**: The x position of the blip (you can also send a vector3 instead of the bulk coordinates)
* **posY**: The y position of the blip (you can also send a vector3 instead of the bulk coordinates)
* **posZ**: The z position of the blip (you can also send a vector3 instead of the bulk coordinates)
* **radius**: The number that defines the radius of the blip circle

## Return value
The blip handle that can be manipulated with every `SetBlip` natives
