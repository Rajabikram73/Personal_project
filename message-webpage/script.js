// User accounts data and personal messages
const users = {
    "sameer": {
        name: "Sameer",
        password: "12345",
        icon: "🤜🤛",
        greetingEmoji: "🤝❤️",
        particles: ["🤜🤛", "🤝", "🫂", "👑", "🔥", "❤️", "✨", "💯"],
        promiseHeadline: "Brotherhood Till The End 🤜🤛",
        promiseText: `Chahe hum kitne bhi bade ho jayein ya life kitni bhi busy ho jaye, mera ek rule hamesha fix rahega:

Teri har mushkil mein tera bhai 24x7 tere peeche khada rahega. School aur coaching se shuru hua yeh bond lifetime chalega!`,
        promiseBtnText: "Brothers Forever 🤜🤛🔥",
        promiseToast: "👑 Brotherhood Sealed for Lifetime! Raja & Sameer 🤜🤛",
        messages: [
            `I might not say it every day, but I am so lucky to have you as my brother.

Bachpan se lekar aaj tak, humne apni life ka har ek chota-mota secret ek doosre ke saath share kiya hai—humare beech koi parda nahi hai. Jab life mein aisa time aaya tha jab sabne saath chhod diya, tab sirf tu hi tha jo mere saath khada raha.

School, coaching, aur phir saath mein hangout karna... tere saath hota hoon toh sach mein duniya ki saari tension bhool jaata hoon.

You're the absolute best, bhai! 🤜🤛❤️`,

            `Bhai, kuch log zindagi mein hamesha pillar ki tarah khade rehte hain, aur tu mere liye wahi insaan hai.

Hum toh bachpan ke yaar hain na—school ke dino se lekar coaching tak humne sab kuch saath mein face kiya hai. Tujhse meri koi baat chupi nahi hai, hum apna har ek chota problem aur khushi share karte hain.

Jab sab log piche hat gaye the, tab tune mera haath thama tha. Tere saath baith kar chill karne se bada sukoon aur kuch nahi hai! 🫂🤝💯`,

            `Chahe kitni bhi bakwaas baatein ho ya sabse serious discussions, tere saath har conversation best hoti hai.

Bachpan se lekar ab tak humne itne crazy moments dekh liye hain ki humari life ek open book hai ek doosre ke liye. Tu woh bhai hai jo tab bhi saath khada tha jab sab chhod kar chale gaye the.

School aur coaching ke dino se lekar aaj ke hangouts tak, jab main tere saath hota hoon na, toh baki saari duniya ki fikr gayab ho jaati hai.

Tu irreplaceable hai, bhai! 👬👑✨`,

            `Zindagi mein kitne bhi dost ban jayein, lekin bhai wali jagah koi nahi le sakta!

Bachpan se lekar aaj tak humare beech koi secret nahi raha, hum har ek choti cheez share karte hain. School, coaching, aur har mushkil phase mein jab sabne saath chhod diya, tu hamesha mere back par tha.

Tere saath hangout karke saara stress khatam ho jaata hai. Thanks for always standing by me, bhai.

You are the absolute best! 🤜🤛💎🔥`
        ]
    },
    "subhadra": {
        name: "Subhadra",
        password: "12345",
        icon: "🌸",
        greetingEmoji: "💍❤️",
        particles: ["🌸", "💍", "✨", "💖", "🥰", "💎", "💐"],
        promiseHeadline: "A Lifetime Blessing & Friendship 🌸💍",
        promiseText: `Chahe life ka kitna bhi naya aur khoobsurat chapter shuru ho jaye, mera ek sachha promise hai:

Main hamesha tumhari aur tumhari iss nayi jodi ki khushiyon ke liye dua karunga. Bhagwan tum dono ko hamesha khush aur salamat rakhe!

A true friend and well-wisher forever!`,
        promiseBtnText: "Always Blessed & Happy 🌸💍✨",
        promiseToast: "🌸 Lifetime Blessings Sealed! Congratulations Subhadra! 💍✨",
        messages: [
            `Sach boloon toh, hum school mein toh mile par kabhi baat nahi hui, aur dekho aaj tum mere sabse kareeb ho.

Graduation ke time jab humne baat shuru ki, tab se lekar aaj tak tum meri sabse achhi dost aur sabse badi strength rahi ho. Tumse baat karke jo sukoon milta hai na, wo sach mein kahi aur nahi milta.

Meri life mein hamesha aise hi rehna aur hamesha muskurati raha karo! ❤️✨`,

            `Career ko lekar jab bhi main confuse hua hoon ya mujhe samajh nahi aaya ki aage kya karna hai, tumne hamesha ek sachhe mentor ki tarah mujhe guide kiya hai.

Teri har ek advice ne mujhe hamesha sahi rasta dikhaya hai. Jab sabne mujh par doubt kiya, tab sirf tera unconditional support hi tha jisne mujhe hamesha aage badhne ka hausla diya. 🌸💫`,

            `Aur aaj, jab main tumhe apni life ke is naye aur sabse khoobsurat phase mein kadam rakhte hue dekh raha hoon, toh mera dil khushi se bhar gaya hai.

Mujhe sabse zyada khushi is baat ki hai ki tumhe tumhara 'pasandida mard' mil gaya hai!

Tum dono ki jodi sach mein bilkul perfect hai aur tumhe is naye safar ke liye dher saari badhaiyan! 💍✨`,

            `Main bas yahi dua karta hoon ki tum dono ki life hamesha dher saari khushiyan, haseen lamhon aur dher saare pyaar se bhari rahe.

Bhagwan tum dono ki jodi ko hamesha har buri nazar se bachaye rakhe. Tum dono saath mein hamesha aise hi chamakte raho aur hamesha muskurate raho!

Happy Engagement! 💍😊💎✨`
        ]
    },
    "elina": {
        name: "Elina",
        password: "12345",
        icon: "✨",
        greetingEmoji: "❤️",
        particles: ["✨", "❤️", "💖", "🌸", "👑", "🥰"],
        promiseHeadline: "2016 to Infinity Best Friends ✨",
        promiseText: `College ke 2016 se shuru hui humari dosti ka promise hai—chahe kitna bhi waqt guzar jaye, late night rants ho ya crazy gossip:

Tu hamesha meri best friend rahegi! Irreplaceable forever.`,
        promiseBtnText: "Best Friends Forever 💎✨",
        promiseToast: "✨ Best Friend Forever Promise Sealed! 2016 & Beyond! 👑",
        messages: [
            `I might not say it every day, but I am so lucky to have you as my best friend. Ever since we met in college back in 2016, through all the laughs, venting sessions, and crazy moments, you've always had my back.

Just wanted to remind you that you're the absolute best. ❤️`,

            `Zindagi mein sab badal gaya yaar—college ke assignment se lekar ab corporate ke rone tak—par ek cheez hamesha same rahi: tera saath.

2016 se lekar aaj tak, jab bhi life ne bouncer phenki hai, tu wahan khade hoke mujhe sambhalne ke liye taiyar thi. Mere har achhe-bure phase ko tune bina judge kiye dekha hai. Truly, aisi sachi dosti milna kisi blessing se kam nahi hai.

Thank you for being my constant pillar! 🤝✨`,

            `Yaar, chahe koi emotional meltdown ho ya din ki sabse fizool bakwaas—tere saath har conversation ka ek alag hi maza hai.

College ke dino se lekar ab tak tu hi ek aisi insaan hai jo bina kuch kahe meri har situation ko samajh jaati hai. Dost toh bohot aate jaate hain life mein, par jo jagah teri hai na, woh koi naya banda chah kar bhi nahi le sakta.

Tu jaisi bhi hai, absolute best hai! 💯👑`,

            `Tu jaanti hai main yeh sab roz roz nahi bolta, par aaj dil se bol raha hoon:

College ke dino se lekar ab tak jitni bhi mushkilein aayi hain, tera mere saath khade rehna hi meri sabse badi strength tha. From college corridors to real-life struggles, we literally survived it all together.

Meri life mein rehne ke liye aur hamesha mujhe support karne ke liye thank you, yaar. You're irreplaceable! 💎`
        ]
    },
    "gudly": {
        name: "Gudly",
        password: "12345",
        icon: "✨",
        greetingEmoji: "❤️",
        particles: ["✨", "❤️", "💖", "🌸", "👑", "🥰"],
        promiseHeadline: "2009 to Infinity — My Gudly ✨",
        promiseText: `2009 mein ek mutual connection ki wajah se shuru hui humari dosti, aaj 18 saal baad bhi utni hi special hai. Beech mein 2–3 saal tak touch mein nahi the, lekin jab dobara mile, toh laga jaise beech mein kuch hua hi nahi tha.

Aur uske baad se humara bond kabhi khatam nahi hua. ❤️

Tu sirf meri friend nahi hai, tu meri life ke un logon mein se hai jinke saath main bina soche apni har baat share kar sakta hoon. Jab tu kisi cheez mein stuck hoti hai, mujhe call karti hai, meri advice leti hai aur uspe trust bhi karti hai. Aur jis tarah tu mere difficult times mein, especially medical situations mein, mere saath khadi rahi hai, main woh kabhi nahi bhool sakta.

Tu cute bhi hai, strong bhi hai, aur thodi si pagal bhi. 😂❤️
Main hamesha tera support karunga, aur mujhe pata hai ki tu bhi hamesha mere saath khadi rahegi.

Aur haan, mere phone mein tera naam Chand nahi, "Gudly" hai — kyunki kuch logon ke liye naam se zyada ek special naam hota hai. 😌❤️

2009 se lekar aaj tak… aur aage bhi,
Tu meri favourite friends mein se nahi,
Tu meri irreplaceable friend hai.

Always my Gudly. 👑❤️`,
        promiseBtnText: "Best Friends Forever 💎✨",
        promiseToast: "✨ 18 Years of Friendship — Gudly Forever! ❤️👑",
        messages: [
            `Kabhi socha nahi tha ki ek mutual connection se shuru hui dosti itni strong ho jayegi.

2009 mein shayad hum dono ko idea bhi nahi tha ki aane wale saalon mein hum ek dusre ki life ka itna important part ban jayenge.

School ke baad 2–3 saal tak baat nahi hui, life apni-apni direction mein chali gayi… lekin jab hum dobara mile, toh friendship ko restart karne ki zarurat hi nahi padi.

Bas wahi connection, wahi comfort aur wahi bonding wapas aa gayi. ❤️

Kuch friendships time ke saath fade ho jaati hain,
aur kuch friendships time ke saath aur strong hoti jaati hain.

Ours is definitely the second one. 🥰`,

            `Gudly, tu jaanti hai na, humari friendship mein sabse achhi cheez kya hai?

Hum ek dusre ke saamne kuch pretend nahi karte.

Life mein kya chal raha hai, kya problem hai, kya khushi hai, kya tension hai — hum bina filter ke share kar lete hain.

Jab tu kisi cheez mein stuck hoti hai, tera call aata hai — "Yaar, ek problem hai…" 😂
Aur phir meri advice lene ke baad usko seriously follow bhi karti hai.

Lekin honestly, mujhe sabse zyada value is baat ki hai ki tune bhi mujhe kabhi akela feel nahi hone diya.

Mere difficult times mein, especially jab mujhe medical help aur support ki zarurat thi, tu mere saath khadi rahi.

Dosti sirf good times share karne ka naam nahi hai.
Dosti tab samajh aati hai jab life difficult ho aur phir bhi koi bole —
"Main hoon na."

Thank you for always being that person. ❤️🤝`,

            `Yaar Chand, tujhe shayad pata bhi nahi hai ki tu mere family ke liye bhi kitni special hai.

Tu sirf meri favourite friend nahi hai, tu mere family ki bhi favourite hai. ❤️

Aur Bangalore mein jab hum mile the na, woh time bhi apne aap mein ek beautiful memory hai.

Koi fancy plan nahi,
koi special occasion nahi,
bas hum dono saath the, baatein kar rahe the, has rahe the aur apne usual pagalpan mein busy the. 😂❤️

Shayad isi wajah se humari friendship special hai.

Humare paas perfect memories nahi hain,
but we have real memories.

Aur real friendships ki value hi sabse zyada hoti hai. ✨`,

            `Main shayad roz nahi bolta,
aur kabhi-kabhi toh bilkul express bhi nahi karta…

Lekin aaj dil se ek baat bolna hai.

18 saal mein life kitni change ho gayi —
school khatam hua,
life ke phases badle,
log aaye aur chale gaye,
hum dono ki apni-apni problems aur responsibilities aayi…

Lekin ek cheez same rahi —
humari friendship. ❤️

Tu meri life ke un rare people mein se hai jise main explain nahi karta,
bas trust karta hoon.

Aur agar kabhi life mein tu doubt kare ki tere saath kaun khada rahega,
toh ek naam yaad rakhna —
main.

Chahe kitna bhi time ho jaye,
kitni bhi distance ho,
kitni bhi life change ho…

My Gudly will always be my Gudly. ❤️👑

2009 → 2026 → Forever. ♾️✨`
        ]
    }
};

