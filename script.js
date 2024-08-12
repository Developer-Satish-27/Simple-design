function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function hack() {
  let t = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length - 1];
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML += ".";
    }
  }, 100);



  let text = [
    " Initializing Hacking...",
    " Reading your Files...",
    "Password files Detected...",
    "Sending all passwords and personal files to server...",
    "Cleaning up...",
    
  ];

  for (let i = 0; i < text.length; i++) {
      let div = document.createElement("div");
  document.body.append(div);
    div.innerHTML = text[i];
    
    let time = 1000 + 6000 * Math.random();
    await delay(time);
  }

  clearInterval(t);
}

async function main() {
  await hack();
  
}

main();
