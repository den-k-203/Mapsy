import React, { useEffect } from "react";
import M from "materialize-css";
import useAppSelector from "../../hooks/reduxHooks/useAppSelector.hook";

const UsersTable = ({ loading }: any) => {
  const users = useAppSelector(state => state.users.filtersUsers);

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="row">
      <table className="center" style={{ color: "white", background: "#1F1F1F", borderRadius: 15 }}>
        <thead>
        <tr>
          <th className={"center-align"}>Номер</th>
          <th className={"center-align"}>Ім'я</th>
          <th className={"center-align"}>Прізвище</th>
          <th className={"center-align"}>Пошта</th>
          <th className={"center-align"}>Логін</th>
          <th className={"center-align"}>Роль</th>
          {/*<th className={"center-align"}>Дії</th>*/}
        </tr>
        </thead>
        <tbody>
        {users.map((user: any, index: number) => {
          return (
            <tr key={index}>
              <td className={"center-align"}>{index + 1}.</td>
              <td className={"center-align"}>{user.firstName}</td>
              <td className={"center-align"}>{user.secondName}</td>
              <td className={"center-align"}>{user.email}</td>
              <td className={"center-align"}>{user.login}</td>
              <td className={"center-align"}>{user.role}</td>
              {/*<td className={"center-align"}>*/}
              {/*  <button disabled={loading} className={"btn purple darken-1"}>*/}
              {/*    <span>Редагувати</span>*/}
              {/*  </button>*/}
              {/*</td>*/}
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;