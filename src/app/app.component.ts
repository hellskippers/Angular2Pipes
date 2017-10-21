import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  
  <table>
    <thead>
      <tr>
        <th>
          First Name
        </th>
        <th #btb>
          last Name
        </th>
      </tr> 
    </thead>
    <tbody>
      <tr *ngFor="let person of people | slice :startPerson :endPerson">
        <td>{{person.fn}}</td>
        <td>{{person.ln}}</td>
      </tr>
    </tbody>
  </table>
  <button #bb type="button" (click)="prevPage()">Prev</button>
  <button type="button" (click)="nextPage()">Next</button>
  {{message | HSCapital}}
  `,
})
export class AppComponent  { 
public message:String="hello India";
public currentPage:number =0;
public pageLength:number =4;

public get startPerson():number{
  return this.currentPage*this.pageLength;
}
public get endPerson():number{
  return (this.currentPage+1)*this.pageLength;
}
  public people:any[]=[
    {fn:"First 1",ln:"Second 2"},
    {fn:"First 2",ln:"Second 2"},
    {fn:"First 3",ln:"Second 2"},
    {fn:"First 4",ln:"Second 2"},
    {fn:"First 5",ln:"Second 2"},
    {fn:"First 6",ln:"Second 2"},
    {fn:"First 7",ln:"Second 2"},
    {fn:"First 8",ln:"Second 2"},
    {fn:"First 9",ln:"Second 2"},
  ]
  public prevPage(){
  if (this.currentPage>0){
    this.currentPage--;
  }

  }

  public nextPage(){
    let pages = this.people.length/this.pageLength;
    if(this.people.length%this.pageLength>0){
      pages++;
    }
    if(this.currentPage<pages){
      this.currentPage++;
    }
  }

}