import { DragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Button } from 'selenium-webdriver';
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';
//import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent {
  title = 'Drag-and-Drop2';
  //Variables de Codigo de Componentes HTML
  menu = '<nav><li></li></nav>';
  opcionesMenu = '<li><a href="#" class="">Inicio</a></li>';
  logoMenu = '<label for="" class="logo"><img src="" alt="" width="100" ></label>';
  encabezado = '<h1></h1>';
  subtitulos = '<h2></h2>';
  parrafo = '<p></p>';
  imagen = '<img src="" alt="">';
  separador = '<hr></hr>';
  boton = '<button type="button" class="btn"></button>';
  tabla = '<table border="1"><tbody><tr><td></td><th>A</th><th>B</th></tr><tr><th>1</th><td>A1</td><td>B1</td></tr><tr><th>2</th><td>A2</td><td>B2</td></tr></tbody></table>';
  areaDeTexto = '<textarea id="" name="" rows="4" cols="50"></textarea>';
  footer = '<footer><p>Footer</p></footer>';

  mensaje = '';
  texto = '';

  guardar(){
    this.mensaje = 'Se ha agregado texto';
    console.log(this.mensaje);
  }

  obtenerCodigo(){
//    let variable = document.querySelector('#input-menu-1')
  }

  guardarTexto(event:Event){
    //let variable = document.querySelector('#input-menu-1')?.nodeValue;
    //console.log(variable);
    this.texto = (<HTMLInputElement>event.target).value;
    this.menu;
  }
  
  
  /*public descargar(){
    var documento = new ;
    documento.fromHTML($("#zonaDibujo")).get(0),20,20;
    documento.save('MY-HTML.pdf');
  }*/
  // --------------------- COMIENZA EJEMPLO REDIMENCION OBJETO ----------------------
  public style: object = {};

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'absolute',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }



   
    
  

} // FIN del APPCOMPONENT

