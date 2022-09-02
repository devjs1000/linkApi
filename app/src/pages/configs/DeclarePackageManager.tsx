import { Box, FormControl, FormLabel, MenuItem, Select } from '@chakra-ui/react'

const DeclarePackageManager = () => {
    return (
        <Box>
            <FormControl>
                <FormLabel>
                    Dec
                </FormLabel>
                <Select>
                    <option value='1' label={'hello'} />
                </Select>
            </FormControl>
        </Box>
    )
}

export default DeclarePackageManager