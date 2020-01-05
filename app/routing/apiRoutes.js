var friends = require('../data/friends.js');

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("api/friends", function (req, res) {
    var bestMatch = {
      name: "",
      photo:"",
      friendDifference: 1000
    }

    console.log(req.body);

    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);

    var totalDifference = 0;

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;

      for (var j=0; j<friends[i].scores[j]; j++) {

        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
      
      if (totalDifference <= bestMatch.friendDifference) {

        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;

      }  
      
      }

    }
    friends.push(userData);

    res.json(bestMatch);
  });
}


// 	// Total list of friend entries
//   module.exports = function(app) {
//     // A GET json route to display all possible friends
//    app.get('/api/friends', function (req, res) {
//      res.json(friends);
//      console.log(friends);
//    });
//    // A POST route to handle incoming survey results
//    app.post('/api/friends', function (req, res) {
 
//      //req.body is available since we're using body-parser middleware
//      var newFriend = req.body;
//      console.log(req.body);
//      //score loop
//      for(var i = 0; i < newFriend.scores.length; i++) {
//        if(newFriend.scores[i] == "1 (Strongly Disagree)") {
 
//          newFriend.scores[i] = 1;
//        } else if(newFriend.scores[i] == "2") {
 
//          newFriend.scores[i] = 2;
//        } else if(newFriend.scores[i] == "3") {
 
//         newFriend.scores[i] = 3;
//       } else if(newFriend.scores[i] == "4") {
 
//         newFriend.scores[i] = 4;
//       } else {
//          newFriend.scores[i] = 5;
//        }
//      }
     
//      //array for the comparison
//      var comparisonArray = [];
 
//      for(var i = 0; i < friends.length; i++) {
//        //Determine the users most compatible friend
//        var comparedFriend = friends[i];
//        //calculate the totaldifference between friends
//        var totalDifference = 0;
       
//        for(var k = 0; k < comparedFriend.scores.length; k++) {
//          //return the absolute value of a number *use abs()method
//          var differenceOneScore = Math.abs(comparedFriend.scores[k] - newFriend.scores[k]);
//          totalDifference += differenceOneScore;
//        }
 
//        comparisonArray[i] = totalDifference;
//      }
 
//      var bestFriendNum = comparisonArray[0];
//      var bestFriendI = 0;
 
//      for(var i = 1; i < comparisonArray.length; i++) {
//        if(comparisonArray[i] < bestFriendNum) {
//          bestFriendNum = comparisonArray[i];
//          bestFriendI = i;
//        }
//      }
//      //push new friend
//      friends.push(newFriend);
//      //json bf to the current friend match array
//      res.json(friends[bestFriendI]);
//    });
//  };