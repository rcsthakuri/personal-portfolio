import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  counter = 0;
  skills = this.chunk(['Python', 'Selenium', 'AngularJs', 'Cypress', 'Linux', 'Digital Marketing' , 'Another'], 3);
  skillFontAwesome = this.chunk([
    'fa-brands fa-python', 
    'fa-solid fa-robot', 
    'fa-brands fa-angular', 
    'fa-solid fa-robot', 
    'fa-brands fa-linux',
    'fa-brands fa-adversal',
    'fa-solid fa-robot', 
  ], 3)
  constructor() { }


  chunk(array: string[], size: number) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i++) {
        const last = chunkedArray[chunkedArray.length - 1];
        if (!last || last.length === size) {
            chunkedArray.push([array[i]]);
        } else {
            last.push(array[i]);
        }
    }
    return chunkedArray;
}


  ngOnInit(): void {
    console.log()
  }

}
