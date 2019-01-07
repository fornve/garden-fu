import { fieldsNew as servicesFieldsNew } from '../../../services/fields'

export const fieldsNew = function({ commit, state }, field) {
  servicesFieldsNew(field);
};


