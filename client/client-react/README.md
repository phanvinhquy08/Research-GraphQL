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
- update cached when update single entity(edit): appllo cache will automatically update cached if the mutation result return the id of entity
-

3. Fragment

- When get the source of project, should see the list of fragments they use, and check the package.json script to generate type or fragments
- Check config of fetchPolicy, typePolicy

4. client, cache methods
   a. client

- readQuery: run query in local cache, return object {[field] : any} (can be use in list or item), if query already execute
- writeQuery: write data to local, return void (can be use in list or item), arguments: data must provide
- readFragment: return object want to read, part of query result. Arguments: id(or custormize) : "[Schema]:id", fragment.
- writeFragment: write data to local, return void (only in item), arguments: data must provide
  b. cache
- readQuery: same as client.readQuery
- writeQuery: return reference {\_ref: "ROOT_QUERY"}
