// This file should be included in your project,
// and TypeScript will automatically pick up the global declaration.

import { MemberInfo } from './types'

declare global {
  interface Window {
    MemberSpace: {
      subdomain: string
      ready: boolean
      getMemberInfo: () => Promise<MemberInfo>
    }
  }
}

// This export is necessary to convert this file into a module
// and avoid the TypeScript error "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations."
export {}
