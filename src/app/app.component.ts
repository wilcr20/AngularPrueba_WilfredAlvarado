import { Component, VERSION } from "@angular/core";
import { Person } from "./Modelos/Person";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  AddSelected: boolean = false;
  ActualId: number = 3;
  WrongForm = false;

  listPerson: Person[] = [
    {
      Name: "Sandra",
      LastName: "Lopez",
      Id: 1
    },
    {
      Name: "Andrea",
      LastName: "Solis",
      Id: 2
    },
    {
      Name: "Roberto",
      LastName: "Sanchez",
      Id: 3
    }
  ];

  cancelAdd() {
    this.AddSelected = false;
    this.WrongForm = false;
  }

  showFormAdd() {
    this.AddSelected = true;
    this.WrongForm = false;
  }

  ValidateForm() {
    var name: string = (<HTMLInputElement>document.getElementById("inputName"))
      .value;
    var lastName: string = (<HTMLInputElement>(
      document.getElementById("inputLastName")
    )).value;
    if (name.trim() == "" || lastName.trim() == "") {
      this.WrongForm = true;
      return;
    }
    this.ActualId = this.ActualId + 1;
    this.listPerson.push({ Name: name, LastName: lastName, Id: this.ActualId });
    this.AddSelected = false;
  }

  deletePerson(id: number) {
    this.listPerson = this.listPerson.filter(item => item.Id !== id);
  }
}
