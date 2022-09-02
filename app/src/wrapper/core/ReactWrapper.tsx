import { StrictMode, ReactNode } from 'react'
import ChakraWrapper from './ChakraWrapper';

const ReactWrapper = ({ children }: props) => {
  return (
    <StrictMode>
      <ChakraWrapper>
        {children}
      </ChakraWrapper>
    </StrictMode>
  )
}

export default ReactWrapper

type props = {
  children: ReactNode
}