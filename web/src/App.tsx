import { Suspense } from 'react'
import RelayEnvironment from '../relayEnvironment'
import {
  RelayEnvironmentProvider,
  loadQuery,
  graphql,
  PreloadedQuery,
  useLazyLoadQuery,
} from 'react-relay'
import { LocationOneLine } from './LocationOneLine';
// const preloadedQuery = loadQuery(RelayEnvironment, AllLocations, {});

function App() {
  const query = useLazyLoadQuery(graphql`
    query AppQuery {
      allLocations {
        id
        ...LocationOneLine
      }
    }
  `, {})

  const { allLocations } = query

  return (
    <div>
      <h1>Ola relay</h1>
      <div>
        {
          allLocations?.map(location => {
            return <LocationOneLine key={location?.id} location={location} />
          })
        }
      </div>
    </div>
  );
}

function AppRoot(props: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;