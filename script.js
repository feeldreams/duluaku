  vketik=kalimat.innerHTML;kalimat.innerHTML = "";
  vketika=kalimata.innerHTML;kalimata.innerHTML = "";
  vketikb=kalimatb.innerHTML;kalimatb.innerHTML = "";
  vketikc=kalimatc.innerHTML;kalimatc.innerHTML = "";
  vketikd=kalimatd.innerHTML;kalimatd.innerHTML = "";
  vketike=kalimate.innerHTML;kalimate.innerHTML = "";
  vketikf=kalimatf.innerHTML;kalimatf.innerHTML = "";
  vketikg=kalimatg.innerHTML;kalimatg.innerHTML = "";
  
  var aa=0,vketik;
  function fmketik1(){
  wallpaper.style="transform: scale(1.5);";
}
function mketik1() {wallpaper.style="transform: scale(1.5);";if(aa<vketik.length){kalimat.innerHTML += vketik.charAt(aa);aa++;setTimeout(mketik1,43);}}

var ab=0,vketika;
function fmketik2(){
  wallpaper.style="transform: scale(1);";
  kalimat.innerHTML="";
}
function mketik2() {if(ab<vketika.length){kalimata.innerHTML += vketika.charAt(ab);ab++;setTimeout(mketik2,42);}}
  
  var ac=0,vketikb;
function fmketik3(){
  wallpaper.style="transform: scale(1.5);";
  fthilang();ftganti=1;setTimeout(ftmuncul,200);
  kalimata.innerHTML="";
}
function mketik3() {if(ac<vketikb.length){kalimatb.innerHTML += vketikb.charAt(ac);ac++;setTimeout(mketik3,47);}}

  var ad=0,vketikc;
function fmketik4(){
  wallpaper.style="transform: scale(1);";
  fthilang();ftganti=2;setTimeout(ftmuncul,200);
  kalimatb.innerHTML="";
}
function mketik4() {if(ad<vketikc.length){kalimatc.innerHTML += vketikc.charAt(ad);ad++;setTimeout(mketik4,43);}}

  var ae=0,vketikd;
function fmketik5(){
  wallpaper.style="transform: scale(1.5);";
  fthilang();ftganti=3;setTimeout(ftmuncul,200);
  kalimatc.innerHTML="";
}
function mketik5() {if(ae<vketikd.length){kalimatd.innerHTML += vketikd.charAt(ae);ae++;setTimeout(mketik5,42);}}

  var af=0,vketike;
function fmketik6(){
  wallpaper.style="transform: scale(1);";
  fthilang();ftganti=4;setTimeout(ftmuncul,200);
  kalimatd.innerHTML="";
}
function mketik6() {if(af<vketike.length){kalimate.innerHTML += vketike.charAt(af);af++;setTimeout(mketik6,43);}}

  var ag=0,vketikf;
function fmketik7(){
  wallpaper.style="transform: scale(1.5);";
  fthilang();ftganti=5;setTimeout(ftmuncul,200);
  kalimate.innerHTML="";
}
function mketik7() {if(ag<vketikf.length){kalimatf.innerHTML += vketikf.charAt(ag);ag++;setTimeout(mketik7,40);}}

  var ah=0,vketikg;
function fmketik8(){
  wallpaper.style="transform: scale(1);";
  fthilang();ftganti=6;setTimeout(ftmuncul,200);
}
function mketik8() {if(ah<vketikg.length){kalimatg.innerHTML += vketikg.charAt(ah);ah++;setTimeout(mketik8,53);} if(ah==vketikg.length){tombol();}}
  
  function dilanjut(){wallpaper.style="transform: scale(1.5);";setTimeout(otomatis2,300);fthilang();ftganti=10;setTimeout(ftmuncul,300);Tombol.style="opacity:0;transform: scale(.1);";jikatom=1;setTimeout(tombol,1000);}
  
  function otomatis() {befanimkata();setTimeout(animkata,400);} 
  function befanimkata(){kalimat.style="transform:scale(.3);";kalimatb.style="transform:scale(.3);";kalimatc.style="transform:scale(.3);";} 
  function animkata() {kalimat.style="transform:scale(1);";kalimatb.style="transform:scale(1);";kalimatc.style="transform:scale(1);";}
  
  function otomatis2() {
  kalimat.innerHTML = kalimat2.innerHTML;kalimat.style="margin-left:0;margin-right:0";
  kalimat.style="";kalimata.innerHTML="";
  kalimatb.innerHTML="";kalimatc.innerHTML="";
  kalimatd.innerHTML="";kalimate.innerHTML="";
  kalimatf.innerHTML="";kalimatg.innerHTML="";
  }

  function otomatis3() {befanimkata3();setTimeout(animkata3,700);} 
  function befanimkata3(){kalimat.style="";kalimatb.style="";kalimat.style="opacity:0";kalimatb.style="opacity:0";} 
  function animkata3() {kalimat.innerHTML = kalimat3.innerHTML + balasan;kalimatb.innerHTML = kalimatb3.innerHTML;kalimat.style="opacity:1;font-size:18px;transition:none";kalimatb.style="opacity:1;font-size:17px;font-weight:400;transition:none";}
  
  function ftmuncul(){
    if(ftganti==0){fotoakhir.style="display:inline-flex;transition:all .7s ease;opacity:1;transform:scale(1)";}
    if(ftganti==1){fotoakhir.src = fotoakhir1.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==2){fotoakhir.src = fotoakhir2.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==3){fotoakhir.src = fotoakhir3.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==4){fotoakhir.src = fotoakhir4.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==5){fotoakhir.src = fotoakhir5.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==6){fotoakhir.src = fotoakhir6.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==10){fotoakhir.src = fotoAkhir.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
  }
  
  document.getElementById('suratin').onclick = function(){suratin.style="transition:all 1s ease;transform:scale(.1);opacity:0";ket.style="transition:all 1s ease;transform:scale(.1);opacity:0";setTimeout(fmulaikonten,300);setTimeout(mulaikonten,300)}
  function fmulaikonten(){fungsi=1;suratin.style="display:none";ket.style="display:none";Content.style = "opacity:1;margin-top:4vh;";bodyblur.style="opacity:.3;animation:none";wallpaper.style="transform: scale(1);";bq.style = "position:relative;opacity:1;visibility:visible;margin-top:0;";audio.play();ftganti=0;ftmuncul();}
  function fthilang(){fotoakhir.style="display:inline-flex;opacity:.5;transition:all .7s ease;transform:scale(.1)";}
  function jjfoto(){fotoakhir.style.animation="rto .8s infinite alternate";}
  
  function tombol(){Tombol.style="opacity:1;transform: scale(1);margin-top:15px";
                    if(jikatom==0){ftom=1;} 
                    if(jikatom==1){tmbl.innerHTML=tmbl2.innerHTML;ftom=2;}}
  
  function multifungsi(){if(ftom==1){dilanjut();} if(ftom==2){dibalas();} if(ftom==5){menuju();}}
  
  function stakhir(){tmbl.innerHTML="Kirim";Tombol.style="opacity:1;transform: scale(1)";ftom=5;fungsi=0;}
  
  async function dibalas(){
      setInterval(createHeart,200);
      wallpaper.style="transform: scale(1)";
      Tombol.style="opacity:0;transform: scale(.1);";
      Content.style = "transition:all 1s ease;opacity:1;margin-top:7vh;";
      jawab();
   }
