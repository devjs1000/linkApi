import { ChakraProvider, createStandaloneToast, createLocalStorageManager } from '@chakra-ui/react'
import { ReactNode } from 'react'
import theme from '../../styles/theme';

const { ToastContainer } = createStandaloneToast();
const manager = createLocalStorageManager('link-chakra');

const ChakraWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <ChakraProvider theme={theme} colorModeManager={manager} >
            {children}
            <ToastContainer />
        </ChakraProvider>
    )
}

export default ChakraWrapper