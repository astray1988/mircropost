Template.profile.events({
	"submit .edit-profile":function(event){
		var file = $('#profileImage').get(0).files[0];
		console.log(file);

		if(file){
			fsFile = new FS.File(file);
			console.log("Start...");

			ProfileImages.insert(fsFile,function(err,result){
				console.log("In profile");
				if(err){
					throw new Meteor.Error(err);
				} else {
					console.log("Right");
					var imageLoc = '/cfs/files/ProfileImages/' + result._id;	
					console.log("Insert to mongo")	
					UserImages.insert({
						userId: Meteor.userId(),
						username: Meteor.user().username,
						image:imageLoc
					});

					// Router.go('/');
				}
			});

		}
		return false
	}
});