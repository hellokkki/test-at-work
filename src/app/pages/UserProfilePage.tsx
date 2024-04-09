import { Box, IconButton, Text } from "@chakra-ui/react";
import { UserView } from "../widhets/UserView";
import { BackArrow } from "../entities/SVGs/BackArrow";
import { useNavigate } from "react-router-dom";

export const UserProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const handleArrowIconClick = () => {
    navigate("/");
  };

  return (
    <Box className="outer">
      <Box
        display="flex"
        flexDirection="row"
        gap="1rem"
        onClick={handleArrowIconClick}
        alignItems="center"
        _hover={{ cursor: "pointer" }}
      >
        <IconButton
          background="none"
          aria-label="To homepage"
          icon={<BackArrow width="22px" height="22px" />}
          color="gray.300"
          _hover={{ border: "none", background: "none" }}
          _active={{ border: "none", background: "none" }}
        ></IconButton>
        <Text sx={{ textStyle: ["mobile.textOne", "desktop.textOne"] }}>
          Назад
        </Text>
      </Box>
      <Box className="inner">
        <UserView />
      </Box>
    </Box>
  );
};
