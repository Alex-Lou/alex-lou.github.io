const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
  };
  
  const texts = [
    {text: "Everything", color: "#A52A2A"},
    {text: "Everyrwhere", color: "#B8860B"},
    {text: "Art", color: "#FF8C00"},
    {text: "is", color: "#8B0000"},
    {text: "with", color: "#DAA520"},
    {text: "YOU", color: "#F08080"},
    {text: "in your,", color: "#8B0000"},
    {text: "...LIFE! <3", color: "#A52A2A"}
  ];
  
  const morphTime = 1;
  const cooldownTime = 0.25;
  
  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;
  
  elts.text1.textContent = texts[textIndex % texts.length].text;
  elts.text1.style.color = texts[textIndex % texts.length].color;
  elts.text2.textContent = texts[(textIndex + 1) % texts.length].text;
  elts.text2.style.color = texts[(textIndex + 1) % texts.length].color;
  
  function doMorph() {
    morph -= cooldown;
    cooldown = 0;
  
    let fraction = morph / morphTime;
  
    if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
    }
  
    setMorph(fraction);
  }
  
  function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.1) * 100}%`;
    elts.text2.style.color = texts[(textIndex + 1) % texts.length].color;
  
    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.2) * 100}%`;
    elts.text1.style.color = texts[textIndex % texts.length].color;
  
    elts.text1.textContent = texts[textIndex % texts.length].text;
    elts.text2.textContent = texts[(textIndex + 1) % texts.length].text;
  }
  
  function doCooldown() {
    morph = 0;
  
    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";
    elts.text2.style.color = texts[(textIndex + 1) % texts.length].color;
  
    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
    elts.text1.style.color = texts[textIndex % texts.length].color;
  }
  
  function animate() {
    requestAnimationFrame(animate);
  
    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1500;
    time = newTime;
  
    cooldown -= dt;
  
    if (cooldown <= 0) {
      if (shouldIncrementIndex) {
        textIndex++;
      }
  
      doMorph();
    } else {
      doCooldown();
    }
  }
  
  animate();
  