import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tools',
	templateUrl: './tools.component.html',
	styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
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
			spaniel: ['blenheim', 'brittany', 'cocker', 'irish', 'japanese', 'sussex', 'welsh'],
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

		this.imgList = [
			'https://images.dog.ceo/breeds/hound-afghan/n02088094_2062.jpg',
			'https://images.dog.ceo/breeds/hound-afghan/n02088094_2131.jpg',
			'https://images.dog.ceo/breeds/hound-afghan/n02088094_2173.jpg',
			'https://images.dog.ceo/breeds/hound-afghan/n02088094_227.jpg',
			'https://images.dog.ceo/breeds/hound-afghan/n02088094_2292.jpg',
			'https://images.dog.ceo/breeds/hound-afghan/n02088094_231.jpg',
			'https://images.dog.ceo/breeds/hound-afghan/n02088094_2458.jpg',
			'https://images.dog.ceo/breeds/hound-afghan/n02088094_251.jpg',
			'https://images.dog.ceo/breeds/hound-afghan/n02088094_2522.jpg',
			'https://images.dog.ceo/breeds/hound-afghan/n02088094_2545.jpg',
			'https://images.dog.ceo/breeds/hound-basset/n02088238_10005.jpg',
			'https://images.dog.ceo/breeds/hound-basset/n02088238_10013.jpg',
			'https://images.dog.ceo/breeds/hound-basset/n02088238_10028.jpg',
			'https://images.dog.ceo/breeds/hound-basset/n02088238_10049.jpg',
			'https://images.dog.ceo/breeds/hound-basset/n02088238_10051.jpg',
			'https://images.dog.ceo/breeds/hound-basset/n02088238_10054.jpg',
			'https://images.dog.ceo/breeds/hound-basset/n02088238_10063.jpg',
			'https://images.dog.ceo/breeds/hound-basset/n02088238_10072.jpg',
			'https://images.dog.ceo/breeds/hound-basset/n02088238_10095.jpg',
			'https://images.dog.ceo/breeds/hound-basset/n02088238_10102.jpg',
			'https://images.dog.ceo/breeds/hound-blood/n02088466_10083.jpg',
			'https://images.dog.ceo/breeds/hound-blood/n02088466_1015.jpg',
			'https://images.dog.ceo/breeds/hound-blood/n02088466_10309.jpg',
			'https://images.dog.ceo/breeds/hound-blood/n02088466_10331.jpg',
			'https://images.dog.ceo/breeds/hound-blood/n02088466_10335.jpg',
			'https://images.dog.ceo/breeds/hound-blood/n02088466_10408.jpg',
			'https://images.dog.ceo/breeds/hound-blood/n02088466_10506.jpg',
			'https://images.dog.ceo/breeds/hound-blood/n02088466_10545.jpg',
			'https://images.dog.ceo/breeds/hound-blood/n02088466_10724.jpg',
			'https://images.dog.ceo/breeds/hound-blood/n02088466_10773.jpg',
			'https://images.dog.ceo/breeds/hound-english/n02089973_1.jpg',
			'https://images.dog.ceo/breeds/hound-english/n02089973_1000.jpg',
			'https://images.dog.ceo/breeds/hound-english/n02089973_1030.jpg',
			'https://images.dog.ceo/breeds/hound-english/n02089973_1066.jpg',
			'https://images.dog.ceo/breeds/hound-english/n02089973_1076.jpg',
			'https://images.dog.ceo/breeds/hound-english/n02089973_1078.jpg',
			'https://images.dog.ceo/breeds/hound-english/n02089973_1106.jpg',
			'https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg',
			'https://images.dog.ceo/breeds/hound-english/n02089973_1232.jpg',
			'https://images.dog.ceo/breeds/hound-english/n02089973_1249.jpg',
			'https://images.dog.ceo/breeds/hound-ibizan/n02091244_100.jpg',
			'https://images.dog.ceo/breeds/hound-ibizan/n02091244_1000.jpg',
			'https://images.dog.ceo/breeds/hound-ibizan/n02091244_1025.jpg',
			'https://images.dog.ceo/breeds/hound-ibizan/n02091244_1030.jpg',
			'https://images.dog.ceo/breeds/hound-ibizan/n02091244_1037.jpg',
			'https://images.dog.ceo/breeds/hound-ibizan/n02091244_1045.jpg',
			'https://images.dog.ceo/breeds/hound-ibizan/n02091244_1072.jpg',
			'https://images.dog.ceo/breeds/hound-ibizan/n02091244_1076.jpg',
			'https://images.dog.ceo/breeds/hound-ibizan/n02091244_110.jpg',
			'https://images.dog.ceo/breeds/hound-ibizan/n02091244_1120.jpg',
			'https://images.dog.ceo/breeds/hound-walker/n02089867_1029.jpg',
			'https://images.dog.ceo/breeds/hound-walker/n02089867_1048.jpg',
			'https://images.dog.ceo/breeds/hound-walker/n02089867_1062.jpg',
			'https://images.dog.ceo/breeds/hound-walker/n02089867_1079.jpg',
			'https://images.dog.ceo/breeds/hound-walker/n02089867_1082.jpg',
			'https://images.dog.ceo/breeds/hound-walker/n02089867_1105.jpg',
			'https://images.dog.ceo/breeds/hound-walker/n02089867_1133.jpg',
			'https://images.dog.ceo/breeds/hound-walker/n02089867_1208.jpg',
			'https://images.dog.ceo/breeds/hound-walker/n02089867_1212.jpg',
			'https://images.dog.ceo/breeds/hound-walker/n02089867_1225.jpg'
		];
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
}
