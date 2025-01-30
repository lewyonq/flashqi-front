import { Component, OnInit } from '@angular/core';
import { Deck } from '../../models/deck.model';
import { DeckService } from '../../services/deck.service';

@Component({
  selector: 'app-decks',
  imports: [],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.css'
})
export class DecksComponent implements OnInit{
  decks: Deck[] = [];

  constructor(private deckService: DeckService) {}

  ngOnInit(): void {
    this.deckService.getDecks().subscribe(decks => {
      this.decks = decks;
    });
  }
}
