import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'luka_martoleki';

  public users = [
    {firstname: "luka",
      lastname: "martoleki",
      age: 18,
     },
     {firstname: "Giorgi",
      lastname: "Gegenava",
      age: 24,
     },
     {firstname: "Luka",
      lastname: "Niqabadze",
      age: 27,
     },
     {firstname: "Firo",
      lastname: "Nika",
      age: 19,
     },
     {firstname: "Joe",
      lastname: "Schmoe",
      age: 18,
     },

  ]

  public ParentUsers: { Id: number; Firstname: string; Lastname: string; DateOfBirth: string; PhoneNumber: number; Email: string; }[] = [{
    Id: 1,
    Firstname: "Gegi",
    Lastname: "Niqabadze",
    DateOfBirth: "10.01.1999",
    PhoneNumber: 64532384123,
    Email: "12332132423@ibsu.edu.ge",
  },

  {
    Id: 2,
    Firstname: "Nika",
    Lastname: "Jiqabadze",
    DateOfBirth: "11.03.2001",
    PhoneNumber: 9422314123,
    Email: "2932132423@ibsu.edu.ge",
  },

  {
    Id: 3,
    Firstname: "Luka",
    Lastname: "Margvelashvili",
    DateOfBirth: "31.07.2005",
    PhoneNumber: 124232384123,
    Email: "53242132423@ibsu.edu.ge",
  }];

  @Input()
  ParentUser!: {
    Id: number;
    Firstname: string;
    Lastname: string;
    DateOfBirth: string;
    PhoneNumber: number;
    Email: string;
  };

  ngOnInit(): void {
  }
}