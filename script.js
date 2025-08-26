// getInnerText Funciton
function getInnerText (id){
  const innerText =  document.getElementById(id).innerText
  return innerText
}
function getInnerTextValue (id){
  const value =  parseInt(document.getElementById(id).innerText)
  return value
}
function favCount(id){
  document.getElementById(id).addEventListener('click', function(){
  let count = getInnerTextValue('fav-count')
  let newCount = count + 1
  newCount =newCount , `<i class="fa-solid fa-heart" style="color: #ff0000"></i>`
  document.getElementById('fav-count').innerText = newCount
})
}
favCount('fav-btn2')
favCount('fav-btn1')
favCount('fav-btn3')
favCount('fav-btn4')
favCount('fav-btn5')
favCount('fav-btn6')
favCount('fav-btn7')
favCount('fav-btn8')
favCount('fav-btn9')