// Aliases so Chand, Gudli, and Gudly all work seamlessly
users["chand"] = users["gudly"];
users["gudli"] = users["gudly"];
users["chand (gudly)"] = users["gudly"];

let currentUser = null;
let currentMessageIndex = 0;
let typewriterTimeout = null;
let isTyping = false;
let currentFullText = "";

// Reaction counters
const reactions = {
    love: 0,
    hug: 0,
    smile: 0,
    blush: 0
};

function togglePasswordVisibility() {
    const pwdInput = document.getElementById("password");
    if (!pwdInput) return;
    pwdInput.type = (pwdInput.type === "password") ? "text" : "password";
}

// ==========================================
// 1. AUTHENTICATION & LOGIN
// ==========================================
function handleLogin(event) {
    event.preventDefault();

    const rawUser = (document.getElementById("username").value || "").trim().toLowerCase();
    const rawPass = (document.getElementById("password").value || "").trim();
    const errorElement = document.getElementById("loginError");
    const loginCard = document.getElementById("loginCard");

    // Clean user string removing punctuation & spaces
    const cleanUser = rawUser.replace(/[^a-z0-9]/g, "");

    // Special Admin / Desk login for Raja to view received notes
    if ((rawUser === "raja" || cleanUser === "raja") && rawPass === "12345") {
        errorElement.innerText = "";
        loginCard.classList.add("hidden");
        const rajaCard = document.getElementById("rajaCard");
        rajaCard.classList.remove("hidden");
        renderRajaInbox();
        burstParticles(window.innerWidth / 2, window.innerHeight / 2, ["👑", "📬", "✨", "❤️"]);
        return;
    }

    // Resolve target user object
    let targetUser = users[rawUser] || users[cleanUser];

    // Intelligent match for friend variations
    if (!targetUser) {
        if (rawUser.includes("gudly") || rawUser.includes("chand") || rawUser.includes("gudli") || cleanUser.includes("gudly") || cleanUser.includes("chand") || cleanUser.includes("gudli")) {
            targetUser = users["gudly"];
        } else if (rawUser.includes("sameer") || cleanUser.includes("sameer")) {
            targetUser = users["sameer"];
        } else if (rawUser.includes("subhadra") || cleanUser.includes("subhadra")) {
            targetUser = users["subhadra"];
        } else if (rawUser.includes("elina") || cleanUser.includes("elina")) {
            targetUser = users["elina"];
        }
    }

    // Check credentials
    if (targetUser && targetUser.password === rawPass) {
        currentUser = targetUser;
        currentMessageIndex = 0;
        errorElement.innerText = "";

        // Transition to message card
        loginCard.classList.add("hidden");
        const messageCard = document.getElementById("messageCard");
        messageCard.classList.remove("hidden");

        // Set User details & custom icons
        document.getElementById("userGreeting").innerText = `A Little Message For ${currentUser.name} ${currentUser.greetingEmoji || "❤️"}`;
        const mainHeartEl = document.getElementById("mainHeart");
        if (mainHeartEl) {
            mainHeartEl.innerText = currentUser.icon || "❤️";
        }

        const badgeNameEl = document.getElementById("badgeName");
        if (badgeNameEl) {
            badgeNameEl.innerText = currentUser.name;
        }

        // Trigger confetti celebration on login
        burstHearts({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });

        displayMessage();
    } else {
        errorElement.innerText = "❌ Invalid User ID or Password! Please try again.";
        loginCard.classList.remove("shake");
        void loginCard.offsetWidth; // Force reflow
        loginCard.classList.add("shake");
    }
}

