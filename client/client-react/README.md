1. Query cached, make sure cached data is up to date with server

- Polling: { pollInterval: 500 } set intervall query
- Refetch: return from useQuery, action will call by user, auto refresh with variables previous
- When refetch, useQuery return key "netWorkStatus", can check status with NetworkStatus, to Inspecting loading states, with provide "notifyOnNetworkStatusChange: true" on useQuery options.
- ErrorPolicy: https://apollo-visualizer.vercel.app/
- useLazyQuery: return a func will call by user and pass in it { variables: x }
- fetchPolicy: cached or network
