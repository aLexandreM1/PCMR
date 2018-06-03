import { Injectable } from '@angular/core';

import { PC } from './pc.model'

@Injectable({
  providedIn: 'root'
})
export class PcService {

  selectedPc : PC;
  constructor() { }
}
