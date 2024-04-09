import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Text,
} from "@chakra-ui/react";
import { ThreeDotsIcon } from "../SVGs/Dots";
import { archiveCard, activateCard, hideCard, setEditedUser } from "../../store/usersSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.scss";

type TCardMenu = {
  cardID?: number;
  status?: "active" | "archived" | "hidden"
};

export const CardMenu: React.FC<TCardMenu> = ({ cardID, status }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleArchiveBtnClick = (): void => {
    console.log(cardID)
    if(cardID !== undefined)
    dispatch(archiveCard(cardID));
  };

  const handleHideBtnClick = (): void => {
    if(cardID !== undefined)
    dispatch(hideCard(cardID));
  };

  const handleActivateBtnClick = (): void => {
    if(cardID !== undefined)
    dispatch(activateCard(cardID));
  };

  const handleEditBtnClick = (): void => { 
    if (cardID !== undefined) {
    dispatch(setEditedUser({ id: cardID }))  
    navigate(`user/:${cardID}`)
    }
  }

  return (
    <Menu preventOverflow={false}>
      <MenuButton
        width="3px"
        height="fit-content"
        marginRight="5px"
        overflow="hidden"
        as={Button}
        border="none"
        background="none"
        _focus={{ border: "none", outline: "none" }}
        _hover={{ background: "none", border: "none" }}
        _active={{ background: "none" }}
        rightIcon={<ThreeDotsIcon />}
      ></MenuButton>
      <MenuList
        borderRadius="1rem"
        className="menu--list-view"
        marginLeft="25px"
      >
        {status === "active" ? (
          <Box display="flex" flexFlow="column nowrap">
            <Button
              variant="ghost"
              border="none"
              background="none"
              _focus={{ border: "none", outline: "none" }}
              _hover={{ background: "none", border: "none" }}
              _active={{ background: "none" }}
              onClick={handleEditBtnClick}
            >
              <Text sx={{ textStyle: ["mobile.textOne", "desktop.textOne"] }}>
                Редактировать
              </Text>
            </Button>
            <Button
              variant="ghost"
              border="none"
              background="none"
              _focus={{ border: "none", outline: "none" }}
              _hover={{ background: "none", border: "none" }}
              _active={{ background: "none" }}
              onClick={handleArchiveBtnClick}
            >
              <Text sx={{ textStyle: ["mobile.textOne", "desktop.textOne"] }}>
                Архивировать
              </Text>
            </Button>
            <Button
              variant="ghost"
              border="none"
              background="none"
              _focus={{ border: "none", outline: "none" }}
              _hover={{ background: "none", border: "none" }}
              _active={{ background: "none" }}
              onClick={handleHideBtnClick}
            >
              <Text sx={{ textStyle: ["mobile.textOne", "desktop.textOne"] }}>
                Скрыть
              </Text>
            </Button>
          </Box>
        ) : (
          <Box onClick={handleActivateBtnClick}>
            <Button
              variant="ghost"
              border="none"
              background="none"
              _focus={{ border: "none", outline: "none" }}
              _hover={{ background: "none", border: "none" }}
              _active={{ background: "none" }}
            >
              <Text sx={{ textStyle: ["mobile.textOne", "desktop.textOne"] }}>
                Активировать
              </Text>
            </Button>
          </Box>
        )}
      </MenuList>
    </Menu>
  );
};
