import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from '../people.model';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-update',
  templateUrl: './people-update.component.html',
  styleUrls: ['./people-update.component.css']
})
export class PeopleUpdateComponent implements OnInit {

  people: People;

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.peopleService.readById(id).subscribe(people => {
      this.people = people;
    })
  }

  updatePeople(): void {
    this.peopleService.update(this.people).subscribe(() => {
      this.peopleService.showMessage(`Los datos de "${this.people.nombre}" fueron actualizados con exito!`);
      this.router.navigate(['/people']);
    })
  }

  cancel(): void {
    this.router.navigate(['/people']);
  }

}
