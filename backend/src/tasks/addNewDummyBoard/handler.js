/**
 * This file was generated using 8base CLI.
 *
 * To learn more about writing custom task functions, visit
 * the 8base documentation at:
 *
 * https://docs.8base.com/docs/8base-console/custom-functions/tasks/
 *
 * To update this functions invocation settings, update its configuration block
 * in the projects 8base.yml file:
 *  functions:
 *    addNewDummyBoard:
 *      ...
 *
 * Data that is sent to the function can be accessed on the event argument at:
 *  event.data[KEY_NAME]
 *
 * There are two ways to invoke this function locally:
 *
 *  (1) Explicit file mock file path using '-p' flag:
 *    8base invoke-local addNewDummyBoard -p src/resolvers/addNewDummyBoard/mocks/request.json
 *
 *  (2) Default mock file location using -m flag:
 *    8base invoke-local addNewDummyBoard -m request
 *
 *  Add new mocks to this function to test different input arguments. Mocks can easily be generated
 *  the following generator command:
 *    8base generate mock addNewDummyBoard -m [MOCK_FILE_NAME]
 */

import { faker } from "@faker-js/faker";

const MUTATION = `
  mutation($data: BoardCreateInput!) {
    boardCreate(data: $data) {
      id
      title
    }
  }
`

// mutation {
//   boardCreate(data: {
//     title: ""
//     tasks: {
//       create: [
//         {
//           title: ""
//           description: ""
//         }
//       ]
//     }
//   }){

//     id
//     title
//   }
// }

module.exports = async (event, ctx) => {
  let description = faker.hacker.phrase()

  const variables = {
    data: {
      title: faker.hacker.adjective(),
      tasks: {
        create: [
          {
            title: faker.hacker.verb(),
            description
          }
        ]
      }
    }
  }

  await ctx.api.gqlRequest(MUTATION, variables);

  return {
    data: {
      result: `Task received: ${event.data.foo}`
    },
  };
};
