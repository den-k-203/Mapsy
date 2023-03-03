import React from "react";

const EmptyTable = () => {
  return (
    <div className="row">
      <table className="center" style={{color: "white", background: "#1F1F1F", borderRadius: 15}}>
        <thead>
        <tr>
          <th>#</th>
          <th> </th>
          <th> </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1.</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>2.</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>3.</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td>4.</td>
          <td> </td>
          <td> </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmptyTable;