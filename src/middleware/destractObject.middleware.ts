import {check} from "express-validator";

export const validation = [
  check("title").exists().withMessage("Заголовок пустий."),
  check("position").isArray().withMessage("Координати не вказані."),
  check("postName").exists().withMessage("Поштовий індекс не вказаний."),
  check("address").exists().withMessage("Адреса не вказана."),
  check("type").exists().withMessage("Тип не вказаний."),
  check("area").exists().withMessage("Площа не вказана."),
  check("imgPath").exists().withMessage("Картинки немає."),
  check("text").exists().withMessage("Текст не вказаний."),
  check("percentageOfDestruction").exists().withMessage("Неправильно вказана дата руйнування."),
  check("dateOfDestruction").exists().withMessage("Неправильна вказана дата відновлення."),
];

