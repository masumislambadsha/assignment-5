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
function favCount(id) {
  document.getElementById(id).addEventListener("click", function () {
    let count = getInnerTextValue("fav-count");
    let newCount = count + 1 + `  ❤️`;
    document.getElementById("fav-count").innerText = newCount;
  });
}
favCount("fav-btn2");
favCount("fav-btn1");
favCount("fav-btn3");
favCount("fav-btn4");
favCount("fav-btn5");
favCount("fav-btn6");
favCount("fav-btn7");
favCount("fav-btn8");
favCount("fav-btn9");

// function to show alert from call
document.getElementById("call1").addEventListener("click", function () {
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

document.getElementById("call2").addEventListener("click", function () {
  let coin = getInnerTextValue("coin");
  if (coin <= 0) {
    alert("Insufficient Coin 🪙");
    return;
  }
  alert("📞Calling Police 999...");
  let newCoinValue = coin - 20;
  document.getElementById("coin").innerText = newCoinValue + ` 🪙`;
  const data = {
    name: "Police Helpline Number",
    number: "999",
    date: new Date().toLocaleTimeString(),
  };
  historyData.push(data);
  updateHistory();
});
document.getElementById("call3").addEventListener("click", function () {
  let coin = getInnerTextValue("coin");
  if (coin <= 0) {
    alert("Insufficient Coin 🪙");
    return;
  }
  alert("📞Calling Fire Service 999...");

  let newCoinValue = coin - 20;
  document.getElementById("coin").innerText = newCoinValue + ` 🪙`;
  const data = {
    name: "Fire Service Number",
    number: "999",
    date: new Date().toLocaleTimeString(),
  };
  historyData.push(data);
  updateHistory();
});
document.getElementById("call4").addEventListener("click", function () {
  let coin = getInnerTextValue("coin");
  if (coin <= 0) {
    alert("Insufficient Coin 🪙");
    return;
  }
  alert("📞Calling Ambulance 1994-999999...");
  let newCoinValue = coin - 20;
  document.getElementById("coin").innerText = newCoinValue + ` 🪙`;
  const data = {
    name: "Ambulance Number",
    number: "1994-999999",
    date: new Date().toLocaleTimeString(),
  };
  historyData.push(data);
  updateHistory();
});
document.getElementById("call5").addEventListener("click", function () {
  let coin = getInnerTextValue("coin");
  if (coin <= 0) {
    alert("Insufficient Coin 🪙");
    return;
  }
  alert("📞Calling Women & Child Helpline 109...");
  let newCoinValue = coin - 20;
  document.getElementById("coin").innerText = newCoinValue + ` 🪙`;
  const data = {
    name: "Women & Child Helpline",
    number: "109",
    date: new Date().toLocaleTimeString(),
  };
  historyData.push(data);
  updateHistory();
});
document.getElementById("call6").addEventListener("click", function () {
  let coin = getInnerTextValue("coin");
  if (coin <= 0) {
    alert("Insufficient Coin 🪙");
    return;
  }
  alert("📞Calling Anti-Corruption 106...");
  let newCoinValue = coin - 20;
  document.getElementById("coin").innerText = newCoinValue + ` 🪙`;
  const data = {
    name: "Anti-Corruption Helpline",
    number: "106",
    date: new Date().toLocaleTimeString(),
  };
  historyData.push(data);
  updateHistory();
});
document.getElementById("call7").addEventListener("click", function () {
  let coin = getInnerTextValue("coin");
  if (coin <= 0) {
    alert("Insufficient Coin 🪙");
    return;
  }
  alert("📞Calling Electricity Outage 16216...");
  let newCoinValue = coin - 20;
  document.getElementById("coin").innerText = newCoinValue + ` 🪙`;
  const data = {
    name: "Electricity Helpline",
    number: "16216",
    date: new Date().toLocaleTimeString(),
  };
  historyData.push(data);
  updateHistory();
});
document.getElementById("call8").addEventListener("click", function () {
  let coin = getInnerTextValue("coin");
  if (coin <= 0) {
    alert("Insufficient Coin 🪙");
    return;
  }
  alert("📞Calling Brac 16445...");
  let newCoinValue = coin - 20;
  document.getElementById("coin").innerText = newCoinValue + ` 🪙`;
  const data = {
    name: "Brac Helpline",
    number: "16445",
    date: new Date().toLocaleTimeString(),
  };
  historyData.push(data);
  updateHistory();
});
document.getElementById("call9").addEventListener("click", function () {
  let coin = getInnerTextValue("coin");
  if (coin <= 0) {
    alert("Insufficient Coin 🪙");
    return;
  }
  alert("📞Calling Bangladesh Railway 163...");
  let newCoinValue = coin - 20;
  document.getElementById("coin").innerText = newCoinValue + ` 🪙`;
  const data = {
    name: "Bangaldesh Railway Helpline",
    number: "163",
    date: new Date().toLocaleTimeString(),
  };
  historyData.push(data);
  updateHistory();
});

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

//copy count increase

function copyCount(id) {
  document.getElementById(id).addEventListener("click", function () {
    alert("copy count increased");
    let count = parseInt(document.getElementById("copyCount").innerText);
    let newCount = count + 1 + "  copy";
    document.getElementById("copyCount").innerText = newCount;
  });
}
copyCount("copyBtn1");
copyCount("copyBtn2");
copyCount("copyBtn3");
copyCount("copyBtn4");
copyCount("copyBtn5");
copyCount("copyBtn6");
copyCount("copyBtn7");
copyCount("copyBtn8")
copyCount("copyBtn9");

// copy number
function copyNumber(btnId, numberText) {
  document.getElementById(btnId).addEventListener("click", function () {
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
