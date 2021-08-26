import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: [

  ]
})
export class EmployeeListComponent implements OnInit {
  public dataList: Array<IEmployee> = [
    {
        employeeId: 11
        ,employeeName: 'Ash'
        ,employeeDept: 'Finance'
        ,employeeDOJ: '18/10/2011'
    }, 
    {
        employeeId: 12
        ,employeeName: 'John'
        ,employeeDept: 'HR'
        ,employeeDOJ: '18/1/2011'

    },
    {
        employeeId: 13
        ,employeeName: 'Zuri'
        ,employeeDept: 'Operations'
        ,employeeDOJ: '28/11/2019' 
    }
    ,{
        employeeId: 14,
        employeeName: 'Vish'
        ,employeeDept: 'Development'
        ,employeeDOJ:  '7/7/2017'
    }
    ,{
        employeeId: 15
        ,employeeName: 'Barry'
        ,employeeDept: 'Operations'
        ,employeeDOJ: '19/8/2014'
    }  
    ,{
        employeeId: 16
        ,employeeName: 'Addy'
        ,employeeDept: 'Finance'
        ,employeeDOJ:  '5/10/2014'
    }
    ,{
        employeeId: 17
        ,employeeName: 'Gare'
        ,employeeDept: 'Development'
       ,employeeDOJ:  '6/4/2014'
    }
    ,{
        employeeId: 18
        ,employeeName: 'HOLA'
        ,employeeDept: 'Development'
        ,employeeDOJ:  '8/12/2010'
       
    }
    ,{
        employeeId: 19,
        employeeName: 'Ola',
        employeeDept: 'HR',
        employeeDOJ:  '7/5/2011'
    }
    ,{
        employeeId: 20,
        employeeName: 'Kim',
        employeeDept: 'Finance',
        employeeDOJ:  '20/10/2010'
    }
  ]
  
constructor() { }

  ngOnInit() : void {

    
  }
}

export interface IEmployee {

  employeeId: number;
  employeeName: string;
  employeeDept: string;
  employeeDOJ: string;

}

