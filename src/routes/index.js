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
const router = express.Router();

export default function api() {
  router.get("/", homepage);
  router.get("/opportunities", getOpportunities);
  router.get("/opportunities/count", countUniq);
  router.get("/opportunities/:id?", getOpportunity);
  router.get("/migrate", migrate);
  router.post("/search", resultData);
  router.post("/opportunities", CreateOpportunities);
  router.post("/staging", CreatStaging);
  router.put("/opportunities", EditOpportunities);
  // router.post("/opportunities/Add", AddOpportunity);
  return router;
}
