radDescribeYou.onchange=function(){
  lblForm.value = `I agree you are a very ${$("input[name=radDescribeYou]:checked").prop("value")} person!`
}

btnNextTwo.onclick=function(){
  ChangeForm(favExercises)
}


