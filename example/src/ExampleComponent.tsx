import { useMemberSpace } from 'memberspace-react-wrapper'

export const ExampleComponent = () => {
  const { memberInfo } = useMemberSpace()

  return `Hello ${memberInfo?.firstName}`
}