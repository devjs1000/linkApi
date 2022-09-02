import { Box, Heading } from '@chakra-ui/react';
import DeclarePackageManager from './DeclarePackageManager';
import DeclarePath from './DeclarePath';

const Config = () => {
    return (
        <Box>
            <DeclarePath />
            <DeclarePackageManager />
        </Box>
    )
}

export default Config