import React from 'react'

import { MemberSpaceProvider } from 'memberspace-react-wrapper'
import { ExampleComponent } from './ExampleComponent'

const App = () => {
  return 
  <MemberSpaceProvider subdomain="example">
    <ExampleComponent />
  </MemberSpaceProvider>
}

export default App
