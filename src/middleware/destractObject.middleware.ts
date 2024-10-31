import {check} from "express-validator";

export const validation = [
  check("title").exists().withMessage("Заголовок пустий."),
  check("position").isArray().withMessage("Координати не вказані."),
  check("postName").exists().withMessage("Поштовий індекс не вказаний."),
  check("address").exists().withMessage("Адреса не вказана."),
  check("typeInfrastructure").exists().withMessage("Тип інфраструктури не вказаний."),
  check("area").isNumeric().withMessage("Площа повинна бути числом."),
  check("imgPath").exists().withMessage("Картинки немає."),
  check("description").exists().withMessage("Опис не вказаний."),
  check("percentageOfDestruction").exists().withMessage("Неправильно вказана відсоткова частка руйнування."),
  check("dateOfDestruction").exists().isISO8601().withMessage("Неправильна вказана дата руйнування."),
  check("dateOfRecovery").optional().isISO8601().withMessage("Неправильна вказана дата відновлення."),
  check("typeDestruction").exists().withMessage("Тип руйнування не вказаний."),
  check("countVictims").isNumeric().withMessage("Кількість жертв повинна бути числом."),
  check("whatDestroyed").exists().withMessage("Що зруйновано не вказано."),
  check("areaName").exists().withMessage("Назва території не вказана."),
  check("neighborhood").exists().withMessage("Сусідство не вказане."),
  check("stateDestruction").exists().withMessage("Стан об'єкту не вказаний")
];