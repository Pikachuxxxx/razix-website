import { extendTheme } from '@chakra-ui/react'

import '@fontsource/fira-code/300.css'
import '@fontsource/fira-code/400.css'
import '@fontsource/fira-code/500.css'
import '@fontsource/fira-code/700.css'

const theme = extendTheme({
  fonts: {
    heading: `'Fira Code', sans-serif`,
    body: `'Fira Code', sans-serif`,
  },
})

export default theme
