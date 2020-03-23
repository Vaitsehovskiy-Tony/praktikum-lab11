'use strict';

export class Popup {

  constructor(popups, addPlaceButton, popupClose, popupUserClose, userEditBttn, formValidator, inputFields, errors) {

    this.popups = popups; 
    this.addPlaceButton = addPlaceButton;
    this.popupClose = popupClose;
    this.popupUserClose = popupUserClose;
    this.userEditBttn = userEditBttn;
    this.formValidator = formValidator;
    this.inputFields = inputFields;
    this.errors = errors;
    this.addPlaceButton = addPlaceButton;

    this.addPlaceButton.addEventListener('click', this.openPlace.bind(this));
    this.popupClose.addEventListener('click', this.close.bind(this));
    this.userEditBttn.addEventListener('click', this.openUser.bind(this));
    this.popupUserClose.addEventListener('click', this.close.bind(this));


  }

  openPlace() {

      this.popups.popup.classList.toggle('popup_is-opened');
      this.popups.popup.querySelector('.popup__input_type_name').value = '';
      this.popups.popup.querySelector('.popup__input_type_link-url').value = '';

    } 
    
    
    openUser(){

      this.popups.popupUser.classList.toggle('popup_is-opened');
     this.formValidator.setEventListeners(this.popups.popupUser);

    }

  

  close() {

     this.popups.popup.classList.remove('popup_is-opened');
      this.popups.popupUser.classList.remove('popup_is-opened')
  }

}