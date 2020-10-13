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
{/* <div class="input-wrapper">
      <input type="text" name="addWordTarget" placeholder="Enter word target...">
      <div class="error" id="add-word-target-error"></div>
  </div>
  <div class="input-wrapper">
      <input type="text" name="addTranscribe" placeholder="Enter transcribe-phonetically...">
      <div class="error" id="add-transcribe-error"></div>
  </div>
  <div class="input-wrapper">
      <textarea name="addWordMeaning" id="word-meaning-textarea" cols="30" rows="10" placeholder="Enter word meaning..."></textarea>
      <div class="error" id="add-word-meaning-error"></div> */}
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