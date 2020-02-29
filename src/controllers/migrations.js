import opportunities from "../helper/data.json";
import RafiqiContext from "../routes/context/rafiqi";
import { uniq } from "ramda";

export const migrate = async (req, res) => {
  try {
    const uniqOpportunities = await uniq(opportunities);

    await Promise.all([
      uniqOpportunities.forEach(async opportunity => {
        await RafiqiContext.create(opportunity);
      })
    ]);
    return res.status(200).json({ message: "The data is being populated 😀" });
  } catch (e) {
    console.log(e);
  }
};
