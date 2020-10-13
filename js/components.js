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
        <div class="selecct-function">Add word</div>
        <div class="selecct-function">Delete word</div>
      </div>
      <div class="function-input-area">
        <div class="input-wrapper">
            <input type="text" name="addWordTarget" placeholder="Enter word target...">
            <div class="error" id="add-word-target-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="addTranscribe" placeholder="Enter transcribe-phonetically...">
            <div class="error" id="add-transcribe-error"></div>
        </div>
            <div class="input-wrapper">
            <textarea name="addWordMeaning" id="" cols="30" rows="10" placeholder="Enter word meaning..."></textarea>
        </div>
        <button class="function-btn">Submit</button>
      </div>
  </div>
</div>
`
components.addWordScreen=`
        <div class="input-wrapper">
          <input type="text" name="addWordTarget" placeholder="Enter word target...">
          <div class="error" id="add-word-target-error"></div>
        </div>
        <div class="input-wrapper">
          <input type="text" name="addTranscribe" placeholder="Enter transcribe-phonetically...">
          <div class="error" id="add-transcribe-error"></div>
        </div>
        <div class="input-wrapper">
          <textarea name="addWordMeaning" id="" cols="30" rows="10" placeholder="Enter word meaning..."></textarea>
        </div>
        <button class="function-btn">Submit</button>
`