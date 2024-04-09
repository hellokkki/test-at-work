import type {
  TUserResponse,
  TUserProfile,
  TUserFormData,
} from "../../shared/types/user.type";
import { TRootState } from "../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { randomImage } from "../../shared/stings/images";

interface ICardsState {
  activeUsers: TUserProfile[];
  archivedUsers: TUserProfile[];
  hiddenUsers: TUserProfile[];
  users: TUserProfile[];
  editedUser: TUserProfile | null;
}

const initialState: ICardsState = {
  activeUsers: [],
  archivedUsers: [],
  hiddenUsers: [],
  users: [],
  editedUser: null,
};

const cardsSlice = createSlice({
  name: "cardsSlice",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<TUserResponse[]>) {
      const users: TUserProfile[] = action.payload.map((user) => ({
        name: user.name,
        username: user.username,
        city: user.address.city,
        company: user.company.name,
        email: user.email,
        phone: user.phone,
        avatar: randomImage(),
        status: "active",
        id: user.id,
      }));
      state.users = users;
      state.activeUsers = users;
    },

    archiveCard: {
      reducer: (state, action: PayloadAction<number>) => {
        const id = action.payload;
        const userToArchive = state.activeUsers.find((user) => user.id === id);
        if (userToArchive) {
          userToArchive.status = "archived";
          state.activeUsers = state.activeUsers.filter(
            (card) => card.id !== id
          );
          state.archivedUsers.push(userToArchive);
        }
      },
      prepare: (id: number) => ({ payload: id }),
    },
    hideCard: {
      reducer: (state, action: PayloadAction<number>) => {
        const id = action.payload;
        const userToHide = state.activeUsers.find((user) => user.id === id);
        if (userToHide) {
          state.activeUsers = state.activeUsers.filter(
            (user) => user.id !== id
          );
          state.hiddenUsers.push(userToHide);
        }
      },
      prepare: (id: number) => ({ payload: id }),
    },
    activateCard: {
      reducer: (state, action: PayloadAction<number>) => {
        const id = action.payload;
        const userToActivate = state.archivedUsers.find(
          (card) => card.id === id
        );
        if (userToActivate) {
          userToActivate.status = "active";
          state.archivedUsers = state.archivedUsers.filter(
            (card) => card.id !== id
          );
          state.activeUsers.push(userToActivate);
        }
      },
      prepare: (id: number) => ({ payload: id }),
    },
    setEditedUser(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const editedUser = state.activeUsers.find((user) => user.id === id);
      if (editedUser) state.editedUser = editedUser;
    },
    updateUser(
      state,
      action: PayloadAction<{ id: number; updatedUser: TUserFormData }>
    ) {
      const { id, updatedUser } = action.payload;
      const cardToUpdate = [...state.activeUsers, ...state.archivedUsers].find(
        (card) => card.id === id
      );
      if (cardToUpdate) {
        cardToUpdate.city = updatedUser.city;
        cardToUpdate.company = updatedUser.company;
        cardToUpdate.username = updatedUser.username;
        cardToUpdate.email = updatedUser.email;
        cardToUpdate.name = updatedUser.name;
        cardToUpdate.phone = updatedUser.phone;
      }
    },
  },
});

export const {
  setUsers,
  archiveCard,
  activateCard,
  hideCard,
  setEditedUser,
  updateUser,
} = cardsSlice.actions;

export const selectActiveUsers = (state: TRootState) => state.usersCards.activeUsers;
export const selectArchivedUsers = (state: TRootState) => state.usersCards.archivedUsers;
export const selectHiddenUsers = (state: TRootState) => state.usersCards.hiddenUsers;
export const selectUsers = (state: TRootState) => state.usersCards.users;
export const selectEditedUser = (state: TRootState) => state.usersCards.editedUser;

export default cardsSlice.reducer