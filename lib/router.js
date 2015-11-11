Router.configure({
	layoutTemplate:'layout'
});

Router.map(function(){
	//Posts Route
	this.route('posts',{path:'/',template:'posts'});
	this.route('about',{path:'/about',template:'about'});
	this.route('userposts',{path:'userposts',template:'userposts'});

	this.route('profile');
});