export interface MemberInfo {
  id: number
  name: string
  firstName: string
  lastName: string
  email: string
  profileImageUrl: string
  memberships: Membership[]
  customSignupFields: CustomSignupField[]
}

interface Membership {
  planId: number
  name: string
  type: string
  createdAt: string // ISO date string
  status: string
  cancelsOn: string | null // ISO date string or null
  paymentFailure: boolean
  welcomeUrl: string
  contentUrl: string
}

type CustomSignupField =
  | TextAreaCustomField
  | TextCustomField
  | SelectCustomField
  | MultipleSelectCustomField
  | CheckboxCustomField

interface BaseCustomField {
  id: number
  type: string
  required: boolean
}

interface TextAreaCustomField extends BaseCustomField {
  type: 'textarea'
  value: string
}

interface TextCustomField extends BaseCustomField {
  type: 'text'
  value: string
}

interface SelectCustomField extends BaseCustomField {
  type: 'select'
  options: Option[]
  value: string
}

interface MultipleSelectCustomField extends BaseCustomField {
  type: 'multiple-select'
  options: Option[]
  value: string[]
}

interface CheckboxCustomField extends BaseCustomField {
  type: 'checkbox'
  value: boolean
}

interface Option {
  label: string
  value: string
}
