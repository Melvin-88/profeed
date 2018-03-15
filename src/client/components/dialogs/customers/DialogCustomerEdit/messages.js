/*
 * CustomersDialogs Messages
 *
 * This contains all the text for the CustomersDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'customers.dialog.edit.title',
    defaultMessage: 'Edit customer'
  },
  form : {
    nickname: {
      title: {
        id: 'customers.dialog.edit.form.nickname.title',
        defaultMessage: 'Nickname'
      },

      hint: {
        id: 'customers.dialog.edit.form.nickname.hint',
        defaultMessage: 'nickname'
      }
    },
    password: {
      title: {
        id: 'customers.dialog.edit.form.password.title',
        defaultMessage: 'Password'
      },
      hint: {
        id: 'customers.dialog.edit.form.password.hint',
        defaultMessage: 'password'
      }
    },
    firstname: {
      title: {
        id: 'customers.dialog.edit.form.firstname.title',
        defaultMessage: 'First name'
      },
      hint: {
        id: 'customers.dialog.edit.form.firstname.hint',
        defaultMessage: 'first name'
      }
    },
    lastname: {
      title: {
        id: 'customers.dialog.edit.form.lastname.title',
        defaultMessage: 'Last name'
      },

      hint: {
        id: 'customers.dialog.edit.form.lastname.hint',
        defaultMessage: 'last name'
      }
    },

    email: {
      title: {
        id: 'customers.dialog.edit.form.email.title',
        defaultMessage: 'Email'
      },

      hint: {
        id: 'customers.dialog.edit.form.email.hint',
        defaultMessage: 'email@qmail.com'
      }
    },

    phoneNumber: {
      title: {
        id: 'customers.dialog.edit.form.phoneNumber.title',
        defaultMessage: 'Phone number'
      },

      hint: {
        id: 'customers.dialog.edit.form.phoneNumber.hint',
        defaultMessage: 'xxx-xxx-xxxx'
      }
    },

    active: {
      id: 'customers.dialog.edit.form.active',
      defaultMessage: 'User is active'
    },

    farm: {
      title: {
        id: 'customers.dialog.edit.form.farm.title',
        defaultMessage: 'Farm'
      },

      hint: {
        id: 'customers.dialog.edit.form.farm.hint',
        defaultMessage: 'farm'
      }
    },

    groupPermissions: {
      title: {
        id: 'customers.dialog.edit.form.groupPermissions.title',
        defaultMessage: 'Group permissions'
      },

      hint: {
        id: 'customers.dialog.edit.form.groupPermissions.hint',
        defaultMessage: 'group permissions'
      }
    },

    about: {
      title: {
        id: 'customers.dialog.edit.form.about.title',
        defaultMessage: 'About'
      },

      hint: {
        id: 'customers.dialog.edit.form.about.hint',
        defaultMessage: '...'
      }
    }

  },

  button: {
    cancel :  {
      id: 'customers.dialog.edit.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'customers.dialog.edit.button.save',
      defaultMessage: 'Save'
    }
  }
});
