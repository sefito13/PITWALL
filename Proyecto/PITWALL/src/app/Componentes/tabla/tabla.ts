import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
 
@Component({
  selector: 'app-tabla',
  imports: [MatTableModule],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css',
})
export class Tabla {
  @Input() data: any[] = [];
  columns: string[] = [];
 
  ngOnChanges(): void {
    if (this.data && this.data.length > 0) {
      this.columns = Object.keys(this.data[0]);
    } else {
      this.columns = [];
    }
  }
}