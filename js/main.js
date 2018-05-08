let quotes = {
  q0 : {
    quote : "The past is over.. .forget it. The future holds hope.. .reach for it.",
    name : "Charles R. Swindoll"
  },
  
  q1: {
    quote : "To accomplish great things, we must not only act, but also dream, not only plan, but also believe.",
    name : "Anatole France"
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
    quote : "Winning is not a \"sometime\" thing. You don't win once in a while, you don't do things righ once in a while, you do them right all of the time. Winning is a habit unfortunately, so is losing.",
    name : "Vince Lombardi"
  },
  
  q8: {
    quote : "Your ideas are like diamonds.. .without the refining process, they are just a dirty rock, but by cutting away the impurities they become priceless.",
    name : "Paul Kearly"
  },
  
  q9: {
    quote : "To be a champion, you have to believe in yourself when nobody else will.",
    name : "Sugar Ray Robinson"
  },
  
  q10: {
    quote : "Accept the past for what it was. Acknowledge the present for what it is. Anticipate the future for what it can become.",
    name : "Tracy L. McNair"
  },
  
  q11: {
    quote : "Successful people tend to become more successful because they are always thinking about their successes.",
    name : "Brian Tracy"
  },
  
  q12: {
    quote : "If we are to achieve results never before accomplished, we must expect to employ methods never before attempted.",
    name : "Francis Bacon"
  },
  
  q13: {
    quote : "I have tried 99 times and have failed, but on the 100th time came success.",
    name : "Albert Einstein"
  }
  // stoped at page 7
};

console.log(quotes["q"+randomizer()].quote);
function randomizer() {
  let randNum = Math.floor(Math.random()*Object.keys(quotes).length);
  return randNum;
}

console.log(randomizer());