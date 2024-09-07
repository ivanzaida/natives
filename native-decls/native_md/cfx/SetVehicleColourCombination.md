---
ns: CFX
apiset: server
---
## SET_VEHICLE_COLOUR_COMBINATION

```c
void SET_VEHICLE_COLOUR_COMBINATION(Vehicle vehicle, int colorCombination);
```

Sets the selected vehicle's colors to their default value (specific variant specified using the colorCombination parameter).
Range of possible values for colorCombination is currently unknown, I couldn't find where these values are stored either (Disquse's guess was vehicles.meta but I haven't seen it in there.)

**This is the server-side RPC native equivalent of the client native [SET\_VEHICLE\_COLOUR\_COMBINATION](?_0x33E8CD3322E2FE31).**

## Parameters
* **vehicle**: The vehicle to modify.
* **colorCombination**: One of the default color values of the vehicle.

