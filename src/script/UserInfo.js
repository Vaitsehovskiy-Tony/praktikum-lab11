import {userForm} from "./index";

export class UserInfo {

  constructor(userForm, userInfoName, userInfoJob, api){

    this.userForm = userForm;
    this.userInfoName = userInfoName;
    this.userInfoJob = userInfoJob;
    this.ava = document.querySelector('.user-info__photo');
    this.api = api;
  }

  updateUserInfo(name, interests, avatar){
    
    this.userInfoName.textContent = name;
    this.userInfoJob.textContent = interests;
    this.ava.style.backgroundImage = `url(${avatar})`;

  }

  setUserInfoToPopup(){

    this.userForm.user.value = this.userInfoName.textContent;
    this.userForm.interests.value = this.userInfoJob.textContent;
  }

  setUserInfoFromServer() {

    this.api.loadUserInfo()
    .then(res => {
      //  Надо исправить:  Не переносите и не дублируйте реализацию в  класс Api, С класса можно только возвращать данные. Это надо удалить
      this.updateUserInfo(res.name, res.about, res.avatar);
      this.setUserInfoToPopup();
    })

  }

  sendUserInfoFromServer() {
    
    this.api.sendUserInfo()
    .then(res => {
      //  Надо исправить:  Не переносите и не дублируйте реализацию в  класс Api, С класса можно только возвращать данные. Это надо удалить   
      this.updateUserInfo(res.name, res.about, res.avatar);
      this.setUserInfoToPopup();
    })
  }

    
  userFormSubmit(){
    event.preventDefault();

    if (userForm.bttn.classList.contains('popup__button_validIsOk')) {
      this.sendUserInfoFromServer();
      userForm.closest('.popup__user').classList.remove('popup_is-opened');
    }
  }  
}