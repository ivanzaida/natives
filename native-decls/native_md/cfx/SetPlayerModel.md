---
ns: CFX
apiset: server
---
## SET_PLAYER_MODEL

```c
void SET_PLAYER_MODEL(Player player, Hash model);
```

Set the model for a specific Player. Note that this will destroy the current Ped for the Player and create a new one, any reference to the old ped will be invalid after calling this.
As per usual, make sure to request the model first and wait until it has loaded.

**This is the server-side RPC native equivalent of the client native [SET\_PLAYER\_MODEL](?_0x00A1CADD00108836).**

## Parameters
* **player**: The player to set the model for
* **model**: The model to use

