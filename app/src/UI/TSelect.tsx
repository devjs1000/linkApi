import { FormControl, FormLabel, Select } from '@chakra-ui/react'

type dataArr = { label: string, value: string }

type props = {
    title: string,
    titleProps: any,
    selectProps: any,
    optionProps: any
    data: [dataArr]
}
const DeclarePackageManager = ({ title, titleProps, selectProps, data, optionProps }: props) => {
    return (
        <FormControl>
            <FormLabel {...titleProps}>
                {title}
            </FormLabel>
            <Select {...selectProps} >
                {data.map(({ label, value }: dataArr) => {
                    return <option {...optionProps} value={value} label={label} />

                })}
            </Select>
        </FormControl>
    )
}

export default DeclarePackageManager