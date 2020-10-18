const components = {};
components.homeScreen = `
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
        <div id="add-word" class="selecct-function" onclick='view.addFunctionForm("addWordForm")'>Thêm từ</div>
        <div id="delete-word" class="selecct-function" onclick='view.addFunctionForm("deleteWordForm")'>Xóa từ</div>
      </div>
      <div class="function-input-area">
        
      </div>
  </div>
</div>
`;
components.addWordForm = `
<form id="add-word-form">
  <div class="input-wrapper">
      <input type="text" name="addWordTarget" placeholder="Từ mới...">
      <div class="error" id="add-word-target-error"></div>
  </div>
  <div class="input-wrapper">
      <input type="text" name="addTranscribe" placeholder="Phiên âm...">
      <div class="error" id="add-transcribe-error"></div>
  </div>
  <div class="input-wrapper">
      <textarea name="addWordMeaning" id="word-meaning-textarea" cols="30" rows="10" placeholder="Nghĩa của từ..."></textarea>
      <div class="error" id="add-word-meaning-error"></div>
  </div>
  <button type="submit" class="function-btn">Submit</button>
</form>
`;

components.deleteWordForm = `
<form id="delete-word-form">
    <div class="input-wrapper">
        <input type="text" name="deleteWordTarget" placeholder="Nhập từ...">
        <div class="error" id="delete-word-target-error"></div>
    </div>
    <button type="submit" class="function-btn">Submit</button>
</form>
`;

components.labanDicScreen = `
<center>
<script id="lbdict_plugin_frame" type="text/javascript">!function(){var h={s:"https://dict.laban.vn",w:1000,h:600,hl:2,th:3};function loadScript(t,e){var n=document.createElement("script");n.type="text/javascript",n.readyState?n.onreadystatechange=function(){("loaded"===n.readyState||"complete"===n.readyState)&&(n.onreadystatechange=null,e())}:n.onload=function(){e()},n.src=t,q=document.getElementById("lbdict_plugin_frame"),q.parentNode.insertBefore(n,q)}setTimeout(function(){loadScript("https://stc-laban.zdn.vn/dictionary/js/plugin/lbdictplugin.frame.min.js",function(){lbDictPluginFrame.init(h)})},1e3); }();</script>
</center>
`;
