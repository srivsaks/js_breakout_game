const showRulesButton=document.getElementById("rules-btn");
showRulesButton.addEventListener("click",handleOnClickShowRules);
const rulesElement=document.getElementById("rules");
const closeButton=document.getElementById("close-btn");
closeButton.addEventListener("click",handleOnClickCloseButton);


function handleOnClickShowRules(){
  if(rulesElement.className==="rules"){
      rulesElement.className="rules show"
  }
}

function handleOnClickCloseButton(){
    if(rulesElement.className==="rules show"){
        rulesElement.className="rules"
    }
  }