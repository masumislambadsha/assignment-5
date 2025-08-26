// getInnerText Funciton
function getInnerText (id){
  const innerText =  document.getElementById(id).innerText
  return innerText
}
function getInnerTextValue (id){
  const value =  parseInt(document.getElementById(id).innerText)
  return value
}
// function to increase favNum
function favCount(id){
  document.getElementById(id).addEventListener('click', function(){
  let count = getInnerTextValue('fav-count')
  let newCount = count + 1
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


// function to show alert from call
document.getElementById('call1').addEventListener('click', function(){
  let coin =getInnerTextValue('coin')
  if(coin <= 0){
    alert('insufficient Coin 🪙')
    return
  }
  alert('📞Calling National Emergency Service 999...')
  let newCoinValue = coin - 20
  document.getElementById('coin').innerText = newCoinValue
})
document.getElementById('call2').addEventListener('click', function(){
  let coin =getInnerTextValue('coin')
  if(coin <= 0){
    alert('insufficient Coin 🪙')
    return
  }
  alert('📞Calling Police 999...')
  let newCoinValue = coin - 20
  document.getElementById('coin').innerText = newCoinValue
})
document.getElementById('call3').addEventListener('click', function(){
   let coin =getInnerTextValue('coin')
   if(coin <= 0){
    alert('insufficient Coin 🪙')
    return
  }
  alert('📞Calling Fire Service 999...')

  let newCoinValue = coin - 20
  document.getElementById('coin').innerText = newCoinValue
})
document.getElementById('call4').addEventListener('click', function(){
  let coin =getInnerTextValue('coin')
   if(coin <= 0){
    alert('insufficient Coin 🪙')
    return
  }
  alert('📞Calling Ambulance 1994-999999...')
  let newCoinValue = coin - 20
  document.getElementById('coin').innerText = newCoinValue
})
document.getElementById('call5').addEventListener('click', function(){
  let coin =getInnerTextValue('coin')
   if(coin <= 0){
    alert('insufficient Coin 🪙')
    return
  }
  alert('📞Calling Women & Child Helpline 109...')
  let newCoinValue = coin - 20
  document.getElementById('coin').innerText = newCoinValue
})
document.getElementById('call6').addEventListener('click', function(){
  let coin =getInnerTextValue('coin')
   if(coin <= 0){
    alert('insufficient Coin 🪙')
    return
  }
  alert('📞Calling Anti-Corruption 106...')
  let newCoinValue = coin - 20
  document.getElementById('coin').innerText = newCoinValue
})
document.getElementById('call7').addEventListener('click', function(){
  let coin =getInnerTextValue('coin')
   if(coin <= 0){
    alert('insufficient Coin 🪙')
    return
  }
  alert('📞Calling Electricity Outage 16216...')
  let newCoinValue = coin - 20
  document.getElementById('coin').innerText = newCoinValue
})
document.getElementById('call8').addEventListener('click', function(){
  let coin =getInnerTextValue('coin')
   if(coin <= 0){
    alert('insufficient Coin 🪙')
    return
  }
  alert('📞Calling Brac 16445...')
  let newCoinValue = coin - 20
  document.getElementById('coin').innerText = newCoinValue
})
document.getElementById('call9').addEventListener('click', function(){
  let coin =getInnerTextValue('coin')
   if(coin <= 0){
    alert('insufficient Coin 🪙')
    return
  }
  alert('📞Calling Bangladesh Railway 163...')
  let newCoinValue = coin - 20
  document.getElementById('coin').innerText = newCoinValue
})

