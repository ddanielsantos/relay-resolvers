import { writeFileSync } from 'fs'
import { printSchema } from 'graphql'
import { schema } from './schema.mjs'

function run() {
  const content = printSchema(schema)
  writeFileSync('../web/data/schema.graphql', content)
}

run()