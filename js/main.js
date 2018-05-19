let quotes = {
  q0 : {
    quote : "The past is over... forget it. The future holds hope... reach for it.",
    name : "Charles R. Swindoll"
  },
  
  q1: {
    quote : "Never give up! Failure and rejection are only the first step to succeeding.",
    name : "Jimmy Valvano"
  },
  
  q2: {
    quote : "Sometimes things become possible if we want them bad enough.",
    name : "T.S. Eliot"
  },
  
  q3: {
    quote : "To be a leader, you must stand for something, or you will fall for anything.",
    name : "Anthony Pagano"
  },
  
  q4: {
    quote : "Courage is facing your fears. Stupidity is fearing nothing.",
    name : "Todd Bellemare"
  },
  
  q5: {
    quote : "Victory is always possible for the person who refuses to stop fighting.",
    name : "Napoleon Hill"
  },
  
  q6: {
    quote : "Great works are performed not by strength, but perseverance.",
    name : "Dr. Samuel Johnson"
  },
  
  q7: {
    quote : "People with goals succeed because they know where they are going.",
    name : "Earl Nightingale"
  },
  
  q8: {
    quote : "You may be disappointed if you fail, but you are doomed if you do not try.",
    name : "Beverly Sills"
  },
  
  q9: {
    quote : "To be a champion, you have to believe in yourself when nobody else will.",
    name : "Sugar Ray Robinson"
  },
  
  q10: {
    quote : "It's not whether you get knocked down; it's whether you get back up.",
    name : "Vince Lombardi"
  },
  
  q11: {
    quote : "Success is the prize for those who stand true to their ideas.",
    name : "John S. Hinds"
  },
  
  q12: {
    quote : "I have failed over and over again. That is why I succeed.",
    name : "Michael Jordan"
  },
  
  q13: {
    quote : "I have tried 99 times and have failed, but on the 100th time came success.",
    name : "Albert Einstein"
  },
  q14: {
    quote : "The path to success is to take massive determined action.",
    name : "Anthony Robbins"
  },
  
  q15: {
    quote : "Each day we must strive for constant and never ending improvement.",
    name : "Anthony Robbins"
  },
  
  q16: {
    quote : "Anyone who has never made a mistake has never tried anything new.",
    name : "Albert Einstein"
  },
  
  q17: {
    quote : "Cause change and lead; accept change and survive; resist change and die.",
    name : "Ray Norda"
  },
  
  q18: {
    quote : "Anyone who has never made a mistake has never tried anything new.",
    name : "Albert Einstein"
  },
  
  q19: {
    quote : "80% of success is showing up.",
    name : "Woody Allen"
  },
  
  
  q20: {
    quote : "If you think you can or if you think you can't, either way you are right.",
    name : "Anthony Robbins"
  },
  
  q21: {
    quote : "We can do anything we want to if we stick to it long enough.",
    name : "Helen Keller"
  },
  
  q22: {
    quote : "Only those who risk going too far can possibly find out how far one can go.",
    name : "T.S. Eliot"
  },
  
  q23: {
    quote : "The achievement of one goal should be the starting point of another.",
    name : "Alexander Graham Bel"
  },
  
  q24: {
    quote : "Money never starts an idea; it's the idea that starts the money.",
    name : "Mark Victor Hansen"
  },
  
  q25: {
    quote : "I am not just here to make a living; I am here to make a life.",
    name : "Helice Bridges"
  }
  // stoped at page 17
};

function randomizer() {
  let randNumber = Math.floor(Math.random()*Object.keys(quotes).length);
  return randNumber;
}

function fadeOut() {
  let element = document.querySelectorAll(".content");
  if(element.length > 1) {
    for(let i = element.length-1; i > 0; i--){
      element[i].remove();
    }
  }
  else {
    let fadeEffect = setInterval(function() {
      if (!element[0].style.opacity) {
        element[0].style.opacity = 1;
      } if (element[0].style.opacity < 0.1) {
        clearInterval(fadeEffect);
        element[0].remove();
      } else {
        element[0].style.opacity -= 0.1;
      }
    }, 50);
  }
}

function randStyle() {
  let randz = Math.floor(Math.random()*9);
  let style = "s"+randz;
  return style;
}

function createQuote() {
  let randNum = randomizer();
  let mainContentDiv = document.querySelector("#main-content");
  let contentDiv = document.createElement("div");
  contentDiv.setAttribute("class", "content");
  
  let quoteText = document.createElement("p");
  quoteText.setAttribute("id", "quote-text");
  quoteText.innerHTML = "<i class=\"fas fa-quote-left\"></i> "+quotes["q"+randNum].quote;
  
  let quoteName = document.createElement("span");
  quoteName.setAttribute("id", "quote-name");
  quoteName.innerHTML = "<br>"+"- "+quotes["q"+randNum].name;
  
  contentDiv.appendChild(quoteText);
  quoteText.appendChild(quoteName);
  mainContentDiv.appendChild( contentDiv);

  document.querySelector("body").setAttribute("class", randStyle());
}

function postTweet() {
  this.setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + document.querySelector("#quote-text").textContent + '" ' + document.querySelector("#quote-name").textContent));
}

function textWrite() {
  let elements = document.getElementsByClassName('txt-rotate');
  for (let i=0; i<elements.length; i++) {
    let toRotate = elements[i].getAttribute('data-rotate');
    let period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  let css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
}

let TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

createQuote();


document.querySelector("#tweet-quote").addEventListener("click", postTweet);

TxtRotate.prototype.tick = function() {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  let that = this;
  let delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

document.querySelector("button").addEventListener("click", function() {
  // let element = document.querySelectorAll(".content");
  // if(element.length > 1) {
  //   for(let i = element.length-1; i > 0; i--){
  //     element[i].remove();
  //   }
  // } else {
  //   element[0].remove();
  // }
  fadeOut();
  createQuote();
});
textWrite();