import { projectsNew as servicesProjectsNew } from '../../../services/projects'

export const projectsNew = function({ commit, state }, userId) {
  servicesProjectsNew(userId);
};


