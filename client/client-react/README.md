1. Query cached, make sure cached data is up to date with server

- Polling: { pollInterval: 500 } set intervall query
- Refetch: return from useQuery, action will call by user, auto refresh with variables previous
- When refetch, useQuery return key "netWorkStatus", can check status with NetworkStatus, to Inspecting loading states, with provide "notifyOnNetworkStatusChange: true" on useQuery options.
- ErrorPolicy: https://apollo-visualizer.vercel.app/
- useLazyQuery: return a func will call by user and pass in it { variables: {x} }
- fetchPolicy: cached or network

2. Mutation

- useMutation return a func mutate will call by user, pass in it an option, these option will
  override the options provided to useMutation.
- update cached when update single entity(edit): appllo cache wil automatically update cached if the mutation result return the id of entity
-

3. Fragment

- When get the source of project, should see the list of fragments they use, and check the package.json script to generate type or fragments

4. client, cache methods

- readQuery: run query in local cache, return object data : {[field] : any}
- readFragment: return {}
