import StagingOpportunitiesService from './service';

const stagingOpportunitiesService = new StagingOpportunitiesService();

export default {
  show: id => stagingOpportunitiesService.show(id),
  findBy: (query, set) => stagingOpportunitiesService.findBy(query, set),
  create: set => stagingOpportunitiesService.create(set),
  save: set => stagingOpportunitiesService.save(set),
  findOneAndUpdate: (query, set) =>
    stagingOpportunitiesService.findOneAndUpdate(query, set),
  hardDelete: query => stagingOpportunitiesService.hardDelete(query),
  findAll: () => stagingOpportunitiesService.findAll()
};
