/*
 * RegisterPage Messages
 *
 * This contains all the text for the RegisterPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'register.title',
    defaultMessage: 'Registration'
  },

  form: {
    username: {
      title: {
        id: 'register.form.username.title',
        defaultMessage: 'Username'
      },

      hint: {
        id: 'register.form.username.hint',
        defaultMessage: 'username'
      }
    },

    password: {
      title: {
        id: 'register.form.password.title',
        defaultMessage: 'Password'
      },

      hint: {
        id: 'register.form.password.hint',
        defaultMessage: 'password'
      }
    },

    passwordConfirm : {
      title: {
        id: 'register.form.passwordConfirm.title',
        defaultMessage: 'Confirm password'
      },

      hint: {
        id: 'register.form.passwordConfirm.hint',
        defaultMessage: 'password'
      }
    },

    firstname: {
      title: {
        id: 'register.form.firstname.title',
        defaultMessage: 'First name: '
      },

      hint: {
        id: 'register.form.firstname.hint',
        defaultMessage: 'first name'
      }
    },

    lastname: {
      title: {
        id: 'register.form.lastname.title',
        defaultMessage: 'Last name: '
      },

      hint: {
        id: 'register.form.lastname.hint',
        defaultMessage: 'last name'
      }
    },

    email: {
      title: {
        id: 'register.form.email.title',
        defaultMessage: 'Email: '
      },

      hint: {
        id: 'register.form.email.hint',
        defaultMessage: 'email@qmail.com'
      }
    },

    phonenumber: {
      title: {
        id: 'register.form.phonenumber.title',
        defaultMessage: 'Phone number: '
      },

      hint: {
        id: 'register.form.phonenumber.hint',
        defaultMessage: '1234567890 etc.'
      }
    },

    about: {
      title: {
        id: 'register.form.about.title',
        defaultMessage: 'About: '
      },

      hint: {
        id: 'register.form.selectIngredient.hint',
        defaultMessage: '...: '
      }
    },

    timezone: {
      id: 'register.form.timezone',
      defaultMessage: 'Select timezone'
    },

    language: {
      id: 'register.form.language',
      defaultMessage: 'Select language'
    }
  },

  button: {
    register: {
      id: 'register.button.register',
      defaultMessage: 'Registration'
    }
  },
  link : {
    login : {
      id : 'register.link.login',
      defaultMessage: 'Login'
    },
    changeLanguage : {
      id : 'register.link.changeLanguage',
      defaultMessage: 'Change language'
    }
  },
  validate: {
    required : {
      id: 'register.validate.required',
      defaultMessage: 'This field is required'
    },
    minLength : {
      id: 'register.validate.minLength',
      defaultMessage: 'Minimal value length {value}'
    },
    maxLength : {
      id: 'register.validate.maxLength',
      defaultMessage: 'Maximal value length {value}'
    },
    regexpEmail : {
      id: 'register.validate.regexpEmail',
      defaultMessage: 'Enter valid email'
    },
    regexpPassword : {
      id: 'register.validate.regexpPassword',
      defaultMessage: 'Password must contain upper letter, number'
    },
    regexpPhone : {
      id: 'register.validate.regexpPhone',
      defaultMessage: 'Enter valid phone'
    },
    compared : {
      password : {
        id : 'register.validate.compared.password',
        defaultMessage : 'This field not match with  password confirm field'
      },
      passwordConfirm : {
        id : 'register.validate.compared.passwordConfirm',
        defaultMessage : 'This field not match with  password field'
      }
    }
  }
});
