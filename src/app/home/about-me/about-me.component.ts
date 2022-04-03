import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  aboutMeData = {
    name: 'Ramchandra Shahi Thakuri',
    tech: 'Python, Selenium, AngularJs, Cypress, Linux, Digital Marketing',
    skills: ['Python', 'Selenium', 'AngularJs', 'Cypress', 'Linux', 'Digital Marketing']
  }
  constructor() { }

  ngOnInit(): void {
  }

}
