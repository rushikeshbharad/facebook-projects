// library imports
import 'babel-polyfill'; // need to handle promises using async await
import { expect } from 'chai';

// Epic helper import
import { getAllPagesPromise } from '../src/epics/helper';

describe('#getAllPagesPromise', () => {
	it('should return empty array if an empty array is received in first fetch response', async () => {
		global.fetch = () => new Promise(resolve => {
			setTimeout(() => {
				resolve({ ok: true, json: () => [] });
			});
		});
		const r = await getAllPagesPromise('url', 10);
		expect(r).to.have.length(0);
	});

	it('should return a combined array one page number exceeds the total number of expected pages', async () => {
		global.fetch = () => new Promise(resolve => {
			setTimeout(() => {
				return resolve({ ok: true, json: () => new Array(100) });
			});
		});
		const r = await getAllPagesPromise('url', 8);
		expect(r).to.have.length(800);
	});

	it('should return combined array as soon as an array less than length 100 is received', async () => {
		global.fetch = url => new Promise(resolve => {
			setTimeout(() => {
				if (url === `url?per_page=100&page=2&type=owner`) {
					return resolve({ ok: true, json: () => new Array(48) })
				}
				return resolve({ ok: true, json: () => new Array(100) });
			});
		});
		const r = await getAllPagesPromise('url', 10);
		expect(r).to.have.length(148);
	});

	it('should throw an error if response.ok is a false value', async () => {
		global.fetch = () => new Promise(resolve => {
			setTimeout(() => {
				return resolve({ ok: false });
			});
		});
		try {
			getAllPagesPromise('url', 10);
		} catch (e) {
			expect(e).to.eq('url');
		}
	});

	it('should throw an error if fetch api is rejected', async () => {
		global.fetch = url => new Promise((resolve, reject) => {
			setTimeout(() => {
				return reject(url);
			});
		});
		try {
			getAllPagesPromise('url', 10);
		} catch (e) {
			expect(e).to.eq('url');
		}
	});
});