// Render Raja's received notes inbox
function renderRajaInbox() {
    const listContainer = document.getElementById("inboxNotesList");
    if (!listContainer) return;

    const savedNotes = JSON.parse(localStorage.getItem("notes_for_raja") || "[]");
    if (savedNotes.length === 0) {
        listContainer.innerHTML = `<div class="empty-inbox">📬 No notes received yet!<br>When Sameer, Subhadra, Elina, or Gudly leave a note, it will appear here ✨</div>`;
        return;
    }

    listContainer.innerHTML = savedNotes.map(note => `
        <div class="inbox-item">
            <div class="inbox-item-header">
                <span class="inbox-sender">💌 ${note.sender}</span>
                <span class="inbox-time">${note.timestamp}</span>
            </div>
            <div class="inbox-text">${note.text}</div>
        </div>
    `).reverse().join("");
}

function clearAllNotes() {
    if (confirm("Are you sure you want to clear all received notes?")) {
        localStorage.removeItem("notes_for_raja");
        renderRajaInbox();
        showToast("🗑️ All notes have been cleared.");
    }
}

// ==========================================
// 2. TYPEWRITER EFFECT & MESSAGE DISPLAY
// ==========================================
let userScrolledUp = false;

function setupMessageBoxScrollListener() {
    const msgBox = document.getElementById("messageBox") || document.querySelector(".message-box");
    if (!msgBox) return;

    msgBox.addEventListener("scroll", () => {
        // If user is scrolled up away from bottom (> 35px), don't force them back down
        const distFromBottom = msgBox.scrollHeight - msgBox.scrollTop - msgBox.clientHeight;
        userScrolledUp = distFromBottom > 35;
    }, { passive: true });

    msgBox.addEventListener("wheel", (e) => {
        if (e.deltaY < 0) {
            userScrolledUp = true;
        }
    }, { passive: true });

    msgBox.addEventListener("touchmove", () => {
        const distFromBottom = msgBox.scrollHeight - msgBox.scrollTop - msgBox.clientHeight;
        if (distFromBottom > 35) {
            userScrolledUp = true;
        }
    }, { passive: true });
}

