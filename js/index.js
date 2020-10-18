const init = async () => {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDarUnl5wbn0zWwXI0LA_axk-d1MAUqb4I",
    authDomain: "dictionaryoop.firebaseapp.com",
    databaseURL: "https://dictionaryoop.firebaseio.com",
    projectId: "dictionaryoop",
    storageBucket: "dictionaryoop.appspot.com",
    messagingSenderId: "789672872253",
    appId: "1:789672872253:web:2aff4d3843c4dd73745d54"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.app().name);
  await model.loadDictionary();
  view.setActiveScreen("homeScreen");
}

window.onload = init;

getDataFromDoc = (doc) => {
  const data = doc.data()
  data.id = doc.id
  return data
}

getDataFromDocs = (docs) => {
  return docs.map(item => getDataFromDoc(item))
}

pronunciation = (wordTarget) => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = wordTarget;
  window.speechSynthesis.speak(msg);
}