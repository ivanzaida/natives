---
ns: CFX
apiset: server
---
## CREATE_OBJECT

```c
Entity CREATE_OBJECT(Hash modelHash, float x, float y, float z, BOOL isNetwork, BOOL netMissionEntity, BOOL doorFlag);
```

Creates an object (prop) with the specified model at the specified position, offset on the Z axis by the radius of the object's model.
This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).

**This is the server-side RPC native equivalent of the client native [CREATE\_OBJECT](?_0x509D5878EB39E842).**

## Parameters
* **modelHash**: The model to spawn.
* **x**: Spawn coordinate X component.
* **y**: Spawn coordinate Y component.
* **z**: Spawn coordinate Z component, 'ground level'.
* **isNetwork**: Whether to create a network object for the object. If false, the object exists only locally.
* **netMissionEntity**: Whether to register the object as pinned to the script host in the R\* network model.
* **doorFlag**: False to create a door archetype (archetype flag bit 26 set) as a door. Required to be set to true to create door models in network mode.

## Return value
A script handle (fwScriptGuid index) for the object, or `0` if the object failed to be created.
