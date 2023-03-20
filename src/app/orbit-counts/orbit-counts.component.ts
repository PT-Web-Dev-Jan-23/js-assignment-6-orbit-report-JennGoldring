import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): { count: number, total: number } {
    let count = 0;
    let total = 0;
    if (this.satellites) {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type === type) {
          count++;
        }
        total++;
      }
    }
	console.log(`Count of ${type} satellites: ${count}`);
	console.log(`Total satellites: ${total}`);
	return { count, total };
  }
}