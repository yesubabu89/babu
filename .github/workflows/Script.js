const bodyel = document.getElementById("bgheart");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s"
    bodyel.appendChild(heart);
}
setInterval(createHeart, 100);
setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
        heartArr[0].remove()
    }
}, 100);


var i = 0;
var txt1 = "Hi SweetHeart.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you are closer to me in my heart....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                                           > Everything about you is always intresting for me...!                     << Somehow I am feeling nervous Because I haven't said these words to anyone and I won't say to anyone in my future...!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                                              >I Love U <SweetHeart.....!                   <<<< Give me One chance to Prove my Love ...!                  >I am waiting to move on with you in my feature...!  << I am eagerly waiting for your response...!";
var speed = 50;
typeWriter();

function typeWriter() {
    if (i < txt1.length) {
        if (txt1.charAt(i) == '<')
            document.getElementById("text1").innerHTML += '</br>'
        else if (txt1.charAt(i) == '>')
            document.getElementById("text1").innerHTML = ''
        else
            document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}