export class GetUrl {
	private static _API_URL = 'https://dog.ceo/api';
	public static _ALL_BREEDS_LIST = '/breeds/list/all';

	public static generateBreedListUrl() {
		return this._API_URL + this._ALL_BREEDS_LIST;
	}

	public static generateSubBreedListUrl(breed: string) {
		return `${this._API_URL}/breed/${breed}/list`;
	}

	public static generateBreedImagesUrl(breed: string, num: number) {
		return `${this._API_URL}/breed/${breed}/images/random/${num}`;
	}

	public static generateSubBreedImagesUrl(breed: string, subBreed: string, num: number) {
		return `${this._API_URL}/breed/${breed}/${subBreed}/images/random/${num}`;
	}
}
