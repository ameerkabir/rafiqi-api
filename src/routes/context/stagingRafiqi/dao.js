import Dao from '../../../lib/dao';
import StagingOpportunitiesModel from './schema';

export default class StagingOpportunitiesModelDao extends Dao {
  constructor() {
    super(StagingOpportunitiesModel);
  }

  async create(set) {
    const stagingOpportunitiesModel = new StagingOpportunitiesModel(set);
    return stagingOpportunitiesModel.save();
  }
}
