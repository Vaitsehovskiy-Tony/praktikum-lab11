import "../pages/index.css";


import {Api} from './Api';
import {Card} from './Card';
import {CardList} from './CardList';
import {Popup} from './Popup';
import {Focus} from './Focus';
import {UserInfo} from './UserInfo';
import {FormValidator} from './FormValidator';



// объявление глобальных переменных

const popup = document.querySelector('.popup');
const popupUser = document.querySelector('.popup__user');
const popups = {
  popup,
  popupUser
};
const form = document.forms.new;
export const userForm = document.forms.edit;
const popupClose = document.querySelector('.popup__close');
const popupUserClose = document.querySelector('.popup__close-user');
const addPlaceButton = document.querySelector('.user-info__button');
const userEditBttn = document.querySelector(`.user-info__edit`);
const placesList = document.querySelector('.places-list');
const submitUser = userForm.querySelector('.button');
const submitPlace = popup.querySelector('.button');
const userInfoName = document.querySelector('.user-info__name');
const userInfoJob = document.querySelector('.user-info__job');
const inputUser = userForm.user;
const inputInterests = userForm.interests;
const inputName = form.name;
const inputLink = form.link;
const ip = NODE_ENV === 'development' ? 'http://praktikum.tk' : 'https://praktikum.tk';
const groupId = 'cohort7';
const authoriz = '18709e85-c197-4083-8e6e-7400479c7833';
const link = {
  ip,
  groupId,
  authoriz
}
const focusBlock = document.querySelector('.focus-block');
export const errors = {
  validationEmpty: 'Это обязательное поле',
  validationLength: 'Должно быть от 2 до 30 символов',
  validationURL: 'Здесь должна быть ссылка'
}
const inputFields = {
  inputUser,
  inputInterests,
  inputName,
  inputLink,
}
let element = '';

// инициализация классов

const card = new Card(placesList);
const api = new Api(link, userForm);
const userInfo = new UserInfo(userForm, userInfoName, userInfoJob, api);

const placeCards = new CardList(element, document.querySelector('.places-list'), card, api);

const formValidator = new FormValidator(inputFields, errors, popups, form, userForm, placeCards);

const popupPlace = new Popup(popups, addPlaceButton, popupClose, popupUserClose, userEditBttn, formValidator, inputFields, errors);
  
const focus = new Focus(focusBlock);

// слушатели

placesList.addEventListener('click', focus.focusImage);
focusBlock.addEventListener('click', focus.endFocusHandler);

userForm.addEventListener('submit', () => {
  userInfo.userFormSubmit();
});

form.addEventListener('submit', () => {
  formValidator.inputUserDataHandler(event);
})

// слушатели посимвольной проверки

inputFields.inputName.addEventListener('input', () => {
  formValidator.activeSubmitPlaceHandler();
  formValidator.validBySymbol(inputFields.inputName);
});

inputFields.inputLink.addEventListener('input', () => {
  formValidator.activeSubmitPlaceHandler();
  formValidator.validBySymbol(inputFields.inputLink);

});

inputFields.inputUser.addEventListener('input', () => {
  formValidator.activeSubmitHandler();
  formValidator.validBySymbol(inputFields.inputUser);

});

inputFields.inputInterests.addEventListener('input', () => {
  formValidator.activeSubmitHandler();
  formValidator.validBySymbol(inputFields.inputInterests);

});


// вызов методов

placeCards.render();
userInfo.setUserInfoFromServer();