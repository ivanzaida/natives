---
ns: CFX
apiset: client
---
## GET_ACTIVE_PLAYERS

```c
int[] GET_ACTIVE_PLAYERS();
```

Returns all player indices for 'active' physical players known to the client.
The data returned adheres to the following layout:
```
[127, 42, 13, 37]
```

## Return value
An object containing a list of player indices.
