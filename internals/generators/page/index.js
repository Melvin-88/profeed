/**
 * Component Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected page',
  prompts: [ {
    type: 'list',
    name: 'type',
    message: 'Select the type of page',
    default: 'ES6 Class',
    choices: () => ['Stateless Function', 'ES6 Class (Pure)', 'ES6 Class']
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    }
  }, {
    type: 'confirm',
    name: 'wantMessages',
    default: true,
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
        componentTemplate = './page/es6.js.hbs';
        break;
      }
      case 'ES6 Class (Pure)': {
        componentTemplate = './page/es6.pure.js.hbs';
        break;
      }
      case 'Stateless Function': {
        componentTemplate = './page/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './page/es6.js.hbs';
      }
    }

    const actions = [ {
      type: 'add',
      path: '../../src/client/pages/{{properCase name}}/index.js',
      templateFile: './page/index.js.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: '../../src/client/pages/{{properCase name}}/Container.js',
      templateFile: componentTemplate,
      abortOnFail: true
    } ];

    // If they want a i18n messages file
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../src/client/pages/{{properCase name}}/messages.js',
        templateFile: './page/messages.js.hbs',
        abortOnFail: true
      });
    }

    if (data.wantAction) {
      actions.push({
        type: 'add',
        path: '../../src/client/pages/{{properCase name}}/actions.js',
        templateFile: './page/actions.js.hbs',
        abortOnFail: true
      });
    }

    if (data.wantReducer) {
      actions.push({
        type: 'add',
        path: '../../src/client/pages/{{properCase name}}/reducer.js',
        templateFile: './page/reducer.js.hbs',
        abortOnFail: true
      });
      actions.push({
        type: 'add',
        path: '../../src/client/pages/{{properCase name}}/selectors.js',
        templateFile: './page/selectors.js.hbs',
        abortOnFail: true
      });
    }

    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '../../src/client/pages/{{properCase name}}/sagas.js',
        templateFile: './page/sagas.js.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
