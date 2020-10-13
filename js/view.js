const view={};
let isFirstClick=true;
view.setActiveScreen = (screenName) => {
    switch(screenName){
        case "homeScreen":
            document.getElementById("app").innerHTML=components.homeScreen;
            const searchingForm = document.getElementById("input-searching-word-form");
            searchingForm.addEventListener('submit',(event)=>{
                event.preventDefault();
                const searchingWord = searchingForm.word.value;
                console.log(searchingWord);
                controller.search(searchingWord);
            })
            break;
    }
}

view.showDictionary=(listWord)=>{
    isFirstClick=true;
    document.querySelector('.aside-left').innerHTML="";
    if(listWord.length === 0){
        console.log("No result");
    } else {
        console.log("test");
        for(word of listWord){
            view.showOneWord(word);
        }
    }
}

view.showOneWord=(word)=>{
    const wordTargetWrapper = document.createElement("div");
    wordTargetWrapper.className="word";
    // wordTargetWrapper.id=word.id;
    wordTargetWrapper.innerHTML=`${word.wordTarget}`
    wordTargetWrapper.addEventListener('click',(event)=>{
        //thay doi hien thi cua tu duoc click
        if(isFirstClick==true){
            wordTargetWrapper.classList.add('current');
            isFirstClick=false;
        }else {
            document.querySelector('.current').classList.remove('current')
            wordTargetWrapper.classList.add('current')
        }
        view.showWordMeaning(word)
    })
    document.querySelector('.aside-left').appendChild(wordTargetWrapper);
}

{/* <div class="word-target">messenger</div>
        <div class="transcribe-phonetically"> /ˈmes.ɪn.dʒɚ/</div>
        <p class="word-meaning">
            someone who takes a message or documents someone who takes a message or documents someone who takes a message or documents 
        </p> */}
view.showWordMeaning=(word)=>{
    document.querySelector('.center').innerHTML='';
    const wordMeaningWrapper = document.createElement("div");
    wordMeaningWrapper.className="one-word-meaning";
    wordMeaningWrapper.innerHTML=`
        <div class="word-target">${word.wordTarget}</div>
        <div class="transcribe-phonetically">${word.transcribe}</div>
        <p class="word-meaning">${word.wordMeaning}</p
    `
    document.querySelector('.center').appendChild(wordMeaningWrapper)
}
