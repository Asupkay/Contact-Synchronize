document.addEventListener("keypress", (e) => {
  if(e.keyCode === 2 && e.ctrlKey) {
    let selection = window.getSelection().toString()); 
    console.log(selection);
  }
});
