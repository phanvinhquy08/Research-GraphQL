1. Query cached, make sure cached data is up to date with server

- Polling: { pollInterval: 500 } set intervall query
- Refetch: return from useQuery, auto refresh with variables previous
- When refetch, useQuery return key "netWorkStatus", can check status with NetworkStatus, to Inspecting loading states, with provide "notifyOnNetworkStatusChange: true" on useQuery options.
-
