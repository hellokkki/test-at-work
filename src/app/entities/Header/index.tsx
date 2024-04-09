import { useState } from "react";
import {
  Box,
  Stack,
  Spacer,
  Text,
  Image,
  List,
  ListItem,
  IconButton,
} from "@chakra-ui/react";
import { BellIcon, HeartIcon } from "../SVGs";
import { randomImage } from "../../shared/stings/images";

export const Header: React.FC = () => {
   const [heartState, setHeartState] = useState<string>('');
   const [bellState, setBellState] = useState<string>('')
   
  const handleHeartClick = (): void => heartState === "" ? setHeartState("red") : setHeartState("");
  const handleBellClick = (): void => bellState === "" ? setBellState("gold") : setBellState("");


    return (
    <Stack
      direction="row"
      backgroundColor="gray.100"
      minW="100dvw"
      display="flex"
      alignItems="center"
      height="80px"
    >
      <Box marginLeft="2rem" marginTop=".5rem">
        <Text>{`it's imposible to download your logo)`}</Text>
        <Box display="flex" flexDir="row">
          <Text fontSize="22px" fontWeight={400}>
            at-
          </Text>
          <Text fontSize="22px" fontWeight={700}>
            work
          </Text>
        </Box>
      </Box>
      <Spacer />
      <List
        display="flex"
        flexFlow="row nowrap"
        gap=".5rem"
        marginRight="2rem"
        marginTop=".5rem"
        alignItems="center"
      >
        <ListItem as="ul">
          <IconButton 
          aria-label="heart"
          icon={  <HeartIcon width="22px" color={heartState} /> }
          onClick={handleHeartClick}
          background="none"
          _hover={{ border: "none", background: "none", outline: "none" }}
          _active={{ border: "none", background: "none", outline: "none" }}
          variant="chill"
          />
        </ListItem>
        <ListItem as="ul">
        <IconButton 
          aria-label="heart"
          icon={  <BellIcon width="22px" color={heartState} /> }
          onClick={handleBellClick}
          background="none"
          _hover={{ border: "none", background: "none", outline: "none" }}
          _active={{ border: "none", background: "none", outline: "none" }}
          variant="chill"
          />
        </ListItem>
        <ListItem as="ul">
          <Text sx={{ textStyle: ["mobile.textOne", "desktop.textOne"] }}>
            randomAdmin
          </Text>
        </ListItem>
        <ListItem as="ul">
          <Image
            src={randomImage()}
            boxSize="30px"
            borderRadius="full"
            alt="you"
            marginLeft=".5rem"
          />
        </ListItem>
      </List>
    </Stack>
  );
};
