import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';
import { Context } from 'src/app/services/DNN/context.service';

@Component({
  selector: 'app-d9-angular-module-info',
  templateUrl: './d9-angular-module-info.component.html',
  styleUrls: ['./d9-angular-module-info.component.css']
})
export class D9AngularModuleInfoComponent {
  title = 'template Angular Module for DNN9.x';
  webapiResult = '';

  constructor(public context: Context, private _demoService: DemoService) {
    context.autoConfigure();
    // this.getDataFromWebAPI();
  }

  public getDataFromWebAPI() {
    this._demoService.getStagingOutputList().subscribe({
      next: data => {
        this.webapiResult = data;
        console.log('​---------------------------------');
        console.log('Call webapi data -> data: ', data);
        console.log('​---------------------------------');
      },
      error: (err: HttpErrorResponse) => {
        console.log('​---------------------------------');
        console.log('Call webapi error -> ERROR: ', err.error);
        console.log('​---------------------------------');
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }

  log(par: any): string {
    return par ? JSON.stringify(par) : 'undefined';
  }
}
