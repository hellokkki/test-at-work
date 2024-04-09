import { Card, CardBody, Box, Text } from "@chakra-ui/react";
import { TUserProfile } from "@/app/shared/types/user.type";
import { CardMenu } from "../../entities/CardMenu";
import "./index.scss";

export const UserCard: React.FC<Partial<TUserProfile>> = ({
  username,
  city,
  company,
  id,
  status,
  avatar,
}) => {


  return (
    <Card className="user-card" id={`${id}`} borderRadius="1rem">
      <CardBody
        className="user-card--view"
        backgroundColor="#F5F5F5"
        borderRadius="1rem"
      >
        <Box as="img"
             src={avatar}
             alt="users avatar"
             width="200px"
             height="100px"
             borderRadius="10px"
             className={ status === "archived" ? "card-image card-archived-image" : "card-image" }
             loading="lazy"
        >
        </Box>
        <Box className="user-card--info" marginTop="10px">
          <Box
            className="user-card--info__header"
            display="flex"
            flexFlow="row nowrap"
            justifyContent="space-between"
          >
            <Box display="flex" flexFlow="column nowrap">
              <Text
                as="h2"
                color={ status === "active" ? "accent" : "gray.300"}
                textAlign="start"
                fontSize="24px"
                sx={{ textStyle: ["mobile.headline", "desktop.headline"] }}
              >
                {username}
              </Text>
              <Text textAlign="start" as="p" sx={{ textStyle: ["mobile.textOne", "desktop.textOne"] }}>
                {company}
              </Text>
            </Box>
                <CardMenu cardID={id} status={status} />
          </Box>
          <Box className="user-card--info__footer">
            <Box>
              <Text textAlign="start" sx={{ textStyle: ["mobile.textTwo", "desktop.textTwo"] }} color="gray.500">
                {city}
              </Text>
            </Box>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};