function updateDotsIndicator() {
    const container = document.getElementById("dotsIndicator");
    if (!container || !currentUser) return;
    container.innerHTML = "";
    for (let i = 0; i < currentUser.messages.length; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === currentMessageIndex) {
            dot.classList.add("active");
        }
        container.appendChild(dot);
    }
}

function displayMessage() {
    if (!currentUser) return;

    if (typewriterTimeout) {
        clearTimeout(typewriterTimeout);
    }

    userScrolledUp = false;

    const counterElement = document.getElementById("messageCounter");
    const totalMessages = currentUser.messages.length;
    counterElement.innerText = `Message ${currentMessageIndex + 1} of ${totalMessages}`;

    updateDotsIndicator();

    // Reset message box scroll position to top
    const msgBox = document.getElementById("messageBox") || document.querySelector(".message-box");
    if (msgBox) msgBox.scrollTop = 0;

    currentFullText = currentUser.messages[currentMessageIndex];
    const textContainer = document.getElementById("typewriterText");
    textContainer.innerText = "";
    isTyping = true;

    // Check if surprise button should appear (on last message)
    const surpriseBtn = document.getElementById("surpriseBtn");
    if (currentMessageIndex === totalMessages - 1) {
        surpriseBtn.classList.remove("hidden");
    } else {
        surpriseBtn.classList.add("hidden");
    }

    // Dynamic typing speed: Smooth and responsive
    const typingDelay = Math.max(10, Math.min(22, Math.floor(2200 / currentFullText.length)));

    let charIndex = 0;
    function typeNextChar() {
        if (charIndex < currentFullText.length) {
            textContainer.innerText += currentFullText.charAt(charIndex);
            charIndex++;
            
            // Auto scroll down during typing ONLY if user is not manually scrolling up
            if (!userScrolledUp && msgBox && msgBox.scrollHeight - msgBox.clientHeight > 20) {
                msgBox.scrollTop = msgBox.scrollHeight;
            }
            typewriterTimeout = setTimeout(typeNextChar, typingDelay);
        } else {
            isTyping = false;
        }
    }

    typeNextChar();
}

