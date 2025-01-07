// projects.component.ts
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      technologies: ["Angular", "Node.js", "MongoDB", "Socket.io"],
      link: "https://github.com/johndoe/ecommerce"
    },
    {
      title: "Task Management App",
      description: "A Kanban-style task management application with team collaboration features.",
      technologies: ["Angular", "Express", "PostgreSQL", "WebSockets"],
      link: "https://github.com/johndoe/taskmanager"
    },
    {
      title: "Weather Forecast Dashboard",
      description: "A responsive weather dashboard with 5-day forecasts and location search.",
      technologies: ["Angular", "RxJS", "OpenWeatherMap API", "Chart.js"],
      link: "https://github.com/johndoe/weatherdashboard"
    }
  ];
}
