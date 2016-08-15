var wpCall = function(url){
	var file = url + '/wp-json/wp/v2';

	var makeAjaxCall = function(file, callback){
		var script = document.createElement('script');
		script.src = file + '?_jsonp=' + callback;

		document.getElementsByTagName('body')[0].appendChild(script);
	}

	var methods = {};
		methods.getAllPosts = function(callback){
			file = file + "/posts"
			makeAjaxCall(file, callback);
		}

		methods.getPost = function(id){
			file = file + "/posts/" + id
			makeAjaxCall(file, callback);
		}

	return methods;
	
};