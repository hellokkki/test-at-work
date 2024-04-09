import { Input, InputGroup, InputRightElement, IconButton, FormErrorMessage } from "@chakra-ui/react";
import { CrossIcon } from "../../entities/SVGs/Cross";
import { useState } from "react";

interface ICustomInput {
    onChange: (value: string) => void;
    value: string;
    error?: string;
}

export const CustomInput: React.FC<ICustomInput> = ({
    onChange, value, error
}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const handleIconClick = () => {
        onChange("");
    }

    const handleIconFocus = () => {
       setIsFocused(true)
    }

    const handleIconBlur = () => {
        setIsFocused(false)
    }

    return(
     <InputGroup
     >
       <Input 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          borderRadius="1rem"
          border="1px solid"
          borderColor="gray.300"
          errorBorderColor="red"
          focusBorderColor="none"
          isRequired={true}
          onFocus={handleIconFocus}
          onBlur={handleIconBlur}
          />
          {isFocused && (
            <InputRightElement
            marginRight=".5rem"
            >
               <IconButton 
               background="none"
               aria-label="Clear input"
               icon={<CrossIcon width={"18px"}/>}
               onClick={handleIconClick}
               color="gray.300"
               _hover={{ border: "none", background: "none", outline: "none" }}
               _active={{ border: "none", background: "none", outline: "none" }}
               />
            </InputRightElement>
          )}
          {error && (<FormErrorMessage>{error}</FormErrorMessage>)}
     </InputGroup>
    )
}