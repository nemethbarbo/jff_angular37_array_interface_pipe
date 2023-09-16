import { Component } from '@angular/core';

@Component({
  selector: 'app-interface-example',
  templateUrl: './interface-example.component.html',
  styleUrls: ['./interface-example.component.css']
})
export class InterfaceExampleComponent {

  // ez így publikus, szabadon elérhető - veszélyforrás
  // employeeElement: Employee = {  //employeeElement az interface adatszerkezethez igazodik, Employee típus
  //   name: "John Doe",
  //   salary: 850000,
  //   role: "Angular programmer",
  // }

  private employeeAvgSalary:number = 0.0; // kezdőérték adás - ha nem kap értéket, akkor is fog tudni dolgozni a 0.0.val

  private employeeElement: Employee = {
    name: "John Doe",
    salary: 850000,
    role: "Angular programmer"
  }

  // Employee típusú elemekkel tömb, komplexebb adatszerkezet, nem csak sima szöveg v number hanem Employee típus
  private employees: Employee[] = [
    // tömb elemek {}
    {
      name:"Jane Doe",
      salary: 550000,
      role: "UX designer",
    },
    {
      name:"Jonnie Doe",
      salary: 980000,
      role: "Dev Ops",
    },
    {
      name:"Teszt Elek",
      salary: 680000,
      role: "PHP Programmer",
    },
    {
      name:"Gipsz Jakab",
      salary: 560000,
      role: "PHP Programmer",
    },
    {
      name:"Nap Pali",
      salary: 980000,
      role: "Angular Programmer",
    },
  ]

  public get Employees(): Employee[]{
    return this.employees;
  }

  public get EmployeeElement() : Employee {
    return this.employeeElement;
  }

  public getMaxEmployeeSalary():number{
    let max = this.Employees[0].salary;  // mindet ehhez a maxhoz viszonyítunk
    this.Employees.forEach(employee => {
      if (employee.salary>max) {
        max = employee.salary; // ha nagyobb mint a max, kicseréli
      }
    });
    return max;
  }

  public get EmployeeAvgSalary(): number {
    let sum = 0.0;
    this.Employees.forEach(employee => {
      sum += employee.salary;
    });
    return sum/this.employees.length;
  }

  
}

// classon belül nem lehet interface, csak alatta
// interface: adatszerk leírása, típus meghatározása, metódusok gyűjtőhelye, kötelezően megvalósítandó metódusok
// előírás az adatra vonatkozóan amit az Employeeből akarunk majd létrehozni, milyen tul.t kötelező megadni
export interface Employee {
  name:string;
  salary:number;
  role:string;  //beosztás
}


