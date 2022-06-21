import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql'
import { globalIdField } from 'graphql-relay'

const locationType = new GraphQLObjectType({
  name: 'Location',
  fields: () => ({
    id: globalIdField('Location', obj => obj.id),
    city: {
      type: new GraphQLNonNull(GraphQLString),
      description: `Location's city`,
      resolve: location => location.city
    },
    state: {
      type: new GraphQLNonNull(GraphQLString),
      description: `Location's city`,
      resolve: location => location.state
    },
    country: {
      type: new GraphQLNonNull(GraphQLString),
      description: `Location's city`,
      resolve: location => location.country
    }
  })
})

const locations = [
  {
    id: '1',
    city: 'New York',
    state: 'NY',
    country: 'United States'
  },
  {
    id: '2',
    city: 'San Francisco',
    state: 'CA',
    country: 'United States'
  },
  {
    id: '3',
    city: 'Los Angeles',
    state: 'CA',
    country: 'United States'
  }
]

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      allLocations: {
        type: new GraphQLList(locationType),
        resolve: () => locations
      }
    }
  })
})