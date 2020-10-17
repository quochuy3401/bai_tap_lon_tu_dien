const view={};
let isFirstClick=true;
let isFirstRenderFunction=true;
view.setActiveScreen = (screenName) => {
    switch(screenName){
        case "homeScreen":
            isFirstClick=true;
            isFirstRenderFunction=true;  
            document.getElementById("app").innerHTML=components.homeScreen;
            const searchingForm = document.getElementById("input-searching-word-form");
            searchingForm.addEventListener('submit',(event)=>{
                event.preventDefault();
                const searchingWord = searchingForm.word.value;
                console.log(searchingWord);
                controller.search(searchingWord);
            })
            view.showDictionary(model.dictionary);
            view.addFunctionForm("addWordForm")
            break;
        
        case "labanDicScreen":
            document.getElementById("app").innerHTML=components.labanDicScreen;
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
        // document.getElementById("pronunciation").addEventListener('submit',(event) => {
        //     event.preventDefault();
        //     console.log(1);
        //     let msg = new SpeechSynthesisUtterance();
        //     msg.text = word.wordTarget;
        //     window.speechSynthesis.speak(msg);
        // })
    })
    document.querySelector('.aside-left').appendChild(wordTargetWrapper);
}

view.showWordMeaning= (word)=>{
    document.querySelector('.center').innerHTML='';
    const wordMeaningWrapper = document.createElement("div");
    wordMeaningWrapper.className="one-word-meaning";
     wordMeaningWrapper.innerHTML=`
        <div class="word-target">${word.wordTarget}</div>
        <div class="transcribe-phonetically">${word.transcribe}<button id="pronunciation" type="click"><i class="fa fa-volume-up" aria-hidden="true"></i></button></div>
        
        <p class="word-meaning">${word.wordMeaning}</p
    `
    // id="pronunciation" type="submit"
    
    document.querySelector('.center').appendChild(wordMeaningWrapper)
    document.getElementById("pronunciation").addEventListener('click',(event) => {
            event.preventDefault();
            console.log("pronunciation");
            const msg = new SpeechSynthesisUtterance();
            msg.text = word.wordTarget;
            window.speechSynthesis.speak(msg);
        })
}

view.addFunctionForm=(nameFunctionForm)=>{
    const functionInputArea = document.querySelector(".function-input-area");
    if (nameFunctionForm === "addWordForm") {
        functionInputArea.innerHTML=components.addWordForm;
        const addWordform = document.getElementById("add-word-form");
            addWordform.addEventListener('submit',(event)=>{
                event.preventDefault();
                const addWordData = {
                    wordTarget : addWordform.addWordTarget.value.trim().toLowerCase(),
                    transcribe : "/" + addWordform.addTranscribe.value.trim() + "/",
                    wordMeaning : document.getElementById("word-meaning-textarea").value
                }
                controller.addWordToFirebase(addWordData);
                console.log(addWordData);
            })
            if(isFirstRenderFunction === true){
                document.querySelector("#add-word").classList.add("currret-function")
                isFirstRenderFunction = false;
            } else {
                document.querySelector("#delete-word").classList.remove("currret-function")
                document.querySelector("#add-word").classList.add("currret-function")
            }
            
    }
    if(nameFunctionForm === "deleteWordForm"){
        functionInputArea.innerHTML=components.deleteWordForm;
        const deleteWordForm = document.getElementById("delete-word-form");
            deleteWordForm.addEventListener('submit',(event)=>{
                event.preventDefault();
                const deleteWordData = deleteWordForm.deleteWordTarget.value.trim().toLowerCase();
                controller.deteleWordFromFirebase(deleteWordData);
                console.log(deleteWordData);
            })
            document.querySelector("#add-word").classList.remove("currret-function")
            document.querySelector("#delete-word").classList.add("currret-function")
    }
}

view.clearAddWordForm=()=>{
    document.getElementById("add-word-target-error").innerHTML="";
    document.getElementById("add-transcribe-error").innerHTML="";
    document.getElementById("add-word-meaning-error").innerHTML="";
    const addWordform = document.getElementById("add-word-form");
    addWordform.addWordTarget.value="";
    addWordform.addTranscribe.value="";
    document.getElementById("word-meaning-textarea").value="";
}

view.clearDeleteWordForm=()=>{
    document.getElementById("delete-word-target-error").innerHTML="";
    document.getElementById("delete-word-form").deleteWordTarget.value="";
}