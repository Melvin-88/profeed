/**
 * Component Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected dialog',
  prompts: [ {
    type: 'list',
    name: 'type',
    message: 'Select the type of dialog',
    default: 'ES6 Class',
    choices: () => ['Stateless Function', 'ES6 Class (Pure)', 'ES6 Class']
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Groups',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    }
  }, {
    type: 'input',
    name: 'dtype',
    message: 'What should it be dialog type(Add | Edit | Remove)?',
    default: 'Add',
    choices: () => ['Add', 'Edit', 'Remove']
  }, {
    type: 'confirm',
    name: 'wantMessages',
    default: false,
    message: 'Do you want i18n messages (i.e. will this component use text)?'
  }, {
    type: 'confirm',
    name: 'wantAction',
    default: true,
    message: 'Do you want actions?'
  }, {
    type: 'confirm',
    name: 'wantReducer',
    default: true,
    message: 'Do you want reducer?'
  }, {
    type: 'confirm',
    name: 'wantSaga',
    default: true,
    message: 'Do you want saga?'
  } ],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate;

    switch (data.type) {
      case 'ES6 Class': {
        componentTemplate = './dialog/es6.js.hbs';
        break;
      }
      case 'ES6 Class (Pure)': {
        componentTemplate = './dialog/es6.pure.js.hbs';
        break;
      }
      case 'Stateless Function': {
        componentTemplate = './dialog/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './dialog/es6.js.hbs';
      }
    }

    const actions = [ {
      type: 'add',
      path: '../../src/client/components/dialogs/{{lowerCase name}}/Dialog{{properCase name}}{{properCase dtype}}/index.js',
      templateFile: './dialog/index.js.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: '../../src/client/components/dialogs/{{lowerCase name}}/Dialog{{properCase name}}{{properCase dtype}}/Container.js',
      templateFile: componentTemplate,
      abortOnFail: true
    } ];

    // If they want a i18n messages file
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../src/client/components/dialogs/{{lowerCase name}}/Dialog{{properCase name}}{{properCase dtype}}/messages.js',
        templateFile: './dialog/messages.js.hbs',
        abortOnFail: true
      });
    }

    if (data.wantAction) {
      actions.push({
        type: 'add',
        path: '../../src/client/components/dialogs/{{lowerCase name}}/Dialog{{properCase name}}{{properCase dtype}}/actions.js',
        templateFile: './dialog/actions.js.hbs',
        abortOnFail: true
      });
    }

    if (data.wantReducer) {
      actions.push({
        type: 'add',
        path: '../../src/client/components/dialogs/{{lowerCase name}}/Dialog{{properCase name}}{{properCase dtype}}/reducer.js',
        templateFile: './dialog/reducer.js.hbs',
        abortOnFail: true
      });
      actions.push({
        type: 'add',
        path: '../../src/client/components/dialogs/{{lowerCase name}}/Dialog{{properCase name}}{{properCase dtype}}/selectors.js',
        templateFile: './dialog/selectors.js.hbs',
        abortOnFail: true
      });
    }

    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '../../src/client/components/dialogs/{{lowerCase name}}/Dialog{{properCase name}}{{properCase dtype}}/sagas.js',
        templateFile: './dialog/sagas.js.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
