import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  @Output() eventClicked = new EventEmitter<Event>();

  panelOpenState = false;
  breeds = {};
  breedsList = [];
  subBreedsList = [];
  imgList = [];

  constructor() {
    this.breeds = {
      affenpinscher: [],
      african: [],
      airedale: [],
      akita: [],
      appenzeller: [],
      basenji: [],
      beagle: [],
      bluetick: [],
      borzoi: [],
      bouvier: [],
      boxer: [],
      brabancon: [],
      briard: [],
      bulldog: ['boston', 'english', 'french'],
      bullterrier: ['staffordshire'],
      cairn: [],
      cattledog: ['australian'],
      chihuahua: [],
      chow: [],
      clumber: [],
      cockapoo: [],
      collie: ['border'],
      coonhound: [],
      corgi: ['cardigan'],
      cotondetulear: [],
      dachshund: [],
      dalmatian: [],
      dane: ['great'],
      deerhound: ['scottish'],
      dhole: [],
      dingo: [],
      doberman: [],
      elkhound: ['norwegian'],
      entlebucher: [],
      eskimo: [],
      frise: ['bichon'],
      germanshepherd: [],
      greyhound: ['italian'],
      groenendael: [],
      hound: ['afghan', 'basset', 'blood', 'english', 'ibizan', 'walker'],
      husky: [],
      keeshond: [],
      kelpie: [],
      komondor: [],
      kuvasz: [],
      labrador: [],
      leonberg: [],
      lhasa: [],
      malamute: [],
      malinois: [],
      maltese: [],
      mastiff: ['bull', 'english', 'tibetan'],
      mexicanhairless: [],
      mix: [],
      mountain: ['bernese', 'swiss'],
      newfoundland: [],
      otterhound: [],
      papillon: [],
      pekinese: [],
      pembroke: [],
      pinscher: ['miniature'],
      pointer: ['german', 'germanlonghair'],
      pomeranian: [],
      poodle: ['miniature', 'standard', 'toy'],
      pug: [],
      puggle: [],
      pyrenees: [],
      redbone: [],
      retriever: ['chesapeake', 'curly', 'flatcoated', 'golden'],
      ridgeback: ['rhodesian'],
      rottweiler: [],
      saluki: [],
      samoyed: [],
      schipperke: [],
      schnauzer: ['giant', 'miniature'],
      setter: ['english', 'gordon', 'irish'],
      sheepdog: ['english', 'shetland'],
      shiba: [],
      shihtzu: [],
      spaniel: [
        'blenheim',
        'brittany',
        'cocker',
        'irish',
        'japanese',
        'sussex',
        'welsh'
      ],
      springer: ['english'],
      stbernard: [],
      terrier: [
        'american',
        'australian',
        'bedlington',
        'border',
        'dandie',
        'fox',
        'irish',
        'kerryblue',
        'lakeland',
        'norfolk',
        'norwich',
        'patterdale',
        'russell',
        'scottish',
        'sealyham',
        'silky',
        'tibetan',
        'toy',
        'westhighland',
        'wheaten',
        'yorkshire'
      ],
      vizsla: [],
      weimaraner: [],
      whippet: [],
      wolfhound: ['irish']
    };
  }

  ngOnInit() {
    this.mapBreed(this.breeds);
    console.log(this.breedsList);
  }

  mapBreed(data) {
    this.breedsList = Object.keys(data).map(breed => {
      // console.log(breed);
      return { name: breed };
    });
  }

  onClick(event: Event): void {
    this.eventClicked.emit(event);
  }
}
