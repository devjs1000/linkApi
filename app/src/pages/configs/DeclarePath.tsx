import { Box } from '@chakra-ui/react'
import { TInput } from '../../UI';

const DeclarePath = () => {
    return (
        <Box>
            <TInput title='declare path' titleProps={{}} inputProps={{
                maxW: '300px',
                placeholder: 'ex - ~/projects/testApp'
            }} />
        </Box>
    )
}

export default DeclarePath