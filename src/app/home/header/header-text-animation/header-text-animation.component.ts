import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-text-animation',
  templateUrl: './header-text-animation.component.html',
  styleUrls: ['./header-text-animation.component.css']
})
export class HeaderTextAnimationComponent implements OnInit {

  htmlBindText = '';
  htmlBindText1 = '';
  htmlBindText2 = '';
  htmlBindText3 = '';
  htmlBindText4 = '';
  htmlBindText5 = '';
  htmlBindText6 = '';
  htmlBindText7 = '';
  htmlBindText8 = '';
  htmlBindText9 = '';
  htmlBindText10 = '';
  htmlBindText11 = '';
  htmlBindText12 = '';

  htmlBindTextArray = [
    this.htmlBindText,
    this.htmlBindText1,
    this.htmlBindText2,
    this.htmlBindText3,
    this.htmlBindText4,
    this.htmlBindText5,
    this.htmlBindText6,
    this.htmlBindText7,
    this.htmlBindText8,
    this.htmlBindText9,
    this.htmlBindText10,
    this.htmlBindText11,
    this.htmlBindText12
  ]
  textToAnimate = '$ Hey, I am Ramchandra Shahi Thakuri\n';
  textToAnimate1 = '<'
  textToAnimate2 = 'span';
  textToAnimate3 = ' ['
  textToAnimate4 = 'color';
  textToAnimate5 = ']'
  textToAnimate6 = '=';
  textToAnimate7 = '"#33033"';
  textToAnimate8 = '>'
  textToAnimate9 = 'I love coding!'
  textToAnimate10 = '<'
  textToAnimate11 = '\\span'
  textToAnimate12 = '>'

  textToAnimateArray = [
    this.textToAnimate, 
    this.textToAnimate1,
    this.textToAnimate2, 
    this.textToAnimate3, 
    this.textToAnimate4,
    this.textToAnimate5,
    this.textToAnimate6,
    this.textToAnimate7,
    this.textToAnimate8,
    this.textToAnimate9,
    this.textToAnimate10,
    this.textToAnimate11,
    this.textToAnimate12
  ]
    
  textAnimateColor = '';  
  cursor = ''
  cursorAtEnd = false;
  constructor() { }

   async ngOnInit(): Promise<void> {
    console.log(this.textToAnimateArray.length)
    const cursorInterval = this.cursorEffect(150)
   
    for(let j = 0; j < this.textToAnimateArray.length; j++) {     
      let currentText = this.textToAnimateArray[j];
     
      for(let i = 0; i < currentText.length; i++) {
        this.htmlBindTextArray[j] = this.htmlBindTextArray[j].replace('|', '')
        this.htmlBindTextArray[j]= this.htmlBindTextArray[j].concat(currentText[i])
        this.htmlBindTextArray[j] = this.htmlBindTextArray[j].concat(this.cursor)
        console.log(this.htmlBindText)
        await this.sleep(90)
      }
   
      this.htmlBindTextArray[j] = this.htmlBindTextArray[j].replace('|', '')

   
    }
    this.cursorAtEnd = true;
    clearInterval(cursorInterval)
    this.cursorEffect(400)
   
  }
  
cursorEffect(blinkSpeed: number) {
  return setInterval(() => {
      if(this.cursor == '|')
      {
        this.cursor = '';
      }
      else {
        this.cursor = '|';
      } 
    }, blinkSpeed)
  }
  
  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
