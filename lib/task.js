'use strict';

module.exports = function (opts) {
	return {
		getAll: function (req, res) {
			opts.db.getAll().then(
				function (tasks) {
					return res.status(200).json(tasks);
				},
				function (err) {
					return res.status(404).json(err);
				}
			)		
		},

		get: function (req, res) {
			opts.db.get(req.params.uuid).then(
				function (task) {
					return res.status(200).json(task);
				},
				function (err) {
					return res.status(404).json(err);
				}
			)		
		},

		create: function (req, res) {
			opts.db.create(req.body).then(
				function (task) {
					return res.status(200).json(task);
				},
				function (err) {
					return res.status(404).json(err);
				}
			)
		},

		update: function (req, res) {
			opts.db.update(req.params.uuid, req.body).then(
				function (task) {
					return res.status(200).json(task);
				},
				function (err) {
					return res.status(404).json(err);
				}
			)
		},

		delete: function (req, res) {
			opts.db.delete(req.params.uuid).then(
				function (task) {
					return res.status(200).json(task);
				},
				function (err) {
					return res.status(404).json(err);
				}
			)
		}
	}
}