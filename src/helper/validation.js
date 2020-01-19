import { body, checkSchema, validationResult } from "express-validator";

export const CheckValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};
const isEmptyDef = () => {
  return [
    body("category")
      .exists()
      .isLength({ min: 1 })
      .withMessage("category can't be empty"),
    body("mode_of_delivery")
      .exists()
      .trim()
      .isString({ min: 1 })
      .withMessage("Mode of delivery is required"),
    body("theme")
      .exists()
      .trim()
      .isString({ min: 1 })
      .withMessage("Theme is required"),

    body("country")
      .exists()
      .trim()
      .isString({ min: 1 })
      .withMessage("country is required"),
    body("city")
      .exists()
      .trim()
      .isString({ min: 1 })
      .withMessage("city is required"),
    body("level")
      .exists()
      .trim()
      .isNumeric({ min: 1 })
      .withMessage("level is required"),
    body("duration")
      .exists()
      .trim()
      .isString({ min: 1 })
      .withMessage("duration is required"),
    body("full_or_part")
      .exists()
      .trim()
      .isString({ min: 1 })
      .withMessage("Full/Part is required"),
    body("info")
      .exists()
      .trim()
      .isString({ min: 1 })
      .withMessage("Info is required"),
    body("comments")
      .exists()
      .trim()
      .isString({ min: 1 }),

    body("local_lan_requirements")
      .exists()
      .trim()
      .isString({ min: 1 })
      .withMessage("Local lang requirements is required"),
    body("en_requirements")
      .exists()
      .trim()
      .isString({ min: 1 })
      .withMessage("English requirements is required"),
    body("start_date")
      .exists()
      .trim()
      .isString({ min: 1 })
      .withMessage("start date is required")
  ];
};

export const fieldsValidator = (req, res, next) => {
  return isEmptyDef();
};
