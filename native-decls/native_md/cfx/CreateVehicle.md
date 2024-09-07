---
ns: CFX
apiset: server
---
## CREATE_VEHICLE

```c
Entity CREATE_VEHICLE(Hash modelHash, float x, float y, float z, float heading, BOOL isNetwork, BOOL netMissionEntity);
```

Creates a vehicle with the specified model at the specified position. This vehicle will initially be owned by the creating
script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
```
NativeDB Added Parameter 8: BOOL p7
```

**This is the server-side RPC native equivalent of the client native [CREATE\_VEHICLE](?_0xAF35D0D2583051B0).**

## Parameters
* **modelHash**: The model of vehicle to spawn.
* **x**: Spawn coordinate X component.
* **y**: Spawn coordinate Y component.
* **z**: Spawn coordinate Z component.
* **heading**: Heading to face towards, in degrees.
* **isNetwork**: Whether to create a network object for the vehicle. If false, the vehicle exists only locally.
* **netMissionEntity**: Whether to register the vehicle as pinned to the script host in the R\* network model.

## Return value
A script handle (fwScriptGuid index) for the vehicle, or `0` if the vehicle failed to be created.
