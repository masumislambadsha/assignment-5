// getInnerText Funciton
function getInnerText(id) {
  const innerText = document.getElementById(id).innerText;
  return innerText;
}
function getInnerTextValue(id) {
  const value = parseInt(document.getElementById(id).innerText);
  return value;
}

const historyData = [];




// function to increase favNum
const favBtns = document.querySelectorAll('.fav-btn')
for (const favBtn of favBtns) {
      favBtn.addEventListener("click", function () {
    let count = getInnerTextValue("fav-count");
    let newCount = count + 1 + `  ❤️`;
    document.getElementById("fav-count").innerText = newCount;
  });
}

// function to show alert from call
const callBtns = document.querySelectorAll('.call')
for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
  let coin = getInnerTextValue("coin");
  if (coin <= 0) {
    alert("Insufficient Coin 🪙");
    return;
  }
  alert("📞Calling National Emergency Service 999...");
  let newCoinValue = coin - 20;
  document.getElementById("coin").innerText = newCoinValue + ` 🪙`;
  const data = {
    name: "National Emergency Number",
    number: "999",
    date: new Date().toLocaleTimeString(),
  };
  historyData.push(data);
  updateHistory();
});
}

// update history sectio
function updateHistory() {
  const container = document.getElementById("history-container");
  container.innerHTML = "";

  for (const item of historyData) {
    const div = document.createElement("div");
    div.className = "flex justify-between items-center p-3 m-2 rounded-lg";

    const left = document.createElement("div");
    left.innerHTML = `
      <h3 class="font-bold text-[16px] dark-1">${item.name}</h3>
      <p class="text-[14px] gray">${item.number}</p>
    `;

    const right = document.createElement("div");
    right.innerHTML = `<p class="text-[14px] opacity-70">${item.date}</p>`;

    div.appendChild(left);
    div.appendChild(right);
    container.appendChild(div);
  }
}


// clear history
document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("history-container").innerText = "";
});


// copy number + copy count increase
function copyNumber(btnId, numberText) {
  document.getElementById(btnId).addEventListener("click", function () {
    alert("copy count increased");
    let count = parseInt(document.getElementById("copyCount").innerText);
    let newCount = count + 1 + "  copy";
    document.getElementById("copyCount").innerText = newCount;
    navigator.clipboard.writeText(numberText).then(function () {

    })
  });
}
copyNumber("copyBtn1", "999");
copyNumber("copyBtn2", "999");
copyNumber("copyBtn3", "999");
copyNumber("copyBtn4", "1994-999999");
copyNumber("copyBtn5", "109");
copyNumber("copyBtn6", "106");
copyNumber("copyBtn7", "16216");
copyNumber("copyBtn8", "16445");
copyNumber("copyBtn9", "163");
