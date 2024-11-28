//VARS
var quoteBtn = document.getElementById('quoteButton');
var lastRandom;
var quotes=[
    {
        line:"“A room without books is like a body without a soul.”",
        author:"― Marcus Tullius Cicero"
    },
    {
        line:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author:"― Bernard M. Baruch"
    },
    {
        line:"So many books, so little time",
        author:"― Frank Zappa"
    },
    {
        line:"You only live once, but if you do it right, once is enough.",
        author:"― Mae West"
    },
    {
        line:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi"
    },
    {
        line:"“If you tell the truth, you don't have to remember anything.”",
        author:"― Mark Twain"
    }
]
//FUNCTIONS
function newQuote(){
    var random = Math.floor(Math.random()*6)
    var cartona = "";
    if(random == lastRandom ){
        while(random == lastRandom ){
            random = Math.floor(Math.random()*6)
        }
    }

    cartona += `
        <p class="py-4">   
        ${quotes[random].line}
        </p>
        <p class="py-4">   
        ${quotes[random].author}
        </p>
               `

    lastRandom = random;
    document.getElementById('quoteDiv').innerHTML=cartona;
}

