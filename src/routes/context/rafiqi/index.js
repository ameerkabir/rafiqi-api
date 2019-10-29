import OpportunitiesService from './service';

const opportunitiesService = new OpportunitiesService();

export default {
  show: id => opportunitiesService.show(id),
  findBy: (query, set) => opportunitiesService.findBy(query, set),
  create: set => opportunitiesService.create(set),
  findOneAndUpdate: (query, set) =>
    opportunitiesService.findOneAndUpdate(query, set),
  hardDelete: query => opportunitiesService.hardDelete(query),
  findAll: () => opportunitiesService.findAll()
};
