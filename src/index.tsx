// MemberSpaceProvider.tsx

import React, { useState, useEffect, createContext, useContext } from 'react'
import { MemberInfo } from './types'

interface MemberSpaceContextProps {
  memberInfo: MemberInfo | null
  // other states you might want to expose
}

const MemberSpaceContext = createContext<MemberSpaceContextProps | null>(null)

interface MemberSpaceProviderProps {
  children: React.ReactNode
  subdomain: string
}

export const MemberSpaceProvider: React.FC<MemberSpaceProviderProps> = ({
  children,
  subdomain
}) => {
  const [memberInfo, setMemberInfo] = useState<MemberInfo | null>(null)

  useEffect(() => {
    window.MemberSpace = window.MemberSpace || { subdomain }
    const script = document.createElement('script')
    script.src = 'https://cdn.memberspace.com/scripts/widgets.js'
    script.async = true
    document.body.appendChild(script)

    const handleReady = (event: CustomEvent) => {
      const detail = event.detail
      if (detail?.memberInfo) setMemberInfo(detail.memberInfo)
    }

    const handleMemberInfo = (event: CustomEvent) => {
      const detail = event.detail
      if (detail?.memberInfo) setMemberInfo(detail.memberInfo)
    }

    document.addEventListener('MemberSpace.ready', handleReady as EventListener)
    document.addEventListener(
      'MemberSpace.member.info',
      handleMemberInfo as EventListener
    )

    return () => {
      document.body.removeChild(script)
      document.removeEventListener(
        'MemberSpace.ready',
        handleReady as EventListener
      )
      document.removeEventListener(
        'MemberSpace.member.info',
        handleMemberInfo as EventListener
      )
    }
  }, [subdomain])

  return (
    <MemberSpaceContext.Provider value={{ memberInfo }}>
      {children}
    </MemberSpaceContext.Provider>
  )
}

export const useMemberSpace = (): MemberSpaceContextProps | null =>
  useContext(MemberSpaceContext)
