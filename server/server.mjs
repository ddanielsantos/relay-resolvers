import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { 
  sendResult, 
  renderGraphiQL, 
  processRequest, 
  getGraphQLParameters, 
  shouldRenderGraphiQL 
} from 'graphql-helix'
import cors from '@koa/cors'
import { schema } from './schema.mjs'

const app = new Koa()

app.use(bodyParser())
app.use(cors())

app.use(async (ctx) => {
  const request = {
    body: ctx.request.body,
    headers: ctx.req.headers,
    method: ctx.request.method,
    query: ctx.request.query,
  }

  if (shouldRenderGraphiQL(request)) {
    ctx.body = renderGraphiQL({})
  } else {
    const { operationName, query, variables } = getGraphQLParameters(request)

    const result = await processRequest({
      operationName,
      query,
      variables,
      request,
      schema,
    })

    ctx.respond = false
    sendResult(result, ctx.res)
  }
})

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`GraphQL server is running on port ${port}.`)
})