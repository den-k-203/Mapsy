import { makeAutoObservable } from "mobx";
import DestructionObject from "../types/ObjectDestroy";

class DOStore {
  destructionObjects: DestructionObject[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  init(destructionObjects: DestructionObject[] | undefined){
    if(destructionObjects){
        this.destructionObjects = destructionObjects
    }
  }

  addDestructionObject(object: DestructionObject) {
    this.destructionObjects.push(object);
  }

  removeDestructionObject(id: string) {
    this.destructionObjects = this.destructionObjects.filter(obj => obj._id !== id);
  }

  updateDestructionObject(updatedObject: DestructionObject) {
    const index = this.destructionObjects.findIndex(obj => obj._id === updatedObject._id);
    if (index !== -1) {
      this.destructionObjects[index] = updatedObject;
    }
  }

  getDestructionObjectById(id: string): DestructionObject | undefined {
    return this.destructionObjects.find(obj => obj._id === id);
  }
}

const doStore = new DOStore();
export default doStore;