function skipTypewriter() {
    if (currentUser) {
        if (typewriterTimeout) clearTimeout(typewriterTimeout);
        document.getElementById("typewriterText").innerText = currentFullText;
        isTyping = false;
        userScrolledUp = false;
        const msgBox = document.getElementById("messageBox") || document.querySelector(".message-box");
        if (msgBox) msgBox.scrollTop = 0;
    }
}

function prevMessage(event) {
    if (!currentUser) return;

    if (event) {
        const pos = getCoords(event);
        const symbols = currentUser.particles || ["❤️", "✨", "🌸", "💖", "🎉"];
        burstParticles(pos.x, pos.y, symbols);
    }

    currentMessageIndex = (currentMessageIndex - 1 + currentUser.messages.length) % currentUser.messages.length;
    displayMessage();
}

function nextMessage(event) {
    if (!currentUser) return;

    // Burst particles on clicking next
    if (event) {
        const pos = getCoords(event);
        const symbols = currentUser.particles || ["❤️", "✨", "🌸", "💖", "🎉"];
        burstParticles(pos.x, pos.y, symbols);
    }

    currentMessageIndex = (currentMessageIndex + 1) % currentUser.messages.length;
    displayMessage();
}

// ==========================================
// 3. REACTIONS & PARTICLE EXPLOSION
// ==========================================
function getCoords(event) {
    if (!event) return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    if (event.clientX !== undefined && event.clientX !== 0) {
        return { x: event.clientX, y: event.clientY };
    }
    if (event.touches && event.touches.length > 0) {
        return { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }
    if (event.changedTouches && event.changedTouches.length > 0) {
        return { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
    }
    return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
}

function sendReaction(emoji, label, event) {
    const key = label.toLowerCase();
    if (reactions[key] !== undefined) {
        reactions[key]++;
        const countEl = document.getElementById(`rx-${key}`);
        if (countEl) countEl.innerText = reactions[key];
    }

    const pos = getCoords(event);
    burstParticles(pos.x, pos.y, [emoji, "✨", "💖"]);
    showToast(`Sent ${label} to Raja! ${emoji}`);
}

function burstHearts(event) {
    const pos = getCoords(event);
    const symbols = (currentUser && currentUser.particles) ? currentUser.particles : ["❤️", "💖", "💕", "✨", "🌸", "🥰"];
    burstParticles(pos.x, pos.y, symbols);
}

function burstParticles(x, y, symbols = ["❤️", "✨", "🌸", "💖", "🎉"]) {
    const container = document.getElementById("particleContainer");
    if (!container) return;

    const count = 18;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.innerText = symbols[Math.floor(Math.random() * symbols.length)];

        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5);
        const distance = Math.random() * 120 + 60;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        const rot = (Math.random() - 0.5) * 360;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.setProperty("--dx", `${dx}px`);
        particle.style.setProperty("--dy", `${dy}px`);
        particle.style.setProperty("--rot", `${rot}deg`);
        particle.style.fontSize = `${Math.random() * 12 + 18}px`;

        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1300);
    }
}

