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