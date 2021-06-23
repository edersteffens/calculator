import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator Angular';
  autor = 'Éder Steffens';
  copyright = 'Todos direitos reservados @éderSteffens';
  result = '';
  classActive = 'active';

  add(key: string){
    var number = this.result;
    this.result = number + key;

    this.classActive = '';
    this.result;
  }

  clean(){
    this.result = '';
    this.classActive = 'active';
  }

  val(){
    var value = this.result;

    if(value){
      this.result = eval(value);
    }else{
      this.result = '';
      this.classActive = 'active';
    }
  }

}
