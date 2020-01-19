import express from "express";

import { migrate } from "../controllers/migrations";
import {
  homepage,
  resultData,
  CreateOpportunities,
  EditOpportunities,
  getOpportunity,
  countUniq,
  getOpportunities,
  AddOpportunity
} from "../controllers/index";
import { CreatStaging } from "../controllers";
import {
  CheckValidationResult,
  fieldsValidator
} from "../helper/validation";
import { check ,validationResult} from "express-validator";
// import {checkValidationResult} from "../../../../../THE/the-badges/src/server/validations";
const router = express.Router();

export default function api() {
  console.log(check)
  router.get("/", homepage);
  router.get("/opportunities", getOpportunities);
  router.get("/opportunities/count", countUniq);
  router.get("/opportunities/:id?", getOpportunity);
  router.get("/migrate", migrate);
  router.post("/search", resultData);
  router.post("/opportunities");
  router.post(
    "/staging",  CreatStaging

  );
  router.put("/opportunities", EditOpportunities);
  // router.post("/opportunities/Add", AddOpportunity);
  return router;
}
