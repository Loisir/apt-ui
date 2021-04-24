import { NodePlopAPI, Actions } from 'node-plop';

interface Answers {
  packageName: string;
  description: string;
}

module.exports = (plop: NodePlopAPI) => {
  plop.generator('package', {
    description: 'New Package',
    prompts: [
      {
        type: 'input',
        name: 'packageName',
        message: 'Package name (do NOT include @apt-ui prefix):',
        validate: (input: string) => /^[a-z\d-]+$/.test(input) || 'Must enter a valid unscoped npm package name',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Package description:',
        validate: (input: string) => !!input || 'Must enter a description',
      },
    ],
    actions: (answers: Answers): Actions => {
      const { packageName, description } = answers;

      const destination = `packages/${packageName}`;
      const data = {
        packageName: '@apt-ui/' + packageName,
        description: description
      };
      
      return [
        {
          type: 'addMany',
          destination: destination,
          data: data,
          templateFiles: ['package-template/**/*']
        }
      ];
    },
  });
};