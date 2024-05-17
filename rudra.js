var i = 0;
var txt1 =
  "Dearest Suruchi!  <<               Word can't fully capture the depth of your beauty. You're without a doubt, one of the most beautiful soul I've ever encountered. <<<                You're a rare gem in the world.                                                                           > Each time I see you, my heart swells < and the light you bring into the world administration for the person you are.  <<                  I want you to know the profound impact you've had on my life. <<                           You possess a rare ability to make everyone around you feel valued and cherished, and I feel incredibly fortunate to have you by my side.                                                     > Today, as I offer you this humble gift of a jhmuka, I'm acutely aware of its insignificance in comparison to the magnitude of your impact on my life.                     << I don't know how you'll like this jhumka, as I've no idea about this stuff, but I chose it with all my heart for you.                                                     > It's as if the jhumka itself pales in comparison to the radiant beauty it enhances when worn by you.                    << In the delicate curves of this jhumka, I envision echoes of your grace, resilence and inner strength.                                                             >This small token of affection is a reflection of my admiration for you and a reminder of the countless reason why you mean so much to me.                   > With all my love and deepest appreciation. ~rudrarohaan";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
