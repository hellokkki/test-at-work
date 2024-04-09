import { Box, Divider, Text } from "@chakra-ui/react";
import { UserCardsList } from "../../features/CardList";
import { selectActiveUsers, selectArchivedUsers } from "../../store/usersSlice";
import { useSelector } from "react-redux";

export const CardsView: React.FC = () => {
  const activeCards = useSelector(selectActiveUsers);
  const archivedCards = useSelector(selectArchivedUsers);

  return (
    <Box>
      <Box marginTop="2rem">
        <Text
          textAlign="start"
          sx={{ textStyle: "title" }}
          marginBottom=".5rem"
        >
          Активные
        </Text>
        <Divider colorScheme="blackAlpha" size="3px" />
      </Box>
      <Box marginTop="2rem">
        <UserCardsList users={activeCards} />
      </Box>
      <Box marginTop="2rem">
        <Text
          textAlign="start"
          sx={{ textStyle: "title" }}
          marginBottom=".5rem"
        >
          Архив
        </Text>
        <Divider colorScheme="blackAlpha" />
      </Box>
      <Box marginTop="2rem">
        <UserCardsList users={archivedCards} />
      </Box>
    </Box>
  );
};
