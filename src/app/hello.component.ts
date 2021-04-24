import { Component, Input } from "@angular/core";
import { Person } from "./Modelos/Person";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  listPerson: Person[] = [
    {
      Name: "Sandra",
      LastName: "Lopez"
    },
    {
      Name: "Andrea",
      LastName: "Solis"
    },
    {
      Name: "Roberto",
      LastName: "Sanchez"
    }
  ];
}
