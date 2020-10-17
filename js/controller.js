const controller={};
controller.search=(searchingWord)=>{
    if(searchingWord.trim() === ''){
        view.showDictionary(model.dictionary);
        console.log("search word");
    } else {
        model.searchingDictionary=[];
        model.search(searchingWord);
        view.showDictionary(model.searchingDictionary);
    }
}

controller.addWordToFirebase=(data)=>{
    document.getElementById("add-word-target-error").innerHTML="";
    document.getElementById("add-transcribe-error").innerHTML="";
    document.getElementById("add-word-meaning-error").innerHTML=""
    if(data.wordTarget.trim()===""){
        document.getElementById("add-word-target-error").innerHTML="Hãy nhập từ mới.";
    }
    for(let i=0; i< model.dictionary.length; i++){
        if(model.dictionary[i].wordTarget === data.wordTarget){
            document.getElementById("add-word-target-error").innerHTML="Đã tồn tại.";
            return;
        }
    }
    if(data.transcribe.trim()===""){
        document.getElementById("add-transcribe-error").innerHTML="Hãy nhập phiên âm.";
    }
    if(data.wordMeaning===""){
        document.getElementById("add-word-meaning-error").innerHTML="Hãy nhập nghĩa của từ."
    }
    
    if(data.wordTarget.trim() != "" && data.transcribe.trim() != "" && data.wordMeaning.trim() !=""){
        model.addWordToFirebase(data);
    }
}

controller.deteleWordFromFirebase=(data)=>{
    document.getElementById("delete-word-target-error").innerHTML="";
    
    if(data ===""){
        document.getElementById("delete-word-target-error").innerHTML="Hãy nhập từ bạn muốn xóa."
        return;
    }
    for(let i=0; i< model.dictionary.length; i++){
        if(model.dictionary[i].wordTarget === data){
            console.log(model.dictionary[i].id);
            model.deteleWordFromFirebase(model.dictionary[i].id);
            console.log(1);
            return;
        }
    }
    document.getElementById("delete-word-target-error").innerHTML="Không tồn tại.";
    console.log(2);
}