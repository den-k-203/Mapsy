import { useCallback, useEffect } from "react";

import useAppDispatch from "./reduxHooks/useAppDispatch.hook";

import { Token, User } from "../types/main";

import { removeUser, setUser } from "../redux/slices/userSlice";
import { removeToken, setToken } from "../redux/slices/tokenSlice";

const LOCALSTORAGE_NAME = "User";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const login = useCallback((jwtToken: Token, user: User) => {
    dispatch(setUser({...user}));
    dispatch(setToken(jwtToken));
    localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify({ token: jwtToken, user: user }));
  },[]);

  const logout = useCallback(() => {
    dispatch(removeUser());
    dispatch(removeToken());
    localStorage.removeItem(LOCALSTORAGE_NAME);
  }, []);

  useEffect(() => {
    const data: Storage | null  = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME) || "{}");
    if(data && data.token) {
      login(data.token, data.user);
    }
  }, [login]);

  return {login, logout};
};