import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  imports: [MatTableModule],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css'
})
export class Tabla {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
  @Output() filaSeleccionada = new EventEmitter<any>();
}

