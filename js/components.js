const components={};
components.homeScreen=`
<div class="header">
  <img src="..//images/logo_uet.png" alt="">

  <div class="searching-container">
      <form id="input-searching-word-form">
          
              <input type="text" name="word" placeholder="Search...">
          
          
          <button type="submit"><i class="fa fa-search" aria-hidden="true"></i>
          </button>
      </form>
  </div>

</div>

<div class="body">
  <div class="aside-left"></div>
  <div class="center">
      <div class="one-word -meaning">
          <div class="word-target">messenger</div>
          <div class="transcribe-phonetically"> /ˈmes.ɪn.dʒɚ/</div>
          <p class="word-meaning">
              someone who takes a message or documents someone who takes a message or documents someone who takes a message or documents 
          </p>
      </div>
  </div>
  <div class="aside-right">
      <div class="dictionary-function">
        <div id="add-word" class="selecct-function" onclick='view.addFunctionForm("addWordForm")'>Add word</div>
        <div id="delete-word" class="selecct-function" onclick='view.addFunctionForm("deleteWordForm")'>Delete word</div>
      </div>
      <div class="function-input-area">
        
      </div>
  </div>
</div>
`
components.addWordForm=`
<form id="add-word-form">
  <div class="input-wrapper">
      <input type="text" name="addWordTarget" placeholder="Enter word target...">
      <div class="error" id="add-word-target-error"></div>
  </div>
  <div class="input-wrapper">
      <input type="text" name="addTranscribe" placeholder="Enter transcribe-phonetically...">
      <div class="error" id="add-transcribe-error"></div>
  </div>
  <div class="input-wrapper">
      <textarea name="addWordMeaning" id="word-meaning-textarea" cols="30" rows="10" placeholder="Enter word meaning..."></textarea>
      <div class="error" id="add-word-meaning-error"></div>
  </div>
  <button type="submit" class="function-btn">Submit</button>
</form>
`

components.deleteWordForm=`
<form id="delete-word-form">
    <div class="input-wrapper">
        <input type="text" name="deleteWordTarget" placeholder="Enter word target...">
        <div class="error" id="delete-word-target-error"></div>
    </div>
    <button type="submit" class="function-btn">Submit</button>
</form>
`