import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
query {
    alldata {
        spells {
            title
            type
            description
            meaning
        }
    }
}
`

export default function spells({ data }) {
    console.log(data.alldata)
  return (
    <div>
        <h1>Erro 404</h1>
    </div>
  )
}