import { graphql, useFragment } from "react-relay"
import { LocationOneLine$key } from "./relay/resolvers/__generated__/LocationOneLine.graphql"

export const LocationOneLine = ({ location }: any) => {
  const Location = useFragment<LocationOneLine$key>(graphql`
    fragment LocationOneLine on Location {
      oneLine
    }
  `, location)

  return <h3>{Location.oneLine}</h3>
}