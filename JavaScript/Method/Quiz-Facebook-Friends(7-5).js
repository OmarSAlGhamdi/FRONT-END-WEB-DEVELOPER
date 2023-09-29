// Directions:
// Create an object called facebookProfile. The object should have 3 properties:

// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)
// The object should also have 4 methods:

// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 1


var facebookProfile = {
    name: "Omar",
    friends: 6,
    messages : ["Message 1", "Message 2 ", "Message 3" , "Message 4"],
    postMessage: function(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage : function(index){
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function(){
        facebookProfile.friends += 1;
    },

    removeFriend: function (){
        if (facebookProfile.friends > 0) 
        facebookProfile.friends -= 1;
        
    }
};

console.log(facebookProfile.messages);
