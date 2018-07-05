onmessage = function(event) {
	self.importScripts('lunr.min.js');
	
	var documents = event.data;

	var index = lunr(function () {
	  this.ref('id');
	  this.field('url');
	  this.field('title');
	  this.field('content');
	  this.metadataWhitelist = ['position'];

	  documents.forEach(function(doc) {
	    this.add(doc);
	  }, this);
	});

	postMessage(JSON.stringify(index));
}