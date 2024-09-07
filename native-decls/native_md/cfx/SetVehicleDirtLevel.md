---
ns: CFX
apiset: server
---
## SET_VEHICLE_DIRT_LEVEL

```c
void SET_VEHICLE_DIRT_LEVEL(Vehicle vehicle, float dirtLevel);
```

Sets the dirt level of the passed vehicle.

**This is the server-side RPC native equivalent of the client native [SET\_VEHICLE\_DIRT\_LEVEL](?_0x79D3B596FE44EE8B).**

## Parameters
* **vehicle**: The vehicle to set.
* **dirtLevel**: A number between 0.0 and 15.0 representing the vehicles dirt level.

