import { Component, OnInit } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  textToAnimate = '$ Hey, I am Ramchandra Shahi Thakuri\n<span [color]="#330033">I love doing coding\n</span>';
  textAnimateColor = '';  cursor = ''
  cursorAtEnd = false;
  htmlBindedText = '';
  async ngOnInit(): Promise<void> {
    this.htmlBindedText = this.htmlBindedText.concat('|')
    setInterval(() => {
      if(this.cursor == '|')
      {
        this.cursor = '';
      }
      else {
        this.cursor = '|';
      } 
    }, 200)
    for(let i = 0; i < this.textToAnimate.length; i++) {
      this.htmlBindedText = this.htmlBindedText.replace('|', '')
      this.htmlBindedText = this.htmlBindedText.concat(this.textToAnimate[i])
      this.htmlBindedText = this.htmlBindedText.concat(this.cursor)
      
      await this.sleep(90)
    }
    this.htmlBindedText = this.htmlBindedText.replace('|', '')
    this.cursorAtEnd = true;

    // setInterval(() => {
    //   this.text1 = this.text1.substring(0, this.text1.length-2) + this.cursor;
    // }, 90)
   
  }
  
  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

}
