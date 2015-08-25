'use strict';

var Promise = require('bluebird');

var mockDB = [
{
	id: 1,
	uuid: 1001,
	type: 'cleaning',
	title: 'Clean the room',
	details: 'Don\'t forget to swipe under the bed'
},
{
	id: 2,
	uuid: 1002,
	type: 'shopping',
	title: 'Fruit salad',
	details: 'Buy a pineapple, three apples, and fifteen bananas'
}
]


module.exports = function (opts) {
	return {
		getAll: function () {
			return new Promise(function (resolve, reject) {
				resolve(mockDB);
				return;
			})
		},

		get: function (uuid) {
			return new Promise(function (resolve, reject) {
				mockDB.forEach(function (e, i, a) {
					if (e.uuid == uuid) {
						resolve(e);
						return;
					}
				})
				reject({ error: 'Task not found' });
				return;
			})
		},

		create: function (params) {
			return new Promise(function (resolve, reject) {
				mockDB.push({
					id: mockDB.length + 1,
					uuid: 1000 + mockDB.length + 1,
					type: params.type,
					title: params.title,
					details: params.details
				});
				resolve(mockDB[mockDB.length - 1]);
				return;
			})
		},

		update: function (uuid, params) {
			return new Promise(function (resolve, reject) {
				mockDB.forEach(function (e, i, a) {
					if (e.uuid == uuid) {
						for (var k in params) {
							if (e.hasOwnProperty(k)) {
								e[k] = params[k];
							}
						}
						resolve(e);
						return;
					}
				})
				reject({ error: 'Task not found' });
				return;
			})
		},

		delete: function (uuid) {
			return new Promise(function (resolve, reject) {
				mockDB.forEach(function (e, i, a) {
					if (!!e && e.uuid == uuid) {
						delete a[i];
						console.log('deletion success');
						resolve({ deletion: 'success' });
						return;
					}
				})
				reject({ error: 'Task not found' });
				return;
			})
		}
	}
}