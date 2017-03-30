import React from 'react';
import Button from '../Button';
import Controls from '../Controls';

import './header.scss';

export default props => {
  let nameField;
  let phoneField;
  let emailField;

  function onCreate(onCreateCallback) {
    onCreateCallback({
      name: nameField.value,
      phone: phoneField.value,
      email: emailField.value
    });

    nameField.value = '';
    phoneField.value = '';
    emailField.value = '';
  }

  return (
    <div className="container">
      <header className="header">
        <i className="header__icon fa fa-phone-square" aria-hidden="true"/>
        <form className="header__form"
              onSubmit={(e) => {
                e.preventDefault();
                onCreate(props.onCreate)
              }}
        >
          <div className="header__fields">
            <input
              type="text"
              placeholder="Введите имя..."
              className="header__name"
              ref={ref => nameField = ref}
            />
            <input
              type="text"
              placeholder="Введите номер"
              className="header__phone"
              ref={ref => phoneField = ref}
            />
            <input
              type="text"
              placeholder="Введите email"
              className="header__email"
              ref={ref => emailField = ref}
            />
          </div>
          <Button
            className="button button--create">
            Создать
          </Button>
        </form>
      </header>
    </div>
  );
}