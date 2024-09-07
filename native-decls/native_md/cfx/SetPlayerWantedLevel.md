---
ns: CFX
apiset: server
---
## SET_PLAYER_WANTED_LEVEL

```c
void SET_PLAYER_WANTED_LEVEL(Player player, int wantedLevel, BOOL delayedResponse);
```

SET_PLAYER_WANTED_LEVEL

**This is the server-side RPC native equivalent of the client native [SET\_PLAYER\_WANTED\_LEVEL](?_0x39FF19C64EF7DA5B).**

## Parameters
* **player**: the target player
* **wantedLevel**: the wanted level 1-5
* **delayedResponse**: false = 0-10sec police spawn response time, true = 10-20sec police spawn response time

