import { Component, Input } from "@angular/core";
import { Person } from "./Modelos/Person";

@Component({
  selector: "hello",
  template: ``,
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
}
