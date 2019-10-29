import Dao from '../../../lib/dao';
import OpportunitiesModel from './schema';

export default class OpportunitiesModelDao extends Dao {
  constructor() {
    super(OpportunitiesModel);
  }

  async create(set) {
    const opportunitiesModel = new OpportunitiesModel(set);
    return opportunitiesModel.save();
  }
}
