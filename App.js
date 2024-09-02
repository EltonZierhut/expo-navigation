import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DrawerNavigator />
    </QueryClientProvider>
  )
}
