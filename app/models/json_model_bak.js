exports.definition = {
	config: {
		columns: {
		    "input": "text",
		    "show": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "json_model"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};