const button = document.createElement("button");
button.textContent = "This is Modal";
document.body.append(button);
button.classList.add("button");

button.addEventListener("click", function myf() {
  const DIVVV = document.createElement("div");
  document.body.append(DIVVV);
  DIVVV.classList.add("divvv");

  const bossdiv = document.createElement("div");
  DIVVV.append(bossdiv);

  bossdiv.classList.add("bossdiv");
  bossdiv.style.display = "none";

  const div1 = document.createElement("div");
  bossdiv.append(div1);
  div1.textContent = "Modal title";
  div1.classList.add("div1");

  const div2 = document.createElement("div");
  bossdiv.append(div2);
  div2.textContent = "Woohoo, you're reading this text in a modal";
  div2.classList.add("div2");

  const div3 = document.createElement("div");
  bossdiv.append(div3);
  const clbutton = document.createElement("button");
  clbutton.textContent = "Close";
  div3.append(clbutton);
  div3.classList.add("div3");
  clbutton.classList.add("clbutton");
  clbutton.addEventListener("click", function myf2() {
    DIVVV.remove();
  });
  bossdiv.style.display = "flex";
});
