import React from "react";

const InfoItem = ({ text, value, postValue }: any) => {
  return (
    <div className={"left-align"}>
      <b>{text}:</b> {value ? value : "невідомо"}{postValue ? " " + postValue : ""};
    </div>
  );
};

export default InfoItem;