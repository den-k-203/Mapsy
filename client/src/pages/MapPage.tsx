import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/useMessage.hook";
import InfoItem from "../components/Tables/InfoItem";
import MyMapContainer from "../components/MyMapContainer";
import doStore from "../store/DOStore";
import FilterDOComponent from "../components/Modal/Filter/FilterDOComponent";
import DestructionObject from "../types/ObjectDestroy";
import { itemData } from "../config/variables";

const MapPage = () => {
  const message = useMessage();
  const { request, error, clearError, loading } = useHttp();

  const filterMarkers = doStore.destructionObjects

  useEffect(() => {
    message(error);
    clearError();
  }, [error, clearError, loading]);

  useEffect(() => {
    M.AutoInit();
  }, []);

  const [thisItem, setThisItem] = useState<DestructionObject | undefined>();

  return (
    <>
      <div className={"row"} style={{ marginTop: 5, marginBottom: 0 }}>
        <div className="filter-data-map">
          <FilterDOComponent/>

        </div>
        <div className="row">
          <div className={thisItem ? "col s8" : "col s12"} onClick={(e: any) => {
          }

          }>
          <MyMapContainer thisItem={thisItem} setThisItem={setThisItem}
                          filterMarkers={filterMarkers} />
          </div>
          
          {thisItem &&
            <div className={"col s4"} style={{ color: "white", marginTop: 0 }}>
              <div style={{
                backgroundColor: "#1f1f1f",
                padding: "10px",
                height: "70vh",
                position: "absolute",
              }}>
                {thisItem ?
                  <div>
                    <img src={thisItem.imgPath} alt="Картинка відсутня." style={{ width: "90%", padding: "10px" }} />
                    <InfoItem text={itemData[0]} value={thisItem.address} postValue="" />
                    <InfoItem text={itemData[13]} value={thisItem.areaName} postValue="" />
                    <InfoItem text={itemData[1]} value={thisItem.area} postValue="м²" />
                    <InfoItem text={itemData[4]} value={thisItem.percentageOfDestruction} postValue="%" />
                    <InfoItem text={itemData[5]} value={thisItem.dateOfDestruction} postValue="" />
                    <InfoItem text={itemData[6]} value={thisItem.dateOfRecovery} postValue="" />
                    <InfoItem text={itemData[7]} value={thisItem.position[0]} postValue={thisItem.position[1]} />
                    <InfoItem text={itemData[8]} value={thisItem.typeInfrastructure} postValue="" />
                    <InfoItem text={itemData[9]} value={thisItem.stateDestruction} postValue="" />
                    <InfoItem text={itemData[10]} value={thisItem.countVictims} postValue="особи" />
                    <InfoItem text={itemData[11]} value={thisItem.typeDestruction} postValue="" />
                    <InfoItem text={itemData[12]} value={thisItem.whatDestroyed} postValue="" />
                  </div>
                  :
                  <div className={"center-align"}>
                    <h4 style={{ marginTop: 0 }}>Інформація</h4>
                    <div style={{
                      backgroundColor: "#1E1E1E",
                      boxSizing: "border-box",
                      width: "31vw",
                      height: "59vh",
                      borderRadius: 15,
                    }}></div>
                  </div>}
              </div>
            </div>}
        </div>
      </div>
    </>
  );
};

export default MapPage;