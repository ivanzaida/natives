---
ns: CFX
apiset: server
---
## TASK_GO_STRAIGHT_TO_COORD

```c
void TASK_GO_STRAIGHT_TO_COORD(Ped ped, float x, float y, float z, float speed, int timeout, float targetHeading, float distanceToSlide);
```

TASK_GO_STRAIGHT_TO_COORD

**This is the server-side RPC native equivalent of the client native [TASK\_GO\_STRAIGHT\_TO\_COORD](?_0xD76B57B44F1E6F8B).**

## Parameters
* **ped**: The ped handle.
* **x**: The x coordinate.
* **y**: The y coordinate.
* **z**: The z coordinate.
* **speed**: The ped movement speed.
* **timeout**: \-1 , other values appear to break the ped movement.
* **targetHeading**: The heading you want the ped to be on x,y,z coord.
* **distanceToSlide**: The distance from x,y,z where the ped will start sliding.

