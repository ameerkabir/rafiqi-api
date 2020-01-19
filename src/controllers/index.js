import { uniq, pipe } from "ramda";
import { fetchData, getEntrepreneurship, getBody } from "../helper";
import opportunities from "../helper/data.json";
import RafiqiContext from "../routes/context/rafiqi";
import StagingRafiqiContext from "../routes/context/stagingRafiqi";
import { checkSchema, validationResult } from "express-validator/check";
import { validateFormOPtions } from "../helper/validation";

export const homepage = (req, res) => {
  res.status(200).json("This is  Api");
};

export const getOpportunities = async (req, res) => {
  try {
    // const { _id, data } = req.body;
    const opportunities = await RafiqiContext.findAll();
    return res.status(200).json({
      opportunities
    });
  } catch (e) {
    return res.status(500).json({ e });
  }
};

export const resultData = async (req, res) => {
  const { startYourOwnBusiness } = await req.body;
  try {
    const opportunities = await RafiqiContext.findAll();
    const response = await fetchData(getBody(req), opportunities);
    if (response.length) {
      return res.status(200).json({
        data: response
      });
    } else {
      return res.status(201).json({
        message:
          "No opportunity suitable to your profile was found. We will contact in the future if a suitable opportunity comes up"
      });
    }
  } catch (e) {
    console.error(e);
  }
};
export const CreatStaging = async (req, res) => {
  const themDictionary = {
    "entrepreneurship and incubation": 0,
    "IT support and Networking": 1,
    "Web/Mobile/Software development": 2,
    "Data Analytics": 3,
    "Artificial Intelligence": 4,
    "Healthcare Professional": 5,
    "None IT Engineer": 6,
    "Skilled Trades(houseKeeper, plummer, electrician, agriculture)": 7,
    Teaching: 8,
    "Digital Marketing": 9,
    "Sales Customer Service": 10,
    "Artist & Creative Vocations(painter, poet)": 11,
    "Content Manager(Writer, translator, content creator)": 12,
    Legal: 13,
    "Political & Social Science": 14,
    "Social Worker": 15,
    "Accounting And Finance": 16,
    "Business And Management": 17,
    "Scientific Research": 18,
    "Other Research": 19,
    Others: 20
  };
  const LevelDictionary = {
    low: 1,
    medium: 2,
    high: 3,
    "Full-time (30+ hours per week)": 3
  };
  try {
    debugger;
    const opportunity = await req.body;
    debugger;
    const opportunityToSave = {
      ...opportunity,
      cluster_nb: themDictionary[req.body.theme],
      level: LevelDictionary[req.body.candidateReadiness]
    };
    console.log(req.body);
    //
    const result = await StagingRafiqiContext.create(opportunityToSave);
    return res.status(200).json({ opportunityToSave });
  } catch (e) {
    return res.status(500).json({ e });
  }
};
export const AddOpportunity = async (req, res) => {
  try {
    const opportunity = await req.body;
    return res.status(200).json({ opportunity });
  } catch (e) {
    return res.status(500).json({ e });
  }
};

export const CreateOpportunities = async (req, res) => {
  try {
    const opportunity = await RafiqiContext.create(req.body);

    return res.status(200).json({
      opportunity
    });
  } catch (e) {
    return res.status(500).json({ e });
  }
};

export const EditOpportunities = async (req, res) => {
  try {
    const { _id, data } = req.body;
    const opportunity = await RafiqiContext.findOneAndUpdate({ _id }, data);
    return res.status(200).json({
      opportunity
    });
  } catch (e) {
    return res.status(500).json({ e });
  }
};
export const getOpportunity = async (req, res) => {
  try {
    const _id = req.params.id;
    const opportunity = await RafiqiContext.findBy({ _id });
    return res.status(200).json({
      opportunity
    });
  } catch (e) {
    return res.status(500).json({ e });
  }
};

export const countUniq = async (req, res) => {
  try {
    const lengthOfUniqOpportunities = uniq(opportunities);
    return res.status(200).json({
      lengthOfUniqOpportunities: lengthOfUniqOpportunities.length
    });
  } catch (e) {
    return res.status(500).json({ e });
  }
};
