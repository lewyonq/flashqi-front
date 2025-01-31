import { Component, OnInit } from '@angular/core';
import { Deck } from '../../models/deck.model';
import { DeckService } from '../../services/deck.service';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-decks',
  imports: [MatIconModule, RouterModule, MatListModule],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.css'
})
export class DecksComponent implements OnInit{
  decks: Deck[] = [];

  constructor(private deckService: DeckService, private router: Router) {}

  ngOnInit(): void {
    this.deckService.getDecks().subscribe(decks => {
      this.decks = decks;
    });
  }

  getDeckDetails(deckId: number) {
    this.router.navigate(['/decks', deckId]);
  }
  
  addDeck() {
    // Add logic to create a new deck
    console.log('add deck');
    this.router.navigate(['/decks/new']);
  }
}
