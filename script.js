// =========================
// ELEMENT
// =========================

const home = document.getElementById("home");
const letterPage = document.getElementById("letterPage");

const letterTitle = document.getElementById("letterTitle");
const letterText = document.getElementById("letterText");

const buttons = document.querySelectorAll(".letter-btn");
const backBtn = document.getElementById("backBtn");

const music = document.getElementById("bgMusic");

// =========================
// MUSIC
// =========================

// Musik otomatis diputar saat user pertama kali klik
document.addEventListener(
  "click",
  () => {
    music.play().catch(() => {});
  },
  { once: true }
);

// =========================
// LETTERS
// =========================

const letters = {

happy:{

title:"😊 Open When You're Happy",

text:`

<p>bb,</p>

<p>
Seeing you happy is one of the sweetest things I could ever witness. I hope whatever is making your heart smile today stays with you a little longer. You deserve every tiny moment of happiness, even the ones that seem ordinary.
</p>

<p>
Sometimes life moves so fast that we forget to appreciate the little victories. So if today feels good, don't rush through it. Laugh a little louder, smile a little longer, and let yourself enjoy every second without feeling guilty.
</p>

<p>
I hope this happiness becomes a beautiful memory you'll remember on difficult days. Keep collecting moments like this, because they remind you that life isn't always heavy. There will always be reasons to smile again.
</p>

<p>
And if someday this smile disappears, don't worry. You'll find it again, just like the sun always finds its way back after the night.
</p>

<p>
with the biggest of love,<br>
— shra 🤍
</p>

`

},

// ==================================

sad:{

title:"☁️ Open When You're Sad",

text:`

<p>bb,</p>

<p>
If you're reading this with tears in your eyes, I wish I could be there beside you right now. I know some days feel much heavier than others, and sometimes no words seem enough to make everything better.
</p>

<p>
Please don't blame yourself for feeling sad. You're allowed to cry, you're allowed to rest, and you're allowed to admit that today isn't your best day. Being strong doesn't mean pretending everything is okay.
</p>

<p>
Take a deep breath, drink some water, and remember that this feeling won't stay forever. Little by little, you'll heal. Maybe not today, maybe not tomorrow, but one day you'll realize that the pain isn't as loud as it used to be.
</p>

<p>
Until that day comes, be gentle with yourself. You deserve kindness, especially from your own heart.
</p>

<p>
with the biggest of love,<br>
— shra 🤍
</p>

`

},

// ==================================

overthinking:{

title:"🌙 Open When You're Overthinking",

text:`

<p>bb,</p>

<p>
I know your mind can be really noisy sometimes. You keep replaying conversations, imagining different endings, and worrying about things that haven't even happened yet. It must be exhausting.
</p>

<p>
Take a slow breath. Not everything needs an answer tonight. Some questions are meant to be solved with time, not with endless thoughts. You don't have to carry every possibility on your shoulders.
</p>

<p>
Please don't let your thoughts convince you that you're not enough. You're doing better than you think, even if your mind keeps telling you otherwise. Give yourself permission to rest from thinking about everything for just a little while.
</p>

<p>
Close your eyes, breathe slowly, and remember that tomorrow is another chance. You don't have to figure your whole life out tonight.
</p>

<p>
with the biggest of love,<br>
— shra 🤍
</p>

`

},

// ==================================

tired:{

title:"💤 Open When You're Tired",

text:`

<p>bb,</p>

<p>
You've been trying so hard lately, haven't you? Maybe no one notices how much effort you've been putting into everything, but I'm sure you've done your best. And that's already enough.
</p>

<p>
Please don't feel guilty for resting. You don't always have to be productive to be worthy. Sometimes the bravest thing you can do is simply close your eyes, breathe, and give yourself permission to pause.
</p>

<p>
The world can wait for a little while. Your assignments, your responsibilities, and your worries will still be there tomorrow. Right now, what matters most is taking care of yourself.
</p>

<p>
So get some sleep, drink enough water, and remember that even the brightest stars disappear for a while before shining again.
</p>

<p>
with the biggest of love,<br>
— shra 🤍
</p>

`

},

// ==================================

lonely:{

title:"🤍 Open When You're Lonely",

text:`

<p>bb,</p>

<p>
Feeling lonely can happen even when you're surrounded by many people. It's a quiet feeling that sits in your heart and makes everything seem a little emptier than usual.
</p>

<p>
If today feels like that, I hope this little letter can keep you company for a moment. Maybe I can't sit beside you physically, but I hope these words feel like a warm presence reminding you that you're not forgotten.
</p>

<p>
There are still people who care about you, who smile because of you, and who would miss you more than you realize. Sometimes our minds hide those truths when we're feeling lonely.
</p>

<p>
Until you feel okay again, be kind to yourself. You deserve love, warmth, and gentle days ahead.
</p>

<p>
with the biggest of love,<br>
— shra 🤍
</p>

`

},

// ==================================

hug:{

title:"🫂 Open When You Need A Hug",

text:`

<p>bb,</p>

<p>
If I could, I'd give you the biggest hug right now. The kind of hug where you don't have to explain anything because somehow it already understands how tired your heart feels.
</p>

<p>
Maybe today didn't go the way you wanted. Maybe you're carrying things you haven't told anyone. Whatever it is, you don't have to carry everything alone all the time.
</p>

<p>
So imagine me wrapping you in the warmest hug, reminding you that it's okay to slow down. You don't always have to be the strongest person in every room.
</p>

<p>
Stay here for a little while. Breathe deeply. One day you'll look back and realize that you made it through this too.
</p>

<p>
with the biggest of love,<br>
— shra 🤍
</p>

`

},

// ==================================

miss:{

title:"💌 Open When You Miss Me",

text:`

<p>bb,</p>

<p>
If you're reading this because you miss me, then let these words be a small reminder that distance doesn't erase care. Even if we're not talking every moment, I hope you know that I still wish good things for you.
</p>

<p>
I hope you've been eating well, sleeping enough, and taking care of yourself. Please don't skip meals, don't stay up too late, and don't be too hard on yourself, okay?
</p>

<p>
Whenever something beautiful happens, I hope you smile. Whenever something difficult happens, I hope you remember that you're stronger than you think. No matter where life takes you, I'll always hope happiness finds you.
</p>

<p>
So until we meet again, keep becoming the amazing person you're meant to be. I'll always be cheering for you from wherever I am.
</p>

<p>
with the biggest of love,<br>
— shra 🤍
</p>

`

},

// ==================================

proud:{

title:"🌷 Open When You're Proud Of Yourself",

text:`

<p>bb,</p>

<p>
If you're here because you're proud of yourself, then I hope you're smiling while reading this. Sometimes we get so busy chasing the next goal that we forget to appreciate how far we've already come. Today, I want you to pause for a moment and truly look back at everything you've survived.
</p>

<p>
Maybe your achievement seems small compared to someone else's, but that doesn't make it any less meaningful. Every little step you take, every obstacle you've overcome, and every moment you chose not to give up has brought you to where you are today. That's something worth celebrating.
</p>

<p>
I'm genuinely proud of you, bb. Not just because of what you've achieved, but because you kept going even when things became difficult. Your effort, your courage, and your determination matter so much more than you realize.
</p>

<p>
So keep believing in yourself. Keep dreaming, keep learning, and keep growing into the incredible person you're becoming. I'll always be one of the people quietly cheering for you, no matter how near or far we are.
</p>

<p>
with the biggest of love,<br>
— shra 🤍
</p>

`

},

// ==================================

final:{

title:"💖 Final Letter",

text:`

<p>bb,</p>

<p>
If you've reached this letter, it means you've read every page I prepared for you. Maybe you opened them because you were happy, maybe because you were tired, maybe because life felt a little too heavy today. Whatever brought you here, thank you for taking the time to read every single word.
</p>

<p>
I made this little place with one hope in mind: that whenever life feels overwhelming, you'll have somewhere to come back to. Somewhere that reminds you to slow down, breathe, and remember that your feelings are valid. You don't have to be perfect every day, and you don't have to carry everything on your own.
</p>

<p>
Please continue taking care of yourself, bb. Eat your meals even when you're busy. Get enough rest even when your mind wants to stay awake. Celebrate yourself, forgive yourself when you make mistakes, and never stop believing that brighter days will come. Even if progress feels slow, you're still moving forward, and that's enough.
</p>

<p>
I don't know what life will look like in the future, or where it will take us. But I truly hope your days are filled with more laughter than tears, more peace than worry, and more love than loneliness. I hope you always find reasons to keep going, even on the days when everything feels uncertain.
</p>

<p>
And whenever you feel like no one understands you, remember that this little website was made because someone wanted you to have a safe place to return to. A place where you could smile, cry, breathe, or simply exist without feeling judged.
</p>

<p>
Thank you for reading until the very end, bb. I hope every letter here becomes a gentle reminder that you deserve kindness, happiness, and all the beautiful things this world has to offer.
</p>

<p>
No matter what happens tomorrow, don't forget this one thing: you are loved, you are appreciated, and you are enough, exactly as you are.
</p>

<p>
with the biggest of love,<br>
— shra 🤍
</p>

`

}

// =========================
// END OF LETTERS
// =========================

};

// =========================
// OPEN LETTER
// =========================

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const key = button.dataset.letter;

        letterTitle.innerHTML = letters[key].title;
        letterText.innerHTML = letters[key].text;

        home.classList.add("hidden");
        letterPage.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

// =========================
// BACK BUTTON
// =========================

backBtn.addEventListener("click", () => {

    letterPage.classList.add("hidden");
    home.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// KEEP MUSIC PLAYING
// =========================

music.volume = 0.5;

document.addEventListener("visibilitychange", () => {

    if (!document.hidden && music.paused) {
        music.play().catch(() => {});
    }

});
