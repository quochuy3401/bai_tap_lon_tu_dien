const model={}
model.dictionary=undefined;
model.searchingDictionary=[];
model.loadDictionary = async ()=>{
    const response= await firebase.firestore().collection("dictionary").get()
    model.dictionary=getDataFromDocs(response.docs);
    let temp=undefined;
    for(let i=0; i<model.dictionary.length-1; i++){
        for(let j=i+1; j<model.dictionary.length; j++){
            if (model.dictionary[i].wordTarget > model.dictionary[j].wordTarget){
                temp= model.dictionary[i];
                model.dictionary[i]=model.dictionary[j];
                model.dictionary[j]=temp;
            }
        }
    }
    // for(let i=0; i<model.dictionary.length; i++){
    //     console.log(model.dictionary[i])
    // }
    view.showDictionary(model.dictionary); 
}

model.search=(searchingWord)=>{
    for(word of model.dictionary){
        if(word.wordTarget.indexOf(searchingWord) === 0){
            console.log(word);
            model.searchingDictionary.push(word);
        }
    }  
}

model.addWordToFirebase=(data)=>{
    firebase.firestore().collection('dictionary').add(data);
    alert("success")
    model.loadDictionary();
    document.querySelector('.function-input-area').innerHTML=components.addWordScreen;
}

model.deteleWordFromFirebase=(wordId)=>{
    firebase.firestore().collection("dictionary").doc(wordId).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}