'use strict';

export class Focus {
    constructor(focusBlock){
        
        this.focusBlock = focusBlock;
    }

    makeFocusImage(url) {

        const imageFocus = document.createElement('div');
        const imageFocusImgContainer = document.createElement('div');
        const imageFocusClose = document.createElement('img');
        const imageFocusImage = document.createElement('img');
      
        imageFocus.classList.add('image-focus');
        imageFocusImgContainer.classList.add('image-focus__img-container');
        imageFocusClose.classList.add('image-focus__close');
        imageFocusImage.classList.add('image-focus__image');
      
        imageFocusClose.src = "./images/close.svg";
        imageFocusImage.src = url;
      
        imageFocusImgContainer.appendChild(imageFocusClose);
        imageFocusImgContainer.appendChild(imageFocusImage);
        imageFocus.appendChild(imageFocusImgContainer);
      
        this.focusBlock.appendChild(imageFocus);
      
      }

    focusImage(event){

        if (event.target.classList.contains('place-card__image')) {

            let fullUrl;
            fullUrl = event.target.style.backgroundImage;
            const url = fullUrl.substr(5, fullUrl.length - 7);
            
            focus.makeFocusImage(url);
        }   

      }


    getUrl(event) {

        let fullUrl;
        fullUrl = event.target.style.backgroundImage;
        return fullUrl.substr(5, fullUrl.length - 7);
      
    }



      endFocusHandler(event){

        if (event.target.classList.contains('image-focus__close')) {
      
        //   focus.focusBlock.removeChild(event.target.closest('.image-focus'));
          event.target.closest('.focus-block').removeChild(event.target.closest('.image-focus'));

      
        }
      }

}