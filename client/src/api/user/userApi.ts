import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createUser,
  deleteUser,
  fetchUserById,
  fetchUsers,
  updateUser,
} from "./requests";
import { CREATE_USER, DELETE_USER, FETCH_USERS, UPDATE_USER } from "./queries";
import { User } from "./types";

export const useFetchUsers = () => {
  return useQuery({
    queryKey: [FETCH_USERS],
    queryFn: fetchUsers,
  });
};

export const useFetchUser = (id: string) => {
  return useQuery({
    queryKey: [FETCH_USERS, id],
    queryFn: () => fetchUserById(id),
    enabled: !!id,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: User) => createUser(user),
    mutationKey: [CREATE_USER],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [FETCH_USERS] });
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [UPDATE_USER],
    mutationFn: ({ id, user }: { id: string; user: User }) =>
      updateUser(id, user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [FETCH_USERS] });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [DELETE_USER],
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [FETCH_USERS] });
    },
  });
};
