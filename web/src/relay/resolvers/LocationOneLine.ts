import { graphql } from 'relay-runtime';
import { readFragment } from 'relay-runtime/store/ResolverFragments'

/**
 * @RelayResolver
 * @onType Location
 * @fieldName oneLine
 * @rootFragment oneLine
 */
export default function LocationOneLine(oneLineKey: any): string {
  const location = readFragment(graphql`
    fragment oneLine on Location {
      country
      city
      state
    }`, oneLineKey);

  return `${location.city}, State of ${location.state} - ${location.country}`;
}