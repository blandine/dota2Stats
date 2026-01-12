import { ApolloProvider } from '@apollo/client/react'
import { RouterProvider } from 'react-router-dom'
import { client } from './lib/apollo-client'
import { router } from './router'
import './App.css'

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  )
}

export default App

