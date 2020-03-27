import {errors} from './index';

export class FormValidator {


  constructor(inputFields, errors, popups, form, userForm, placeCards) {

    this.inputFields = inputFields;
    this.errors = errors;
    this.popups = popups;
    this.form = form;
    this.userForm = userForm;
    this.placeCards = placeCards;
    // this.api = api;


    this.setEventListeners(this.popups.popup);
    this.setEventListeners(this.popups.popupUser);

  }

  checkInput(inpt) {

    const errorElement = inpt.nextElementSibling;
    this.hideError(errorElement);

    if (!inpt.checkValidity()) {

      if (inpt.value == '') {
        errorElement.textContent = errors.validationEmpty;
      } else if (inpt.name == 'link') {
        errorElement.textContent = errors.validationURL;
      } else {
        errorElement.textContent = errors.validationLength;
      }

      this.showError(errorElement);
      return false;
    }

    return true;
  }

  setEventListeners() {

    let arr = [];

    if (this.somePopup == this.popups.popup) {
      arr = Array.from(this.form.elements);
    }
    else {
      arr = Array.from(this.userForm.elements);
    };

    let isValid = true;
    arr.forEach((item) => {

      if (item !== arr[2]) {
        if (!this.checkInput(item)) { isValid = false };

      }
    });

  }

  activeSubmitPlaceHandler() {

    if ((this.form.name.checkValidity()) && (this.form.link.checkValidity())) {

      this.form.querySelector('.button').classList.add('popup__button_validIsOk');
    } else {
      this.form.querySelector('.button').classList.remove('popup__button_validIsOk');
    }
  }

  activeSubmitHandler() {

    if ((this.userForm.user.checkValidity()) && (this.userForm.interests.checkValidity())) {
      this.userForm.querySelector('.button').classList.add('popup__button_validIsOk');
    } else {
      this.userForm.querySelector('.button').classList.remove('popup__button_validIsOk');
    }
  }


  validBySymbol(obj) {
    this.hideError(obj.nextElementSibling);
    this.checkInput(obj);

  };

  showError(span) {
    span.classList.remove('popup__error_hide');
  }

  hideError(span) {
    span.classList.add('popup__error_hide');
  }

  inputUserDataHandler(event) {
    
    event.preventDefault();

    const data = event.currentTarget;
    const name = data.name.value;
    const link = data.link.value;
    const element = {
      name,
      link
    }
    // this.api.addNewCard(element);
    this.placeCards.addNewCard(element);
    this.popups.popup.classList.remove('popup_is-opened');
  
    
  }

}
