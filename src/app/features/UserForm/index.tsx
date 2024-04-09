import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/usersSlice";
import { Box, FormLabel, FormControl, Button, Text } from "@chakra-ui/react";
import { TUserProfile, TUserFormData } from "../../shared/types/user.type";
import { CustomInput } from "../CustomInput";
import { Controller } from "react-hook-form";
import { ModalWindow } from "../../entities/ModalWindow";
import { useState } from "react";

interface IUserForm {
  user: TUserProfile;
}

export const UserForm: React.FC<IUserForm> = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { handleSubmit, formState, control } = useForm();

  const handleOpenModal = (): void => setIsModalOpen(true);
  const handleCloseModal = (): void => setIsModalOpen(false);

  const onSubmit = (data: unknown) => {
    dispatch(updateUser({ id: user.id, updatedUser: data as TUserFormData }));
    handleOpenModal();
    console.log(isModalOpen);
  };

  return (
    <Box
      width={["280px", "380px", "420px", "500px"]}
      height={["", "", "760px", "760px"]}
      borderRadius="lg"
      p="4"
      m="4"
      marginTop="2rem"
    >
      <Box>
        <Text
          sx={{ textStyle: ["mobile.headline", "desktop.headline"] }}
          textAlign="start"
        >
          Данные профиля
        </Text>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)} className="form-border">
        <ModalWindow
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          delay={4000}
          info="Вы сохранились!"
          withIcon={true}
        />
        <FormControl
          border="none"
          borderWidth="0px"
          marginTop={["5px", "10px", "14px", "20px"]}
        >
          <FormLabel>Имя</FormLabel>
          <Controller
            name="name"
            control={control}
            defaultValue={user.name}
            rules={{
              required: "Обязательное поле",
              minLength: 2,
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                onChange={onChange}
                value={value}
                error={formState.errors.root?.message}
              />
            )}
          />
        </FormControl>

        <FormControl marginTop={["5px", "10px", "10px", "20px"]}>
          <FormLabel>Никнейм</FormLabel>
          <Controller
            name="username"
            control={control}
            defaultValue={user.username}
            rules={{
              required: "Обязательное поле",
              minLength: 2,
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                onChange={onChange}
                value={value}
                error={formState.errors.root?.message}
              />
            )}
          />
        </FormControl>

        <FormControl marginTop={["5px", "10px", "10px", "20px"]}>
          <FormLabel>Почта</FormLabel>
          <Controller
            name="email"
            control={control}
            defaultValue={user.email}
            rules={{
              required: "Обязательное поле",
              minLength: 6,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                onChange={onChange}
                value={value}
                error={formState.errors.root?.message}
              />
            )}
          />
        </FormControl>

        <FormControl marginTop={["5px", "10px", "10px", "20px"]}>
          <FormLabel>Город</FormLabel>
          <Controller
            name="city"
            control={control}
            defaultValue={user.city}
            rules={{
              required: "Обязательное поле",
              minLength: 6,
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                onChange={onChange}
                value={value}
                error={formState.errors.root?.message}
              />
            )}
          />
        </FormControl>

        <FormControl marginTop={["5px", "10px", "10px", "20px"]}>
          <FormLabel>Телефон</FormLabel>
          <Controller
            name="phone"
            control={control}
            defaultValue={user.phone}
            rules={{
              required: "Обязательное поле",
              minLength: 6,
              pattern: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                onChange={onChange}
                value={value}
                error={formState.errors.root?.message}
              />
            )}
          />
        </FormControl>
        <FormControl marginTop={["5px", "10px", "10px", "20px"]}>
          <FormLabel>Название компании</FormLabel>
          <Controller
            name="company"
            control={control}
            defaultValue={user.company}
            rules={{
              required: "Обязательное поле",
              minLength: 6,
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                onChange={onChange}
                value={value}
                error={formState.errors.root?.message}
              />
            )}
          />
        </FormControl>

        <Button
          type="submit"
          mt="4"
          background="dark"
          color="white"
          borderRadius="1rem"
          float="left"
          marginTop="2rem"
        >
          <Text sx={{ textStyle: ["mobile.textTwo", "desktop.textTwo"] }}>
            Сохранить
          </Text>
        </Button>
      </form>
    </Box>
  );
};
