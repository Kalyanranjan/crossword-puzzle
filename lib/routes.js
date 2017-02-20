
/*---------Public Routes --------------*/
const publicRoutes = FlowRouter.group({name: 'public_routes'});

publicRoutes.route('/notFound', {name: 'pageNotFound',
	action: function(){
		FlowLayout.render('mainContent', {main: 'notFoundTemplate'});
	}
});
publicRoutes.route('/notAuthorized', { name: 'notAuthorizedPage',
	action: function() {
		require('../client/main.js');
		FlowLayout.render('mainContent', { main: 'notAuthorized' });
	}
});

publicRoutes.route('/', { name: 'Home',
	action: function() {
		require('../imports/ui/home.js');
		FlowLayout.render('mainContent', { main: 'homeTemplate' });
	}
});

publicRoutes.route('/dashboard', {name: 'dashboard',
	action: function() {
		require('../imports/ui/dashboard.js');
		FlowLayout.render('mainContent', {main: 'dashboardTemplate', header: 'headerTemplate'});
	}
});

publicRoutes.route('/cwplayer', {name: 'crosswordPlayer',
	action: function() {
		require('../imports/ui/cwplayer.js');
		FlowLayout.render('mainContent', {main: 'cwPlayerTemplate', header: 'headerTemplate'});
	}
});

publicRoutes.route('/createDict', {name: 'createDictionary',
	action: function() {
		require('../imports/ui/createDictionary.js');
		FlowLayout.render('mainContent', {main: 'createDictTemplate', header: 'headerTemplate'});
	}
})
