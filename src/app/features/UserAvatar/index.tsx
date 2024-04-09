import { Box, Spinner } from "@chakra-ui/react";

type TUserAvatarElement = {
  avatar: string | undefined | null;
};

export const UserAvatar: React.FC<TUserAvatarElement> = ({ avatar }) => {
  return (
    <Box>
      {avatar === null ? (
        <Spinner size="xl" color="blue.500" />
      ) : (
        <Box
          as="img"
          src={avatar}
          width="280px"
          height={["160px", "220px", "360px", "520px"]}
          borderRadius="1rem"
        />
      )}
    </Box>
  );
};
