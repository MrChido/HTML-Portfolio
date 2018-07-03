var QnA = [
  ["Tiny Epic Galaxies is released by","Gamelyn"],
  ["The Pandemic series is released by","ZMan"],
  ["Munchkin is released by","Steve Jackson"],
  ["Legendary is released by","Upper Deck"],
  ["The Yu-gi-Oh! franchies is released by","Konami"],

];
  
  var suc = 0;
  
  for(var i=0; i < QnA.length;i +=1){
    //console.log(QnA[i][0]);
    var req = prompt(QnA[i][0]);
    //console.log(req);
    if(req == QnA[i][1]){
      suc +=1;
    }
    
  }
function print(message) {
  var message= ("You have answered " + suc + "   questions sucessfuly."); 
  document.write(message);
}
print();