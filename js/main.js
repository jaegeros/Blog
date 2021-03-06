var app = {
	
	renderHomeView: function() {
	    var html =
	            "<div class='header'><h1>Home</h1></div>" +
	            "<div class='search-view'>" +
	            "<input class='search-key'/>" +
	            "<ul class='employee-list'></ul>" +
	            "</div>"
	    $('body').html(this.homeTpl());
	    $('.search-key').on('keyup', $.proxy(this.findByName, this));
	},

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    },
    showAlert: function (message, title) {
    	if (navigator.notification) {
    		navigator.notification.alert(message, null, titole, 'OK');
    	} else {
    		alert(title ? (title + ": " + message) : message);
    	}
    },

	initialize: function() {
	    var self = this;
	    this.store = new MemoryStore(function() {
	        self.showAlert('Store Initialized', 'Info');
	        self.renderHomeView();
	    this.homeTpl = Handlebars. compile($('#home-tpl').html());
	    this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
	    });
	    $('.search-key').on('keyup', $.proxy(this.findByName, this));
	}

};

app.initialize();