var btn=document.querySelector(".btn-translate");
var txtInput=document.querySelector(".txt-input");
var txtOutput=document.querySelector(".txt-output");

var i=0;
btn.addEventListener("click",function call(){
    console.log("clicked!");
    var text=txtInput.value;
    var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"+"?text="+text;
    fetch(url)
    .then(response=>response.json())
    .then(function process(json){
        var translated=response.contents.translated;
        txtOutput.innerText=translated;
    })
});


txtInput.addEventListener("click", function callback(){
    console.log(txtInput); 
})