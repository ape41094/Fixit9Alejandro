var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keylime Pie','Cherry Cobbler','Chocolate Chip Cookies']
dessertVoting.onshow=function(){
    drpDesserts.clear()   
  for (i = 0; i <= dessertList.length -1; i++)
    drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(s){
   // this 'if' kicks user out if they  just clicked on control 
 // but not on one item in the list.
    if (typeof(s) == "object")   
                    
        drpDesserts.value = s
        lblDessert.value = `You Picked ${drpDesserts.selection}- that is a great choice!`
}


btnDescribe.onclick=function(){
  ChangeForm(describeYou)
}


