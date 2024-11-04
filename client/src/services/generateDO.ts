import { faker } from '@faker-js/faker';
import DestructionObject from '../types/ObjectDestroy';
import { neighborhoods, weapons, infrastructureTypes, destructionTypes, destructionStates } from '../config/variables';

// Функція для створення випадкового об'єкта DestructionObject
function generateDestructionObject(): DestructionObject {
  return {
    title: faker.company.name(),
    position: [faker.datatype.number({ min: 50.35, max: 50.55, precision: 0.0001 }), faker.datatype.number({ min: 30.25, max: 30.75, precision: 0.0001 })],
    postName: faker.name.fullName(),
    address: faker.address.streetAddress(),
    typeInfrastructure: faker.helpers.arrayElement(infrastructureTypes),
    area: faker.datatype.number({ min: 50, max: 10000 }),
    imgPath: faker.image.city(),
    description: faker.lorem.sentences(2),
    percentageOfDestruction: faker.datatype.number({ min: 0, max: 100 }).toString(),
    dateOfDestruction: faker.date.past(1).toISOString(),
    dateOfRecovery: faker.date.future(1).toISOString(),
    typeDestruction: faker.helpers.arrayElement(destructionTypes),
    countVictims: faker.datatype.number({ min: 0, max: 100 }),
    whatDestroyed: faker.helpers.arrayElement(weapons),
    areaName: faker.address.city(),
    neighborhood: faker.helpers.arrayElement(neighborhoods),
    stateDestruction: faker.helpers.arrayElement(destructionStates),
    _id: undefined
  };
}

// Створення масиву з 100 об'єктів
const generateDestructionObjects: DestructionObject[] = Array.from({ length: 100 }, generateDestructionObject);

export default generateDestructionObjects;
