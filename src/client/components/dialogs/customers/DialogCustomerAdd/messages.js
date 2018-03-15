/*
 * CustomersDialogs Messages
 *
 * This contains all the text for the CustomersDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'customers.dialog.add.title',
    defaultMessage: 'Add customer'
  },

  form : {
    nickname: {
      title: {
        id: 'customers.dialog.add.form.nickname.title',
        defaultMessage: 'Nickname: '
      },

      hint: {
        id: 'customers.dialog.add.form.nickname.hint',
        defaultMessage: 'nickname'
      }
    },

    password: {
      title: {
        id: 'customers.dialog.add.form.password.title',
        defaultMessage: 'Password: '
      },

      hint: {
        id: 'customers.dialog.add.form.password.hint',
        defaultMessage: 'password'
      }
    },

    firstname: {
      title: {
        id: 'customers.dialog.add.form.firstname.title',
        defaultMessage: 'First name: '
      },

      hint: {
        id: 'customers.dialog.add.form.firstname.hint',
        defaultMessage: 'first name'
      }
    },

    lastname: {
      title: {
        id: 'customers.dialog.add.form.lastname.title',
        defaultMessage: 'Last name: '
      },

      hint: {
        id: 'customers.dialog.add.form.lastname.hint',
        defaultMessage: 'last name'
      }
    },

    email: {
      title: {
        id: 'customers.dialog.add.form.email.title',
        defaultMessage: 'Email: '
      },

      hint: {
        id: 'customers.dialog.add.form.email.hint',
        defaultMessage: 'email@qmail.com'
      }
    },

    phoneNumber: {
      title: {
        id: 'customers.dialog.add.form.phoneNumber.title',
        defaultMessage: 'Phone number: '
      },

      hint: {
        id: 'customers.dialog.add.form.phoneNumber.hint',
        defaultMessage: 'xxx-xxx-xxxx '
      }
    },

    active: {
      id: 'customers.dialog.add.form.active',
      defaultMessage: 'User is active '
    },

    farm: {
      title: {
        id: 'customers.dialog.add.form.farm.title',
        defaultMessage: 'Farm: '
      },

      hint: {
        id: 'customers.dialog.add.form.farm.hint',
        defaultMessage: 'farm'
      }
    },

    groupPermissions: {
      title: {
        id: 'customers.dialog.add.form.groupPermissions.title',
        defaultMessage: 'Group permissions: '
      },

      hint: {
        id: 'customers.dialog.add.form.groupPermissions.hint',
        defaultMessage: 'group permissions'
      }
    },

    about: {
      title: {
        id: 'customers.dialog.add.form.about.title',
        defaultMessage: 'About: '
      },

      hint: {
        id: 'customers.dialog.add.form.selectIngredient.hint',
        defaultMessage: '...: '
      }
    }
  },

  button: {
    cancel :  {
      id: 'customers.dialog.add.add.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'customers.dialog.add.add.button.save',
      defaultMessage: 'Save'
    }
  }
});
