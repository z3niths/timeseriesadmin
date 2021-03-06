import { saveConnection, deleteConnection } from './resolvers/connections';
import { updateForm } from './resolvers/form';
import { executeQuery } from './resolvers/executeQuery';

export const resolvers = {
  Mutation: {
    saveConnection,
    deleteConnection,
    updateForm,
    executeQuery,
  },
};
