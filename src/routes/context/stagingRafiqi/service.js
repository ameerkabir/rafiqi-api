import StagingOpportunitiesModel from "./dao";

export default class StagingOpportunitiesService {
  constructor() {
    this.stagingOpportunitiesDao = new StagingOpportunitiesModel();
  }

  async show(opportunityId) {
    const opportunity = await this.stagingOpportunitiesDao.findOneBy({
      opportunityId
    });
    return opportunity;
  }

  async findBy(query, set) {
    return await this.stagingOpportunitiesDao.findBy(query, set);
  }

  async create(opportunityData) {
    return this.stagingOpportunitiesDao.create(opportunityData);
  }

  async findOneAndUpdate(query, set) {
    return this.stagingOpportunitiesDao.findOneAndUpdate(query, set);
  }

  async hardDelete(query) {
    return await this.stagingOpportunitiesDao.hardDelete(query);
  }

  async save(query) {
    return await this.stagingOpportunitiesDao.save(query);
  }

  async findAll() {
    return await this.stagingOpportunitiesDao.findAll();
  }
}
