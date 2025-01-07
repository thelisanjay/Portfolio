import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  // Ensure that skills is declared as an array of objects
  skills: Skill[] = [
    { name: "TypeScript", level: 90 },
    { name: "Angular", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 70 },
    { name: "GraphQL", level: 65 }
  ];
}
