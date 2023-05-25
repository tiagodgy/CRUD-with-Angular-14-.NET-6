import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css'],
})
export class EditHeroComponent implements OnInit {
  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {}

  updateHero(hero: SuperHero): void {
    this.superHeroService
      .updateSuperHero(hero)
      .subscribe((heroes: SuperHero[]) => {
        this.heroesUpdated.emit(heroes);
      });
  }

  deleteHero(hero: SuperHero): void {
    this.superHeroService
      .deleteSuperHero(hero)
      .subscribe((heroes: SuperHero[]) => {
        this.heroesUpdated.emit(heroes);
      });
  }
  createHero(hero: SuperHero): void {
    this.superHeroService
      .createSuperHero(hero)
      .subscribe((heroes: SuperHero[]) => {
        this.heroesUpdated.emit(heroes);
      });
  }
}
