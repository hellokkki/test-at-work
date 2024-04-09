import { Box, Flex } from "@chakra-ui/react";
import { UserCard } from "../UserCard";
import { TUserProfile } from "@/app/shared/types/user.type";

type TUserCardList = {
  users: TUserProfile[];
};

export const UserCardsList: React.FC<TUserCardList> = ({ users }) => {
  return (
    <Box>
      <Flex flexWrap="wrap">
        {users?.slice(0, 6).map((user) => {
          return (
            <UserCard
              key={user.id}
              username={user.username}
              city={user.city}
              company={user.company}
              avatar={user.avatar}
              id={user.id}
              status={user.status}
            />
          );
        })}
      </Flex>
    </Box>
  );
};
