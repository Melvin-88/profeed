/*
 * LoginPage Messages
 *
 * This contains all the text for the RationPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  form: {
    title: {
      id: 'loginPage.form.title',
      defaultMessage: 'Login'
    },

    bad: {
      id: 'loginPage.form.bad',
      defaultMessage: 'User not exist or bad password'
    },

    login: {
      title: {
        id: 'loginPage.form.login.title',
        defaultMessage: 'Login'
      },

      message: {
        id: 'loginPage.form.login.message',
        defaultMessage: 'This field is required!'
      }
    },

    password: {
      title: {
        id: 'loginPage.form.password.title',
        defaultMessage: 'Login'
      },

      message: {
        id: 'loginPage.form.password.message',
        defaultMessage: 'This field is required!'
      }
    }
  },

  button : {
    login: {
      id: 'loginPage.button.login',
      defaultMessage: 'Login'
    }
  }
});
