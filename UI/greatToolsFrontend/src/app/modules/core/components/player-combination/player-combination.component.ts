import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-combination',
  templateUrl: './player-combination.component.html',
  styleUrls: ['./player-combination.component.scss'],
})
export class PlayerCombinationComponent implements OnInit {
  playerPool = [
    'Rsharma',
    'SGill',
    'Vkohli',
    'SIyer',
    'Skumar',
    'Rjadeja',
    'Kyadav',
    'Mshami',
    'JBumrah',
    'Msiraj',
    'Dcock',
    'tbavuma',
    'RVDDussen',
    'Amarkram',
    'Hklaasen',
    'Dmiller',
    'MJansen',
    'Gcoetzee',
    'KMaharaj',
    'Krabada',
    'Lnidi',
  ];
  selectedPlayers = new Set();
  selectedPlayerArray = [];
  remainingPlayerArray = new Set(this.playerPool);
  MAX_PLAYER = 11;
  result: any[] = [];
  remaining_player = 11;
  constructor() {}

  ngOnInit(): void {}
  tooglePlayer(player) {
    if (this.selectedPlayers.has(player)) {
      this.selectedPlayers.delete(player);
      this.remainingPlayerArray.add(player);
    } else {
      this.selectedPlayers.add(player);
      this.remainingPlayerArray.delete(player);
    }
    this.selectedPlayerArray = Array.from(this.selectedPlayers);
    this.remaining_player = this.MAX_PLAYER - this.selectedPlayerArray.length;
  }
  generateCombinations(current, start) {
    if (this.selectedPlayerArray.length < 7) {
      window.alert('please select atleast 7 player');
    }
    console.log(current, start);
    if (current.length === this.remaining_player) {
      this.result.push([...current]);
      console.log(current);
      return;
    }

    for (
      let i = start;
      i < Array.from(this.remainingPlayerArray)?.length;
      i++
    ) {
      current.push(Array.from(this.remainingPlayerArray)[i]);
      this.generateCombinations(current, i + 1);
      current.pop();
    }
  }
}
