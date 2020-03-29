'use strict';

export class Card {

  constructor(placesList) {
    this.placesList = placesList;
   }

  create(data) {

    this.data = data;

    const card = document.createElement('div');
    const placeCardImage = document.createElement('div');
    const placeCardDeleteIcon = document.createElement('button');
    const placeCardDescription = document.createElement('div');
    const placeCardName = document.createElement('h3');
    const placeCardLikeIcon = document.createElement('button');

    card.classList.add('place-card');
    placeCardImage.classList.add('place-card__image');
    placeCardDeleteIcon.classList.add('place-card__delete-icon');
    placeCardDescription.classList.add('place-card__description');
    placeCardName.classList.add('place-card__name');
    placeCardLikeIcon.classList.add('place-card__like-icon');


    placeCardImage.style.backgroundImage = `url(${this.data.link})`;
    placeCardName.textContent = this.data.name;

    placeCardImage.appendChild(placeCardDeleteIcon);
    placeCardDescription.appendChild(placeCardName);
    placeCardDescription.appendChild(placeCardLikeIcon);

    card.appendChild(placeCardImage);
    card.appendChild(placeCardDescription);

    placeCardLikeIcon.addEventListener('click', this.like.bind(this));

    placeCardDeleteIcon.addEventListener('click', this.remove.bind(this));


    return card;

  }

  like(event) {
    event.target.classList.toggle('place-card__like-icon_liked')
  }

  remove(event) {
    this.placesList.removeChild(event.target.closest('.place-card'));
  }
}


/**
 *     // я пока не понял как реализовать like и remove используя template и insertAdjacentHTML, 
    // все время вылезал "вы пытаетесь получить queryselector of undefined"

    //   this.template = `<div class="place-card"> 
    //   <div class="place-card__image" style="background: url(${this.data.link})"> 
    //     <button class="place-card__delete-icon"></button>
    //   </div>
    //   <div class="place-card__description">
    //     <h3 class="place-card__name">${this.data.name}</h3>
    //     <button class="place-card__like-icon"></button>
    //   </div>
    // </div>`

    // return this.template;


* я пока не понял как реализовать like и remove используя template и insertAdjacentHTML, все время вылезал "вы пытаетесь получить queryselector of undefined"
*
*  *  
 *  я очень рекомендую ознакомиться с двумя статьями 
 * https: //learn.javascript.ru/event-delegation
 * https: //learn.javascript.ru/event-bubbling
 * Можно лучше: Приведу пример делегирования для вашего понимания 
 */
// пример кода
// function myFuncList() {
//   if (event.target.closest('.place-card__like-icon')) {
//     console.log('like');
//     // здесь вызываете функцию для вызова лайка, передавая контекст
//   }
//   if (event.target.closest('.place-card__delete-icon')) {
//     console.log('delete');
//     // здесь вызываете функцию на удаления, передавая контекст
//   }
// };
// document.querySelector('.places-list').addEventListener('click', myFuncList);