// ==========================================
// 4. SURPRISE MODAL (LIFETIME PROMISE LETTER)
// ==========================================
function openSurpriseModal(event) {
    if (event) {
        const pos = getCoords(event);
        const symbols = (currentUser && currentUser.particles) ? currentUser.particles : ["✨", "❤️", "👑", "🎉"];
        burstParticles(pos.x, pos.y, symbols);
    }
    if (currentUser) {
        document.getElementById("surpriseIcon").innerText = currentUser.icon || "✨";
        document.getElementById("surpriseTitle").innerText = `A Lifetime Promise for ${currentUser.name} ✨`;
        document.getElementById("promiseHeadline").innerText = currentUser.promiseHeadline || "Always Here For You";
        document.getElementById("promiseMessage").innerText = currentUser.promiseText || "Thank you for being such an irreplaceable part of my life!";
        document.getElementById("surpriseBtnText").innerText = currentUser.promiseBtnText || "Seal Our Bond Forever 🤝❤️";
    }
    document.getElementById("surpriseModal").classList.remove("hidden");
}

function closeSurpriseModal() {
    document.getElementById("surpriseModal").classList.add("hidden");
}

function claimSurprise(event) {
    const pos = getCoords(event);
    const symbols = (currentUser && currentUser.particles) ? currentUser.particles : ["❤️", "✨", "👑", "🔥", "🎉"];
    burstParticles(pos.x, pos.y, symbols);
    const toastMsg = (currentUser && currentUser.promiseToast) ? currentUser.promiseToast : "✨ Lifetime Bond Sealed with Raja! ❤️";
    showToast(toastMsg);
    setTimeout(closeSurpriseModal, 1500);
}

