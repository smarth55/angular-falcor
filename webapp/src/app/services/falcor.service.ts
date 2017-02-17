import { Injectable } from '@angular/core';

declare var falcor;

@Injectable()
export class FalcorService {
	private apiBase: string = 'http://localhost:8000/users'
	private dataSourceOptions: any = {
		crossDomain: true,
		withCredentials: false
	};

	private model: any;

	constructor() {
		this.model = new falcor.Model({
			source: new falcor.HttpDataSource(this.apiBase, this.dataSourceOptions)
		});
	}

	getUsers() {
		this.model.getValue('list').then((data) => {
			console.log(data);
		});
	}
}