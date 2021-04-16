
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD1QEJUH2EqKPrIktRRlF4Gw2wxDAcl1sE",
      authDomain: "kwitter-2e6b3.firebaseapp.com",
      projectId: "kwitter-2e6b3",
      storageBucket: "kwitter-2e6b3.appspot.com",
      messagingSenderId: "109046811759",
      appId: "1:109046811759:web:661696b30239e495b1d19a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose="adding rooms"
          });0
          localStorage.setItem("room_name",room_name)
          window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - "+ room_name);
      row="<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)' >#"+room_name+"</div><hr>";
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();
function redirectToRoomName(room_name){
      console.log(room_name);
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}

