# memberspace-react-wrapper

> Unofficial MemberSpace React wrapper

[![NPM](https://img.shields.io/npm/v/memberspace-react-wrapper.svg)](https://www.npmjs.com/package/memberspace-react-wrapper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

An unofficial React wrapper for [MemberSpace](https://memberspace.com/) integration. This package simplifies the integration of MemberSpace functionalities into React applications, offering easy setup and React-friendly hooks for accessing MemberSpace APIs. Ideal for developers looking to leverage MemberSpace's membership management within their React projects.

## Install

```bash
yarn add memberspace-react-wrapper
```

## Usage

App.tsx

```tsx
import React from 'react'

import { MemberSpaceProvider } from 'memberspace-react-wrapper'
import { ExampleComponent } from './ExampleComponent'

const App = () => {
  return
  ;<MemberSpaceProvider subdomain='example'>
    <ExampleComponent />
  </MemberSpaceProvider>
}

export default App
```

ExampleComponent.tsx

```tsx
import { useMemberSpace } from 'memberspace-react-wrapper'

export const ExampleComponent = () => {
  const { memberInfo } = useMemberSpace()

  return `Hello ${memberInfo?.firstName}`
}
```

## License

MIT © [marcellsimon](https://github.com/marcellsimon)
