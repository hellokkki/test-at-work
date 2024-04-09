import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../store/usersSlice";
import { CardsView } from "../widhets/CardsView";
import { fetchUsers } from "../shared/api/usersApi";
import { selectUsers } from "../store/usersSlice";
import { ModalWindow } from "../entities/ModalWindow";

export const Homepage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = (): void => setIsModalOpen(true);
  const handleCloseModal = (): void => setIsModalOpen(false);

  const dispatch = useDispatch();
  const storedUsers = useSelector(selectUsers);

  useEffect(() => {
    if (storedUsers.length === 0) {
      fetchUsers(6)
        .then((data) => {
          dispatch(setUsers(data));
        })
        .catch(() => {
          handleOpenModal();
        });
      return;
    }
  }, []);

  return (
    <Box marginLeft="2rem">
      <ModalWindow
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        delay={4000}
        info="Что-то не так!"
        withIcon={false}
      />
      <CardsView />
    </Box>
  );
};
