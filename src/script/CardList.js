'use strict';

export class CardList {

  constructor(element, container, card, api) {

    this.container = container;
    this.element = element;
    this.card = card;    
    this.api = api;


  }

  addCard(element) {

    return this.card.create(element);
  }

  addNewCard(element) {
    this.container.insertAdjacentElement('beforeend', this.addCard(element));
  }

  render() {

    this.api.getInitialCards()
    .then(res => {

      for (let i of res) {
        this.container.insertAdjacentElement('beforeend', this.addCard(i));
      }

    })
    

  }

}