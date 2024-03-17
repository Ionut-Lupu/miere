var carousel=document.querySelector(".carousel"),counter=1;setInterval((function(){carousel.style.transform="translateX(".concat(100*-counter,"%)"),8===++counter&&(counter=1,carousel.style.transition="none",setTimeout((function(){carousel.style.transition="transform 0.5s"}),50))}),3e3);
//# sourceMappingURL=index.f4fccbc2.js.map