// ==========================================
// 5. LEAVE A NOTE MODAL & STORAGE
// ==========================================
function openNoteModal() {
    document.getElementById("userNoteText").value = "";
    document.getElementById("noteStatus").innerText = "";
    document.getElementById("noteModal").classList.remove("hidden");
}

function closeNoteModal() {
    document.getElementById("noteModal").classList.add("hidden");
}

function handleSendNote(event) {
    event.preventDefault();
    const noteText = document.getElementById("userNoteText").value.trim();
    if (!noteText) return;

    const sender = currentUser ? currentUser.name : "Anonymous";
    const timestamp = new Date().toLocaleString();

    // Store in localStorage
    const savedNotes = JSON.parse(localStorage.getItem("notes_for_raja") || "[]");
    savedNotes.push({ sender, text: noteText, timestamp });
    localStorage.setItem("notes_for_raja", JSON.stringify(savedNotes));

    const statusEl = document.getElementById("noteStatus");
    statusEl.innerText = "✨ Note saved & sent to Raja! ❤️";

    showToast("💌 Your note has been delivered to Raja!");
    burstParticles(window.innerWidth / 2, window.innerHeight / 2, ["💌", "❤️", "✨"]);

    setTimeout(() => {
        closeNoteModal();
    }, 1500);
}

// ==========================================
// 6. TOAST NOTIFICATION
// ==========================================
let toastTimeout = null;
function showToast(msg) {
    const toast = document.getElementById("toastNotification");
    if (!toast) return;

    toast.innerText = msg;
    toast.classList.add("show");

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}

// ==========================================
// 7. LOGOUT & AMBIENT HEARTS
// ==========================================
function handleLogout() {
    currentUser = null;
    currentMessageIndex = 0;
    if (typewriterTimeout) clearTimeout(typewriterTimeout);

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("loginError").innerText = "";

    document.getElementById("messageCard").classList.add("hidden");
    const rajaCard = document.getElementById("rajaCard");
    if (rajaCard) rajaCard.classList.add("hidden");
    document.getElementById("loginCard").classList.remove("hidden");

    setTimeout(() => {
        const userEl = document.getElementById("username");
        if (userEl) userEl.focus();
    }, 100);
}

function createFloatingHearts() {
    const container = document.getElementById("heartsContainer");
    if (!container) return;

    const heartSymbols = ["❤️", "💖", "🌸", "✨", "💕", "🥰"];

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 95 + "vw";
        heart.style.animationDuration = (Math.random() * 4 + 7) + "s";
        heart.style.fontSize = (Math.random() * 14 + 16) + "px";
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 11000);
    }, 900);
}

// Start background animations & auto-focus
window.addEventListener("DOMContentLoaded", () => {
    createFloatingHearts();
    setupMessageBoxScrollListener();
    const userEl = document.getElementById("username");
    if (userEl) userEl.focus();
});
