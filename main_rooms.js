var firebaseConfig = {
  apiKey: "AIzaSyDEialH-WYaDxAkQ0XYwj7qazLA9NL-pDQ",
  authDomain: "share-o-plus-34f8f.firebaseapp.com",
  databaseURL: "https://share-o-plus-34f8f-default-rtdb.firebaseio.com",
  projectId: "share-o-plus-34f8f",
  storageBucket: "share-o-plus-34f8f.appspot.com",
  messagingSenderId: "244513457074",
  appId: "1:244513457074:web:ae847073d348770f7c9aab",
  measurementId: "G-HT3M1HCPD9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("Name");

function setName()
{
    document.getElementById("div_name").innerHTML = "<p class='title'>Welcome " + user_name + "!</p>";
}

setName();

function store_room_name()
{
  
  room_name = document.getElementById("input_room_name").value;
  localStorage.setItem("Room" , room_name);
  firebase.database().ref("/").child(room_name).update({
    Key : "value"
  });

}

function getData()
{
  firebase.database().ref("/").on('value' , function(snapshot)
  {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot){
      child_key = childSnapshot.key;
      all_room_names = child_key;
      room_div =  "<div class='list' id=" + all_room_names + "onclick = 'room(this.id)'>" + all_room_names + "</div><hr>";
      document.getElementById("output").innerHTML += room_div;
    });
  });
}

getData();

function room(e)
{
  console.log(e);
}