import { Box, Text, Divider } from "@chakra-ui/react";
import { UserForm } from "../../features/UserForm";
import { useSelector } from "react-redux";
import { selectEditedUser } from "../../store/usersSlice";
import { UserAvatar } from "../../features/UserAvatar";

import "./index.scss";

export const UserView: React.FC = () => {
  const editedUser = useSelector(selectEditedUser);

  return (
    <Box className="user-view" height="fit-content">
      <Box
        background="light"
        borderRadius="1rem"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        className="user-view--avatar"
        width={["300px", "400px"]}
      >
        <Box className="user-view--avatar__inner">
          <Box width="fit-content">
            <UserAvatar avatar={editedUser?.avatar} />
          </Box>

          <Box
            display="flex"
            flexFlow="column nowrap"
            gap={["5px", "10px", "15px", "20px"]}
            marginTop={["5px", "10px", "20px", "30px"]}
          >
            <Box width="280px">
              <Text
                textAlign="start"
                sx={{ textStyle: ["mobile.headline", "desktop.headline"] }}
              >
                Данные профиля
              </Text>
              <Divider />
            </Box>
            <Box width="280px">
              <Text
                textAlign="start"
                sx={{ textStyle: ["mobile.textOne", "desktop.textOne"] }}
              >
                Рабочее пространство
              </Text>
              <Divider />
            </Box>
            <Box width="280px">
              <Text
                textAlign="start"
                sx={{ textStyle: ["mobile.textOne", "desktop.textOne"] }}
              >
                Приватность
              </Text>
              <Divider />
            </Box>
            <Box width="280px">
              <Text
                textAlign="start"
                sx={{ textStyle: ["mobile.textOne", "desktop.textOne"] }}
              >
                Безопасность
              </Text>
              <Divider />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        background="light"
        borderRadius="1rem"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        className="user-view--form"
        width={["300px", "400px", "460px", "580px"]}
      >
        <Box className="user-view--form__inner">
          {editedUser !== null && <UserForm user={editedUser} />}
        </Box>
      </Box>
    </Box>
  );
};
