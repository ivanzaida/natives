---
ns: CFX
apiset: server
---
## ADD_BLIP_FOR_ENTITY

```c
Blip ADD_BLIP_FOR_ENTITY(Entity entity);
```

Create a blip that by default is red (enemy), you can use [SET_BLIP_AS_FRIENDLY](#\_0xC6F43D0E) to make it blue (friend).\
Can be used for objects, vehicles and peds.
Example of enemy:
![enemy](https://i.imgur.com/fl78svv.png)
Example of friend:
![friend](https://i.imgur.com/Q16ho5d.png)

**This is the server-side RPC native equivalent of the client native [ADD\_BLIP\_FOR\_ENTITY](?_0x5CDE92C702A8FCE7).**

## Parameters
* **entity**: The entity handle to create the blip.

## Return value
A blip handle.
