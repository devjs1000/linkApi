import { FormControl, FormLabel, Input } from "@chakra-ui/react"

type props = {
    title: string,
    titleProps: any,
    inputProps: any
}

export const TInput = ({ title, titleProps, inputProps }: props) => {
    return (
        <FormControl>
            <FormLabel {...titleProps}>
                {title}
            </FormLabel>
            <Input {...inputProps} />
        </FormControl>
    )
}

export default TInput