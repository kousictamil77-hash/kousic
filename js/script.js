/**
 * AOT Chronicles - Version 3.0 Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- DATA OBJECTS ---
    const db = {
        characters: [
            { id: 'c1', name: 'Eren Yeager', role: 'Attack Titan', affiliation: 'Survey Corps', cat: 'survey corps', img: 'images/eren.jpg', shortDesc: 'Driven by an intense hatred for Titans after the fall of Shiganshina.', bio: 'From a hopeful boy seeking freedom beyond the walls to the ultimate orchestrator of the Rumbling. Eren Yeager\'s journey is defined by his unwavering, devastating pursuit of freedom at any cost.', characteristics: ['Indomitable will', 'Possesses three Titan powers', 'Extremely volatile'], relationships: ['Mikasa Ackerman (Adoptive Sister)', 'Armin Arlert (Best Friend)', 'Zeke Yeager (Half-Brother)'] },
            { id: 'c2', name: 'Mikasa Ackerman', role: 'Soldier', affiliation: 'Survey Corps', cat: 'survey corps', img: 'images/mikasa.jpg', shortDesc: 'An exceptionally talented soldier and Eren\'s fiercely loyal protector.', bio: 'Rescued by Eren as a child, she devoted her life to protecting him until she had to make the ultimate choice. As an Ackerman, she possesses awakened combat instincts.', characteristics: ['Unparalleled ODM gear mastery', 'Stoic demeanor', 'Deep devotion to Eren'], relationships: ['Eren Yeager (Adoptive Brother)', 'Armin Arlert (Childhood Friend)', 'Levi Ackerman (Relative)'] },
            { id: 'c3', name: 'Armin Arlert', role: 'Colossal Titan', affiliation: 'Survey Corps', cat: 'survey corps', img: 'images/armin.jpg', shortDesc: 'A brilliant tactical mind who saves the Survey Corps countless times.', bio: 'Overcame his physical weaknesses to become the 15th Commander of the Survey Corps and a hero of humanity. His curiosity about the outside world sparked Eren\'s desire for freedom.', characteristics: ['Genius-level tactical intellect', 'Deeply compassionate', 'Skilled negotiator'], relationships: ['Eren Yeager (Best Friend)', 'Mikasa Ackerman (Childhood Friend)', 'Erwin Smith (Mentor figure)'] },
            { id: 'c4', name: 'Levi Ackerman', role: 'Captain', affiliation: 'Survey Corps', cat: 'survey corps', img: 'images/levi.jpg', shortDesc: 'Humanity\'s strongest soldier, leading with cold efficiency.', bio: 'Raised in the underground, he joined the Survey Corps and became instrumental in humanity\'s survival. Known as a "one-man brigade," his combat skill is unmatched.', characteristics: ['Supreme combat skill', 'Obsessive cleanliness', 'Abrasive but caring'], relationships: ['Erwin Smith (Commander/Friend)', 'Hange Zoë (Comrade)', 'Zeke Yeager (Arch-enemy)'] },
            { id: 'c5', name: 'Erwin Smith', role: '13th Commander', affiliation: 'Survey Corps', cat: 'survey corps', img: 'images/erwin.jpg', shortDesc: 'The brilliant and resolute Commander, willing to sacrifice everything.', bio: 'Led countless expeditions and the charge at Shiganshina, dying just before discovering the truth of the world. A charismatic visionary who carried the guilt of his fallen soldiers.', characteristics: ['Charismatic leadership', 'Strategic mastermind', 'Driven by his father\'s theory'], relationships: ['Levi Ackerman (Subordinate/Friend)', 'Hange Zoë (Successor)', 'Nile Dok (Former Friend)'] },
            { id: 'c6', name: 'Hange Zoë', role: '14th Commander', affiliation: 'Survey Corps', cat: 'survey corps', img: 'images/hange.jpg', shortDesc: 'Obsessively curious researcher and brilliant tactician.', bio: 'Transitioned from an eccentric researcher to a burdened Commander, making the ultimate sacrifice to buy time for the alliance. Pioneered the understanding of Titan biology.', characteristics: ['Eccentric enthusiasm', 'Scientific genius', 'Deep underlying pragmatism'], relationships: ['Levi Ackerman (Comrade)', 'Erwin Smith (Predecessor)', 'Moblit Berner (Assistant)'] },
            { id: 'c7', name: 'Jean Kirstein', role: 'Commanding Officer', affiliation: 'Survey Corps', cat: 'survey corps', img: 'images/jean.jpg', shortDesc: 'A blunt, pragmatic soldier who matures into a capable leader.', bio: 'Initially wanting a safe life in the Interior Police, Marco\'s death pushed him to the frontlines where he became a core pillar and moral compass of the Scouts.', characteristics: ['Natural leadership skills', 'Blunt honesty', 'Highly capable with ODM gear'], relationships: ['Marco Bodt (Best Friend)', 'Eren Yeager (Rival)', 'Armin Arlert (Comrade)'] },
            { id: 'c8', name: 'Connie Springer', role: 'Soldier', affiliation: 'Survey Corps', cat: 'survey corps', img: 'images/connie.jpg', shortDesc: 'An agile, optimistic soldier forced to face grim realities.', bio: 'Joined to make his family proud, only to discover his entire village transformed into Titans. Despite immense tragedy, he remained a vital part of the Survey Corps.', characteristics: ['Exceptional agility', 'Loyal to a fault', 'Struggles with betrayal'], relationships: ['Sasha Blouse (Best Friend)', 'Jean Kirstein (Comrade)', 'Zeke Yeager (Source of hatred)'] },
            { id: 'c9', name: 'Sasha Blouse', role: 'Sniper', affiliation: 'Survey Corps', cat: 'survey corps', img: 'images/sasha.jpg', shortDesc: 'A skilled marksman with incredible instincts and an endless appetite.', bio: 'A former hunter who became the Survey Corps\' most reliable sniper. Her cheerful demeanor and love for food brought much-needed warmth to the squad.', characteristics: ['Incredible hearing and instincts', 'Master sharpshooter', 'Unrelenting appetite'], relationships: ['Connie Springer (Best Friend)', 'Jean Kirstein (Comrade)', 'Niccolo (Close Friend)'] },
            { id: 'c10', name: 'Reiner Braun', role: 'Armored Titan', affiliation: 'Warrior Unit', cat: 'warrior unit', img: 'images/reiner.jpg', shortDesc: 'A complex warrior torn between his duty and his friends on Paradis.', bio: 'Infiltrated the walls to capture the Founding Titan, but the bonds he formed created a fractured psyche and a tragic path characterized by severe guilt and trauma.', characteristics: ['High durability in Titan form', 'Split personality issues', 'Fiercely protective of Gabi/Falco'], relationships: ['Bertholdt Hoover (Best Friend)', 'Annie Leonhart (Comrade)', 'Eren Yeager (Parallel/Enemy)'] },
            { id: 'c11', name: 'Annie Leonhart', role: 'Female Titan', affiliation: 'Warrior Unit', cat: 'warrior unit', img: 'images/annie.jpg', shortDesc: 'A cynical, highly skilled fighter who operates as the Female Titan.', bio: 'Infiltrated the Military Police to capture Eren. Her cynical exterior hid a desperate desire to simply return home to her adoptive father.', characteristics: ['Master of hand-to-hand combat', 'Titan hardening abilities', 'Pragmatic and aloof'], relationships: ['Armin Arlert (Complex bond)', 'Reiner Braun (Comrade)', 'Eren Yeager (Trainee/Target)'] },
            { id: 'c12', name: 'Zeke Yeager', role: 'Beast Titan', affiliation: 'Warrior Unit', cat: 'warrior unit', img: 'images/zeke.jpg', shortDesc: 'The ruthless Warchief with royal blood and a hidden agenda.', bio: 'Eren\'s half-brother who possesses Royal Blood. He orchestrated devastating attacks on Paradis while secretly plotting an Eldian euthanasia plan.', characteristics: ['Royal blood capabilities', 'Devastating pitching accuracy', 'Coldly manipulative'], relationships: ['Eren Yeager (Half-Brother)', 'Levi Ackerman (Arch-enemy)', 'Grisha Yeager (Father)'] },
            { id: 'c13', name: 'Historia Reiss', role: 'Queen of the Walls', affiliation: 'Royalty', cat: 'royalty', img: 'images/historia.jpg', shortDesc: 'The true heir to the royal throne who chose to live for herself.', bio: 'Raised under the false name Krista Lenz. She rejected her father\'s demand to inherit the Founding Titan, instead taking the throne to lead Paradis Island into a new era.', characteristics: ['Royal bloodline', 'Strong-willed', 'Deep empathy for the marginalized'], relationships: ['Ymir (Deep bond)', 'Eren Yeager (Confidant)', 'Frieda Reiss (Half-Sister)'] },
            { id: 'c14', name: 'Ymir', role: 'Jaw Titan', affiliation: 'Survey Corps', cat: 'other', img: 'images/ymir.jpg', shortDesc: 'A cynical survivor who lived solely to protect Historia.', bio: 'Wandered as a pure Titan for 60 years before eating Marcel Galliard. She joined the military solely to find and protect Historia Reiss.', characteristics: ['Fiercely independent', 'Highly perceptive', 'Selfless when it counts'], relationships: ['Historia Reiss (Deep bond)', 'Reiner Braun (Comrade/Captor)', 'Bertholdt Hoover (Comrade/Captor)'] },
            { id: 'c15', name: 'Gabi Braun', role: 'Warrior Candidate', affiliation: 'Warrior Unit', cat: 'warrior unit', img: 'images/gabi.jpg', shortDesc: 'A zealous Marleyan warrior candidate who undergoes a massive perspective shift.', bio: 'Brainwashed to hate the "Island Devils," she killed Sasha Blouse during the Raid on Liberio. Her time stranded on Paradis forced her to confront her own prejudice.', characteristics: ['Exceptional marksmanship', 'Zealous determination', 'Courageous to a fault'], relationships: ['Falco Grice (Close Friend)', 'Reiner Braun (Cousin)', 'Sasha Blouse (Victim/Catalyst)'] },
            { id: 'c16', name: 'Falco Grice', role: 'Jaw Titan', affiliation: 'Warrior Unit', cat: 'warrior unit', img: 'images/falco.jpg', shortDesc: 'A compassionate warrior candidate desperate to protect Gabi.', bio: 'One of the few Eldians in Marley to see beyond the propaganda. His desire to protect Gabi led him to the frontlines and eventually to inheriting the Jaw Titan.', characteristics: ['Deeply empathetic', 'Possesses Beast Titan traits (flight)', 'Protective nature'], relationships: ['Gabi Braun (Love Interest)', 'Colt Grice (Brother)', 'Eren Yeager (Deceiver)'] }
        ],
        titans: [
            { id: 1, name: 'Attack Titan', height: '15 m', category: 'Combat', abilities: ['Exceptional combat ability', 'Inherited memories', 'High physical strength'], desc: 'A Titan known for its combat abilities and connection to the pursuit of freedom. It always moves forward.', img: 'images/attack-titan.jpg', rawHeight: 15 },
            { id: 2, name: 'Founding Titan', height: '13 m', category: 'Power', abilities: ['Titan Coordination', 'Memory Manipulation', 'Anatomical alteration'], desc: 'The progenitor of all Titans, capable of controlling pure Titans and altering Eldian biology.', img: 'images/founding-titan.jpg', rawHeight: 13 },
            { id: 3, name: 'Colossal Titan', height: '60 m', category: 'Power', abilities: ['Explosive Transformation', 'Steam Emission', 'Immense size'], desc: 'The God of Destruction. Its massive size and steam emissions make it a terrifying siege weapon.', img: 'images/colossal-titan.jpg', rawHeight: 60 },
            { id: 4, name: 'Armored Titan', height: '15 m', category: 'Defense', abilities: ['Full Body Hardening', 'Ramming', 'High durability'], desc: 'Covered in hardened, bone-like plates, it acts as a nearly impenetrable shield on the battlefield.', img: 'images/armored-titan.jpg', rawHeight: 15 },
            { id: 5, name: 'Female Titan', height: '14 m', category: 'Combat', abilities: ['Selective Hardening', 'High Agility', 'Titan attraction scream'], desc: 'Highly versatile with incredible endurance and mobility. Can attract pure Titans with a scream.', img: 'images/female-titan.jpg', rawHeight: 14 },
            { id: 6, name: 'Beast Titan', height: '17 m', category: 'Intelligence', abilities: ['Devastating Pitching', 'Titan Control', 'Speech'], desc: 'An animalistic Titan renowned for its terrifyingly accurate throwing abilities and command over pure titans.', img: 'images/beast-titan.jpg', rawHeight: 17 },
            { id: 7, name: 'Jaw Titan', height: '5 m', category: 'Mobility', abilities: ['Crushing Jaw', 'Extreme Agility', 'Climbing'], desc: 'The smallest but fastest Titan, possessing a hardened jaw that can bite through almost anything.', img: 'images/jaw-titan.jpg', rawHeight: 5 },
            { id: 8, name: 'Cart Titan', height: '4 m', category: 'Mobility', abilities: ['Extreme Endurance', 'Quadrupedal Mobility', 'Speech'], desc: 'Possesses incredible endurance, allowing the user to stay transformed for months and carry heavy artillery.', img: 'images/cart-titan.jpg', rawHeight: 4 },
            { id: 9, name: 'War Hammer Titan', height: '15 m', category: 'Defense', abilities: ['Structural Hardening', 'Remote Operation', 'Weapon generation'], desc: 'Can generate hardened structures and weapons from its own flesh, operated remotely via a flesh cable.', img: 'images/war-hammer-titan.jpg', rawHeight: 15 }
        ],
        story: [
            { id: 's1', title: 'The Age of Ymir', arc: 'Ancient History', season: 'season-2', location: 'Unknown', isSpoiler: false, img: 'images/ymir-founder.jpg', desc: 'The origin of the Titan power and the beginning of the major historical era.', full: 'Ymir Fritz came into contact with a mysterious anomaly, gaining the Power of the Titans. She used this power to cultivate lands, build bridges, and lay the foundation for the Eldian Empire.' },
            { id: 's2', title: 'The Eldian Empire', arc: 'Ancient History', season: 'season-3', location: 'Global', isSpoiler: false, img: 'images/eldian-empire.jpg', desc: 'The expansion of Eldian power and the Titan legacy.', full: 'For nearly two thousand years, the Eldian Empire used the Nine Titans to conquer and subjugate other nations, ruling the world with absolute power and passing the Titans down through families.' },
            { id: 's3', title: 'The Great Titan War', arc: 'Over 100 Years Ago', season: 'season-3', location: 'Continental Mainland', isSpoiler: false, img: 'images/titan-war.jpg', desc: 'The historical conflict that changed the balance of power.', full: 'Infighting among the Eldian noble families holding the Nine Titans led to a massive civil war. King Karl Fritz, weary of the bloodshed, conspired with the Tybur family to end the empire.' },
            { id: 's4', title: 'The Rise of Marley', arc: 'Over 100 Years Ago', season: 'season-4', location: 'Marley', isSpoiler: false, img: 'images/marley-rise.jpg', desc: 'Marley\'s growing influence and the changing political landscape.', full: 'Exploiting the Great Titan War, the nation of Marley seized control of seven of the Nine Titans. They became the dominant global superpower, subjugating the remaining Eldians on the mainland.' },
            { id: 's5', title: 'The Founding of the Walls', arc: 'Year 743', season: 'season-1', location: 'Paradis Island', isSpoiler: false, img: 'images/wall-founding.jpg', desc: 'The creation of the Walls and the isolation of Paradis.', full: 'King Karl Fritz retreated to Paradis Island with a portion of his people. He used millions of Colossal Titans to build Walls Maria, Rose, and Sheena, threatening the world with the Rumbling if disturbed.' },
            { id: 's6', title: 'The Fall of Shiganshina', arc: 'Year 845', season: 'season-1', location: 'Shiganshina District', isSpoiler: false, img: 'images/shiganshina-fall.jpg', desc: 'The beginning of the main story.', full: 'A century of peace was shattered when the Colossal and Armored Titans breached Wall Maria. Countless pure Titans flooded in, slaughtering a fifth of humanity and displacing millions.' },
            { id: 's7', title: 'The Struggle for Survival', arc: 'Year 850', season: 'season-2', location: 'Wall Rose', isSpoiler: false, img: 'images/survival.jpg', desc: 'Humanity\'s struggle against the Titans.', full: 'Following the Battle of Trost and the discovery of Eren\'s Titan shifting abilities, humanity fought desperately against internal corruption, Female Titan infiltrators, and the mysterious Beast Titan.' },
            { id: 's8', title: 'The Truth Beyond the Walls', arc: 'Year 850', season: 'season-3', location: 'Shiganshina Basement', isSpoiler: false, img: 'images/basement.jpg', desc: 'The characters discover the outside world.', full: 'After a devastating battle to retake Wall Maria, the Survey Corps finally reaches Grisha Yeager\'s basement. They learn humanity is not extinct, and their true enemy is the rest of the world.' },
            { id: 's9', title: 'The World Beyond the Sea', arc: 'Year 854', season: 'season-4', location: 'Liberio', isSpoiler: true, img: 'images/liberio-raid.jpg', desc: 'The wider world and the political conflict.', full: 'Eren infiltrates Marley and launches a devastating surprise attack on Liberio during a global declaration of war. The Survey Corps secures a victory but sparks a global military retaliation.' },
            { id: 's10', title: 'The Final Conflict', arc: 'Year 854', season: 'season-4', location: 'Global', isSpoiler: true, img: 'images/rumbling.jpg', desc: 'The final stage of the story.', full: 'Eren activates the Rumbling, unleashing the Wall Titans to trample the world. An alliance of former enemies unites in a desperate bid to stop him and save the remainder of humanity.' }
        ],
        gallery: [
            { id: 'g1', img: 'https://images.unsplash.com/photo-1542838686-37ed7a9b1399?q=80&w=1000', title: 'The Walls', cat: 'world', class: '' },
            { id: 'g2', img: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?q=80&w=1000', title: 'Survey Corps', cat: 'characters', class: '' },
            { id: 'g3', img: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1000', title: 'Transformation', cat: 'titans', class: 'tall' },
            { id: 'g4', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000', title: 'Forest of Giants', cat: 'world', class: '' },
            { id: 'g5', img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=1000', title: 'Battle Formation', cat: 'battles', class: '' },
            { id: 'g6', img: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070', title: 'Beyond the Walls', cat: 'world', class: 'wide' },
            { id: 'g7', img: 'https://images.unsplash.com/photo-1533552755457-5b4105299478?q=80&w=1000', title: 'The Path Forward', cat: 'characters', class: '' },
            { id: 'g8', img: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1000', title: 'Urban Combat', cat: 'battles', class: 'tall' },
            { id: 'g9', img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=1000', title: 'Breach', cat: 'titans', class: '' }
        ]
    };

    // --- UTILS & ERROR HANDLING ---
    
    // Global image fallback
    document.addEventListener('error', (e) => {
        if (e.target.tagName.toLowerCase() === 'img') {
            const width = e.target.getAttribute('width') || e.target.parentElement.clientWidth || 300;
            const height = e.target.getAttribute('height') || e.target.parentElement.clientHeight || 200;
            e.target.src = `https://via.placeholder.com/${width}x${height}/151518/8b1e1e?text=IMAGE+UNAVAILABLE`;
            e.target.alt = "Image unavailable fallback";
        }
    }, true);

    // --- ACHIEVEMENTS SYSTEM ---
    const unlockAchievement = (id, title, desc) => {
        let unlocked = JSON.parse(localStorage.getItem('aot_achievements') || '{}');
        if (!unlocked[id]) {
            unlocked[id] = true;
            localStorage.setItem('aot_achievements', JSON.stringify(unlocked));
            
            // Show toast
            const toast = document.createElement('div');
            toast.className = 'achievement-toast';
            toast.innerHTML = `
                <span class="achievement-title">ACHIEVEMENT UNLOCKED: ${title}</span>
                <span class="achievement-desc">${desc}</span>
            `;
            document.body.appendChild(toast);
            
            // Trigger animation
            setTimeout(() => toast.classList.add('show'), 100);
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 600);
            }, 4000);
        }
    };

    // Check specific achievements
    const checkAchievements = () => {
        if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
            unlockAchievement('first', 'FIRST EXPEDITION', 'Visited the Home page.');
        }
        
        let visits = JSON.parse(localStorage.getItem('aot_visits') || '[]');
        if (!visits.includes(window.location.pathname)) {
            visits.push(window.location.pathname);
            localStorage.setItem('aot_visits', JSON.stringify(visits));
        }
        
        if (visits.length >= 4) {
            unlockAchievement('scout', 'SCOUT', 'Visited all main pages.');
        }
    };
    checkAchievements();

    const trackStat = (key, threshold, title, desc) => {
        let count = parseInt(localStorage.getItem(`aot_stat_${key}`) || '0') + 1;
        localStorage.setItem(`aot_stat_${key}`, count);
        if (count === threshold) unlockAchievement(key, title, desc);
    };

    // --- DOM GENERATION ---

    const renderCharacters = () => {
        const grid = document.getElementById('charGrid');
        if (!grid) return;
        grid.innerHTML = db.characters.map(c => `
            <article class="card reveal" data-category="${c.cat}">
                <div class="card-img">
                    <img src="${c.img}" loading="lazy" alt="${c.name}">
                </div>
                <div class="card-content">
                    <h2 class="card-title">${c.name}</h2>
                    <p class="card-role">${c.role}</p>
                    <p class="card-desc">${c.desc}</p>
                    <button class="btn btn-outline open-modal-btn" data-type="char" data-id="${c.id}">VIEW PROFILE</button>
                </div>
            </article>
        `).join('');
    };

    const renderTitans = (dataToRender = db.titans) => {
        const grid = document.getElementById('titanGrid');
        if (!grid) return;
        
        if (dataToRender.length === 0) {
            grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 4rem; color:var(--muted); font-family:var(--font-heading); font-size:1.5rem; letter-spacing:3px;">NO TITANS FOUND</div>';
            return;
        }

        grid.innerHTML = dataToRender.map(t => `
            <article class="card reveal" data-category="${t.category}">
                <div class="card-img" style="position:relative;">
                    <img src="${t.img}" loading="lazy" alt="${t.name}">
                    <span class="titan-num">0${t.id}</span>
                </div>
                <div class="card-content">
                    <h2 class="card-title">${t.name}</h2>
                    <p class="card-role">Height: ${t.height}</p>
                    <p class="card-desc">${t.desc}</p>
                    <button class="btn btn-outline open-modal-btn" data-type="titan" data-id="${t.id}">VIEW DETAILS</button>
                </div>
            </article>
        `).join('');
    };

    const renderStory = () => {
        const timeline = document.getElementById('storyTimeline');
        if (!timeline) return;
        timeline.innerHTML = db.story.map((s, i) => `
            <div class="timeline-item ${i % 2 === 0 ? 'left reveal-left' : 'right reveal-right'}">
                <div class="timeline-content">
                    <div style="display:flex; justify-content:space-between; margin-bottom:1rem; border-bottom:1px solid var(--border); padding-bottom:0.5rem;">
                        <span style="font-family:var(--font-heading); color:var(--accent); font-size:2rem; line-height:1;">0${i+1}</span>
                        <span class="timeline-arc">${s.arc}</span>
                    </div>
                    <h3>${s.title}</h3>
                    <p>${s.desc}</p>
                    <button class="btn btn-outline open-modal-btn" data-type="story" data-id="${s.id}">READ MORE</button>
                </div>
            </div>
        `).join('');
    };

    const renderGallery = () => {
        const grid = document.getElementById('galleryGrid');
        if (!grid) return;
        grid.innerHTML = db.gallery.map(g => `
            <div class="gallery-item ${g.class} reveal" tabindex="0" data-category="${g.cat}">
                <img src="${g.img}" loading="lazy" alt="${g.title}">
                <div class="gallery-overlay"><span class="gallery-caption">${g.title}</span></div>
            </div>
        `).join('');
    };

    // Run generations
    renderCharacters();
    renderTitans();
    renderStory();
    renderGallery();


    // --- GLOBAL UI SYSTEMS ---

    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    const cursorRing = document.querySelector('.custom-cursor-ring');
    if (cursor && cursorRing && window.innerWidth > 1024) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            setTimeout(() => { cursorRing.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; }, 50);
        });
        const interactables = document.querySelectorAll('a, button, input, .card, .gallery-item');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); cursorRing.classList.add('hover'); });
            el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); cursorRing.classList.remove('hover'); });
        });
    }

    // Navbar, Progress & Scroll Effects
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    const timelineProgress = document.getElementById('timelineProgress');
    const timelineLine = document.querySelector('.timeline-line');

    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (y > 50) navbar?.classList.add('scrolled');
        else navbar?.classList.remove('scrolled');

        if (y > 500) backToTop?.classList.add('visible');
        else backToTop?.classList.remove('visible');

        if (timelineProgress && timelineLine) {
            const rect = timelineLine.getBoundingClientRect();
            const wh = window.innerHeight;
            if (rect.top < wh / 2) {
                let progress = ((wh / 2 - rect.top) / rect.height) * 100;
                timelineProgress.style.height = `${Math.max(0, Math.min(progress, 100))}%`;
            } else {
                timelineProgress.style.height = '0%';
            }
        }
    });

    if (backToTop) backToTop.addEventListener('click', () => window.scrollTo(0, 0));

    // Mobile Nav
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Set Active Nav Link
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.includes(linkPath) && linkPath !== '/') link.classList.add('active');
        else if (currentPath.endsWith('/') && linkPath === 'index.html') link.classList.add('active');
    });

    // Sound System (Graceful)
    const soundBtn = document.getElementById('soundBtn');
    let soundEnabled = localStorage.getItem('aot_sound') === 'true';
    if (soundBtn) {
        soundBtn.innerHTML = soundEnabled ? '🔊' : '🔇';
        soundBtn.addEventListener('click', () => {
            soundEnabled = !soundEnabled;
            localStorage.setItem('aot_sound', soundEnabled);
            soundBtn.innerHTML = soundEnabled ? '🔊' : '🔇';
            // Placeholder: audio.play() / audio.pause() logic goes here
        });
    }

    // Scroll Reveal (IntersectionObserver)
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.classList.contains('progress-bar-fill')) {
                    entry.target.style.width = entry.target.dataset.width;
                }
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    // Stagger grids
    document.querySelectorAll('.card-grid, .gallery-grid, .expedition-grid, footer .nav-links').forEach(grid => {
        Array.from(grid.children).forEach((el, index) => {
            if (el.classList.contains('reveal') || el.classList.contains('reveal-scale') || el.classList.contains('fade-in')) {
                el.style.transitionDelay = `${(index % 6) * 0.1}s`;
            }
        });
    });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .fade-in, .timeline-item, .progress-bar-fill').forEach(el => revealObserver.observe(el));

    // --- GLOBAL SEARCH ---
    const searchBtns = [document.getElementById('searchBtn'), document.getElementById('searchBtnMobile')];
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('globalSearchInput');
    const searchResults = document.getElementById('searchResults');

    if (searchOverlay && searchInput) {
        // Build index
        const index = [
            ...db.characters.map(c => ({ title: c.name, type: 'Character', url: 'characters.html' })),
            ...db.titans.map(t => ({ title: t.name, type: 'Titan', url: 'titans.html' })),
            ...db.story.map(s => ({ title: s.title, type: 'Story Event', url: 'story.html' }))
        ];

        const openSearch = () => {
            searchOverlay.classList.add('active');
            document.body.classList.add('no-scroll');
            setTimeout(() => searchInput.focus(), 100);
        };
        const closeSearch = () => {
            searchOverlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
            searchInput.value = ''; searchResults.innerHTML = '';
        };

        searchBtns.forEach(btn => btn?.addEventListener('click', openSearch));
        searchClose?.addEventListener('click', closeSearch);

        searchInput.addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase();
            searchResults.innerHTML = '';
            if (q.length < 2) return;
            const res = index.filter(i => i.title.toLowerCase().includes(q));
            res.forEach(r => {
                searchResults.innerHTML += `<a href="${r.url}" class="search-result-item"><span class="search-result-title">${r.title}</span><span class="search-result-type">${r.type}</span></a>`;
            });
            if(res.length===0) searchResults.innerHTML = '<div style="color:var(--muted); text-align:center;">No records found.</div>';
        });
    }

    // --- MODAL SYSTEM ---
    const modalOverlay = document.getElementById('dynamicModal');
    if (modalOverlay) {
        const closeBtn = modalOverlay.querySelector('.modal-close');
        
        const generateAbilityBars = (stats) => {
            return Object.entries(stats).map(([k, v]) => {
                const title = k === 'p' ? 'POWER' : k === 's' ? 'SPEED' : k === 'd' ? 'DEFENSE' : 'INTELLIGENCE';
                return `<div class="ability-item"><div class="ability-header"><span>${title}</span><span>${v}/100</span></div>
                        <div class="ability-bar-bg"><div class="ability-bar-fill" style="width:${v}%"></div></div></div>`;
            }).join('');
        };

        const openDataModal = (type, id) => {
            const content = modalOverlay.querySelector('.modal-content');
            let data, html;
            
            if (type === 'char' || type === 'character-v2') {
                data = db.characters.find(c => c.id === id);
                trackStat('char', 3, 'RECRUITER', 'Viewed 3 character profiles.');
                
                if (type === 'character-v2') {
                    // New V2 Cinematic Layout
                    modalOverlay.classList.add('modal-v2');
                    
                    let charsHtml = data.characteristics ? data.characteristics.map(c => `<li>${c}</li>`).join('') : '';
                    let relsHtml = data.relationships ? data.relationships.map(r => `<li>${r}</li>`).join('') : '';
                    
                    html = `
                        <div class="modal-img-v2">
                            <img src="${data.img}" alt="${data.name}">
                        </div>
                        <div class="modal-body-v2">
                            <div class="modal-v2-header">
                                <span class="archive-label">PERSONNEL RECORD</span>
                                <h2 class="modal-title" style="font-size: clamp(2rem, 5vw, 4rem); margin: 0.5rem 0;">${data.name}</h2>
                                <p style="font-family:monospace; color:var(--military-green-light); font-size:1.2rem; margin-bottom: 2rem;">${data.role.toUpperCase()} | ${data.affiliation.toUpperCase()}</p>
                            </div>
                            
                            <div class="modal-v2-content">
                                <div class="modal-section-v2">
                                    <h4 class="archive-label" style="border:none; padding:0; margin-bottom:1rem; color:var(--accent);">BIOGRAPHY</h4>
                                    <p style="font-size:1.1rem; line-height:1.8; color:var(--text);">${data.bio}</p>
                                </div>
                                
                                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:2rem; margin-top:2rem;">
                                    <div class="modal-section-v2">
                                        <h4 class="archive-label" style="border:none; padding:0; margin-bottom:1rem; color:var(--accent);">NOTABLE CHARACTERISTICS</h4>
                                        <ul class="modal-list-v2">${charsHtml}</ul>
                                    </div>
                                    <div class="modal-section-v2">
                                        <h4 class="archive-label" style="border:none; padding:0; margin-bottom:1rem; color:var(--accent);">KNOWN AFFILIATES</h4>
                                        <ul class="modal-list-v2">${relsHtml}</ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="modal-close btn btn-outline" style="position:absolute; top:2rem; right:2rem; padding:0.5rem 2rem; border-color:var(--muted); color:var(--muted);">CLOSE ARCHIVE</button>
                    `;
                } else {
                    // Old V1 Layout
                    html = `
                        <div class="modal-img"><img src="${data.img}" alt="${data.name}"></div>
                        <div class="modal-body">
                            <h2 class="modal-title">${data.name}</h2>
                            <p class="modal-role">${data.role}</p>
                            <div class="modal-section"><h4>STORY SUMMARY</h4><p>${data.story}</p></div>
                            <div class="modal-section"><h4>PERSONALITY</h4><p>${data.personality}</p></div>
                            <div class="modal-section"><h4>ABILITIES</h4><p>${data.abilities}</p></div>
                        </div>`;
                } else if (type === 'titan') {
                data = db.titans.find(t => t.id == id);
                trackStat('titan', 3, 'TITAN HUNTER', 'Viewed 3 Titan profiles.');
                
                const abilitiesHtml = data.abilities.map(a => `<li>${a}</li>`).join('');
                
                html = `
                    <div class="modal-img"><img src="${data.img}" alt="${data.name}"></div>
                    <div class="modal-body">
                        <span class="timeline-arc">0${data.id}</span>
                        <h2 class="modal-title">${data.name}</h2>
                        <div class="modal-stats" style="display:flex; gap:2rem; margin-bottom:2rem;">
                            <div><span style="font-family:var(--font-heading); color:var(--military-green-light); font-size:0.8rem;">HEIGHT</span><br><span style="font-family:monospace; font-size:1.2rem;">${data.height}</span></div>
                            <div><span style="font-family:var(--font-heading); color:var(--military-green-light); font-size:0.8rem;">CATEGORY</span><br><span style="font-family:monospace; font-size:1.2rem;">${data.category.toUpperCase()}</span></div>
                        </div>
                        <div class="modal-section"><h4>DESCRIPTION</h4><p>${data.desc}</p></div>
                        <div class="modal-section"><h4>ABILITIES</h4><ul class="modal-abilities">${abilitiesHtml}</ul></div>
                    </div>`;
            } else if (type === 'story') {
                data = db.story.find(s => s.id === id);
                trackStat('story', 5, 'HISTORIAN', 'Viewed 5 story events.');
                html = `
                    <div class="modal-img"><img src="${data.img}" alt="${data.title}"></div>
                    <div class="modal-body" style="padding: 3rem 4rem;">
                        <span class="timeline-arc">${data.arc}</span>
                        <h2 class="modal-title" style="margin-bottom:2rem;">${data.title}</h2>
                        <p style="font-size:1.1rem; color:var(--text); line-height:1.8;">${data.full}</p>
                    </div>`;
            } else if (type === 'location') {
                data = db.locations.find(l => l.id === id);
                html = `
                    <div class="modal-img"><img src="${data.img}" alt="${data.name}"></div>
                    <div class="modal-body" style="padding: 3rem 4rem;">
                        <span class="archive-label">FIELD RECORD</span>
                        <h2 class="modal-title" style="margin-bottom:1rem; text-transform:uppercase;">${data.name}</h2>
                        <p style="font-family:monospace; color:var(--military-green-light); margin-bottom: 2rem;">REGION: ${data.region}</p>
                        <p style="font-size:1.1rem; color:var(--text); line-height:1.8;">${data.desc}</p>
                    </div>`;
            }
            
            content.innerHTML = `<button class="modal-close">&times;</button>` + html;
            
            // Reattach close event
            content.querySelector('.modal-close').addEventListener('click', closeDynamicModal);
            
            modalOverlay.classList.add('active');
            document.body.classList.add('no-scroll');
        };

        const closeDynamicModal = () => {
            modalOverlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        };

        // Delegate listener since cards are dynamically rendered
        document.body.addEventListener('click', (e) => {
            if (e.target.classList.contains('open-modal-btn')) {
                openDataModal(e.target.dataset.type, e.target.dataset.id);
            }
            if (e.target === modalOverlay) closeDynamicModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeDynamicModal();
        });
    }

    // --- LOCAL FILTERING (Chars/Gallery) ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const parent = btn.closest('.controls');
                parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                const isGallery = btn.classList.contains('gallery-filter-btn');
                const items = isGallery ? document.querySelectorAll('.gallery-item') : document.querySelectorAll('.card');
                
                items.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = isGallery ? 'block' : 'flex';
                        // Re-trigger animation
                        item.style.animation = 'none';
                        item.offsetHeight; 
                        item.style.animation = null;
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Local Search Input
    const localSearch = document.getElementById('localSearchInput');
    if (localSearch) {
        localSearch.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
            document.querySelectorAll('.card').forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const cat = card.dataset.category || '';
                const matchSearch = title.includes(term);
                const matchFilter = activeFilter === 'all' || cat === activeFilter;
                card.style.display = (matchSearch && matchFilter) ? 'flex' : 'none';
            });
        });
    }


    // --- GALLERY LIGHTBOX ---
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        let currentIndex = 0;
        let visibleItems = [];

        const openLightbox = (e) => {
            const target = e.target.closest('.gallery-item');
            if(!target) return;
            
            trackStat('gallery', 5, 'ARCHIVIST', 'Opened 5 gallery images.');
            
            const allItems = Array.from(document.querySelectorAll('.gallery-item'));
            visibleItems = allItems.filter(item => item.style.display !== 'none');
            currentIndex = visibleItems.indexOf(target);
            
            showImage();
            lightbox.classList.add('active');
            document.body.classList.add('no-scroll');
        };

        const showImage = () => {
            const imgUrl = visibleItems[currentIndex].querySelector('img').src;
            const lbImg = lightbox.querySelector('.lightbox-img');
            lbImg.style.opacity = '0';
            setTimeout(() => {
                lbImg.src = imgUrl;
                lbImg.style.opacity = '1';
                document.getElementById('lightboxCounter').textContent = 
                    `${(currentIndex + 1).toString().padStart(2, '0')} / ${visibleItems.length.toString().padStart(2, '0')}`;
            }, 150);
        };

        const closeLightbox = () => { lightbox.classList.remove('active'); document.body.classList.remove('no-scroll'); };
        const showNext = () => { currentIndex = (currentIndex + 1) % visibleItems.length; showImage(); };
        const showPrev = () => { currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length; showImage(); };

        document.getElementById('galleryGrid').addEventListener('click', openLightbox);
        document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        document.querySelector('.lightbox-next').addEventListener('click', showNext);
        document.querySelector('.lightbox-prev').addEventListener('click', showPrev);

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        });
    }

    // --- DIVISION SELECTOR ---
    const divBtns = document.querySelectorAll('.div-btn');
    const divResult = document.getElementById('divisionResult');
    if (divBtns.length > 0 && divResult) {
        const divs = {
            'survey': { title: 'SURVEY CORPS', mission: 'MISSION: EXPLORATION & COMBAT', desc: 'You are brave and seeking freedom. You will face the Titans head-on outside the walls.' },
            'garrison': { title: 'GARRISON', mission: 'MISSION: DEFENSE & ENGINEERING', desc: 'You value order and protection. You will guard the walls and manage civilian safety.' },
            'mp': { title: 'MILITARY POLICE', mission: 'MISSION: INTERNAL ORDER', desc: 'You are elite and pragmatic. You will serve the King within the safety of Wall Sina.' }
        };

    }

    // --- TITAN BATTLE SYSTEM (V4) ---
    const battleArena = document.getElementById('titanBattlePage');
    if (battleArena) {
        
        let playerTitan = null;
        let enemyTitan = null;
        let difficulty = 'normal';
        let playerHP = 100;
        let enemyHP = 100;
        let maxEnemyHP = 100;
        let isDefending = false;
        let score = 0;
        let isPlayerTurn = true;
        let battleActive = false;

        // UI Elements
        const selectionPhase = document.getElementById('selectionPhase');
        const battlePhase = document.getElementById('battlePhase');
        const playerSelectGrid = document.getElementById('playerSelectGrid');
        const enemySelectGrid = document.getElementById('enemySelectGrid');
        const startBattleBtn = document.getElementById('startBattleBtn');
        const diffBtns = document.querySelectorAll('.diff-btn');
        const battleLog = document.getElementById('battleLog');
        const hudScore = document.getElementById('hudScore');
        
        const playerAvatar = document.getElementById('playerAvatar');
        const enemyAvatar = document.getElementById('enemyAvatar');
        const playerName = document.getElementById('playerName');
        const enemyName = document.getElementById('enemyName');
        const playerHpFill = document.getElementById('playerHpFill');
        const enemyHpFill = document.getElementById('enemyHpFill');
        const playerHpLabel = document.getElementById('playerHpLabel');
        const enemyHpLabel = document.getElementById('enemyHpLabel');
        
        const btnAttack = document.getElementById('btnAttack');
        const btnSpecial = document.getElementById('btnSpecial');
        const btnDefend = document.getElementById('btnDefend');
        const btnReset = document.getElementById('btnReset');
        
        const endScreen = document.getElementById('endScreen');
        const endTitle = document.getElementById('endTitle');
        const endDesc = document.getElementById('endDesc');
        const btnEndReset = document.getElementById('btnEndReset');

        // Load High Score
        let highScore = parseInt(localStorage.getItem('aot_highscore') || '0');
        document.getElementById('hudHighScore').textContent = highScore;

        // Render Selection Cards
        const renderSelectionCards = (gridId, isPlayer) => {
            const grid = document.getElementById(gridId);
            if (!grid) return;
            grid.innerHTML = db.titans.map(t => `
                <div class="titan-select-card" data-id="${t.id}" data-player="${isPlayer}">
                    <img src="${t.img}" alt="${t.name}">
                    <h4>${t.name}</h4>
                    <p>PWR: ${t.stats.p} | SPD: ${t.stats.s}</p>
                </div>
            `).join('');
        };

        renderSelectionCards('playerSelectGrid', true);
        renderSelectionCards('enemySelectGrid', false);

        // Selection Logic
        document.querySelectorAll('.titan-select-card').forEach(card => {
            card.addEventListener('click', () => {
                const isPlayer = card.dataset.player === 'true';
                const id = card.dataset.id;
                const parent = isPlayer ? playerSelectGrid : enemySelectGrid;
                
                parent.querySelectorAll('.titan-select-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                
                const selected = db.titans.find(t => t.id === id);
                if (isPlayer) playerTitan = selected;
                else enemyTitan = selected;
                
                if (playerTitan && enemyTitan) startBattleBtn.disabled = false;
            });
        });

        // Difficulty Logic
        diffBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                diffBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                difficulty = btn.dataset.diff;
                document.getElementById('hudDiff').textContent = difficulty.toUpperCase();
            });
        });

        // Logging
        const log = (msg, type = 'system') => {
            const entry = document.createElement('div');
            entry.className = `log-entry ${type}-action`;
            entry.textContent = `> ${msg}`;
            battleLog.appendChild(entry);
            battleLog.scrollTop = battleLog.scrollHeight;
        };

        // Add Damage Popup
        const showDamage = (targetElement, amount) => {
            const popup = document.createElement('div');
            popup.className = 'damage-popup';
            popup.textContent = `-${amount}`;
            targetElement.parentElement.appendChild(popup);
            setTimeout(() => popup.remove(), 1000);
        };

        const updateScore = (points) => {
            score += points;
            if(score < 0) score = 0;
            hudScore.textContent = score;
        };

        const updateHP = () => {
            playerHpFill.style.width = `${Math.max(0, playerHP)}%`;
            enemyHpFill.style.width = `${Math.max(0, (enemyHP / maxEnemyHP) * 100)}%`;
            playerHpLabel.textContent = `${Math.max(0, playerHP)} / 100`;
            enemyHpLabel.textContent = `${Math.max(0, enemyHP)} / ${maxEnemyHP}`;
            
            if (playerHP <= 20) playerHpFill.classList.add('low');
            else playerHpFill.classList.remove('low');
            
            if (enemyHP <= maxEnemyHP * 0.2) enemyHpFill.classList.add('low');
            else enemyHpFill.classList.remove('low');
        };

        const setControlsState = (disabled) => {
            btnAttack.disabled = disabled;
            btnSpecial.disabled = disabled;
            btnDefend.disabled = disabled;
        };

        const checkWinCondition = () => {
            if (playerHP <= 0 || enemyHP <= 0) {
                battleActive = false;
                setControlsState(true);
                setTimeout(() => {
                    endScreen.classList.add('active');
                    endScreen.classList.remove('victory', 'defeat');
                    
                    if (playerHP <= 0) {
                        endScreen.classList.add('defeat');
                        endTitle.textContent = 'DEFEAT';
                        endDesc.textContent = 'THE EXPEDITION HAS FAILED.';
                        log('MISSION FAILED. YOUR TITAN FELL.', 'enemy');
                    } else {
                        endScreen.classList.add('victory');
                        endTitle.textContent = 'VICTORY';
                        endDesc.textContent = 'THE ENEMY TITAN HAS FALLEN.';
                        updateScore(100);
                        log('VICTORY ACHIEVED!', 'player');
                        
                        // Achievements
                        trackStat('battle_wins', 1, 'FIRST BATTLE', 'Won your first Titan battle.');
                        trackStat('titan_slayer', 5, 'TITAN SLAYER', 'Won 5 battles.');
                        if (difficulty === 'hard') trackStat('elite_scout', 1, 'ELITE SCOUT', 'Won a battle on HARD difficulty.');
                        if (playerHP < 20) trackStat('survivor', 1, 'SURVIVOR', 'Won a battle with less than 20 HP remaining.');
                        
                        if (score > highScore) {
                            highScore = score;
                            localStorage.setItem('aot_highscore', highScore);
                            document.getElementById('hudHighScore').textContent = highScore;
                        }
                    }
                }, 1000);
                return true;
            }
            return false;
        };

        const enemyTurn = () => {
            if (!battleActive) return;
            isPlayerTurn = false;
            setControlsState(true);
            
            setTimeout(() => {
                if(!battleActive) return;
                
                let dmg = Math.floor(Math.random() * 11) + 10; // 10 - 20 base
                if (difficulty === 'hard') dmg += 5;
                if (difficulty === 'easy') dmg -= 5;
                
                if (isDefending) {
                    dmg = Math.floor(dmg / 2);
                    log(`ENEMY ATTACKED! YOU DEFENDED, REDUCING DAMAGE TO ${dmg}.`, 'enemy');
                    isDefending = false;
                } else {
                    log(`ENEMY ATTACKED! DEALT ${dmg} DAMAGE.`, 'enemy');
                }
                
                playerHP -= dmg;
                updateHP();
                playerAvatar.classList.add('shake', 'flash');
                showDamage(playerAvatar, dmg);
                setTimeout(() => playerAvatar.classList.remove('shake', 'flash'), 400);
                
                if (!checkWinCondition()) {
                    isPlayerTurn = true;
                    setControlsState(false);
                }
            }, 1000);
        };

        const performPlayerAttack = (isSpecial) => {
            if (!isPlayerTurn || !battleActive) return;
            isDefending = false;
            
            let dmg = isSpecial ? (Math.floor(Math.random() * 16) + 15) : (Math.floor(Math.random() * 11) + 8);
            
            // Modifier based on titan power stats (fictional scaling)
            const pwrMod = playerTitan.stats.p / 100;
            dmg = Math.floor(dmg * pwrMod);
            
            enemyHP -= dmg;
            updateHP();
            updateScore(isSpecial ? 20 : 10);
            
            enemyAvatar.classList.add('shake', 'flash');
            showDamage(enemyAvatar, dmg);
            setTimeout(() => enemyAvatar.classList.remove('shake', 'flash'), 400);
            
            log(`YOU USED ${isSpecial ? 'SPECIAL ' : ''}ATTACK! DEALT ${dmg} DAMAGE.`, 'player');
            
            if (!checkWinCondition()) {
                enemyTurn();
            }
        };

        // Event Listeners
        startBattleBtn.addEventListener('click', () => {
            if (!playerTitan || !enemyTitan) return;
            
            maxEnemyHP = difficulty === 'easy' ? 80 : difficulty === 'hard' ? 130 : 100;
            playerHP = 100;
            enemyHP = maxEnemyHP;
            score = 0;
            isDefending = false;
            isPlayerTurn = true;
            battleActive = true;
            
            playerName.textContent = playerTitan.name;
            enemyName.textContent = enemyTitan.name;
            playerAvatar.querySelector('img').src = playerTitan.img;
            enemyAvatar.querySelector('img').src = enemyTitan.img;
            
            document.getElementById('hudPlayerType').textContent = playerTitan.name.toUpperCase();
            hudScore.textContent = '0';
            
            updateHP();
            setControlsState(false);
            
            selectionPhase.style.display = 'none';
            battlePhase.style.display = 'block';
            
            battleLog.innerHTML = '';
            log('EXPEDITION STARTED. COMMENCING COMBAT.', 'system');
            log(`PLAYER SELECTED: ${playerTitan.name.toUpperCase()}`, 'system');
        });

        btnAttack.addEventListener('click', () => performPlayerAttack(false));
        btnSpecial.addEventListener('click', () => performPlayerAttack(true));
        
        btnDefend.addEventListener('click', () => {
            if (!isPlayerTurn || !battleActive) return;
            isDefending = true;
            updateScore(5);
            log('YOU TOOK A DEFENSIVE STANCE.', 'player');
            enemyTurn();
        });

        const resetBattle = () => {
            battlePhase.style.display = 'none';
            selectionPhase.style.display = 'block';
            endScreen.classList.remove('active');
            
            // Reset selection visually
            playerSelectGrid.querySelectorAll('.titan-select-card').forEach(c => c.classList.remove('selected'));
            enemySelectGrid.querySelectorAll('.titan-select-card').forEach(c => c.classList.remove('selected'));
            playerTitan = null;
            enemyTitan = null;
            startBattleBtn.disabled = true;
        };

        btnReset.addEventListener('click', resetBattle);
        btnEndReset.addEventListener('click', resetBattle);
    }

    // --- TITAN ENCYCLOPEDIA (V5) ---
    const titanGrid = document.getElementById('titanGrid');
    if (titanGrid) {
        const titanSearch = document.getElementById('titanSearchInput');
        const sortSelect = document.getElementById('titanSort');
        const titanFilters = document.querySelectorAll('.titan-filter-btn');
        let currentFilter = 'ALL';
        
        const renderTitanTable = () => {
            const tbody = document.getElementById('titanTableBody');
            if (!tbody) return;
            tbody.innerHTML = db.titans.map(t => `
                <tr>
                    <td><strong>${t.name}</strong></td>
                    <td>${t.height}</td>
                    <td>${t.category.toUpperCase()}</td>
                    <td>${t.abilities[0]}</td>
                </tr>
            `).join('');
        };
        renderTitanTable();

        const applyTitanFilters = () => {
            const searchTerm = titanSearch ? titanSearch.value.toLowerCase() : '';
            const sortVal = sortSelect ? sortSelect.value : 'default';
            
            let filtered = db.titans.filter(t => {
                const matchSearch = t.name.toLowerCase().includes(searchTerm);
                const matchFilter = currentFilter === 'ALL' || t.category.toUpperCase() === currentFilter;
                return matchSearch && matchFilter;
            });

            if (sortVal === 'az') filtered.sort((a, b) => a.name.localeCompare(b.name));
            else if (sortVal === 'za') filtered.sort((a, b) => b.name.localeCompare(a.name));
            else if (sortVal === 'h_low') filtered.sort((a, b) => a.rawHeight - b.rawHeight);
            else if (sortVal === 'h_high') filtered.sort((a, b) => b.rawHeight - a.rawHeight);

            renderTitans(filtered);
        };

        if (titanSearch) titanSearch.addEventListener('input', applyTitanFilters);
        if (sortSelect) sortSelect.addEventListener('change', applyTitanFilters);
        
        titanFilters.forEach(btn => {
            btn.addEventListener('click', () => {
                titanFilters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.filter.toUpperCase();
                applyTitanFilters();
            });
        });
    }
    }

    // --- CHARACTER ARCHIVE SYSTEM ---
    if (document.body.classList.contains('characters-page')) {
        const charGrid = document.getElementById('charactersGrid');
        const charSearch = document.getElementById('characterSearch');
        const charFilters = document.querySelectorAll('.personnel-filters .filter-btn');
        const charCount = document.getElementById('characterCount');
        let currentCharFilter = 'ALL';

        const renderCharacters = (data) => {
            if (!charGrid) return;
            charGrid.innerHTML = '';
            
            if (data.length === 0) {
                charGrid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding:3rem; font-family:monospace; color:var(--muted);">NO RECORDS FOUND MATCHING CRITERIA.</div>';
                if(charCount) charCount.innerText = '0 RECORDS FOUND';
                return;
            }

            if(charCount) charCount.innerText = `${data.length} RECORD${data.length !== 1 ? 'S' : ''} FOUND`;

            data.forEach((char, index) => {
                const delay = index * 0.1;
                const card = document.createElement('div');
                card.className = 'personnel-card reveal';
                card.style.transitionDelay = `${delay}s`;
                card.innerHTML = `
                    <div class="personnel-img">
                        <img src="${char.img}" alt="${char.name}" loading="lazy">
                        <div class="personnel-overlay">
                            <button class="btn btn-outline open-modal-btn" data-type="character-v2" data-id="${char.id}">VIEW PROFILE</button>
                        </div>
                    </div>
                    <div class="personnel-info">
                        <span class="archive-label" style="font-size:0.6rem;">${char.affiliation.toUpperCase()}</span>
                        <h3 style="font-family:var(--font-heading); color:var(--accent); font-size:1.5rem; margin:0.5rem 0;">${char.name}</h3>
                        <p style="font-family:monospace; color:var(--military-green-light); font-size:0.8rem; margin-bottom:1rem;">${char.role.toUpperCase()}</p>
                        <p style="color:var(--text); font-size:0.9rem; line-height:1.5;">${char.shortDesc}</p>
                    </div>
                `;
                charGrid.appendChild(card);
            });

            // Re-bind modal buttons
            charGrid.querySelectorAll('.open-modal-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    openDataModal(btn.dataset.type, btn.dataset.id);
                });
            });

            // Re-trigger observer for new elements
            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        };

        const applyCharFilters = () => {
            const searchTerm = charSearch ? charSearch.value.toLowerCase() : '';
            
            const filtered = db.characters.filter(c => {
                const matchSearch = c.name.toLowerCase().includes(searchTerm) || 
                                    c.role.toLowerCase().includes(searchTerm) || 
                                    c.affiliation.toLowerCase().includes(searchTerm);
                const matchFilter = currentCharFilter === 'ALL' || c.cat.toUpperCase() === currentCharFilter;
                return matchSearch && matchFilter;
            });

            renderCharacters(filtered);
        };

        if (charSearch) charSearch.addEventListener('input', applyCharFilters);
        
        charFilters.forEach(btn => {
            btn.addEventListener('click', () => {
                charFilters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCharFilter = btn.dataset.filter.toUpperCase();
                applyCharFilters();
            });
        });

        // Initial Render
        renderCharacters(db.characters);
    }

    // --- GLOBAL CINEMATIC ANIMATION & AUDIO SYSTEM ---
    
    // 1. Audio Engine & Entry Sequence
    const bgm = new Audio('audio/guren-no-yumiya.mp3');
    bgm.loop = true;
    
    const entryScreen = document.getElementById('entryScreen');
    const enterBtn = document.getElementById('enterArchiveBtn');
    const pageLoader = document.getElementById('page-loader');
    const soundBtns = document.querySelectorAll('#soundBtn');

    // Retrieve state
    const hasCompletedIntro = localStorage.getItem('aotIntroCompleted') === 'true';
    let isMuted = localStorage.getItem('bgmMuted') === 'true';
    const savedTime = parseFloat(localStorage.getItem('bgmTime')) || 0;

    const updateSoundIcons = () => {
        soundBtns.forEach(btn => {
            btn.innerHTML = isMuted ? '🔈' : '🔊';
            if(isMuted) btn.classList.add('muted');
            else btn.classList.remove('muted');
        });
    };
    updateSoundIcons();
    
    // Save state on unload
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('bgmTime', bgm.currentTime);
    });

    // Sound toggle logic
    soundBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            isMuted = !isMuted;
            localStorage.setItem('bgmMuted', isMuted);
            bgm.muted = isMuted;
            updateSoundIcons();
            if (!isMuted && bgm.paused) {
                bgm.play().catch(() => console.log('Autoplay blocked'));
            }
        });
    });

    // Handle Entry Screen logic (only exists on index.html)
    if (entryScreen) {
        document.body.classList.add('page-transitioning');
        if (pageLoader) pageLoader.style.display = 'none';
        soundBtns.forEach(b => b.style.display = 'none'); // Hide music player initially

        if (hasCompletedIntro) {
            entryScreen.classList.add('returning');
        }

        // --- Video Background Setup & Fallback Handling ---
        const introVideo = document.getElementById('introVideo');
        if (introVideo) {
            introVideo.play().catch(err => {
                console.log('Autoplay handled for intro video:', err);
            });

            // Handle missing video or load error gracefully
            const handleVideoError = () => {
                console.log('Video videos/aot-intro.mp4 not found or unsupported. Enabling fallback visual theme.');
                entryScreen.classList.add('no-video');
                if (introVideo.parentNode) {
                    introVideo.style.display = 'none';
                }
            };

            introVideo.addEventListener('error', handleVideoError, true);
            const sourceEl = introVideo.querySelector('source');
            if (sourceEl) {
                sourceEl.addEventListener('error', handleVideoError);
            }

            // Mobile optimization: ensure proper playback
            introVideo.muted = true;
            introVideo.playsInline = true;
        }

        // --- Dynamic Particle Engine (Floating Embers & Dust) ---
        const particleCanvas = document.getElementById('introParticlesCanvas');
        let particleAnimationId = null;

        if (particleCanvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const ctx = particleCanvas.getContext('2d');
            let particles = [];
            const particleCount = window.innerWidth < 768 ? 12 : 25;

            const resizeCanvas = () => {
                particleCanvas.width = window.innerWidth;
                particleCanvas.height = window.innerHeight;
            };
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            class Particle {
                constructor() {
                    this.reset();
                }
                reset() {
                    this.x = Math.random() * particleCanvas.width;
                    this.y = particleCanvas.height + Math.random() * 20;
                    this.size = Math.random() * 2.2 + 0.8;
                    this.speedY = Math.random() * 0.4 + 0.15;
                    this.speedX = (Math.random() - 0.5) * 0.3;
                    this.opacity = Math.random() * 0.5 + 0.2;
                    this.fadeSpeed = Math.random() * 0.003 + 0.001;
                    // Warm gold, muted red, or subtle grey ash
                    const colors = [
                        'rgba(180, 140, 100, ',
                        'rgba(160, 50, 40, ',
                        'rgba(200, 200, 190, '
                    ];
                    this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
                }
                update() {
                    this.y -= this.speedY;
                    this.x += this.speedX;
                    this.opacity -= this.fadeSpeed;
                    if (this.y < -10 || this.opacity <= 0) {
                        this.reset();
                    }
                }
                draw() {
                    ctx.fillStyle = `${this.colorPrefix}${this.opacity})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            for (let i = 0; i < particleCount; i++) {
                const p = new Particle();
                p.y = Math.random() * particleCanvas.height; // Spread initially
                particles.push(p);
            }

            const animateParticles = () => {
                ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
                particles.forEach(p => {
                    p.update();
                    p.draw();
                });
                particleAnimationId = requestAnimationFrame(animateParticles);
            };
            animateParticles();
        }

        // --- Dynamic Mousemove Parallax (Desktop Only) ---
        if (window.innerWidth > 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            let ticking = false;
            entryScreen.addEventListener('mousemove', (e) => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        const { innerWidth, innerHeight } = window;
                        const mouseX = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
                        const mouseY = (e.clientY / innerHeight - 0.5) * 2;

                        entryScreen.style.setProperty('--camera-px', `${mouseX * 8}px`);
                        entryScreen.style.setProperty('--camera-py', `${mouseY * 8}px`);
                        entryScreen.style.setProperty('--fog-px', `${mouseX * 16}px`);
                        entryScreen.style.setProperty('--fog-py', `${mouseY * 16}px`);
                        entryScreen.style.setProperty('--part-px', `${mouseX * 24}px`);
                        entryScreen.style.setProperty('--part-py', `${mouseY * 24}px`);

                        ticking = false;
                    });
                    ticking = true;
                }
            });
        }

        // --- Exact Timeline Cinematic Enter Sequence ---
        const skipBtn = document.getElementById('skipIntroBtn');
        const introActions = document.querySelector('.intro-actions');
        let entranceExecuted = false;

        const executeCinematicEntrance = () => {
            if (entranceExecuted) return;
            entranceExecuted = true;

            // 0.00s: User clicks ENTER ARCHIVE or presses Enter key
            if (enterBtn) {
                enterBtn.classList.add('compressing');
                enterBtn.style.pointerEvents = 'none';
            }

            // 0.05s: Button presses down
            setTimeout(() => {
                if (enterBtn) enterBtn.classList.remove('compressing');
            }, 50);

            // 0.10s: Background begins cinematic zoom, screen shake & audio start
            setTimeout(() => {
                entryScreen.classList.add('transition-zooming', 'shaking');
                bgm.volume = 0;
                bgm.muted = isMuted;
                bgm.play().catch(e => console.log('BGM Autoplay blocked:', e));
            }, 100);

            // 0.10s–0.50s: Fade music smoothly from 0 to selected volume (0.4)
            setTimeout(() => {
                let vol = 0;
                const fade = setInterval(() => {
                    vol += 0.08;
                    if (vol >= 0.4) {
                        bgm.volume = 0.4;
                        clearInterval(fade);
                    } else {
                        bgm.volume = vol;
                    }
                }, 50);
            }, 100);

            // 0.20s: Fog boost & darkening
            setTimeout(() => {
                entryScreen.classList.add('transition-fog-boost', 'transition-darkening');
            }, 200);

            // 0.40s: Title & Subtitle fade away
            setTimeout(() => {
                entryScreen.classList.add('title-fade-away', 'chronicles-fade-away', 'light-smoke-sweep');
            }, 400);

            // 0.50s: Reveal homepage background (fade out intro overlay)
            setTimeout(() => {
                document.body.classList.remove('page-transitioning');
                soundBtns.forEach(b => b.style.display = 'inline-block');
                localStorage.setItem('aotIntroCompleted', 'true');
                entryScreen.classList.add('cinematic-exit');
            }, 500);

            // 1.00s: Intro completely unmounts from DOM
            setTimeout(() => {
                if (particleAnimationId) cancelAnimationFrame(particleAnimationId);
                entryScreen.remove();
            }, 1000);
        };

        const skipHomepageReveal = () => {
            if (entranceExecuted) return;
            entranceExecuted = true;

            entryScreen.classList.add('cinematic-exit');
            soundBtns.forEach(b => b.style.display = 'inline-block');
            localStorage.setItem('aotIntroCompleted', 'true');
            document.body.classList.remove('page-transitioning');
            if (particleAnimationId) cancelAnimationFrame(particleAnimationId);
            setTimeout(() => {
                entryScreen.remove();
            }, 500);
        };

        if (enterBtn) {
            enterBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                executeCinematicEntrance();
            });
        }

        if (introActions) {
            introActions.addEventListener('click', () => {
                executeCinematicEntrance();
            });
        }

        if (skipBtn) {
            skipBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                skipHomepageReveal();
            });
        }

        // Keyboard navigation (Enter / Space key)
        const handleKeyDown = (e) => {
            if (document.body.contains(entryScreen)) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    executeCinematicEntrance();
                    window.removeEventListener('keydown', handleKeyDown);
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);

    } else {
        // Not on index.html: Standard cinematic loader, resume music
        document.body.classList.add('page-transitioning');
        
        if (pageLoader) {
            setTimeout(() => { pageLoader.classList.add('active'); }, 100);
            setTimeout(() => {
                document.body.classList.remove('page-transitioning');
                pageLoader.classList.add('fade-out');
                setTimeout(() => pageLoader.remove(), 500);
            }, 1200);
        } else {
            document.body.classList.remove('page-transitioning');
        }

        // Resume audio on other pages
        bgm.muted = isMuted;
        bgm.volume = 0.4;
        bgm.currentTime = savedTime;
        if (!isMuted) {
            bgm.play().catch(e => {
                console.log("Autoplay blocked on navigation. User must click play.", e);
                isMuted = true;
                updateSoundIcons();
            });
        }
    }

    // 2. Global Scroll Progress Bar
    const globalProgress = document.getElementById('scrollProgress');
    if (globalProgress) {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            globalProgress.style.width = scrolled + "%";
        });
    }

    // 3. Page Transitions (Intercept Navigation)
    document.querySelectorAll('a.nav-link, a.logo').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = link.getAttribute('href');
            if (target && !target.startsWith('#') && target !== window.location.pathname) {
                e.preventDefault();
                document.body.classList.add('page-transitioning');
                setTimeout(() => {
                    window.location.href = target;
                }, 300); // 300ms fade transition
            }
        });
    });
    }

    // --- WORLD PAGE SYSTEM (V7) ---
    // Inject locations into db
    db.locations = [
        { id: 'l1', name: 'Shiganshina District', region: 'Wall Maria (South)', img: 'images/shiganshina.jpg', desc: 'The southernmost district of Wall Maria. The hometown of Eren, Mikasa, and Armin, and the site of the first breach.' },
        { id: 'l2', name: 'Trost District', region: 'Wall Rose (South)', img: 'images/trost.jpg', desc: 'A vital southern outpost. The site of humanity\'s first successful counterattack where Eren sealed the gate.' },
        { id: 'l3', name: 'Stohess District', region: 'Wall Sina (East)', img: 'images/stohess.jpg', desc: 'An affluent inner district. The site of a devastating battle between Eren and the Female Titan, revealing Titans within the walls.' },
        { id: 'l4', name: 'Mitras', region: 'Wall Sina (Center)', img: 'images/mitras.jpg', desc: 'The royal capital located at the exact center of the walls. Home to the false King and the true royal family.' },
        { id: 'l5', name: 'Liberio', region: 'Marley', img: 'images/liberio.jpg', desc: 'A major Marleyan city containing the Liberio Internment Zone where Eldian Subjects of Ymir are forced to live.' },
        { id: 'l6', name: 'Fort Slava', region: 'Mid-East Allied Forces', img: 'images/fort-slava.jpg', desc: 'A heavily fortified stronghold captured by Marley\'s Warrior Unit, ending the Marley Mid-East War.' }
    ];

    const locationGrid = document.getElementById('locationGrid');
    if (locationGrid) {
        // Render Locations
        const renderLocations = (data = db.locations) => {
            if (data.length === 0) {
                locationGrid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 3rem; font-family:monospace; color:var(--muted);">NO RECORDS FOUND.</div>';
                return;
            }
            locationGrid.innerHTML = data.map((l, index) => `
                <article class="card reveal dossier-card" style="transition-delay: ${(index % 3) * 0.1}s">
                    <div class="card-img"><img src="${l.img}" loading="lazy" alt="${l.name}"></div>
                    <div class="card-content">
                        <h2 class="card-title">${l.name}</h2>
                        <p class="card-role">${l.region}</p>
                        <p class="card-desc">${l.desc}</p>
                        <button class="btn btn-outline open-modal-btn" data-type="location" data-id="${l.id}">VIEW DETAILS</button>
                    </div>
                </article>
            `).join('');
            
            // Re-observe new elements
            document.querySelectorAll('#locationGrid .reveal').forEach(el => revealObserver.observe(el));
        };
        renderLocations();

        // Location Search
        const locSearch = document.getElementById('locationSearchInput');
        if (locSearch) {
            locSearch.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase();
                const filtered = db.locations.filter(l => 
                    l.name.toLowerCase().includes(term) || l.region.toLowerCase().includes(term)
                );
                renderLocations(filtered);
            });
        }

        // Strategic Diagram Hover
        const diagramInfo = document.getElementById('diagramInfo');
        const wallCircles = document.querySelectorAll('.wall-circle');
        if (diagramInfo && wallCircles.length > 0) {
            const wallData = {
                'maria': { title: 'WALL MARIA', desc: 'Outer radius: ~480km. Highest population density, lowest economic output. Breached Year 845.' },
                'rose': { title: 'WALL ROSE', desc: 'Middle radius: ~380km. Contains massive agricultural zones. Breached and sealed Year 850.' },
                'sina': { title: 'WALL SINA', desc: 'Inner radius: ~250km. Strictly regulated access. Houses Military Police and Royal Government.' }
            };

            wallCircles.forEach(circle => {
                circle.addEventListener('mouseenter', (e) => {
                    e.stopPropagation(); // Prevent parent circles from firing
                    const wall = circle.dataset.wall;
                    if (wallData[wall]) {
                        diagramInfo.innerHTML = `<h3>${wallData[wall].title}</h3><p>${wallData[wall].desc}</p>`;
                        diagramInfo.style.borderColor = 'var(--accent)';
                    }
                });
                circle.addEventListener('mouseleave', (e) => {
                    e.stopPropagation();
                    diagramInfo.innerHTML = `<h3>SELECT A REGION</h3><p>Hover over a wall segment for strategic data.</p>`;
                    diagramInfo.style.borderColor = 'var(--border)';
                });
            });
        }

        // Interactive Map
        document.querySelectorAll('.map-marker').forEach(marker => {
            marker.addEventListener('click', () => {
                const locId = marker.dataset.location;
                // We map the data-location to a modal view. Since it's a fictional UI, we can just spawn a custom modal.
                const modalOverlay = document.getElementById('dynamicModal');
                const content = modalOverlay.querySelector('.modal-content');
                let info = '';
                
                if (locId === 'marley') info = 'The dominant superpower across the ocean.';
                else if (locId === 'liberio') info = 'Internment zone for Eldians.';
                else if (locId === 'paradis') info = 'The isolated island containing the walls.';
                else if (locId === 'shiganshina') info = 'The district where it all began.';

                content.innerHTML = `
                    <button class="modal-close">&times;</button>
                    <div class="modal-body" style="padding: 3rem;">
                        <span class="archive-label">SATELLITE INTEL</span>
                        <h2 class="modal-title" style="text-transform:uppercase;">${locId}</h2>
                        <p style="font-family:monospace; color:var(--muted); font-size:1.1rem; margin-top:1rem;">${info}</p>
                    </div>`;
                
                content.querySelector('.modal-close').addEventListener('click', () => {
                    modalOverlay.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                });
                modalOverlay.classList.add('active');
                document.body.classList.add('no-scroll');
            });
        });
    }

    // --- TITAN SIZE COMPARISON CONTROLLER ---
    const titanViewport = document.getElementById('titanScaleViewport');
    if (titanViewport) {
        const intelName = document.getElementById('intelName');
        const intelHeight = document.getElementById('intelHeight');
        const intelUsers = document.getElementById('intelUsers');
        const intelAbilities = document.getElementById('intelAbilities');
        const intelClass = document.getElementById('intelClass');

        const titanFigures = document.querySelectorAll('.titan-figure');

        const updateTitanIntel = (fig) => {
            if (!fig) return;
            const name = fig.dataset.name || '--';
            const height = fig.dataset.height || '--';
            const users = fig.dataset.users || '--';
            const abilities = fig.dataset.abilities || '--';
            const classType = fig.dataset.class || 'CLASSIFIED';

            if (intelName) intelName.textContent = name.toUpperCase();
            if (intelHeight) intelHeight.textContent = height;
            if (intelUsers) intelUsers.textContent = users;
            if (intelAbilities) intelAbilities.textContent = abilities;
            if (intelClass) intelClass.textContent = `CLASSIFICATION: ${classType.toUpperCase()}`;
        };

        titanFigures.forEach(fig => {
            fig.addEventListener('mouseenter', () => updateTitanIntel(fig));
            fig.addEventListener('click', () => updateTitanIntel(fig));
        });

        // IntersectionObserver for Titan Reveal Animation
        const titanObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    titanViewport.classList.add('viewport-revealed');
                    titanFigures.forEach((fig, index) => {
                        setTimeout(() => {
                            fig.classList.add('fig-revealed');
                        }, index * 120);
                    });
                    titanObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        titanObserver.observe(titanViewport);
    }

    // --- GLOBAL MUSIC PLAYER ENGINE ---
    const musicWidget = document.getElementById('globalMusicPlayer');
    if (musicWidget) {
        const mpPlayBtn = document.getElementById('mpPlayBtn');
        const mpPrevBtn = document.getElementById('mpPrevBtn');
        const mpNextBtn = document.getElementById('mpNextBtn');
        const mpMuteBtn = document.getElementById('mpMuteBtn');
        const mpVolumeSlider = document.getElementById('mpVolumeSlider');
        const mpMinimizeBtn = document.getElementById('mpMinimizeBtn');

        const updateMusicPlayerUI = () => {
            if (mpPlayBtn) mpPlayBtn.textContent = bgm.paused ? '▶' : '⏸';
            if (mpMuteBtn) mpMuteBtn.textContent = bgm.muted ? '🔈' : '🔊';
            if (mpVolumeSlider) mpVolumeSlider.value = bgm.muted ? 0 : bgm.volume;
        };

        bgm.addEventListener('play', updateMusicPlayerUI);
        bgm.addEventListener('pause', updateMusicPlayerUI);

        if (mpPlayBtn) {
            mpPlayBtn.addEventListener('click', () => {
                if (bgm.paused) {
                    bgm.play().catch(e => console.log('BGM Play blocked:', e));
                } else {
                    bgm.pause();
                }
                updateMusicPlayerUI();
            });
        }

        if (mpMuteBtn) {
            mpMuteBtn.addEventListener('click', () => {
                bgm.muted = !bgm.muted;
                localStorage.setItem('bgmMuted', bgm.muted);
                updateMusicPlayerUI();
            });
        }

        if (mpVolumeSlider) {
            mpVolumeSlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                bgm.volume = val;
                bgm.muted = (val === 0);
                localStorage.setItem('bgmVolume', val);
                updateMusicPlayerUI();
            });
        }

        if (mpMinimizeBtn) {
            mpMinimizeBtn.addEventListener('click', () => {
                musicWidget.classList.toggle('minimized');
                mpMinimizeBtn.textContent = musicWidget.classList.contains('minimized') ? '+' : '−';
            });
        }

        updateMusicPlayerUI();
    }

});
