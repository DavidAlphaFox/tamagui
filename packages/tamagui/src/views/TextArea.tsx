import { GetProps, styled } from '@tamagui/core'
import { TextInput } from 'react-native'

import { inputSizeVariant } from '../helpers/inputHelpers'

export const TextArea = styled(TextInput, {
  name: 'TextArea',
  multiline: true,
  numberOfLines: 4,

  borderRadius: '$3',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  paddingVertical: '$2',
  paddingHorizontal: '$2',

  hoverStyle: {
    borderColor: '$borderColorHover',
  },

  focusStyle: {
    borderColor: '$borderColorFocus',
  },

  variants: {
    size: {
      '...size': inputSizeVariant,
    },
  },
})

export type TextAreaProps = GetProps<typeof TextArea>