---
ns: CFX
aliases: ["0xCE5D0E5E315DB238"]
apiset: server
---
## _ADD_BLIP_FOR_AREA

```c
Blip _ADD_BLIP_FOR_AREA(float x, float y, float z, float width, float height);
```

Adds a rectangular blip for the specified coordinates/area.
It is recommended to use [SET_BLIP_ROTATION](#\_0xF87683CDF73C3F6E) and [SET_BLIP_COLOUR](#\_0x03D7FB09E75D6B7E) to make the blip not rotate along with the camera.
By default, the blip will show as a *regular* blip with the specified color/sprite if it is outside of the minimap view.
Example image:
![minimap](https://i.imgur.com/qLbXWcQ.png)
![big map](https://i.imgur.com/0j7O7Rh.png)
(Native name is *likely* to actually be ADD_BLIP_FOR_AREA, but due to the usual reasons this can't be confirmed)

**This is the server-side RPC native equivalent of the client native [\_ADD\_BLIP\_FOR\_AREA](?_0xCE5D0E5E315DB238).**

## Parameters
* **x**: The X coordinate of the center of the blip.
* **y**: The Y coordinate of the center of the blip.
* **z**: The Z coordinate of the center of the blip.
* **width**: The width of the blip.
* **height**: The height of the blip.

## Return value
A handle to the blip.
