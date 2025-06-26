import { Author, Article, Category, AdminUser } from "@/types";

// Categories
export const categories: Category[] = [
  { id: "1", name: "Faculty", slug: "faculty", description: "Articles from faculty members" },
  { id: "2", name: "Editorial", slug: "editorial", description: "Editorial content" },
  { id: "3", name: "International", slug: "international", description: "International news" },
  { id: "4", name: "National", slug: "national", description: "National news" },
  { id: "5", name: "City", slug: "city", description: "City news" },
  { id: "6", name: "University", slug: "university", description: "University news" },
  { id: "7", name: "Arts & Culture", slug: "arts-culture", description: "Arts and culture content" },
  { id: "8", name: "Sports", slug: "sports", description: "Sports news" },
  { id: "9", name: "Business", slug: "business", description: "Business news" },
  { id: "10", name: "Sci-tech", slug: "sci-tech", description: "Science and technology news" },
  { id: "11", name: "Features", slug: "features", description: "Featured content" },
  { id: "12", name: "Guest Columns", slug: "guest-columns", description: "Guest columns" },
  { id: "13", name: "Op-ed", slug: "op-ed", description: "Opinion and editorial" },
  { id: "14", name: "Blogs", slug: "blogs", description: "Blog posts" },
  { id: "15", name: "Magazine", slug: "magazine", description: "Magazine content" },
  { id: "16", name: "Podcasts", slug: "podcasts", description: "Podcast episodes" },
  { id: "17", name: "Crosswords", slug: "crosswords", description: "Crossword puzzles" },
];

// Authors
export const authors: Author[] = [
  {
    id: "1",
    name: "Shumaila Khan",
    username: "shumaila-khan",
    image: "/Shumilaprofile.jpeg",
    bio: "I've always believed that stories are how civilizations speak—and universities, in particular, are teeming with voices that deserve a headline. That belief gave rise to LU.Chronicles, the student-run daily I founded not simply to report what happens, but to reflect what matters. I'm Shumaila—a student at Lucknow University and IGNOU—studying English Literature, Psychology, Ancient Indian History, and Public Administration. Yes, all at once. And no, sleep is not overrated—it's just scheduled. Before founding LU.Chronicles, I spent my school years juggling grades, gathering trophies, captaining literary events, and finding my voice in auditoriums packed with applause and adjudicators. That same hunger for challenge has since found a home in multiple arenas: inter-university debates, writing rooms, and as the President of LU.LITCORE, the official literary society of Lucknow University. But Chronicles is something different. It's not about just adding another title to the résumé. It's about building a newsroom run by students, for students—one that blends editorial rigor with youthful defiance. As the founder and editor of LU.Chronicles, I wear a lot of hats—curate content, mentor writers, map out editorial strategy, and occasionally jump in with a byline or two (or ten). Every piece we publish aims to balance curiosity with credibility. When I'm not chasing stories—fictional or otherwise—I'm probably chasing a dozen other interests: public speaking, film criticism, poetry, Pilates, languages, art, aesthetics, or the perfect chord on one of my instruments. My life is stitched together by a simple rule—if you can learn it, try it. What I bring to the paper is not just a résumé of accolades but an ethic: of inquiry, imagination, and intention. Because if you're going to write history—be it personal or institutional—you may as well make sure it's worth reading.",
    email: "withloveshumaila@gmail.com",
    designation: "Editor in Chief",
    course: "B.A.",
    categories: ["Arts & Culture", "Op-ed", "Blogs", "Magazine", "Podcasts"],
    articlesCount: 24,
    isFounder: true,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/withloveshumaila?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      twitter: "withluvshumaila"
    }
  },
  {
    id: "2",
    name: "Hetal Kothari",
    username: "hetal-kothari",
    image: "/Hetal.jpeg",
    bio: "I'm Hetal Kothari — a passionate writer and researcher with a keen interest in exploring diverse perspectives and uncovering compelling stories. As a dedicated member of LU.Chronicles, I bring my analytical mindset and creative approach to every piece I write.\n\nMy journey in journalism began with a deep curiosity about the world around us and a desire to give voice to important narratives. I believe in the power of storytelling to inform, inspire, and create meaningful connections.\n\nWith a background in research and writing, I specialize in crafting engaging content that resonates with our readers while maintaining the highest standards of journalistic integrity. I'm particularly interested in exploring topics related to culture, society, and current affairs.\n\nAt LU.Chronicles, I'm committed to contributing thoughtful, well-researched articles that add value to our readers' understanding of the world. I believe in the importance of balanced reporting and presenting multiple perspectives on complex issues.\n\nWhen I'm not writing, you can find me exploring new books, engaging in meaningful discussions, or seeking out new stories to tell. I'm always eager to learn and grow as a writer and journalist.",
    email: "hetal@luchronicles.edu",
    designation: "Head",
    course: "Bsc zoology and chemistry",
    categories: ["International", "City", "Arts & Culture", "Blogs", "Podcasts"],
    articlesCount: 15,
  },
  {
    id: "3",
    name: "Dorcas Tembo Sambo",
    username: "dorcas-tembo",
    image: "/Dorcas Tembo Sambo.jpg",
    bio: "My name is Dorcas Tembo Sambo, I am a 2nd-year BBA student and a passionate advocate for meaningful discourse, I bring a unique blend of analytical thinking, creative expression, and unwavering commitment to truth. As the Head of the Writing Department at Lu.LitCore and Proofreading & Quality Control Head at LU Chronicles, I am dedicated to crafting compelling narratives and fostering critical thinking.\n\nWith a love for debating that extends beyond argumentation to building minds and critical thinking, I thrive in environments that encourage intellectual exploration and respectful dialogue. As a writer, I believe in the transformative power of words, shaping life's worth narratives that inspire and provoke.\n\nGuided by an unwavering commitment to truth and a passion for innovative storytelling, I bring boldness, wisdom, and clarity to every project. Through quality assurance and impactful writing, I aim to make a lasting impact, ensuring that truth is heard without boundaries.\n\nSincerely,\nHead, Writing Department\nHead, Proofreading and Quality Control",
    email: "tabitasambo23@gmail.com",
    designation: "Proofreading and Quality Control Head",
    course: "BBA",
    categories: ["Business", "Crosswords"],
    articlesCount: 12,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/dorcas-sambo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  },
  {
    id: "5",
    name: "Atulit Pandey",
    username: "atulit-pandey",
    image: "/Atlut.jpeg",
    bio: `Hi, I'm Atulit, B.Sc. undergraduate and a geology major.
I'm a goal oriented person and love to learn new things as they cross my path. Learning, for me, is an experience and not just an obligation, and spreading my learnings, thoughts, experiences and expressions is what I'm most passionate about (after rocks, obviously).
My hobbies can't be counted on fingers, so the top ones include debating (can't live without yapping), reading, writing (poems and prose sometimes, poems for the win though) and playing tabla. Also, I possess an inherent keenness towards geopolitics (to find agendas for debating, to be honest, and to give my "expert opinions" on matters that don't concern me even at a light year's distance)
Here at Chronocore, I'm the vice head of the branch and at LU.Chronicles, I head the design and layout section.
Hope to do great work with the team here at Chronocore and LU.Chronicles.
Peace.`,
    email: "atulitpandey11@gmail.com",
    designation: "Vice Head",
    course: "B.Sc.",
    categories: ["International", "National", "City", "Sci-tech", "Magazine"],
    articlesCount: 15,
    socialMedia: {
      linkedin: "https://in.linkedin.com/in/atulit-pandey-2027b0188"
    }
  },
  {
    id: "6",
    name: "Prerna Srivastava",
    username: "prerna-srivastava",
    image: "/Perna.jpeg",
    bio: `I'm Prerna Srivastava —  B.Sc Bio student, an unapologetic question-asker, a passionate debater, and a story collector in Lu.LitCore.
Driven by curiosity, I'm always asking why— whether it's exploring geopolitical events, questioning societal norms, or delving into feminist ideas. I thrive in conversations that dig deeper, seeking connection and learning from the world around me.

I don't just enjoy stories; I collect them. From hostel corridors to chance encounters, I believe everyone has a narrative worth hearing. These meaningful exchanges broaden my perspective and deepen my understanding of the world.

Debating excites me—not for the sake of disagreement, but for the depth it brings. I enjoy expressing my thoughts and hearing others do the same. While I have strong opinions, I value openness, empathy, and respectful conversation.

I bring a lightness to life—laughing easily, enjoying the little moments, and balancing seriousness with a warm, happy-go-lucky spirit. 
LU Chronicles, to me, is more than a platform; it's a bridge between campus and the world, where stories, opinions, and reflections on everything from college life to global issues can find a home. I'm here to help shape that space—thoughtfully, honestly, and always with curiosity.

I'll be here, ready to ask the next why and learn from every conversation.`,
    email: "prernaluchronicles@gmail.com",
    designation: "Research Head",
    course: "B.Sc NEP",
    categories: ["International", "National", "Arts & Culture", "Sci-tech", "Magazine", "Podcasts"],
    articlesCount: 14,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/prerna-srivastava-33b91335a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "PrernaS91925704"
    }
  },
  {
    id: "7",
    name: "Abhinav Kumar Upadhyay",
    username: "abhinav-upadhyay",
    image: "/Abhinav Kumar Upadhyay .jpeg",
    bio: "I am Abhinav Kumar Upadhyay — an equal blend of strategist and storyteller. Believing in balanced minds and measured words, I take my steps through life entranced with diplomacy, steady logic, and an unceasing curiosity for the workings of life.",
    email: "iamabhinavupadhyay@gmail.com",
    designation: "Design and Layout Head",
    course: "B.Sc NEP",
    categories: ["International", "National", "Business", "Sci-tech", "Magazine"],
    articlesCount: 11,
    socialMedia: {
      instagram: "https://www.instagram.com/iam.abhiinav?igsh=MTZpdTNnbzIzd2VxdQ=="
    }
  },
  {
    id: "8",
    name: "Ansesveri Laxmi",
    username: "ansesveri-laxmi",
    image: "/Ansesveri Laxmi.jpeg",
    bio: "I'm Ansesveri Laxmi — a student, storyteller, and seeker of meaning. With a mind tuned to history and a heart pulled toward poetry, I exist at the intersection of intellect and emotion. As a YouTuber who dives deep into Indian political narratives, I don't just present facts — I resurrect forgotten stories, ask uncomfortable questions, and challenge surface-level thinking. I believe the past isn't dead; it's a dialogue, waiting to be reawakened. Writing, for me, is both introspection and activism. Whether it's scripting a documentary, drafting a heartfelt poem, or narrating a political episode, I let every word carry the weight of intention. A thinker by habit and a learner by heart, I often oscillate between coding an idea into an app and decoding the soul of a movement. I thrive in quiet reflection as much as in dynamic conversation — from late-night philosophical musings to sharp debates on what the future holds. My lens is one of curiosity and compassion. I create not just to inform, but to connect, to provoke thought, and most of all — to leave something behind that might just make someone pause, question, and feel.",
    email: "ansesveri@luchronicles.edu",
    designation: "Tech Head",
    course: "B.A.",
    categories: ["International", "National", "Sci-tech"],
    articlesCount: 8,
  },
  {
    id: "9",
    name: "Aliya Imam",
    username: "aliya-imam",
    image: "/Aliya.jpeg",
    bio: "I'm Aliya Imam — a dedicated journalist and storyteller with a passion for uncovering and sharing meaningful narratives.",
    email: "aliyaimam06@gmail.com",
    designation: "PR Head",
    course: "B.Sc Bio",
    categories: ["International", "National", "City", "University", "Business"],
    articlesCount: 12,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/aliya-imam-636ab1330/"
    }
  },
  {
    id: "10",
    name: "Dr. Utkarsh Mishra",
    username: "utkarsh-mishra",
    image: "/utkarsh.jpeg",
    bio: "Dr. Utkarsh Mishra is a distinguished and honourable faculty member at the Department of Public Administration, University of Lucknow. His expertise lies in public administration, constitutional governance, and public policy, with a proven track record of research in governance, policy analysis, and administrative reforms.",
    email: "utkarsh.mishra@luchronicles.edu",
    designation: "Academic Liaison",
    department: "Department of Public Administration",
    categories: ["Public Administration", "Constitutional Governance", "Public Policy", "Research", "Academic Leadership"],
    articlesCount: 8,
    isFaculty: true,
  },
  {
    id: "11",
    name: "Mani Soni",
    username: "mani-soni",
    image: "/Mani.jpeg",
    bio: "Mani Soni - A passionate writer and storyteller",
    email: "itsmanisoni@gmail.com",
    designation: "Writer",
    categories: ["Arts & Culture", "Blogs"],
    articlesCount: 8,
    socialMedia: {
      twitter: "_manisoni_",
      instagram: "_.maniiiii.____"
    }
  },
  {
    id: "12",
    name: "Atharv Manshar",
    username: "atharv-manshar",
    image: "/Atharv.jpeg",
    bio: "Atharv Manshar - A dedicated writer and researcher",
    email: "athmanshar@gmail.com",
    designation: "Writer",
    categories: ["Sci-tech", "Business"],
    articlesCount: 6
  },
  {
    id: "13",
    name: "Dr. Sushil Singh Chauhan",
    username: "sushil-singh-chauhan",
    image: "/ss.jpeg",
    bio: "Dr. Sushil Singh Chauhan is a senior faculty member in the Department of Public Administration, University of Lucknow. With over 30 years of experience in teaching and research, he specializes in rural development, research methodology, and governance. He has led several ICSSR-funded projects, evaluated over 170 government programmes, and authored five books on public administration. As the Editor of Dynamics of Public Administration and CEO of the Institute for Applied Research and Development, he brings a rich blend of academic and field expertise. At LU Chronicles, his guidance will strengthen policy-oriented content and foster a deeper understanding of governance and administrative issues among student writers.",
    email: "sushil.chauhan@luchronicles.edu",
    designation: "Academic Liaison",
    department: "Department of Public Administration",
    categories: ["Public Administration", "Rural Development", "Research Methodology", "Governance", "Policy Analysis"],
    isFaculty: true,
  },
  {
    id: "14",
    name: "Trishla Chaudhary",
    username: "trishla-chaudhary",
    image: "/Trishla.jpeg",
    bio: "I'm Trishla Chaudhary, semi-responsible and chaos personified and a collection of paradoxes. I'm a second-year majoring in Ancient Indian History and Political Science with a passion for literature that extends beyond the pages. I have a keen interest in international relations and a love for learning new languages. In my free time, I read about anything and everything, and try to convince people that Dostoevsky is a genre in itself. LU.Chronicles gives me space to explore new literary horizons and evolve as a thinker.",
    email: "trishla@luchronicles.edu",
    designation: "Member",
    course: "B.A.",
    categories: ["Arts & Culture", "International", "Blogs"],
    articlesCount: 5
  },
  {
    id: "15",
    name: "Captain Jack Sparrow",
    username: "captain-jack-sparrow",
    image: "/Shantam.jpeg",
    bio: "Crazy people don't know they're crazy. I know I'm crazy, therefore I'm not crazy, isn't that crazy?",
    email: "anonymous@luchronicles.edu",
    designation: "Anonymous Writer",
    categories: ["Blogs", "Op-ed"],
    articlesCount: 3
  },
  {
    id: "16",
    name: "Anonymous",
    username: "anonymous",
    image: "/Shantam.jpeg",
    bio: "Anonymous is a writer and researcher focused on gender studies and campus life.",
    email: "anonymous@luchronicles.edu",
    designation: "Writer",
    categories: ["University", "Features"],
    articlesCount: 1
  },
  {
    id: "17",
    name: "Trishla",
    username: "trishla",
    image: "/Trishla.jpeg",
    bio: "Trishla is a writer and activist focused on international relations and human rights.",
    email: "trishla@luchronicles.edu",
    designation: "Writer",
    categories: ["International", "Op-ed"],
    articlesCount: 1
  },
  {
    id: "18",
    name: "Manasvi Srivastava (B.sc)",
    username: "manasvi-srivastava",
    image: "/Manasvi.jpeg",
    bio: "A Banarasi soul with a science brain and a literary heart, I'm Manasvi, currently majoring in Chemistry and Biology but secretly obsessed with books that make me cry, question society, or fall in love with fictional people (again).\n\nAs a member of Bibliocore, I bring my love for romance novels, feminism, Indian mythology, and South Asian stories into the mix — sometimes all in one conversation. I'm also slowly but surely falling headfirst into the world of literature (and loving the chaos of it).\n\nFueled by K-pop especially Seventeen, who I consider my personal motivational speakers—I believe in storytelling that is bold, inclusive, and dripping with heart. Also: equality and equity? Always. Boring writing? Never.",
    email: "manasvi@luchronicles.edu",
    designation: "Writer",
    course: "B.Sc.",
    categories: ["Arts & Culture", "Blogs"],
    articlesCount: 0
  },
  {
    id: "14",
    name: "Manasvi Srivastava",
    username: "manasvi-srivastava",
    image: "/MS.jpeg",
    bio: "Manasvi Srivastava is a passionate writer and researcher with a keen interest in exploring diverse perspectives and uncovering compelling stories. As a dedicated member of LU.Chronicles, I bring my analytical mindset and creative approach to every piece I write.",
    email: "manasvi@luchronicles.edu",
    designation: "Writer",
    course: "B.A.",
    categories: ["Arts & Culture", "Blogs"],
    articlesCount: 1,
  },
];

// Sample Articles
export const articles: Article[] = [
  {
    id: "read-like-democracy",
    title: "Read Like Your Democracy Depends on It",
    slug: "read-like-your-democracy-depends-on-it",
    excerpt: "In a country where indifference is rewarded, and reposting an infographic counts as activism, picking up a book might just be the most radical thing you can do.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          In a country where indifference is rewarded, and reposting an infographic counts as activism, picking up a book might just be the most radical thing you can do.
        </p>

        <p>
          What we are witnessing is not the death of democracy, It's the theatre of it.The stage is intact - elections held, flags waved, anchors shouting over each other. But the play is different. The characters are flatter. We now have democratic aesthetics without democratic ethics. Because now,apparently, unity looks like uniformity.
        </p>

        <p>
          We've been here before , every era gets its own remix of "bhai-bhai.",  until someone benefits from our family feud. The actors change, the script doesn't. What scares me isn't just the violence - it's that some people have grown disturbingly comfortable with it.
        </p>

        <p>
          People expect that the death of democracy comes with censorship (It does actually), but what's actually more efficient is self-censorship- the quiet moment when a writer thinks, "This won't get published anyway." Or when a student journalist - like me - spends more time editing out names than writing them in, and finally sighs, "Let's not talk about that here."
        </p>

        <p>
          So what do you do in a moment like this - when someone turns the boundary between right and wrong into a skipping rope? You read. Because while conversations are throttled and facts folded to fit the play, libraries still don't ask for your surname.
        </p>

        <p>
          So read - because the story is being rewritten. And if you don't pay attention, you'll forget what the original even said.
        </p>

        <p>
          Read what came before. Read because this has happened before. Read because the past isn't just history - it's a warning.
        </p>

        <section class="article-section">
          <p>
            📘<strong>How Fascism Works – Jason Stanley</strong><br/>
            "No single book is as relevant to the present moment."—Claudia Rankine, author of Citizen
          </p>

          <p>
            A philosopher by training and the son of WWII refugees, Jason Stanley doesn't just study fascism -  he's lived it. He shows us that fascism doesn't always knock. Sometimes it just walks right in wearing a sadri and kurta,, smiling for the cameras. In this unnervingly prescient book, Stanley outlines the ten pillars of fascist politics - tactics that turn "us vs them" into law, wrap propaganda in the language of patriotism, and glorify a mythic past, criminalize minorities, attack intellectuals (because books are scarier than bombs), and shout "law and order" until no one remembers what justice looks like. . Drawing from Hungary, Poland, Myanmar, India, and the U.S., he makes one thing brutally clear: a country doesn't need to be fascist to suffer from fascist politics. It starts small-  a mythic past here, a criminalized minority there -  until the rhetoric becomes policy, and the abnormal becomes Tuesday. Think of it as a red flag manual for democracies on autopilot. Required reading for anyone who still believes "it can't happen here."
          </p>

          <p>
            📘<strong>The Anatomy of Hate – Revati Laul</strong><br/>
            What makes a person set fire to another human being? What makes them watch? What makes them  rip out the foetus from within the womb with a sword and kill it , while a 14 yo hiding under a pile of bodies, pretending to be dead, watches?
          </p>

          <p>
            In The Anatomy of Hate, Revati Laul peels back the skin of Gujarat 2002 and not just as your usual litany of political failures and victim testimonies. It's far more unsettling. Laul stares into the abyss and introduces us to three of its citizens: Suresh, a career criminal with a vendetta as personal as it was communal; Dungar, a low-caste man trying to out-Hindu the upper castes that humiliated him; and Pranav, an upper-caste rebel whose riot participation was as casual as shoplifting, until guilt chewed through his spine.
          </p>

          <p>
            What unites these three isn't ideology- it's brokenness.. Laul doesn't give you caricatures or monsters. She gives you men- flawed, frightened, festering men who weren't born evil, but got there with small steps.Because once we write off hate as inhuman, we lose the plot. Because here's the kicker: the mob isn't some anonymous mass of maniacs. It has names. It has mommy issues. It binge-watches the same shows. It holds day jobs and wedding grudges. It's you on the wrong day, with the wrong crowd, and the right amount of powerlessness.
          </p>

          <p>
            The Anatomy of Hate is a psychological autopsy- with Laul performing it in full view. Hate, she warns, is terrifying not because it's alien- but because it's almost disturbingly human.
          </p>

          <p>
            📘<strong>Becoming Minority – Jyotirmaya Tripathy & Sudarsan Padmanabhan</strong><br/>
            What if being the majority wasn't enough? What if you needed to feel like the underdog- just enough to justify dominance, just enough to cry foul every time someone else spoke? In Becoming Minority, Tripathy and Padmanabhan dissect how policies, populist rhetoric, and cultural anxieties are weaponized to manufacture a crisis: the imagined decline of the Hindu upper-caste self.
          </p>

          <p>
            This isn't a book about minorities. It's a book about how the state and society produce minorities- not just through exclusion, but through majoritarian fear. The "minority" here is a political construct, engineered via debates on secularism, nationalism, reservation, gender, and of course, beef.
          </p>

          <p>
            The genius (and horror) lies in how grievance is harvested from decades of privilege. How a dominant group begins to believe it is under siege- because someone else got a scholarship, a film role, or a voice.
          </p>

          <p>
            Tripathy and Padmanabhan trace this sleight of hand across media, policy, and social discourse. It's academic, yes-but dangerously relevant. Because once the most powerful start calling themselves victims, justice itself becomes suspicious.
          </p>

          <p>
            This book asks the real question:
            Who gets to feel like a minority in a country where majorities hold the mic, the mandate, and the mob?
          </p>

          <p>
            So if you're wondering what to do when the noise drowns the truth and neutrality feels like betrayal- start here. Read. Because reading isn't passive. It's defiance in print. It's how you remember what justice sounds like when the slogans get louder and the facts go quiet.
          </p>

          <p>
            Read like your democracy depends on it—because, quite frankly, it does.
          </p>
        </section>
      </div>
    `,
    image: "/bok.jpeg",
    author: {
      id: "1",
      name: "Shumaila Khan",
      username: "shumaila-khan",
      image: "/Shumilaprofile.jpeg"
    },
    category: "Editorial",
    date: "2025-06-19",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Democracy", "Books", "Politics", "Society", "Reading"],
    featured: true,
    isPublished: true
  },
  {
    id: "indus-water-treaty",
    title: "INDUS WATER TREATY: TO BE OR NOT TO BE?",
    slug: "indus-water-treaty-to-be-or-not-to-be",
    excerpt: "An in-depth analysis of the Indus Water Treaty, exploring its historical significance, current relevance, and the complex geopolitical implications of water sharing between India and Pakistan.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          "To be or not to be, that is the question", - It's been nearly 400 years, and yet Hamlet's dilemma still holds water- especially in a world that witnesses Power Dynamics change quicker than iodine dissolving starch or our politicians switching their stances.
        </p>

        <p>
          With India signalling its intent to rethink the Indus Water Treaty, it becomes a necessity for us to explore-Why was it signed in the first place? What was at stake? What fires did it manage to put out? And, the main question in light in today's world, should it have ever existed?
        </p>

        <p>
          Ismail Serageldin is not wrong when he states that "The next world war will be over water", From China's plan to build a dam on Brahmaputra, or the Black Sea Treaty protecting the Black Sea waters for maintaining trade and essential services in Ukraine, water is one thing that is involved directly or indirectly in almost every kinetic and non-kinetic conflict in the world today.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Treaty: What led to its formulation?</h2>
          
          <p>
            When talking about the Indus Water Treaty, we talk of treaty between two freshly divorced nations, simple, right? What has intrigued me is that it was signed in 1960, 13 years after the partition happened! Did Pakistan not need the 'Western Rivers' till 1960? What were the diplomatic tensions that led to the partition of the Indus' waters?
          </p>
          
          <p>
            A plain and straight answer, diplomatically, shall be that it takes time to set everything in sight in a newly built nation and 1960 comes in that time frame. Geographically, Indus and the rivers do have a track that is not in one country, which may have led to tensions in the future over the waters' lordship (as if it didn't lead to one).
          </p>

          <p>
            Historically, during the partition of British India in 1947 and the formation of the two states, border lines were drawn following what was defined as the "Indus watershed" (Gardner, 2019). The position of the lines meant that India gained control of upstream barrages, which regulated water flow into Pakistan (TBL, 2014). As the boundary between India and Pakistan cut across many of the river's tributaries, an upstream-downstream power structure emerged, which has been the source of tensions between the two countries, particularly in response to dam projects in Indian-administered territory.
          </p>

          <p>
            To sort out water-related disputes between the neighbors, the IWT came into light as a landmark treaty dividing water between two countries, defining the usages, limiting over-consumption and demarcating limits not explored earlier. India had in its bag, the Eastern Rivers (Ravi, Beas and Satluj), while Pakistan bagged the Western Rivers (Indus, Jhelum and Chenab) as defined in Article 1, clauses 5 and 6.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">What did the Treaty solve?</h2>
          
          <p>
            Now, brace yourself for some geography - because, Pakistan is a country that depends almost exclusively on Indus and its tributaries for its irrigation and drinking needs.
          </p>

          <p>
            According to CSIS, over three-quarters of the country's annually available renewable water resources come from outside its borders, almost entirely from the Indus. Nine in every ten Pakistanis live within the Indus Basin. Major cities such as Karachi and Lahore rely upon the river—or on groundwater aquifers that the Indus helps replenish—for their drinking water. Agriculture claims 94 percent of water withdrawals in Pakistan. The sector constitutes the backbone of the economy, representing 22.9 percent of GDP, accounting for 24.4 percent of exports, providing livelihoods for two-thirds of the rural population, and employing 37.4 percent of the total labor force. The Indus system waters more than 90 percent of the nation's crops. Similarly, Pakistan generates one-fifth of its electricity from hydropower. Every one of the country's 21 hydroelectric plants is located in the Indus Basin.
          </p>

          <p>
            Thanks to the treaty, Pakistan's literal lifeline didn't flat-out as could have happened if the waters were not regulated, considering the fact that India did have sovereign control over the upstream areas of the rivers and could easily block the flow of the water into Pakistan, or could use it up, dam it, or divert the water into canals, leading to a literal drought and scarcity of water in the neighbor's farms.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Can India block Indus waters?</h2>
          
          <p>
            The treaty isn't just ceremonial, and does prevent both the sides from constructing and setting up such features that obstruct the flow and amount of water going into the other territory. Practically speaking, India, at the moment does not possess adequate infrastructure to block the Indus water completely, and it would require years' time to do so as the sources suggest. From where I think, on a personal note, India is at a point where it's getting Chinese-equivalent business opportunities, hence, would not engage in any such stunts which would harm the business as well as lead to diplomatic isolation.
          </p>

          <p>
            With the treaty being in abeyance, the final verdict still stays heavily fogged, as to what can happen and what will happen.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Ultimate Question: Should the treaty exist at all?</h2>
          
          <p>
            With complete control over the origins and upstreams of the rivers, India could have shut off the taps and left Pakistan parched—its fields cracked, its cities dry, its diplomacy desperate. And yet, it didn't. Not in 1960, and not even now—despite decades of provocations, violations, and the kind of diplomatic needlework that makes even seasoned politicians wince. When one side funds cross-border terrorism more enthusiastically than some governments fund education (pun very much intended), the impulse to retaliate by damming the flow is understandable. But India, for all its justified grievances, does not confuse citizens with regimes, or vengeance with justice. Diplomacy, dialogue, and the dignity of human life have always been part of the Indian playbook—whether or not the other side plays fair.
          </p>

          <p>
            Yes, the Treaty feels outdated. Yes, it was born in a world that no longer exists. But scrapping it altogether? That's not policy—it's performance. And in a world where water is fast becoming the currency of control, diplomacy is still the stronger current.
          </p>

          <p>
            But, should it exist at all? Maybe not in its original shape, maybe in a form, that is deemed fitter to the world now, maybe in a structure that fits the relations between the two nations and with provisions that it stays fair no matter what
          </p>

          <p class="conclusion">
            The answer still stays fogged and brings us to our original question- "To be or not to be?". The answer may never be clear to us, the question may always stand like the treaty, with all its cracks and crevices. The fact that the question is still in its place, in a world of retaliatory responses, is probably what makes the Indus Water Treaty a tragedy, a triumph – or simply, but not so simply, the lifeline of two nations.
          </p>
        </section>
      </div>
    `,
    image: "/Induswater.jpeg",
    author: authors.find(a => a.username === "atulit-pandey")!,
    category: "international",
    date: "2025-06-08",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["International Relations", "Water Treaty", "India-Pakistan", "Geopolitics", "Diplomacy"],
    featured: true,
    isPublished: true,
  },
  {
    id: "voice-for-lu",
    title: "A Voice for LU",
    slug: "a-voice-for-lu",
    excerpt: "From the Editor's desk: A letter to our readers about the launch of LU Chronicles and our commitment to principled journalism.",
    content: `<p>From the Editor's desk</p>

<p>Dear readers,</p>

<p>The innovation with which we publish this first issue today, 7 June 2025, is justified not by ambition alone, but by a set of increasingly urgent realities: the dullness of the moment, the thinning of discourse, and the rising appetite for something more substantive among the student body. Something that doesn't insult the intelligence.</p>

<p>Ever since much of the country's media has traded substance for spectacle, the time seems ripe, even overdue, for an unpretentious sheet, one that contains the latest news and short, succinct articles of interest, delivering relevant coverage and clear, concise commentary with neither affectation nor apology.</p>

<p>It is our purpose to establish such a sheet, ideally a daily, and we hope to welcome the cooperation so necessary for its success. Our columns are open to discussion on all subjects deemed, to borrow a phrase, "consistent with decorum and morality," though what falls within those lines is, we believe, something to be negotiated rather than assumed. We welcome contributions from students, faculty, and staff alike, and we encourage a diversity of voices, not for the sake of plurality alone, but because good journalism demands the challenge of competing ideas, and strong writing is born in dialogue, not consensus.</p>

<p>With this first edition, we set forth not merely a publication but a proposition: that there is still value : civic, intellectual and cultural in student journalism. That within the walls of the University of Lucknow , as within any institution of learning, there persists a need for reportage that is timely, critique that is constructive, and writing that holds both individuals and systems to account. In doing so, we step into a rare role- that of giving shape to a new chapter in student journalism across the country.</p>

<p>We begin in earnest, not to flatter, nor to rebel without cause, but to capture what it means to be young, informed, and present at this university at this moment.</p>

<p>We recognize that Lucknow University does not exist in isolation. The events within its classrooms, common rooms, and courtrooms are shaped by and reflect the broader cultural and political forces outside its gates. If education today exists at the crossroads of aspiration and anxiety, then student journalism must be willing to walk that line as well. It is not enough to report campus events. We must examine how those events connect to the larger social landscape: how national policy shapes campus life, how generational change influences classroom debate, how students think and feel in a world increasingly defined by complexity and uncertainty.</p>

<p>Let the pages ahead be filled not with idle chatter, but with the voices of those who dare to think and to question. We shall cover lectures and laws, sports and science, personalities and politics. We will be both critics and celebrants of university life.</p>

<p>We do not promise perfection. We promise participation.</p>

<p>To publish is to participate. To speak is to shape. Let this paper be shaped by the hands of those who believe that education is not passive, but passionate.</p>

<p>Ours is not a paper of posture or pretense, but of principled participation. And with that participation comes a responsibility: to our readers, our sources, our subjects, and one another.</p>

<p>To that end, we affirm the following commitments:</p>

<ul>
  <li>We shall report truthfully, without sensationalism or embellishment.</li>
  <li>We shall reveal what we can-including names-unless doing so endangers the safety, dignity, or trust of our sources.</li>
  <li>When we err, we shall correct our mistakes promptly and prominently, with neither delay nor deflection.</li>
  <li>We shall reflect the diversity of our university in our newsroom and in our pages-not as a token gesture, but as a journalistic necessity.</li>
  <li>We shall distinguish reporting from opinion, and clearly mark the difference.</li>
  <li>When our editors, writers, or institution ourselves become newsworthy, we shall not look away.</li>
  <li>We shall scrutinize our sources and investigate the institutions that shape campus life-especially those that wield power without transparency.</li>
  <li>We recognize that the appearance of a conflict of interest may be as corrosive as the reality-and will act accordingly.</li>
  <li>We shall state not only what we know, but also what we do not-and why.</li>
  <li>We shall honour our word-not only through promises made, but through promises kept.</li>
    </ul>

<p>These principles are not exhaustive, nor are they static. Like journalism itself, they will evolve with time, dialogue, and reflection. They are our starting point-and we share them publicly because journalism, like democracy, demands accountability.</p>

<p>And if, along the way, we ruffle a few feathers, let it be not out of arrogance, but in service of the most basic journalistic principle: to speak the truth as clearly as we can, while we still can.</p>

<p>May LU.Chronicles serve not only the University of Lucknow, but the very idea of a university-as a living, breathing republic of letters and dialogue.</p>

<p>Let the dialogues begin.</p>`,
    image: "/IMG_0417.JPEG",
    category: "Editorial",
    author: {
      id: "1",
      name: "Shumaila Khan",
      username: "shumaila-khan",
      image: "/Shumilaprofile.jpeg",
    },
    date: "June 7, 2025",
    views: 0,
    featured: true,
    hero: true
  },
  {
    id: "trp-over-truth",
    title: "TRP Over Truth: Fall of Indian Journalism in Times of Crisis",
    slug: "trp-over-truth-fall-of-indian-journalism",
    excerpt: "An in-depth analysis of how TRP-driven journalism has compromised crisis reporting in India, exploring the economic pressures, regulatory challenges, and potential solutions for sustainable journalism in the digital age.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          The 2020 TRP fraud made a scary reality known: all Rs 400 a month was required to determine the fate of budgetary distribution of thousands of crores of rupees, and only 10 families' bribe money was necessary for cheaters to tamper with English news channel ratings. The tampering not only skewed advertisement revenue—it actually changed fundamentally what Indians perceived as valid news.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Crisis Coverage Issue</h2>
          
          <p>
            Current crises reveal how TRP-based journalism disappoints public interest. In the May 2023 violence in Manipur that claimed more than 250 lives and displaced many thousands, national media reporting tended to simplify multifaceted ethnic tensions into melodramas for late-night debates. Likewise, the 2024 NEET paper leak that involved 2.3 million students had plenty of studio talk but sparse investigative journalism into systemic exam failure.
          </p>
          
          <p>
            Nonetheless, audience preference data indicates complexity. According to a 2023 Reuters Institute survey, although 69% of Indians are concerned about misinformation, news consumption habits still gravitate towards sensational content, resulting in a demand-supply paradox that media houses are unable to disentangle.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Economic Reality</h2>
          
          <h3 class="sub-heading">Market Forces vs. Editorial Independence</h3>
          <p>
            They contend that TRP-governed content is an expression of authentic audience tastes, rather than media manipulation. Republic TV's Arnab Goswami, for example, holds high-decibel journalism up as defending democracy by keeping elites accountable. Such a view implies elite disconnection from popular news forms and mass preferences.
          </p>
          
          <h3 class="sub-heading">Financial Constraints and Brain Drain</h3>
          <p>
            The financial pressures are real. Media organizations are under strict financial constraints with research wings either unable to hold on to trained staff because of higher offers in corporate houses. Six years were needed to build a research wing at the Hindustan Times, the executive editor said, and the staff of key personnel continuously walked out to take better-paying jobs.
          </p>
          
          <h3 class="sub-heading">Missed Opportunities in Data Journalism</h3>
          <p>
            India's open government portal contains close to 10,000 resources and 240 visualizations but is mostly overlooked by the mainstream media. Rather than using these resources for evidence-based journalism, newsrooms opted for opinionated content that involved little investment but created maximum reach.
          </p>
          
          <p>
            The irony is stark: as global media outlets increasingly turned to data visualization for sophisticated storytelling, Indian media was still stuck in debate-programming mode. It was a lost opportunity, especially considering India's advanced infrastructure for data collection it had inherited from colonial administration systems as well as post-independence planning efforts.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The State's Dual Role</h2>
          
          <h3 class="sub-heading">Revenue Dependencies and Editorial Compromise</h3>
          <p>
            Government advertising, an important source of revenue, produced editorial dependencies that undermined independence. When good coverage was attached to financial survival, public-interest journalism became economically unsustainable. This generated what economists referred to as a "scarcity economy" in which ethical journalism did not have sufficient resources to compete with sensationalized material.
          </p>
          
          <h3 class="sub-heading">Underutilized Government Data Resources</h3>
          <p>
            But the state also offered unparalleled access to data through Right to Information laws and e-governance projects. The problem was newsrooms without the technical wherewithal to make best use of the same.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Digital Disruption: Promise and Peril</h2>
          
          <h3 class="sub-heading">Alternative Revenue Models</h3>
          <p>
            Online platforms provided solutions with subscription models and targeted audience capture. Titles such as The Ken and The Wire showed that good journalism had alternative revenue streams available to it beyond standard advertising. In the same way, data journalism ventures such as IndiaSpend also demonstrated that evidence-based reporting had captive audiences.
          </p>
          
          <h3 class="sub-heading">Algorithmic Amplification of Problems</h3>
          <p>
            But digital platforms also exacerbated the TRP problem with algorithmic content promotion that was driven by engagement rather than accuracy. Social media metrics now dictated editorial decisions as much as television ratings used to.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Toward Sustainable Solutions</h2>
          
          <p class="solutions-intro">
            The way ahead would demand systemic changes instead of piece-by-piece reforms:
          </p>
          
          <div class="solutions-grid">
            <div class="solution-item">
              <h3 class="solution-heading">Revenue Diversification</h3>
              <p>
                News organizations needed to build subscription models, educational collaborations, and reader-funded journalism to lower the reliance on advertising.
              </p>
            </div>
            
            <div class="solution-item">
              <h3 class="solution-heading">Training and Capacity Building</h3>
              <p>
                Newsrooms required specialized data journalism and digital verification training. As the Asian College of Journalism showed, young reporters could be trained in both technical and analytical abilities required for contemporary reporting.
              </p>
            </div>
            
            <div class="solution-item">
              <h3 class="solution-heading">Regulatory Balance</h3>
              <p>
                Unrestricted government advertisement allotment with no editorial riders, along with enhanced penalties for intentional misinformation in times of crisis.
              </p>
            </div>
            
            <div class="solution-item">
              <h3 class="solution-heading">Collaborative Models</h3>
              <p>
                Joint research facilities between media establishments to render investigative journalism financially feasible.
              </p>
            </div>
          </div>
          
          <h3 class="sub-heading">The Broader Democratic Context</h3>
          <p>
            The crisis in journalism reflected broader democratic challenges. Citizens needed accurate information during crises, but market forces often prioritized entertainment over education. This tension wasn't unique to India—global media faced similar pressures as attention economies reshaped information consumption.
          </p>
          
          <h3 class="sub-heading">Signs of Hope</h3>
          <p>
            Quality journalism continued in spite of these limitations. The Hindu's analysis of election data, Scroll's investigative journalism, and local media holding strong to ethical standards showed that alternative models were still possible. These offered the hope that the decision between commercial success and editorial integrity wasn't zero-sum.
          </p>
          
          <p>
            The debate wasn't whether sensational journalism could or should exist—market forces guaranteed it would. Instead, the challenge lay in making room for other journalism models catering to other democratic roles. Some could excel at entertainment-oriented news for the mass audience, while others tried out deep analysis for serious citizens.
          </p>
        </section>

        <section class="article-section conclusion">
          <h2 class="section-heading">Conclusion</h2>
          
          <p>
            The TRP-led evolution of Indian journalism was also representative of broader market forces versus democratic demands. Sensational material got short-term attention, but real democracy demanded institutions that valued accuracy over audience, context over controversy.
          </p>
          
          <p>
            The answer wasn't to eradicate commercial journalism but to promote ecosystem diversity where various models could coexist. This required deliberate decisions by media owners, regulatory encouragement of editorial autonomy, and citizen investment in high-quality journalism through subscriptions and participation.
          </p>
          
          <p class="final-thought">
            The collapse of crisis journalism wasn't inevitable—it was a decision that could still be undone through institutional reform and collective action.
          </p>
        </section>
      </div>
    `,
    image: "/Trpovertruth.jpeg",
    author: authors.find(a => a.username === "abhinav-upadhyay")!,
    category: "op-ed",
    date: "2025-06-08",
    readTime: "15 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Journalism", "Media", "TRP", "India", "Crisis Reporting"],
    featured: true,
    isPublished: true,
  },
  {
    id: "coming-soon-2",
    title: "The Future of Education: AI in the Classroom",
    slug: "the-future-of-education-ai-in-the-classroom",
    excerpt: "Exploring how artificial intelligence is transforming education and what it means for the future of learning.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          As artificial intelligence continues to evolve, its impact on education becomes increasingly profound. From personalized learning experiences to automated grading systems, AI is reshaping how we teach and learn.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Personalized Learning</h2>
          
          <p>
            AI-powered learning platforms can now adapt to individual student needs, providing customized content and pacing. This personalization helps students learn at their own pace while ensuring they master essential concepts.
          </p>
          
          <p>
            Studies show that personalized learning can improve student engagement and achievement. However, it also raises important questions about equity and access to technology.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Role of Teachers</h2>
          
          <p>
            While AI can automate many tasks, it cannot replace the human element in education. Teachers remain crucial for providing emotional support, fostering critical thinking, and building relationships with students.
          </p>

          <p>
            The future of education lies in finding the right balance between AI assistance and human guidance.
          </p>
        </section>

        <section class="article-section conclusion">
          <h2 class="section-heading">Looking Ahead</h2>
          
          <p>
            As we embrace AI in education, we must ensure that technology serves to enhance learning rather than replace human interaction. The goal should be to create an educational environment that combines the best of both worlds.
          </p>
        </section>
      </div>
    `,
    image: "/LULOGO.jpeg",
    category: "Sci-tech",
    author: authors.find(a => a.username === "prerna-srivastava")!,
    date: "2025-06-08",
    readTime: "5 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Education", "AI", "Technology", "Future of Learning"],
    featured: true,
    isPublished: true
  },
  {
    id: "coming-soon-3",
    title: "Campus Life: A Day in the Life of a LU Student",
    slug: "campus-life-a-day-in-the-life-of-a-lu-student",
    excerpt: "An intimate look at the daily experiences of students at Lucknow University, from classes to cultural activities.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          The University of Lucknow campus buzzes with activity from dawn to dusk. Let's follow a typical day in the life of our students, capturing the essence of campus life.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Morning Routine</h2>
          
          <p>
            The day begins early for many students, with some attending morning classes while others participate in sports activities or study groups. The campus comes alive with the sound of students rushing to their first lectures.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Academic Life</h2>
          
          <p>
            Classes are the heart of university life, where students engage in lively discussions and learn from experienced faculty members. The libraries are always busy with students working on assignments and research projects.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Cultural Activities</h2>

          <p>
            Beyond academics, the campus hosts numerous cultural events, from music performances to literary festivals. These activities provide students with opportunities to showcase their talents and build lasting friendships.
          </p>
        </section>

        <section class="article-section conclusion">
          <h2 class="section-heading">Evening Reflections</h2>

          <p>
            As the day winds down, students gather in the common areas to relax and share stories. The campus takes on a peaceful atmosphere, with the setting sun casting long shadows across the historic buildings.
          </p>
        </section>
      </div>
    `,
    image: "/LULOGO.jpeg",
    category: "University",
    author: authors.find(a => a.username === "trishla-chaudhary")!,
    date: "2025-06-08",
    readTime: "4 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Campus Life", "Student Experience", "University Culture"],
    featured: true,
    isPublished: true
  },
  {
    id: "coming-soon-4",
    title: "The Art of Storytelling: LU's Literary Heritage",
    slug: "the-art-of-storytelling-lus-literary-heritage",
    excerpt: "Exploring the rich literary traditions of Lucknow University and its contribution to Indian literature.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          Lucknow University has long been a cradle of literary excellence, nurturing generations of writers, poets, and storytellers who have shaped Indian literature.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Literary Legacy</h2>

        <p>
            The university's Department of English and Modern Indian Languages has produced numerous acclaimed authors and scholars. Their works reflect the diverse cultural heritage of Lucknow and India.
        </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Contemporary Voices</h2>
          
          <p>
            Today's students continue this tradition, participating in literary societies and publishing their work. The annual literary festival brings together established and emerging writers for a celebration of words and ideas.
          </p>
        </section>

        <section class="article-section conclusion">
          <h2 class="section-heading">Looking Forward</h2>
          
          <p>
            As we honor our literary heritage, we also look to the future, encouraging new voices and perspectives to enrich our storytelling tradition.
          </p>
        </section>
      </div>
    `,
    image: "/LULOGO.jpeg",
    category: "Arts & Culture",
    author: authors.find(a => a.username === "mani-soni")!,
    date: "2025-06-08",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Literature", "Storytelling", "Cultural Heritage", "University History"],
    featured: true,
    isPublished: true
  },
  {
    id: "vikram-misri-controversy",
    title: "Foreign Policy and Domestic Response: Unpacking The Vikram Misri Controversy",
    slug: "foreign-policy-domestic-response-vikram-misri",
    excerpt: "An in-depth analysis of the public backlash against Foreign Secretary Vikram Misri following the ceasefire agreement, exploring the intersection of diplomacy, public sentiment, and online discourse in modern India.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          "Deshdrohi," "Gaddar," "traitor," — these are just a few of the labels hurled at India's Foreign Secretary, Vikram Misri, after the announcement of a ceasefire agreement. The online backlash was swift and intense, targeting not just Misri's stance, but his decades of diplomatic proficiency.
          </p>

          <p>
          This incident doesn't just focus on one diplomat—it reflects broader public attitudes and highlights the urgent need to reconsider how we engage, both online and offline. This piece looks at what led to the controversy, the nature of the criticism, and the broader question it raises: how does India respond to voices that advocate for dialogue over confrontation?
        </p>

        <section class="article-section">
          <h2 class="section-heading">Navigating Diplomacy: Who is Vikram Misri?</h2>
          
          <p>
            Vikram Misri is an IFS from the batch of 1989. Misri was appointed as the 35th foreign secretary to India on July 15, 2024. Over the course of his distinguished diplomatic career, Misri was Private Secretary to three Indian Prime Ministers.
          </p>
          
          <p>
            Vikram Misri is recognized for his deep knowledge of China. He is also regarded as the "China Expert". Appointed as India's Ambassador to China in 2018, he played a significant role during the 2020 Galwan Valley clashes between Indian and Chinese troops in Ladakh and in multiple rounds of de-escalation talks.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Vikram Misri and the Operation Sindoor</h2>
          
          <p>
            As tensions flared between India and Pakistan, Foreign Secretary Vikram Misri became a steady and trusted voice for the country. In the days that followed Operation Sindoor, he stepped into the spotlight, taking on his shoulders the heavy weight of explaining the government's stance to both Indians and the world. Calmly and with crystalline clarity, he shared updates on military actions, ceasefire talks, and India's measured responses to provocations from our neighbours. In a time filled with uncertainty and fear, his role was crucial—not just in keeping people informed, but also in helping the nation hold onto hope and trust during a time of distress.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">What caused the Backlash?</h2>
          
          <p>
            On May 10, Misri publicly announced that India and Pakistan had agreed to a mutual ceasefire, following four days of escalating drone and missile exchanges that had pushed the region dangerously close to broader conflict. He stated that the agreement came after a direct conversation between the Director Generals of Military Operations (DGMOs) from both nations, with the ceasefire set to take immediate effect.
          </p>

          <p>
            After the ceasefire announcement, those who had been openly demanding a strong retaliation against Pakistan after the Pahalgam terror attack, were disappointed over the ceasefire agreement and aimed their anger at him.
          </p>

          <p>
            Vikram Misri faced severe online backlash, with many branding him a "traitor" and "deshdrohi." The harassment didn't stop with him—his family, especially his daughter, became targets of relentless trolling and abuse. One cannot help but feel scared and discouraged while imagining to be serving as the Foreign Secretary of their country, dedicating their life to its service, only to see one's own family and loved ones being dragged into the line of fire but this went far beyond trolling. Some individuals circulated Vikram Misri's past social media posts, disclosed private contact information belonging to his family, and made abusive remarks targeting his daughter. This relentless abuse and invasion of privacy forced the Foreign Secretary to lock his profile to protect himself and his family from further trolling and doxxing. Amid the storm of online harassment, India's Foreign Secretary stayed silent and chose not to respond publicly. He restricted access to his account on platform X, which now reads: "These posts are protected."
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Support From All Quarters</h2>
          
          <p>
            Even though the backlash was harsh and uncalled for, the support Vikram Misri received reflected the trust he had earned through his years of service. Former diplomats, politicians, government bodies, they all stood firmly in his support.
          </p>

          <p>
            The Former Foreign Secretary Nirupama Menon called the trolling of the senior diplomat "utterly shameful" and said it "crosses every line of decency".
          </p>

          <p>
            The IAS Association expressed solidarity with Vikram Misri and his family on X, calling the personal attacks regrettable and reaffirming their support for the dignity of public service.
          </p>

          <p>
            The IFS Association described the trolling as "despicable" and stood in solidarity with Misri.
          </p>

          <p>
            Government bodies like the National Commission for Women (NCW) have reacted strongly to online trolling of Misri and his family, including his daughters.
          </p>

          <p>
            Condemning the attack on Misri's daughter, NCW chief Vijaya Rahatkar stated that sharing the contact details of the young woman on social media platforms and subjecting her to online abuse is a "grossly irresponsible act" and a "serious breach of privacy".
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Strength To Pause</h2>
          
          <p>
            When the country was raw with grief and the urge to strike back was overwhelming, Vikram Misri chose something far harder than aggression—he chose restraint. Out of the knowledge that wars aren't won on television panels or Twitter threads, and that the real cost of conflict is paid not in headlines, but in human lives.
          </p>

          <p>
            He wasn't acting alone. As Foreign Secretary, he was delivering a decision shaped by India's top leadership. His job wasn't to match public anger, it was to stay steady when it mattered most.
          </p>

          <p>
            The ceasefire wasn't a weakness. It was a deliberate choice. A way to show that real power isn't in reacting loudest, it's in knowing when to pause, and why.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Seeing/Peeking beyond the trolls</h2>
          
          <p>
            The vicious trolling of Vikram Misri has forced us to confront a troubling question: How does India treat those who dedicate their lives to diplomacy and national service? For warmongers, war is the only solution—but for seasoned diplomats like Misri, dialogue and discussion are the real keys to resolution.
          </p>

          <p>
            The anonymous mobs behind the keyboard need to rethink the entire situation. Doxxing, abuse, and name-calling are nothing short of criminal.
          </p>

          <p class="conclusion">
            The question, then, isn't whether Vikram Misri was right. The question is: are we ready to be a country that honors its peacemakers, not just its warriors?
          </p>
        </section>
      </div>
    `,
    image: "/Vikrammishri.jpeg",
    author: authors.find(a => a.username === "prerna-srivastava")!,
    category: "national",
    date: "2025-06-08",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Diplomacy", "Foreign Policy", "India", "Social Media", "Public Discourse"],
    featured: true,
    isPublished: true,
  },
  {
    id: "geopolitical-rise-nuclear-rivals",
    title: "From Partition to Power Play: The Geopolitical Rise of Two Nuclear Rivals",
    slug: "geopolitical-rise-nuclear-rivals",
    excerpt: "From non-alignment to multi-alignment, from Cold War pawns to global power brokers—how did two nations born from the same partition in 1947 end up on opposite sides of the world's new great game?",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          From non-alignment to multi-alignment, from Cold War pawns to global power brokers—how did two nations born from the same partition in 1947 end up on opposite sides of the world's new great game? The answer lies not in their similarities, but in the choices that pulled them apart.
        </p>

        <p>
          In May 2025, we all saw how two nuclear nations came to the threshold of full-fledged war. While the world was too focused on Military power, we forgot to recognize the power that not only makes countries stand in global politics but also shapes world dynamics.
        </p>

        <p>
          The power this article will explain is the geopolitics of TWO NUCLEAR NATIONS which are indeed INDIA AND PAKISTAN.
        </p>

        <p>
          This article will not only go through the current geopolitics but also answer some crucial questions like: How today's geopolitics of both nations is rooted in its past and how domestic politics influenced it. Not only that we will get to know why countries like the US which had good relations with Pakistan now see INDIA as its alternative in the South Asian continent, where do INDIA AND PAKISTAN stand in world politics today?
        </p>

        <section class="article-section">
          <h2 class="section-heading">INDIA'S BACKGROUND: From 1947's NAM to 2025's Multi-alignment</h2>
          
          <p>
            First, to understand this, we need to understand the past of India's foreign policies and how it has evolved.
          </p>
          
          <p>
            While countries had to choose sides in Cold War politics, India decided to take a path that felt like a gambling game. This was risky for a country that had just been partitioned, faced a large refugee problem, wasn't fully integrated as a nation, and inherited a stagnant economy marked by backward industries from British rule.
          </p>

          <p>
            Well, well, every nation has to choose a side—otherwise how will it ask for help?
          </p>

          <h3>1947 TO 1970s:</h3>
          <p>
            Though INDIA decided to choose a path of NON-ALIGNMENT which later turned out to be NAM policy under our first Prime Minister and also our longest-serving External Affairs Minister throughout his 17-year premiership, Jawaharlal Nehru. NAM [Non-Aligned Movement] meant that India would not choose any sides, neither the USSR nor the US, but would have its own autonomy and independence. Countries that chose this path were called third world and many others misunderstood what this meant. While some understood it as isolation in world politics, in reality it was like taking benefit from both while not involving one side of politics. This made INDIA lead in third-world politics.
          </p>

          <p>
            Though INDIA was in support of peace Pakistan took a step to have war in Kashmir where the 1947-48 war took place which started India's relation with Pakistan as bitter as could be! Though India and Pakistan took their respective paths, the clashes continued, as we see in current politics today.
          </p>

          <p>
            However, the same thing was not with China!
          </p>

          <p>
            During this era, many new nations were emerging and the decolonization era was going on. China was one of the emerging nations. During this time India chose a path of friendship with China as India was the first noncommunist nation that recognized China's existence. India and China had a Pancheel agreement and while India thought it would neighbor with the peaceful agreement, China had other plans. There was a slogan, "HINDI-CHINI BHAI BHAI," which showed the friendship between these two nations at the time. However, during this period China invaded Tibet which made it suspicious for INDIA. India gave asylum to DALAI LAMA which further strained both country's relations. Both countries started to have distrust and China attacked INDIA in 1962, leading to the Sino-Indian war of that time. This resulted in the Distrust between two nations. After 1962, India realized that just following a peaceful foreign policy wasn't enough - the country also needed to build strong defense capabilities and be ready to face any threats or challenges from other nations.
          </p>

          <h3>1970s TO 1990s:</h3>
          <p>
            Through this time, Nehru's policies were replaced by a new shift toward more pragmatic policies. During the decades of the 1970s to 1990s, India emerged as not only a leader in peace but also an emerging power with a strong position in geopolitics. It made it emerge as powerful in every dynamic whether it is military or nuclear power.
          </p>

          <h3>1990s TO 2000s:</h3>
          <p>
            However, changes are something that can't be stopped leading INDIA to change its geopolitical dynamics from the 1990s when a massive change took place in Moscow. While INDIA had its NAM policy the USSR's fall forced it to have better relations with us. In addition, India's liberation policies showed it as a country with new doors. There was not only this shift but also the shift we see the US taking. While the US had close relations with Pakistan, as we will see in further sections. Pakistan made decisions that made the US have better alternatives in the Asian continent. In addition, the shift of Pakistan to becoming close to China makes it more suspicious for the US. This resulted in a closer relationship between INDIA and the US in the decade of 2000s. This era was marked following the historic India-US nuclear deal, unveiled through a groundbreaking joint statement by President George W. Bush and Prime Minister Manmohan Singh on July 18, 2005, represented a seismic shift in global nuclear diplomacy by welcoming India into the international nuclear framework while acknowledging its responsible civilian nuclear capabilities.
          </p>

          <h3>INSTABILITY-STABILITY PARADOX:</h3>
          <p>
            The nuclear power emergence of India, as well as Pakistan in a later period, created a situation of instability stability paradox where the instability-stability paradox between India and Pakistan suggests that while nuclear weapons deter full-scale war (stability), they embolden lower-level conflicts like proxy wars and skirmishes (instability). This dynamic has enabled Pakistan to pursue asymmetric strategies, assuming India will avoid escalation due to the threat of nuclear retaliation.
          </p>

          <h3>LOOK EAST:</h3>
          <p>
            This era also showed INDIA having policies of looking east where India understood the power of ASEAN [Association of Southeast Asian Nations], and took influential participation in regional affairs, adapting to the changing geopolitical landscape of the Indo-Pacific.
          </p>

          <h3>TRANSFORMATION TO MULTI-ALIGNMENT:</h3>
          <p>
            In an era of NDA government, India shifted its focus from NAM to a multi-alignment policy where it does not only focus on autonomy in its policy but emphasizes multilateralism and regional cooperation in various forums (e.g., BRICS, G20), and defense collaborations. This made INDIA emerge into a nation that not only sits in the major talks but also shapes it.
          </p>

          <p>
            This evolution of its policy came with challenges as we see INDIA CAME CLOSE TO THE US AND WEST WHILE BALANCING WITH OLD ALLIES, Pakistan too made the strategic path to balance in world politics.
          </p>

          <p>
            To understand this we need to understand the geopolitics of Pakistan.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">PAKISTAN'S BACKGROUND: FROM US ALLY TO CHINA'S FRIEND</h2>
          
          <p>
            During PAKISTAN'S era of independence, Jinnah envisioned a secular Pakistan that would "stand by the United Nations Charter" and seek friendship worldwide. In Pakistan, domestic instability—including military coups, economic crises, and political protests—has fueled an assertive foreign stance aimed at "bleeding India with a thousand cuts" and driven large investments in missile and nuclear forces. Pakistan's instability in its democracy, where it is said Pakistan's PM could not even stay for 5 years, makes it clear how its policies are chosen by military leaders, not by the public.
          </p>

          <h3>JINNAH'S VISION'S SHIFT TO MILITARY-DOMINATED FOREIGN POLICY:</h3>
          <p>
            Due to this, in Pakistan, Jinnah's liberal vision quickly gave way to military rule and Islamization, especially under General Zia-ul-Haq in the 1980s. The army and its intelligence services effectively ran foreign policy, often sidelining professional diplomats, and militants increasingly became tools of statecraft.
          </p>

          <p>
            This ideological shift shaped both countries' diplomatic approaches. Pakistan's support for jihadist groups, first against Soviet forces in Afghanistan, then against India in Kashmir—was rationalized as fighting India through "hundreds of little wars." This strategy initially brought U.S. arms during the 1980s Afghan resistance against Soviet occupation but later damaged Pakistan's international reputation when some militants turned against Pakistan itself or launched attacks on India.
          </p>

          <p>
            The Trump and Biden presidencies brought a harsh reality check to Islamabad: America is no longer a reliable ally. After the U.S. withdrawal from Afghanistan in 2021, U.S.-Pakistan relations deteriorated significantly (with mutual blame over the Taliban's return to power), leaving Pakistan scrambling for alternatives.
          </p>

          <h3>PAKISTAN'S DIVERSIFICATION:</h3>
          <p>
            Pakistan's answer? Diversify dramatically.
          </p>

          <p>
            It's hardly a coincidence that China is Islamabad's closest ally. Beijing and Islamabad have long worked together to "balance India," as Indian analyst Srikanth Kondapalli bluntly puts it: "By backing Pakistan— with arms and aid—[China] has tried to balance India and regional power equations." In other words, China supports Pakistan largely to counterbalance its own rivalry with India. Scholar Abraham M. Denmark explains China's thinking: a strong Pakistani ally "can help China prevent the emergence of a continental-sized rival" on its border.
          </p>

          <p>
            What does this look like in practice? Massive Chinese investment in Pakistan's military and infrastructure, including the China-Pakistan Economic Corridor (CPEC), naval bases, and ballistic missiles—all of which India watches with growing concern. For example, the $46 billion CPEC project—linking China's far western province of Xinjiang to the Pakistani port of Gwadar—is explicitly designed to give China a shorter route to the Arabian Sea. This simultaneously increases Beijing's influence in the region while effectively surrounding India.
          </p>

          <p>
            According to The Moscow Times, 2023 saw Pakistan-Russia trade reach a record $1 billion, and even Moscow's deputy premier publicly supported Pakistan's bid to join BRICS (an economic group including Brazil, Russia, India, China, and South Africa). Energy cooperation has become central to this relationship, with Islamabad signing an agreement for a 1,100 km Russia-Pakistan gas pipeline and expressing interest in acquiring Russian S-400 missile defense systems.
          </p>

          <p>
            In short, Pakistan has pivoted toward a China-Russia-Gulf axis as American support has faded. Unlike the post-9/11 decade when Islamabad largely followed Washington's lead, today Pakistan is what analyst Siddiqui calls a "wobblier" partner—seeking any ally willing to keep its economy afloat while downplaying its formerly close relationship with the United States.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">SO WHERE DO INDIA AND PAKISTAN STAND?</h2>
          
          <p>
            In summary, India today enjoys support from a broad coalition of major powers (including the U.S., Russia, Western Europe, Japan, Australia, the UAE, and Israel), while Pakistan depends primarily on China and a handful of Islamic allies.
          </p>

          <p>
            Foreign Affairs magazine has reported that India's leadership now considers global alignment "the surest foundation" for national security. The bottom line: India rarely stands alone. During the May 2025 crisis, the United States, United Kingdom, France, Germany, the United Arab Emirates, Saudi Arabia, and others all urged restraint while tacitly supporting India's right to self-defense. This stands in stark contrast to Pakistan, whose few remaining allies worked quietly through diplomatic channels with limited public support.
          </p>
        </section>
      </div>
    `,
    author: {
      id: "8",
      name: "Ansesveri Laxmi",
      username: "ansesveri-laxmi",
      image: "/Ansesveri Laxmi.jpeg"
    },
    category: "International",
    date: "2025-06-09",
    readTime: "15 min read",
    image: "/geopolitics.jpeg",
    featured: true,
    views: 1250,
    likes: 89,
    comments: []
  },
  {
    id: "running-dry-india-water-crisis",
    title: "Running Dry: India's Escalating Water Crisis Under Climate Change",
    slug: "running-dry-indias-escalating-water-crisis-under-climate-change",
    excerpt: "A comprehensive analysis of India's water crisis and its implications under climate change.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          With just 4% of the world's freshwater and 18% of its population, India's water math no longer adds up. This mismatch places India among the most water-stressed nations in the world. Dropping groundwater supplies, unpredictable rainfall, and poor methods of water use all come together to form a complex and serious water shortage problem.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Worsening Water Supplies</h2>
          
          <p>
            Water availability per person in India has been dropping over the years. It went from 1,816 cubic meters in 2001 to 1,545 cubic meters in 2011. The Central Water Commission predicts this will fall further to 1,219 cubic meters by 2050. This puts India in the "water-stressed" group. A report published in 2024 by the DCM Shriram Foundation and Sattva Knowledge Institute states that almost half of India's districts could face serious water shortages by the middle of the century. Factors behind this include a growing population overuse of water in farming, pollution in water sources, and changes in climate.
          </p>

          <p>
            In many states, people are dealing with rising shallow groundwater contamination. Bihar and West Bengal face arsenic in the water. Rajasthan and Telangana struggle with fluoride pollution. Parts of Punjab even show traces of uranium. These issues worsen problems with public health and access to safe water.
          </p>

          <p>
            Climate change plays a big role in India's growing water crisis. It speeds up the problems and makes them worse. Rainfall patterns are becoming unpredictable. Monsoons are not shorter but also heavier in areas like the Western Ghats. In regions such as Bihar, floods and droughts now overlap instead of arriving in separate seasons.
          </p>

          <p>
            Warmer temperatures are making surface water evaporate faster and causing aquifers to run dry. Glaciers in the Himalayas, which act as India's water source, are melting quicker than before. This puts the future of rivers like the Ganges and Brahmaputra at risk. Research warns that India might see groundwater depletion rise up to three times by 2050 if global climate action doesn't happen.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Broader Social and Economic Effects</h2>
          
          <p>
            Water scarcity's effects can now be seen in many areas. Agriculture, which uses about 84% of India's freshwater, faces serious risks. Farmers growing water-heavy crops like rice and sugarcane—in dry states like Punjab and Maharashtra—are making the problem worse.
          </p>

          <p>
            Water shortages are causing crop failures, which lower farm incomes and increase problems in rural communities. This often forces people to migrate to cities during specific seasons. Cities however, deal with their own water issues. These problems push the growth of slums that lack proper water and sanitation systems.
          </p>

          <p>
            Industries such as textiles, thermal power plants, and pharmaceuticals face delays because water supply is limited. Public health also takes a hit, as waterborne diseases are becoming more common. A 2024 NITI Aayog report states that over 200,000 people die every year because they cannot access safe drinking water. Conflicts over water between states are also becoming more serious. Arguments over rivers like the Cauvery and Yamuna are getting worse.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Government and Community Interventions</h2>
          
          <p>
            The government has introduced many programs to tackle the water crisis. Jal Shakti Abhiyan focuses on saving water and collecting rainwater. The Atal Bhujal Yojana, backed by the World Bank, works to manage groundwater by involving communities in water planning and budgeting.
          </p>

          <p>
            Communities have also made a difference through their efforts. Rural women in Bundelkhand known as the Jal Sahelis, have brought old water bodies back to life improving water access and helping the environment recover. In Gujarat, Jal Sanchay Jan Bhagidari helps local governing groups set up rainwater harvesting systems and encourages community involvement in managing water resources.
          </p>

          <p>
            Challenges remain as electricity subsidies encourage excessive groundwater use through borewells. Policy enforcement and the coordination of efforts between rural and urban areas also face setbacks.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Using Technology to Solve Water Problems</h2>
          
          <p>
            Technology now plays a big role in dealing with water shortages. Farmers in Punjab use soil sensors with IoT technology to lower the need for irrigation. In the Jhabua district of Madhya Pradesh, drones drop seed balls to boost reforestation and improve groundwater levels.
          </p>

          <p>
            Cities like Bengaluru and Hyderabad use systems to recycle and reuse wastewater, which lowers their need for freshwater. Tools using AI combined with real-time dashboards for tracking, are helping make water management better. They also assist with planning ahead for floods or droughts.
          </p>

          <p>
            Technology needs to reach more people and come with proper training. This is important in villages and remote areas.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">A Multi-Faceted Way Ahead</h2>
          
          <p>
            India can tackle its water crisis with a combined and steady effort.
          </p>

          <ul>
            <li><strong>Policy Changes:</strong> India should tighten rules on using groundwater, redo subsidies that lead to waste, and promote switching to crops that use less water.</li>
            <li><strong>Building Infrastructure:</strong> The country must enhance rainwater collection, recycle used water, and set up local water storage systems.</li>
            <li><strong>Fair Distribution:</strong> Water must be shared between cities and villages. Efforts must also focus on reducing inequalities related to caste and gender in accessing water.</li>
            <li><strong>Raising Awareness:</strong> People must learn how to use water and understand the long-term effects of climate change.</li>
            <li><strong>Using science and technology more</strong> means including data-based tools in local water management systems and planning processes.</li>
    </ul>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          
          <p>
            India's water crisis is no longer a future concern—it's happening now, and growing more urgent by the day. Rising temperatures, a booming population, and poor water management are stretching the country's limited resources to a breaking point. If left unaddressed, the consequences will ripple across agriculture, public health, and economic development.
          </p>

          <p>
            But India also has what it takes to turn the tide. From citizen-led conservation efforts to innovations in water tech, there is no shortage of solutions—only the need for stronger political will and coordinated action. Clear policies, better education, and community-driven planning can bring real change.
          </p>

          <p>
            As water activist Rajendra Singh once said, "The future of water is the future of humanity." In securing one, India safeguards the other. Let's make the choice now.
          </p>
        </section>
      </div>
    `,
    author: {
      id: "2",
      name: "Hetal Kothari",
      username: "hetal-kothari",
      image: "/Hetal.jpeg"
    },
    category: "National",
    date: "2025-06-10",
    readTime: "12 min read",
    image: "/water.jpeg",
    featured: true,
    views: 1100,
    likes: 75,
    comments: []
  },
  {
    id: "article-1",
    title: "Whose Campus Is It Anyway? Gender and Everyday Life at Lucknow University",
    slug: "whose-campus-is-it-anyway",
    content: `
      <div class="article-content">
        <div class="prose prose-lg max-w-none">
          <p class="mb-6 leading-relaxed">
            It's late afternoon at Lucknow University, and the lawns are full. Groups of students sit under the trees, share snacks, prepare for exams, or simply pass the time. It's a familiar scene—easy to romanticize. But sit long enough, and certain patterns begin to emerge. Boys take the center, speak louder, move more freely. Girls sit closer to the edges, in smaller groups, often glancing at the time. By 7:45 PM, many will begin to leave—not because their work is done, but because they must be back in the hostel by 8.
          </p>

          <p class="mb-6 leading-relaxed">
            That single moment—when girls begin packing up while boys linger—says more about gender on campus than any official document ever could.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Visible Progress, Invisible Barriers</h2>
          <p class="mb-6 leading-relaxed">
            The University of Lucknow has made visible efforts in the past decade to improve safety, representation, and gender sensitivity. The Gender Sensitization Cell organises events, workshops, and dialogues. There is an Internal Complaints Committee. Women students now outnumber men in many courses. All these are real gains. And yet, when you walk through the campus—or try staying late, try sitting at a dhaba near the hostel, or try participating in student politics—you quickly realise that public space, here as elsewhere, is not neutral. It is negotiated, regulated, and at times, denied.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">The Curfew Rule</h2>
          <p class="mb-6 leading-relaxed">
            Take the curfew rule. In December 2022, after a scuffle near the midnight canteen, the university administration issued a notice: girls' hostels would now close at 8 PM, boys' at 10. The rationale was security. But what many students heard instead was a familiar message—when something goes wrong, restrict the women. Conversations began almost immediately. Why two sets of rules? Why not improve campus security instead? Some protested formally; others simply adapted in silence, as they always have.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Hostel Conditions and Voice Suppression</h2>
          <p class="mb-6 leading-relaxed">
            Or take the hostels themselves. In one women's hostel, students had raised concerns about food quality, lack of medical care, and repeated intimidation. Instead of being heard, six of them received show-cause notices. In another instance, the hostel provost allegedly told residents not to post about hostel conditions online—threatening suspension if they did. These are not isolated stories. They reflect an everyday atmosphere where rules are not always gender-neutral, and where speaking up can be as difficult as staying silent.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Informal Segregation</h2>
          <p class="mb-6 leading-relaxed">
            Even in classrooms and libraries, informal segregation persists. Students often self-segregate by gender during lectures. In canteens, it is rare to see mixed groups in equal proportion. In the absence of overt hostility, there is still a quiet sense of who belongs where, and when. A female student once said, half-joking, "We can walk the whole campus. We just have to keep checking the time and who's around." It wasn't a complaint. It was a description of how one learns to move.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Student Politics and Violence</h2>
          <p class="mb-6 leading-relaxed">
            Student politics, too, remains complicated. In the 1990s and early 2000s, LU was known for highly aggressive student politics—bricks were thrown, bombs reportedly used, and many parents pulled their daughters out altogether. Today, those levels of violence have subsided, and a new generation of student organisations is raising important questions about equality, representation, and safety. But elections have been suspended for almost two decades. For women, particularly, this has meant fewer platforms to formally voice their concerns. When they do speak—in protests, meetings, or simply on social media—the response is not always welcoming.
          </p>

          <p class="mb-6 leading-relaxed">
            Just this April, the campus saw a series of violent clashes between student groups that left nearly twenty injured, once again raising questions about accountability, safety, and the culture of impunity that some students seem to enjoy. It is in this context that earlier remarks by the Vice Chancellor, made on International Women's Day—where he equated feminism with casteism and declared that "all isms are bad"—land not as harmless abstractions, but as part of a larger pattern of resistance to gender-conscious reform.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Signs of Change</h2>
          <p class="mb-6 leading-relaxed">
            That said, the picture is not entirely bleak. Many students, both women and men, have begun to push back—not always through confrontation, but through consistent engagement. Cultural groups, gender collectives, and informal peer networks have created spaces for dialogue. Events like "Spaces," organised by the Gender Sensitization Cell, have tried to bring these conversations out of classrooms and into lawns, canteens, and common areas. The university's decision to initiate policies toward transgender inclusion is also a step, though early.
          </p>

          <p class="mb-6 leading-relaxed">
            Still, inclusion cannot be declared. It must be practiced. A student may attend a gender sensitization workshop, and still hesitate to walk across the boys' hostel lawn at night. Another may know the procedure to file a complaint, and still choose not to, fearing retaliation. Progress does not erase contradiction. It brings it into view.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Redefining Space</h2>
          <p class="mb-6 leading-relaxed">
            So, is public space at Lucknow University gendered? Of course it is. But not in a singular way. It is gendered through rules, routines, assumptions, silences. It is gendered when women leave early because they must, or when queer students avoid being seen together in certain corners. It is gendered when safety becomes a reason to curtail rather than enable freedom.
          </p>

          <p class="mb-6 leading-relaxed">
            But it is also being redefined—by students who stay a little longer, speak a little louder, or ask better questions.
          </p>

          <p class="mb-6 leading-relaxed">
            Because the question is not just: "Is this space ours?"
          </p>

          <p class="mb-6 leading-relaxed">
            The question is: "On what terms?"
          </p>
        </div>
      </div>
    `,
    excerpt: "An exploration of gender dynamics and everyday experiences at Lucknow University, examining how spatial arrangements, academic interactions, and institutional policies shape campus life.",
    image: "/Campus.jpeg",
    author: {
      id: "15",
      name: "Captain Jack Sparrow",
      username: "captain-jack-sparrow",
      image: "/Shantam.jpeg"
    },
    category: "university",
    date: "2025-06-10T00:00:00Z",
    readTime: "8",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["gender", "campus life", "education", "social issues"]
  },
  {
    id: "article-2",
    title: "Every word has consequences. Every silence too.- Neutrality in the time of war.",
    slug: "neutrality-in-time-of-war",
    content: `
      <div class="article-content">
        <div class="prose prose-lg max-w-none">
          <p class="mb-6 leading-relaxed">
            When the League of Nations on June 30, 1936, Ethiopian Emperor Haile Selassie delivered the powerful words, "It is us today, tomorrow it will be you." This statement was a warning to the world about the consequences of failing to stand up against aggression, genocide, and oppression because it was not their problem. Privilege is when you think something is not a problem when it's not a problem to you personally.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">The Lesson of History</h2>
          <p class="mb-6 leading-relaxed">
            The lesson of history is that no one learns from it. The holocaust, the Rwandan Genocide (1994), The Bosnian Genocide (1992-1995) ongoing armed conflicts like the Syrian Civil War (since 2011), the Sudanese Civil War (2023), the Russia-Ukraine war, the Israel-Hamas war tell us Silence—whether out of fear, complicity, indifference, or helplessness—can lead to a range of ethical, political, and humanitarian outcomes.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Complicity or Participation</h2>
          <p class="mb-6 leading-relaxed">
            Silence frequently means implicit consent. Individuals or nations are complicit in wartime if they keep silent in the face of atrocities like war crimes, genocide, or oppression. Aggressors encounter fewer challenges and gather steam when dissent is reduced or nonexistent. In conflicts fueled by propaganda, silence can validate the aggressor's story.
          </p>

          <p class="mb-6 leading-relaxed">
            One of the first things to be lost during a war is frequently the truth. False narratives can take center stage when there is silence. If no one reports abuses or speaks out, war criminals may go unpunished.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Deliberately Silenced or Preferably Unheard</h2>
          <p class="mb-6 leading-relaxed">
            Companies and universities in many countries cracked down on pro-victim activism. They were silenced and punished. Our silence manifests in several ways:
          </p>

          <ul class="list-disc pl-6 mb-6">
            <li class="mb-2">Lack of strong diplomatic condemnation or pressure</li>
            <li class="mb-2">Failure to impose meaningful sanctions or consequences on aggressors</li>
            <li class="mb-2">Outright failure of global institutions that were built to stop such conflicts</li>
          </ul>

          <p class="mb-6 leading-relaxed">
            The current conflicts all around the world reflect a failure of the United Nations to prevent and punish war crimes, crimes against humanity, and genocide.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Conclusion</h2>
          <p class="mb-6 leading-relaxed">
            Silence in the face of war or injustice is often not neutral—it can be a form of complicity. Are we willing to face the judgment of future generations who'd look back and question our silence? Neutrality helps the oppressor, never the oppressed. The history of appeasement and silence shows us: that the bill comes due eventually with interest attached.
          </p>

          <p class="mb-6 leading-relaxed">
            Silence during war isn't neutral—it is a choice that carries weight. The cost of silence is often measured in human suffering.
          </p>
        </div>
      </div>
    `,
    excerpt: "An exploration of the moral implications of silence and neutrality during times of war and conflict, examining historical precedents and contemporary challenges.",
    image: "/Nut.jpeg",
    author: {
      id: "15",
      name: "Trishla Chaudhary",
      username: "trishla-chaudhary",
      image: "/Trishla.jpeg"
    },
    category: "op-ed",
    date: "2025-06-10T00:00:00Z",
    readTime: "10",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["war", "neutrality", "human rights", "international relations"]
  },
  {
    id: "article-3",
    title: "The United Nations: A Flawed Guardian for Peace",
    slug: "united-nations-flawed-guardian",
    content: `
      <div class="article-content">
        <div class="prose prose-lg max-w-none">
          <h2>The Promise of Peace: Origins and Ideals of the United Nations</h2>
          <p>The United Nations is an 80-year-old institution, formed to preserve peace and harmony at the global level. Founded in 1945, in the aftermath of World War II, it brought together 51 nations committed to building a better world.</p>
          <p>Unlike previous forms of world government, the UN was proposed by key leaders as varied as Franklin D. Roosevelt to Winston Churchill and Albert Einstein to Latin American powers.</p>
          <p>However, ever since the formation, we have witnessed disputes escalating into wars and, consequently, the loss of innocent lives. This raises a fundamental question — Why does the UN fail in its core mission of maintaining international peace and security?</p>
          <h2>The Reality of Power: Failures, Corruption, and Global Injustice</h2>
          <p>Across the globe, nations engage in wars—defensive, territorial, or simply rooted in power politics. Viewed through a moral lens, these wars yield only destruction: innocent civilians killed, frontliners buried, while the people who orchestrate these wars remain safe behind their high walls of privilege & power.</p>
          <p>The United Nations has witnessed and, in many cases, contributed to many dramatic failures — the recent ranging from structural power imbalance in the Israel–Palestine conflict, where the UN system has been unable to stop the ongoing genocide against the Gazans, to the failing of United Nations Security Council in creating the framework conditions to facilitate the mediation in the Russia–Ukraine crisis.</p>
          <p>A significant problem of the United Nations lies in the systematic restriction on which it operates. The power which is granted in — "Article 27 (3) of the Charter establishes that all substantive decisions of the Council must be made with "the concurring votes of the permanent members (P5)." The veto power granted to the permanent members hinders the UN Security Council's (UNSC) ability to act, as these nations use veto to block any intervention based on alliances, military deals, or geopolitics.</p>
          <p>This power imbalance is evident in the aforementioned recent issues, with the US vetoing the ceasefire in Gaza and Russia vetoing humanitarian/military aid in Ukraine. The P5 dominance limits developing countries and cripples the UN's ability to work fairly and effectively, making it appear flawed and weak. Beyond structural issues like the misuse of veto power, the UN has also problems with internal accountability and ethical governance, particularly in cases of corruption that have severely sullied its reputation.</p>
          <p>Like any institution, the UN is not "immune." In 1996, under strict sanctions following the First Gulf War, the UN Security Council started the Oil-for-Food program, which allowed Iraq to pay for food and other necessities for its people, with oil. But Saddam Hussein exploited the program, earning some $10.9 billion through illegal oil smuggling and $1.7 billion through kickbacks and surcharges, according to a 2004 CIA investigation. Not only does this highlight the corruption in the structure, but also how the UN can be manipulated to serve ulterior motives. Through the program, the West retained a clean and morally superior perception by providing aid in an issue they created, and at the same time being paid with the oil they desperately wanted.</p>
          <p>According to the UN Independent Inquiry Committee, it was put forward that the wide scale of mismanagement and unethical conduct, done by some UN employees, tainted the program. These failures hurt the vulnerable population, also eroding the "image" of the UN.</p>
          <h2>The Urgent Need for Change</h2>
          <p>Maybe in its early years, the United Nations functioned. But today, in this age of modernity, it is just a group of suits sitting around discussing sensitive issues, like war and hunger, from air-conditioned offices. Nothing gets resolved on the ground. Kids die of hunger, not due to the lack of resources, but due to the lack of empathy and sense of urgency.</p>
          <p>The UN is not proactive but instead reactive. It lacks enforceable powers and is often paralyzed by political stalemate. It may have supranational powers, but it is not very effective when there are great powers involved. When their interests clash, the UN's ability to prevent or resolve a crisis is at best symbolic, defeating the very purpose of its existence.</p>
          <p>To be fair, there have been instances where the UN was instrumental in de-escalating the situation, like in Yemen, Sudan, or in civil wars between regional powers. Its peacekeeping missions in East Timor and Liberia are often cited as successful examples of coordinated international intervention. On a broader scale, UN agencies have made undeniable contributions— like the World Health Organization's role in eradicating smallpox. However, these successes are not enough to overshadow its greatest failure: maintaining peace where intervention was most needed. In regions torn apart by preventable violence, it left mothers weeping over their children, and children orphaned by conflicts that could have been avoided. The cost of inaction, in these cases, has been far too human.</p>
          <p>Therefore, if the question is: Do we still need the UN? The answer is no — not unless it is radically changed. The UN must be less arrogant about its shortcomings, and more willing to change itself into an institution which can respond to the needs of the world today.</p>
        </div>
      </div>
    `,
    excerpt: "A critical analysis of the United Nations' effectiveness in maintaining global peace and security, examining its structural limitations and recent failures.",
    image: "/UN.jpeg",
    author: {
      id: "9",
      name: "Aliya Imam",
      username: "aliya-imam",
      image: "/Aliya.jpeg"
    },
    category: "op-ed",
    date: "2025-06-10T00:00:00Z",
    readTime: "12",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["United Nations", "international relations", "peace", "global governance"]
  },
  {
    id: "100",
    title: "Unpacking the PSLV malfunction: Impacts and the road ahead for ISRO",
    slug: "unpacking-the-pslv-malfunction-impacts-and-the-road-ahead-for-isro",
    excerpt: "A detailed analysis of the PSLV-C61 mission failure and its implications for India's space program.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          May 18, 5:59, in the quiet hours of the early morning, the Indian Space Research Organisation (ISRO) launched one of its trusted rockets — the Polar Satellite Launch Vehicle (PSLV) — from the country's spaceport. This mission, designated PSLV-C61, was intended to place the EOS-09 satellite into a sun-synchronous polar orbit, a path that allows satellites to consistently pass over the same part of the Earth at the same local time each day. Riding in its more powerful XL configuration, the PSLV lifted off with its signature four-stage design, a system perfected over years to shed weight as it climbs higher into space. But just minutes after launch, something went wrong. A malfunction in the rocket's third stage caused the mission to fail, marking a rare setback for one of ISRO's most reliable workhorses.
        </p>

        <section class="article-section">
          <h2 class="section-heading">What is PSLV?</h2>
          
          <p>
            While dealing with the causes of malfunction and analysing its effects on the Indian Space Program and the impedance it would cause to the progress of ISRO, the question that comes to mind is "What is PSLV?"
          </p>
          
          <p>
            The Polar Satellite Launch Vehicle or the PSLV is the third generation launch vehicle of India. It is the first Indian launch vehicle to be equipped with liquid stages. It has been employed to carry satellites to orbit in a lot of missions, including the famous Chandrayaan-1 in 2008 and the Mars orbiter spacecraft in 2013, which are just a few of the many feathers in its cap.
          </p>

          <p>
            Through its consistent use in missions of the ISRO, the PSLV has earned the title of the 'Workhorse of the ISRO' through delivery of various satellites into low earth orbits. It is famous for its unmatched reliability, and has been used to launch satellites into the Geosynchronous and Geostationary orbits.
          </p>

          <p>
            The long string of consecutive successes and multi-satellite launch capability has reinforced the status of PSLV as a reliable, versatile and affordable launcher in the global market.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">What caused the malfunction?</h2>
          
          <p>
            The Indian space research organization (ISRO) had launched the Polar Satellite Launch Vehicle (PSLV) at 5.59 am from Sriharikota Satish Dhawan Space Center, but during the critical third stage, the rocket lost its trajectory midway.
          </p>

          <p>
            To understand the reason behind the anomaly in the third stage – we need to look at how PSLV executes its launch. PSLV is a four staged launcher with four successive propulsion phases. They are:
          </p>

          <ul>
            <li>Stage 1: Solid Reaction Booster – ps1, its purpose is to provide the initial thrust to lift the rocket from the ground, in XL configuration vehicles, there are larger boosters for the greater thrust.</li>
            <li>Stage 2: Liquid Engine-ps2, this stage continues to accelerate the vehicle after the stage 1 separation.</li>
            <li>Stage 3: Solid Rocket Motor, it offers additional propulsion in the thinner atmosphere, just before orbital injection. It is allocated as the High performance stage 3(HPS3)</li>
            <li>Stage 4: Liquid Engine (ps4), it is tasked with precise orbital injection of the satellite payloads.</li>
          </ul>

          <p>
            The 44.5 meter-tall rocket's solid fueled ps1 and liquid fueled ps2 stage operated according to the plan. The issue occurred at 203 seconds into the flight during the ps3 motor phase, when the telemetry indicated a sudden drop in the chamber pressure. This impacted the performance of the fourth stage and subsequently led to failure of the mission.
          </p>
          
          <p>
            ISRO has constituted, High Level Failure Analysis Committee to review the ps3's manufacturing and the test protocols. Meanwhile the engineers are analysing flight data to determine whether the issue stemmed from propellant flow irregularities, nozzle anomalies, or structural failures. It is suspected that malfunction happened in the flex nozzle control, a critical component that directs precise thrust by adjusting the rocket nozzle's orientation without the use of complex hydraulic actuators. However, nothing is yet confirmed.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The way ahead</h2>
          
          <p>
            While the PSLV-C61 mission did not achieve its intended outcome, it highlights the complexities and inherent risks of space exploration. Over the decades, the PSLV has proven to be a cornerstone of India's space program, delivering major successes such as Chandrayaan-1 and Mangalyaan, and cementing ISRO's reputation as a dependable and cost-effective launch provider. This rare failure does not diminish the launch vehicle's legacy but rather serves as a critical opportunity for reflection and advancement. ISRO's swift formation of a High-Level Failure Analysis Committee and the detailed examination of telemetry data underscore its commitment to transparency, learning, and progress. Such setbacks, while unfortunate, are part and parcel of scientific evolution. Each anomaly brings valuable insights that drive improvements in engineering, safety, and performance. Strengthening the PSLV system through these lessons will only bolster India's capability in the global space arena, ensuring that it remains resilient, innovative, and ever forward-looking.
          </p>
        </section>
      </div>
    `,
    image: "/Pslv failure.jpeg",
    category: "Sci-tech",
    author: [
      {
        id: "2",
        name: "Hetal Kothari",
        username: "hetal-kothari",
        image: "/Hetal.jpeg"
      },
      {
        id: "5",
        name: "Atulit Pandey",
        username: "atulit-pandey",
        image: "/Atlut.jpeg"
      },
      {
        id: "6",
        name: "Prerna Srivastava",
        username: "prerna-srivastava",
        image: "/Perna.jpeg"
      },
      {
        id: "9",
        name: "Aliya Imam",
        username: "aliya-imam",
        image: "/Aliya.jpeg"
      }
    ],
    date: "June 11, 2025",
    readTime: "8 min read",
    views: 1500,
    likes: 120,
    tags: ["ISRO", "PSLV", "Space Technology", "Science"],
    featured: true
  },
  {
    id: "101",
    title: "GUKESH'S WIN AT NORWAY CHESS '25: NAVIGATING INDIA'S CHESS RENAISSANCE",
    slug: "gukesh-win-at-norway-chess-25-navigating-indias-chess-renaissance",
    excerpt: "India's chess prodigy Dommaraju Gukesh makes history by defeating World Champion Magnus Carlsen at Norway Chess 2025.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          The eve of 3rd June, 2025 saw history in making. India's highly proclaimed chess prodigy and defending chess champion, Dommaraju Gukesh beat the World champion Magnus Carlsen at the Norway Chess 2025.
        </p>

        <p>
          This event not only brought pride to the nation, but also marked a well driven and directed focus shift from the very famous Cricket to other forms of sporting competitions, finally opening Indians' eyes to a world where they see games apart from their high school playground sweetheart. This, inter alia triumphs, demarcate an era of renaissance. India, after Vishy Anand, now sees an interest in chess, a rising wave of chess prodigies, Praggnanandha, Arjun Erigaisi, Vidit Gujrathi are just a few names who have been witnessed emerging as the Petrarca of the Indian Chess Renaissance.
        </p>

        <p>
          In this article, we will explore aspects of Indian chess that lead one to gape at the proficiency that Indians are displaying on the global platform. This, readers, is going to be a treat for chess aficionados, so buckle up!
        </p>

        <section class="article-section">
          <h2 class="section-heading">Gukesh's Triumph</h2>
          
          <p>
            The Norway Chess is a flagship closed annual event in the world of chess. When looking at Gukesh's run at the tournament, it is rather a hiccup in the beginning with Gukesh losing against Carlsen in the first game. The turning point came with Gukesh keeping a winning streak, beating Nakamura, Carlsen, Caruana and Erigaisi. He is set to meet Wei Yi in the 9th round(as of 6th June, 2025).
          </p>
          
          <p>
            Dommaraju Gukesh has been a highly commended chess prodigy becoming the second youngest GrandMaster at the age of 12. Gukesh has clenched wins at competitions like Tata Chess, Norway Chess and the highly coveted Candidates. He beat the then defending world champion Ding Liren in Candidates to become the World Champion at just 18 years of age. Being under Vishy's guidance, Gukesh carries India's flag ahead in chess.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Indians in Chess</h2>
          
          <p>
            As the ball sets rolling, setting the environment, we talk chess! Chess in India has seen revolutions that include but don't limit themselves to Gukesh. When the topic is Indian chess, acknowledgements have to be made, legends have to be addressed and victories have to be remembered.
          </p>

          <p>
            A little history first, modern chess in India began officially with the formation of All India Chess Federation in 1951 but History wasn't created yet, just the first page was opened and the first heading written "INDIA". Chess, although finding its presence even in the 6th century BCE during the reigns of Guptas, staggered to find its place in a newly founded nation that had millions of mouths to feed and a billion problems to fight before it could focus completely on playing. But, when history did start to be written, it left the world awestruck.
          </p>

          <p>
            This history that I am talking about is none but beloved Vishy Anand! Becoming India's Grand Master in 1988 at the age of 19, Anand set the ball rolling for generations of players that was to come. His career was nothing short of legendary, a story that would be narrated alongside that of Sachin Tendulkar, Leander Paes or Sunil Chhetri. This man single handedly taught India to watch and understand chess.
          </p>

          <p>
            Indian chess, which might be perceived by some as a male dominated sport, defies all barriers and proves myths wrong, women walk shoulder-to-shoulder and take the lead in a trajectory similar to that of men. Subbaraman Vijayalaksmi became the country's first Woman International Master and then a Grand Master. India's first Chess Olympiad medal was a bronze in 2014 and the streak of wins has not stopped since. This article can never find itself completed without mentioning our present-day wonder women of chess, Vaishali Rameshbabu, Diya Deshmukh, Tania Sachdeva inter alia, who carried the Indian flag high at a myriad of tournaments. These are the players that carry the Indian flag high, with unwavering confidence and a hunger, of not just winning but dominating, they are the writers of the India chapter in the contemporary world.
          </p>

          <p>
            The combined efforts of authorities and players have strengthened India's position in World Chess, in words of Hikaru Nakamura,
          </p>

          <blockquote>
            "India is basically the new Soviet Union as far as chess goes"
          </blockquote>

          <p>
            This basically signifies the Indian prowess in chess that can be compared to what the Soviets held at a time when they dominated the discipline. As of December 2024, India boasts 85 chess grandmasters, with 13 ranked among the world's top 100 players. The country has over 30,000 rated players actively participating in officially sanctioned tournaments nationwide. This robust participation has solidified India's status as a chess superpower, with its top 10 players achieving an average Elo rating of 2721, ranking second globally.
          </p>

          <p>
            As of May 2025, FIDE rankings include 4 Indians in the top 10 players of the game in the world, which is nothing short of being proud of.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Renaissance Continues</h2>
          
          <p>
            The renaissance continues, each tournament writes a new story, like poetry in making. Each tournament brings a fresh set of challenges, but it is us, Indians, we are built for challenges, conditioned to dominate and taught to bow in respect. With the spotlight shifting and chess gaining attention among the masses, so much so that schools have started teaching the game and coaching academies are sprouting rapidly, it is not very far in future that India will be chess-smart, and many more Praggs and Gukesh will be among us, history is being written, and we, readers, are the eyewitnesses of it.
          </p>
        </section>
            </div>
    `,
    image: "/Chess.jpeg",
    category: "Sports",
    author: {
      id: "5",
      name: "Atulit Pandey",
      username: "atulit-pandey",
      image: "/Atlut.jpeg"
    },
    date: "June 11, 2025",
    readTime: "10 min read",
    views: 2000,
    likes: 180,
    tags: ["Chess", "Gukesh", "Norway Chess", "Sports"],
    featured: true
  },
  {
    id: "102",
    title: "GCC Boom in Pune: A Quiet Revolution Changing the Office Economy in India",
    slug: "gcc-boom-in-pune-a-quiet-revolution-changing-the-office-economy-in-india",
    excerpt: "How Pune is transforming into a major hub for Global Capability Centres, reshaping India's office economy.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          India's office economy is changing in a subtle but significant way, all thanks to a transformation taking place in Pune. The city, formerly mainly recognised for its industrial base and academic heritage, has quickly become a hub for Global Capability Centres (GCCs), luring multinational corporations with its special combination of infrastructure, talent, and operational flexibility.
        </p>

        <section class="article-section">
          <h2 class="section-heading">From Education Hub to Global Operations Nerve Center</h2>
          
          <p>
            More than 350 GCCs call Pune home as of 2025, and between them, they employ close to 270,000 professionals. With this rate of growth, the city is now on par with established IT giants like Hyderabad and Bengaluru. Furthermore, unlike these other hubs which are constantly saturated, Pune has a unique combination of high-quality talent, low operational costs, and best in class living standards which is hard to come by, especially for multinational companies looking to invest for the long-term.
          </p>

          <p>
            What makes Pune's surging development so remarkable is that it does not negatively impact the quality of talent, and instead focuses on scaling efficiently. The preeminence of world-class academic institutions, an emerging startup ecosystem, and a high level of technical skill in the region drives interest in the city for business functions including finance, engineering, analytics, and even digital innovation.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Flexibility at the Forefront</h2>
          
          <p>
            Pune's growing prominence is best exemplified by the city's shifting real estate market. During the first quarter of 2025 alone, GCCs leased more than 1.1 million square feet of office space, which represents a nearly fourfold increase relative to the last year's same period. Co-working and flexible spaces made up almost 43% of this leasing activity, which is a staggering figure.
          </p>

          <p>
            This is yet another sign of a drastic shift in the workspace design strategy undertaken by global firms. The new approach prioritizes flexibility and hybrid work models that can quickly scale up or down, something that Pune's commercial real estate operators have been eager to serve. Such arrangements provide organizations a frictionless way to grow or retreat from physical spaces they occupy in a world that is post-pandemic sensitive to change.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Mid-Market Engine</h2>
          
          <p>
            The major players in business expansion operations now take a back seat to the emerging mid-sized companies and debutants. The past five years saw the establishment of more than 110 mid-market GCCs in Pune which were primarily funded by private equity and specialized in advanced sectors including AI, machine learning, data science, and cybersecurity.
          </p>

          <p>
            The business centers function with minimal organizational layers which enables them to execute projects quickly while staying adaptable to market requirements. Employees at these organizations experience rapid advancement to leadership positions at a significantly higher rate when compared to their peers at larger GCCs. The city of Pune stands out as a fast lane for emerging professionals who aim to engage with state-of-the-art technologies.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Institutional Momentum</h2>
          
          <p>
            The establishment of Pune as a GCC hub results from both active institutional support and corporate investments. TransUnion stands as a prime example because they transformed their India capability center in Pune from a small pilot project with 10 employees to a major operation with 1,200 staff in just two years. Success stories in Pune demonstrate the city's ability to foster both quick expansion and sustainable development.
          </p>

          <p>
            The city hosted the ET GCC Growth Summit 2025 as a platform that united global thought leaders with policymakers and innovators to explore the direction of worldwide business operations. The strategic role of Pune in India's global services narrative gains strength through the confidence shown by these platforms.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">A Look Ahead</h2>
          
          <p>
            The GCC sector of India is predicted to reach $105 billion by 2030 after starting at $64.6 billion in FY24. The number of GCCs will surge past 2,100 facilities while employment will count 2.8 million personnel which positions Pune to acquire a significant portion of this growth.
          </p>

          <p>
            Pune's transformation mirrors the wider change in India's office economy which now prioritizes talent concentration instead of traditional location advantages and strategic operational freedom instead of established facilities. When companies want to discover what lies beyond the expected pathway, Pune emerges as a prime choice through its unassuming power and operational capacity.
          </p>

          <p>
            During the upcoming decade Pune will lead the development of what future GCCs will look like.
          </p>
        </section>
            </div>
    `,
    image: "/Pcc.jpeg",
    category: "National",
    author: {
      id: "7",
      name: "Abhinav Kumar Upadhyay",
      username: "abhinav-upadhyay",
      image: "/Abhinav Kumar Upadhyay .jpeg"
    },
    date: "June 11, 2025",
    readTime: "12 min read",
    views: 1800,
    likes: 150,
    tags: ["Business", "GCC", "Pune", "Economy"],
    featured: true
  },
  {
    id: "covid-19-rise-and-reigns",
    title: "The Rise and Reigns of COVID-19",
    slug: "covid-19-rise-and-reigns",
    category: "International",
    date: "12 JUNE 2025",
    image: "/Covid.jpeg",
    author: authors.find(a => a.username === "hetal-kothari"),
    excerpt: "The rise and reigns of COVID-19 represent one of the most significant global challenges of the 21st century, disrupting societies, economies, and public health systems across the world.",
    content: `
      <h1>The Rise and Reigns of COVID-19</h1>
      
      <p>The rise and reigns of COVID-19 represent one of the most significant global challenges of the 21st century, disrupting societies, economies, and public health systems across the world. Emerging quietly in late 2019, the novel coronavirus, officially named SARS-CoV-2, was first identified in Wuhan, China. Initially, it was linked to a seafood and animal market, where a cluster of pneumonia-like cases baffled health authorities. Within weeks, the virus proved to be highly transmissible and with modern air travel and dense urban populations, it rapidly spread beyond China's borders.</p>

      <h2>New covid-19 variant detected: What we know so far</h2>
      
      <p>The JN.1 variant is a new form of the Omicron variant of COVID-19. Like Omicron, it spreads easily, but the JN.1 variant has an extra mutation in its spike protein. This change might affect how the virus spreads or how it reacts to the immune system. Because of this mutation, scientists are watching JN.1 closely to understand if it spreads more easily or causes different symptoms compared to earlier variants like Omicron.</p>

      <p>JN.1 is a subvariant of the Omicron, evolving from the BA.2.86 variant, also known as Pirola. It was first identified in Luxembourg in 2023 and since has gradually spread to other parts of the world, and now India. JN.1 is said to be more transmissible than previous variants due to specific mutations in its spike protein, which helps it bind to humans easily. JN.1 has more than 35 mutations in its spike protein, including several in the receptor-binding domain which directly interacts with the ACE2 receptors on human cells. However, as of now, there is no data to prove that it causes any serious illness.</p>

      <p>The current strain of the COVID-19 virus as reported by INSACOG data, are protein mutations of the JN.1 virus. Till date, 58 genome sequences of NB.1.8.1 have been submitted to the global COVID-19 database, originating from 22 different countries. The NF.7 variant was observed largely in southern parts of India and both NB.1.8.1 and NF.7 have been reported largely from urban metro cities. JN.1 spreads more easily than earlier Omicron sub lineages such as XBB.1.5. JN.1 can partially escape immunity induced by previous infections and vaccines, although not completely.</p>

      <p>Subvariants LF.7 and NB.1.5, seen to be behind recent surges in Covid infections, are descendants of JN.1, meaning they share its core mutational backbone but have acquired additional changes. The current seasonal surge is caused by further sub-variants of JN.1</p>

      <h2>Unusual Symptoms? They could be linked to the NB.1.8.1 strain.</h2>

      <p>Individuals infected with the NB.1.8.1 variant have reported a range of symptoms, some of which differ from those associated with earlier strains of the virus Common early symptoms include:</p>

      <ul>
        <li>Persistent low-grade hyperthermia: Rather than a high fever, many individuals experience a persistent low-grade increase in body temperature (between 37.6°C and 38.1°C) without the typical sweating or rapid breathing associated with fever. This condition, known as hyperthermia, may indicate an issue with the body's thermoregulation mechanisms.</li>
        <li>Upper respiratory symptoms</li>
        <li>Gastrointestinal distress</li>
        <li>Neurological symptoms</li>
        <li>Fatigue</li>
        <li>Sleep disturbances and anxiety</li>
      </ul>

      <h2>Conclusive insights from latest scientific research</h2>

      <p>Dr. T. Jacob John, a virologist previously associated with Christian Medical College Vellore, has told TOI that there is no cause for concern yet. He, however, emphasized that preventive measures still hold the key in controlling the spread of the virus.</p>

      <p>However, Dr. Rajiv Bahl, Director General of the Indian Council of Medical Research (ICMR), said there was no cause for concern. "As of now, the severity is generally low. There's nothing to worry about. We should be vigilant, and we should always be prepared," the ICMR DG asserted. Dr. Bahl noted an increase in cases—initially in the south, then the west, and now northern India.</p>

      <p>All cases are being monitored through the Integrated Disease Surveillance Program (IDSP), he added. The ICMR DG said that when cases increase, three factors are considered. "It depends on how transmissible the virus is—how quickly cases rise. Previously, we saw cases double in two days, but currently, the rise is slower. "Secondly, we assess whether new variants are evading prior immunity—whether natural or vaccine-induced and the third factor is the percentage of severe cases among all COVID instances. But there's nothing to worry about at this moment" Dr. Bahl said.</p>
    `,
    featured: true,
    views: 1250,
    likes: 89,
    comments: []
  },
  {
    id: "beti-bachao-khandwa-rape-case",
    title: "Beti Bachao, But From Whom: Exploring the Khandwa Rape Case",
    slug: "beti-bachao-khandwa-rape-case",
    category: "National",
    date: "12 JUNE 2025",
    image: "/Beti.jpeg",
    author: authors.find(a => a.username === "aliya-imam"),
    excerpt: "A chilling reminder of the brutal reality women face in India, as we examine the Khandwa rape case and the systemic failures that continue to endanger women's lives.",
    content: `
      <h1>Beti Bachao, But From Whom: Exploring the Khandwa Rape Case</h1>

      <h2>A Woman's Right to Live: Another Brutal Reminder</h2>

      <p>As we struggle for equal pay and argue about the need for feminism in today's time, somewhere in India, a woman is struggling for something much more fundamental — the right to live.</p>

      <p>In Madhya Pradesh's Khandwa, a 45-year-old mother of two was gang-raped by two men she knew, with such brutality that her intestines were forced out of her body. This chilling incident took place on May 23, when the victim went to the house of the accused after attending a wedding. They were later joined by another accused.</p>

      <p>The next morning, the accused's mother discovered the victim in a severely injured state. The victim later told her family that she had been sexually assaulted. According to an exclusive report by India Today TV (May 26, 2025), the postmortem revealed that the woman was brutally assaulted and died due to excessive bleeding.</p>

      <p>Dr. Seema Sutay, head of the postmortem investigation and a forensic expert, confirmed it was a case of evisceration, a medical term for the forceful removal of internal organs. The woman's 176 centimetres of intestine had come out of her body. Such extensive medical trauma led to hypovolemic shock, a condition involving extreme loss of blood or fluids, ultimately resulting in her tragic death.</p>

      <p>Both accused have been booked on charges of gang rape and murder under Sections 103(1), 66, and 70(1) of the Bharatiya Nyaya Sanhita.</p>

      <p>This offense is reminiscent of the 2012 Nirbhaya gang rape that shook the nation to its very foundations. Just like Nirbhaya, and just like the RG Kar Medical College doctor, this woman's story is representative of a sad truth and all the victims who failed to make headlines because their offense was not "gruesome enough" or simply got lost under lack of concern.</p>

      <p>Whenever something horrible occurs, we protest. We grieve. We make the hashtags trend. But nothing ever actually changes.</p>

      <p>Instead of building a safer world, we instruct women to narrow their worlds. Don't go out alone. Return home early. Be alert. The responsibility is transferred from the predator to the victim.</p>

      <p>We remember Nirbhaya. Her death shook the country. Laws were promised, reforms were debated. But what happened?</p>

      <p>The question must be asked to the state and central governments: Why are effective prevention measures still lacking? For how long will we remain behind slogans like "Beti Bachao, Beti Padhao" when our mothers, sisters, and daughters are unsafe?</p>

      <p>We worship goddesses but do not rescue living women. Ironic, no?There is no respect for law in the hearts of these predators. Until justice is swift and sure and society stops blaming victims, this cycle will continue.</p>

      <h2>Whose Stories Get Told?</h2>

      <p>Journalism ought to be the beacon of truth, the advocate for the voiceless. But it has become the right arm of the politicians and the powerful instead.</p>

      <p>So many cases never reach daylight just because the victim is from a far-off village, or there is some political link that cannot be touched. When the media decides what to project based on influence, money, or TRPs, justice is the first to suffer.</p>

      <p>Like doctors, journalists should also uphold ethical standards, to deliver news with honesty, integrity, and moral responsibility. Sadly, these values seem to be missing in many journalists today. There should be a sense of accountability, that the news they report should serve the people, especially the vulnerable and the voiceless.</p>

      <p>Take the recent Khandwa case, which occurred on a Saturday. Very few mainstream news channels covered it. Why? Because the victim was a tribal woman? Who decides which cases are "worthy" of coverage and which aren't?</p>

      <h2>Rape Culture: A Failure We All Share</h2>

      <p>As journalism sinks to new lows, our judicial system remains stagnant or worse, regresses with each passing year.</p>

      <p>Take the R.G. Kar Medical College case, where the court ruled the incident as "not rarest of rare." What defines a rape case as "rarest of rare"? Is it only when the victim dies? Or when her internal organs are forced out of her body? Since when have we started measuring the scale of brutality to define justice?</p>

      <p>Rape is a crime that can never be justified, not by clothes, time of day, or presence. These are rationalizations, not explanations, born out of a sick mind. Rape isn't about desire; it's about power, control, and deep-rooted contempt for women. It is a by-product of patriarchy, a culture that teaches young boys that a woman should be controlled, owned, silenced.</p>

      <p>The guilt isn't just the rapist's. It lies in all of us. Families avoiding "awkward talk" with their teenage kids, schools ignoring sex education, societies treating the female body as taboo or alien. We teach boys dominance, not respect. Girls, silence instead of strength. Until families stop shaming these conversations and society stops blaming victims, the cycle will continue.</p>

      <p>Rape isn't an isolated crime. It reflects a collective failure. Only by acknowledging our role and sharing responsibility can true change begin.</p>
    `,
    featured: true,
    views: 980,
    likes: 76,
    comments: []
  },
  {
    id: "motherhoods-hidden-struggle",
    title: "Motherhood's Hidden Struggle: The Emotional Load Women Carry",
    slug: "motherhoods-hidden-struggle",
    category: "Features",
    date: "12 JUNE 2025",
    image: "/Motherhood.jpeg",
    author: authors.find(a => a.username === "prerna-srivastava"),
    excerpt: "Beyond the Instagram filters and smiling portraits lies the complex reality of motherhood - a journey marked by invisible labor, emotional strain, and societal expectations.",
    content: `
      <h1>Motherhood's Hidden Struggle: The Emotional Load Women Carry</h1>

      <p>Society has long romanticized motherhood—draping it in soft filters, poetic captions, and smiling Instagram portraits.</p>

      <p>But behind those curated moments lies a far more complex reality. Motherhood isn't always about joy and gentle hugs; it often comes with exhaustion, emotional strain, and invisible labor. These struggles, though deeply human, are frequently overlooked or dismissed.</p>

      <p>Becoming a mother is a huge, complicated life transition that can rock every fiber of a person's being. The process even has its own name: "Matrescence".This article aims to move beyond the idealized image of motherhood and confront the truths we often ignore—because acknowledging the reality is the first step toward meaningful support and change.</p>

      <h2>What Is Emotional Load?</h2>

      <p>Ever notice how it's usually the mother who knows where the socks are, what time the math homework is due, or that it's time to feed the cat?</p>

      <p>That's the emotional load—the unseen, unpaid, and often unthanked labor of remembering, planning, worrying, managing, and caring.</p>

      <p>It's the thought work that goes unnoticed: remembering your child likes their sandwich without the crust, sensing your partner's stress before they say it. It's being the family's unofficial therapist, coordinator, and crisis manager all at once.</p>

      <p>It's not just about doing things. It's about thinking about them all the time. And in most households, it quietly falls on women.</p>

      <p>Because even today, somewhere deep in our cultural wiring, there's a default setting: "Mom will handle it"</p>

      <h2>Statistics Revealing The Maternal Challenges</h2>

      <p>A survey by Mylo of 2,000 Indian mothers found that:</p>
      <ul>
        <li>32% struggled to balance work and home</li>
        <li>19% were sleep-deprived</li>
        <li>12% said they never got a real break</li>
      </ul>

      <p>A study in the Indian Journal of Psychological Science found that Indian mothers often experience emotional exhaustion due to feeling they're falling short of unrealistic expectations.</p>

      <p>According to the World Health Organization, 22% of new mothers in India suffer from postpartum depression.</p>

      <p>And in another study, 63% of working mothers reported moderate to severe stress—much of it caused by shift duties, lack of support, and difficulty breastfeeding exclusively.</p>

      <p>These are not just numbers, these are the stories of real women. Smiling through pain. Holding families together with shaky hands.</p>

      <h2>How Did We Get Here?</h2>

      <p>Much of it goes back to conditioning. From girlhood, we're taught that to be a woman is to give, to nurture, to sacrifice. That being a good mother means being tireless, cheerful, and endlessly available.</p>

      <p>So, when a woman feels overwhelmed or tired—or even resentful—she doesn't blame the system. She blames herself.</p>

      <p>And the world doesn't help.</p>

      <p>Media and cultural narratives further cement this idealization. Movies and TV shows glorify the mother who "does it all" without once pausing to ask at what cost?</p>

      <p>We idolize the mother who puts everyone first, but forget to ask who puts her first.</p>

      <p>And then there's the guilt—especially for working mothers. Guilt for leaving your child home for work. Guilt for answering emails during playtime. Guilt for enjoying time away.</p>

      <p>This guilt isn't natural—it's manufactured. It's passed down in whispers, loaded glances, and unspoken expectations.</p>

      <p>All of this is rooted in patriarchy, where parenting is seen as a mother's job, and a father's role is often reduced to earning and "babysitting." But children don't just need money—they need presence, love, patience.</p>

      <p>Parenting shouldn't be a solo act. It should be a duet.</p>

      <h2>Why It's Hard To Talk About?</h2>

      <p>It's the fear of judgment.</p>

      <p>Say you're exhausted and someone might call you ungrateful. Admit you're overwhelmed and someone might say you're not trying hard enough.</p>

      <p>Even other women, raised on the same scripts, might offer sympathy laced with judgement.</p>

      <p>There's the quiet weight of guilt, too—the kind passed down through generations. Women have been taught to chase the "Supermom" ideal: always smiling, never stumbling. So when motherhood feels heavy (as it often does), they don't question the pressure—they question themselves. They see their struggle not as a sign of how hard the role is, but as a personal failing. And that hurts, deeply.</p>

      <p>But the truth is, this silence isn't a sign of strength—it's a survival mechanism shaped by a culture that romanticizes motherhood while offering little real support. Until we begin to normalize these conversations, mothers will continue to suffer quietly, believing that they are alone in a burden that is, in fact, collective.</p>

      <h2>So, How Do We Begin to Shift Things?</h2>

      <p>Start with awareness. Name the invisible work. Say it out loud, from remembering everyone's favourite dishes to trying to keep everyone's emotional world afloat is work and it deserves our acknowledgment.</p>

      <p>Rethink participation. When fathers step in, it's often called "helping." But it's not helping—it's parenting. Let's stop calling basic responsibilities "help".</p>

      <p>Make space for honesty. Let mothers speak freely—without judgment. Let them say, bluntly and without apology, that they're burnt out, exhausted, or simply in need of a break. Vulnerability isn't weakness—it's human.</p>

      <p>Reframe the narrative. Let's tell stories that show real motherhood—magical, brave and messy and exhausting. Lets normalize equal parenting, mental health break, and mothers who say "I need some me time now".</p>

      <p>Our mothers are the epitome of unseen strength and silent resilience. The next time you see her juggling a thousand responsibilities, perhaps offer her a helping hand—without waiting to be asked. And when she forgets to add salt to your pasta, instead of showing disappointment, maybe just smile and ask her to pass the salt.</p>

      <p>It's in these small moments of empathy that we begin to repay a fraction of the love she gives us every day.</p>

      <p>Let's stop measuring our mothers by perfection and start recognizing them with compassion.</p>
    `,
    featured: true,
    views: 1560,
    likes: 120,
    comments: []
  },
  {
    id: "100",
    title: "Why Is it that Rape Cases Often Remain Cold in India?",
    slug: "why-is-it-that-rape-cases-often-remain-cold-in-india",
    category: "National",
    date: "13 JUNE, 2025",
    image: "/Rape.jpeg",
    excerpt: "A deep dive into the systemic issues that cause rape cases to remain unsolved in India, from delayed reporting to institutional challenges.",
    author: {
      id: "2",
      name: "Hetal Kothari",
      username: "hetal-kothari",
      image: "/Hetal.jpeg"
    },
    content: `
      <h1>Why Is it that Rape Cases Often Remain Cold in India?</h1>
      
      <p>Woman in India usually think that coming forth with their story of rape will lead to fairness and justice. Unfortunately, for a lot of people, it starts a difficult journey that ends without success. Years after her death, her case isn't solved, the evidence is gone, and the case goes cold without a word. No closure. No punishment. The number of stories without conclusions keeps increasing.</p>

      <h2>Should this time-related issue be avoided?</h2>

      <h3>1. The Concern to Speak About Problems</h3>
      <p>Imagine a young girl in a small town has suffered an assault and is then urged by her family or nearby people to stay quiet, thinking about her reputation, and that nobody will believe her. Today, many survivors in India are coping with the same problem. Since many people are afraid of being shamed, blamed, or facing other consequences, very few rape cases see the light of day. Very often, the victims step forward after important evidence has been lost. Even though the lag is explainable, it complicates solving the crime from the beginning.</p>

      <h3>2. Problems with the Police System</h3>
      <p>People who report it will find that the next challenge is facing interrogation at the police station. There are too many times when victims' claims are refused or blatantly ignored. There are instances where officers at rural or understaffed stations persuade victims not to report the case. In some cases, people report error-filled statements or miss their medical checkups and visits to the crime scene.</p>
      <p>Mistakes in such cases cost heavily, not only in due diligence, but also in the results they yield. They can affect the decision and also the fact that whether the case will receive deserved justice or stay open ended, never to see closure.</p>
      <p>Even more, there are not enough police officers in India to provide proper services. Many of them deal with too much responsibility, without proper compensation and proper training. When investigators do not have enough sensitivity and resources, it is very rare for them to carry out fully trauma-informed investigations.</p>

      <h3>3. Stories that are Sealed</h3>
      <p>It is vital to have preserved evidence collected as soon as possible in cases of rape. The country has difficulty providing enough forensic laboratories and forensic specialists. A lot of time, existing rape kits are not collected, or they become contaminated. It usually takes months or even years to process samples of DNA.</p>
      <p>While they are waiting, many survivors choose to give up. Every day that goes by, people forget more, and it becomes tough to find eyewitnesses for a case.</p>

      <h3>4. Justice That May Take A Long Time (Or May Not Happen at all)</h3>
      <p>The process of waiting for a case to be resolved in court can be too much for anyone. There is too much work for India's legal system. From the time they start, trials can last several years before they finish. During this period, victims are commonly required to describe their terrible experiences to people they don't know, sometimes even to their attacker.</p>
      <p>There are cases that people withdraw. It can be easier for those accused, particularly if they are rich, influential, or know powerful people, to reach an agreement "outside the court". In some villages and small towns, leaders move to resolve issues by suggesting families keep them private to not inflict harm to the community's reputation.</p>

      <h3>5. Little Help Received by Survivors</h3>
      <p>It must not go unnoticed that dealing with a court case in India is still a big challenge, even when you have someone to support you. It is almost impossible for those who have suffered rape and come from underprivileged and marginalized areas.</p>
      <p>The quality of legal aid varies from one area to another. Usually, couples only go to counseling if there are serious problems. There is hardly any security from threats. Many who go through sexual assault are made to feel guilty by their families and are threatened by the person who assaulted them. They feel lonely and apart from everybody when they are left without the support of someone standing next to them.</p>
      <p>Often, when the system does not support them, they become tired and eventually stop trying, but only because they have no other choice.</p>

      <h3>6. Government actions that make laws and policies sound good.</h3>
      <p>India has declared its intentions to make important changes. Once the Nirbhaya case happened in 2012, extra laws were put in place and fast-track courts and tougher sentences were created. Paper rules only work if the ones carrying them out have been properly trained and held responsible.</p>
      <p>Fast-track courts do not get enough resources and are overcrowded. Law enforcement agencies have responded to change very slowly and carelessly. We do not only need tougher laws but also better ways to put them into action.</p>

      <h3>7. The true Cost of Not Solving Cold Cases</h3>
      <p>A case of rape being left unsolved in India is bigger than a figure in the record. It ends with someone who has no clues about the danger. The family is left bereaved in silence. Every time a case goes cold, it is because some chances were missed: a delayed report, missing evidence, and no attention to a request for help. Until there are reforms in police education, crime investigation systems, delays in courts, and help for survivors, similar situations will keep on taking the front stage. There are plenty of laws in India. The problem is that there is little empathy, sense of urgency, or political effort to assist the most vulnerable.</p>

      <p>Justice delayed is not only justice denied - it is justice destroyed. When legal cases are permitted to remain unresolved, over months and even years, the inconvenience is much more than that. Important evidence gets degraded, memories of the witnesses become hazy, and the victims are forced to live in agonizing suspense, neither able to recover nor to forget. The more the system stalls the more credibility it loses. Justice does not start and stop with a verdict- it is a process that requires promptness, upright character, and execution. Each pause sends the message that certain lives, voices, or truths are less important. Justice should not be stored away, forgotten, or lost in bureaucratic lethargy, but Justice should be alive, on display, and resolute.</p>
    `
  },
  {
    id: "101",
    title: "Emotional Intelligence",
    slug: "emotional-intelligence",
    category: "Features",
    date: "13 JUNE, 2025",
    image: "/Ei.jpeg",
    excerpt: "An exploration of emotional intelligence, its components, and why it matters in our increasingly interconnected world.",
    author: {
      id: "14",
      name: "Trishla Chaudhary",
      username: "trishla-chaudhary",
      image: "/Trishla.jpeg"
    },
    content: `
      <h1>Emotional Intelligence</h1>

      <p>Emotional intelligence (EI or EQ) refers to the ability to identify, comprehend, manage, and influence emotions—both your own and those of others. It plays an important role in interpersonal and intrapersonal relationships. This concept was popularized by Daniel Goleman through his book, Emotional Intelligence: Why It Can Matter More Than IQ which was published on 1995. It is influenced by Sophrosyne, which is a virtue concept in classical Greek philosophy and is an amalgamation of moderation, self-control, and temperance. This ancient virtue was seen as a guide to better psychological well-being.</p>

      <h2>Core components (Daniel Goleman's Model)</h2>
      <p>Daniel Goleman's popular framework identifies five key components:</p>

      <h3>Self-awareness</h3>
      <p>This is the basis of EI. It entails being aware of how your feelings, motives, values, strengths, and shortcomings affect your ideas and behavior.</p>

      <h3>Self-Regulation (or Self-Management)</h3>
      <p>This entails managing your emotions in a healthy way, controlling impulsive feelings and behaviors, and adapting to changing circumstances.</p>

      <h3>Motivation</h3>
      <p>Being motivated by internal forces rather than by outside incentives like fame or money. It all comes down to creating goals, being passionate about what you do, and persevering through difficulties.</p>

      <h3>Empathy (or Social Awareness)</h3>
      <p>This involves recognizing and interpreting nonverbal cues, respecting diverse viewpoints, and developing deeper connections with others.</p>

      <h3>Social Skills (or Relationship Management)</h3>
      <p>The skill to create and sustain positive relationships, convey messages clearly, address disagreements, work together, and motivate others.</p>

      <h2>Why is it important</h2>
      <p>High EQ individuals manage their emotions and stress more effectively and tend to experience greater satisfaction and well-being in their lives. It fosters resilience and empathy which builds trust, respect, and deeper interpersonal connections. They can express themselves clearly and understand others' emotions leading to better relationships and fewer misunderstandings. Leaders with high EI are better at motivating others, resolving conflicts, and creating positive work environments. It encourages a mindset poised for growth and continuous learning.</p>

      <h2>Conclusion</h2>
      <p>"It is only with the heart that one can see rightly; what is essential is invisible to the eye." As our world becomes increasingly intertwined and intricate, the capacity to comprehend and harness emotions becomes increasingly essential. In the end, developing emotional intelligence enables people to reach their full potential, live more satisfying lives, and make constructive contributions to their communities.</p>
    `
  },
  {
    id: "102",
    title: "PRIDE & PREJUDICE",
    slug: "pride-and-prejudice",
    category: "Editorial",
    date: "13 JUNE, 2025",
    image: "/Pride.jpeg",
    excerpt: "A powerful examination of Pride and prejudice in India, exploring the gap between legal progress and lived reality for LGBTQ+ communities.",
    author: {
      id: "1",
      name: "Shumaila Khan",
      username: "shumaila-khan",
      image: "/Shumilaprofile.jpeg"
    },
    content: `
      <h1>PRIDE & PREJUDICE</h1>

      <p>It is a truth universally acknowledged that in a heteronormative democracy, queerness will be tolerated—so long as it stays quiet, marketable, and non-threatening.</p>

      <p>Every June, the world goes through a "phase" that erupts in rainbows.</p>
      <p>Logos turn queer. Brands turn poetic. Influencers dig up last year's captions.</p>
      <p>Pride becomes both a spectacle and a sales pitch, loud enough to trend and soft enough not to threaten.</p>

      <p>This is where Pride meets its shadow: Prejudice.</p>
      <p>And unlike the rainbow, prejudice doesn't fade after June—because discrimination doesn't take a month off.</p>
      <p>It lingers—in appointment letters never issued, in hospital beds refused, in classrooms too scared to teach honestly.</p>

      <p>India may have decriminalized queerness, but it has not de-institutionalized bigotry. The system doesn't need slurs to discriminate - it just needs silence.</p>

      <h2>PRIDE</h2>
      <h3>Six Things Pride Is - and Two Things It's Not</h3>
      <p>(inspired by Kay Ulanday Barrett, Lesley University, 2021)</p>

      <h3>1. Pride began as a riot.</h3>
      <p>In June 1969, a police raid on the Stonewall Inn, New York City sparked six days of unrest. LGBTQ+ patrons and neighborhood residents pushed back against the regularized police harassment they faced. This unrest, now called the Stonewall Uprising, marks a historical catalyst.</p>

      <h3>2. Stonewall wasn't the first time queer people fought back.</h3>
      <p>Before Stonewall, queer and trans communities had already staged acts of resistance across the U.S.:</p>
      <ul>
        <li>1959: Cooper Donuts Riot, Los Angeles</li>
        <li>1965: Dewey's Lunch Counter Sit-In, Philadelphia</li>
        <li>1966: Compton's Cafeteria Riot, San Francisco</li>
      </ul>
      <p>These events are less known, not less important. The selective memory of history often favors what fits neatly into myth.</p>

      <h3>3. Pride is intersectional.</h3>
      <p>There's no version of queer liberation that isn't also about race, class, and gender.</p>
      <p>Black, Indigenous, Latine, and Asian American Pacific Islander (AAPI) activists have shaped the LGBTQ+ movement from its earliest days. Their stories are frequently sidelined in mainstream retellings, which often center whiteness and respectability.</p>
      <p>In 2017, Philadelphia added black and brown stripes to the rainbow flag to draw attention to racism within LGBTQ+ spaces. The fact that this was considered controversial says enough.</p>

      <h3>4. Pride was first officially recognized in 1999.</h3>
      <p>President Clinton issued Proclamation No. 7203, officially designating June as Gay and Lesbian Pride Month.</p>
      <p>Bisexual and transgender individuals were not included in this.</p>
      <p>Earlier, Clinton's Executive Order 13087 (1998) prohibited discrimination in federal employment based on sexual orientation—but not gender identity.</p>

      <h3>5. The scope of Pride expanded in 2009.</h3>
      <p>President Obama revised the proclamation to include bisexual and transgender communities. It was a rhetorical shift, not a structural one—but an important step toward recognition.</p>

      <h3>6. Pride is not exclusive—but access depends on context.</h3>
      <p>Straight and cisgender allies are welcome to celebrate, support, and advocate. But not every space during Pride is intended to be universal. Some events are created by and for LGBTQ+ people to gather without having to justify their presence or tone things down for comfort.</p>
      <p>Boundaries are not exclusion. They are necessities.</p>

      <h3>Two Things Pride Is Not</h3>
      <h4>1. Pride is not a branding opportunity.</h4>
      <p>Rainbow merchandise is not activism. Visibility without structural support is a marketing campaign—not alliance/allegiance.</p>

      <h4>2. Pride is not a phase.</h4>
      <p>It's not a fad, not a phase, and definitely not a trend. If anything is short-lived, it's the world's attention span. Queerness isn't what's temporary - tolerance often is.</p>

      <h2>Prejudice</h2>
      <p>When institutions stay silent, even the loudest protests become whispers.</p>
      <p>Despite legal progress, including the reading down of Section 377, structural discrimination persists across Indian society.</p>
      <p>Laws exist—but rarely translate into lived protection.</p>

      <p>In education, over 60% of LGBTQ+ students report verbal abuse, while 15% face physical bullying (Humsafar Trust, 2020). In workplaces, 70% of queer employees report discrimination or social exclusion - a figure well above the global average (Deloitte, 2023). Travel too is marked by unease: 86% of transfeminine and 83% of transmasculine travellers report discrimination, with safety dictating their mobility (Booking.com).</p>

      <p>These aren't numbers. They're indicators of structural exclusion.</p>

      <p>In February 2025, two trans individuals collecting Holi donations in Lucknow were assaulted by hospital staff—verbally abused, robbed, and left without recourse until public outrage forced an FIR. A month later in Indore, transwomen residents of "Mera Kunba," a shelter meant to provide safety, were attacked and threatened with eviction. The violence was not random—it was institutional.</p>

      <p>This pattern isn't new. In September 2022, two trans men were detained by police in Gurugram, verbally abused, and held without grounds. Not only was no FIR filed for weeks, but the legitimacy of their shelter was publicly questioned, as if the system needed a reason not to protect them. In Kozhikode, transwoman Deepa Rani approached the police for help after being harassed. Her request was met with silence. No action was taken and No protection granted.</p>

      <p>These are not isolated incidents. They're snapshots of a system that writes protections into law but denies them in practice. The Transgender Persons (Protection of Rights) Act, 2019 promises dignity—but comes with caveats that disfigure that promise: the requirement of invasive medical screening to legally affirm gender identity, the routine delay or denial of FIRs, the glaring lack of sensitization among police and healthcare workers.</p>

      <p>Worse still is the vacuum where accountability should be. India has no national anti-discrimination law explicitly protecting sexual orientation or gender identity. There are no dedicated commissions for queer and trans persons, no watchdogs with teeth. In the absence of enforcement, the law becomes performance.</p>

      <h2>From Protest to Progress</h2>
      <p>The reading down of Section 377 marked a milestone, not a finish line. Decriminalisation alone does not dismantle prejudice. Legal reform, while essential, cannot substitute the broader structural transformation required in policing, healthcare, education, and civil society.</p>

      <h3>First</h3>
      <p>Police sensitisation must go beyond workshops. Custodial abuse must result in consequences. Police training modules must move beyond tokenism, and institutional accountability must be enforceable.</p>

      <h3>Second</h3>
      <p>Anti-discrimination laws must be broad, intersectional, and enforceable across employment, education, and housing.</p>

      <h3>Third</h3>
      <p>Dedicated national commissions for queer and trans persons must be created. Providing state-funded shelters and social services must be taken care of.</p>

      <h3>Fourth</h3>
      <p>Reform curricula, invest in inclusive media, and confront narratives that pathologize differences.</p>

      <p>If Pride is a protest, it is because the system has not yet earned the right to celebration. Pride is not a festival - it is a resistance that continues in classrooms, courtrooms, clinics, and streets. One side glints with rainbow visibility, hashtags, corporate sponsorships. The other remains dull with silence, erasure, and deferred justice.</p>

      <p>Pride and prejudice are not opposites; they are coexistent forces—one pushing for recognition, the other resisting change.</p>

      <p>The future depends not only on laws but on will—on whether institutions will evolve, or whether progress remains aesthetic.</p>

      <p>If Pride Month is to mean something beyond performance, it must become a site of reflection and resolve. Pride is not about visibility alone. It is about safety, Dignity, Belonging.</p>

      <p>And it begins when the state, the law, and the citizens stop pretending that equality is already here.</p>
    `
  },
  {
    id: "middle-east-economic-shift",
    title: "From Oil to Opportunity: The Middle East's Economic Shift",
    slug: "from-oil-to-opportunity-middle-east-economic-shift",
    excerpt: "An in-depth analysis of how Middle Eastern nations are transitioning from oil dependency to technology-driven economies, exploring their strategic investments in AI and green technology.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          For decades, the Middle East has long been dependent on fossil fuels and rare metals for their economic identity. Since the discovery of vast oil and natural gas deposits, the region has had drastic changes in their geopolitical atmospheres. Nations like Iran, Afghanistan and Kazakhstan, which struggled to industrialise quickly or develop stable governments, have been brutally exploited—caught in the turmoil of resource politics.
        </p>

        <p>
          On the other hand, states like Saudi Arabia, Yemen, UAE etc. capitalised quickly on their newfound source of wealth and are now global economic powerhouses. The effect on our world as it is now? Their leaders accumulated immense, often opaque, reserves of wealth—making them some of the richest states on Earth. They hold the power, resources, and global influence to make any change or development they deem fit.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Recognising the Limits of Oil and the Future</h2>
          
          <p>
            Throughout time, it has always been new technology that brings about the turn in the global landscape. Those who bring about this turn emerge as the new dominant powers, be it from a military perspective- the shift from stone weapons to iron ones, or from cannons and guns to nuclear weapons; or be it an industrial perspective- the invention of the printing press and the industrial revolution.
          </p>
          
          <p>
            The Middle East recognises that a turn, military as well as industrial, is on the horizon- AI and green technology. They also recognise the finite nature of their natural resources, and how advancing technology has begun shifting focus from oil/coal-based fuels to abundant renewable resources that cannot be monopolised. As before, they now adapt to this changing landscape and pivot to Artificial Intelligence and other emerging technologies.
          </p>

          <p>
            With their vast capital reserves, global networks, and strategic foresight, these nations are positioning themselves as key players in the next technological revolution. Today, power isn't just about oil or natural resources—it's also about who leads in technology. And the Middle East is making sure it isn't left behind. Countries like Saudi Arabia and the United Arab Emirates are investing heavily in new technologies. They're putting money into tech companies, building partnerships with some of the biggest firms in the world, and planning entire cities based around futuristic ideas.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Building the Cities of Tomorrow</h2>
          
          <p>
            One of the most ambitious projects is NEOM, a city being built in Saudi Arabia that's designed to run on renewable energy and use the latest technology in everything from transport to healthcare. The UAE has also opened a university focused entirely on artificial intelligence, showing that they're serious about positioning themselves not just as consumers but as innovators. They want to be leaders in developing it.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Creating a Tech-Ready Ecosystem</h2>
          
          <p>
            But it's not just about spending money. These countries are also trying to create the right environment for new industries to grow. That includes updating school curricula, training local workers in tech skills, and building large data centres to handle the vast amount of digital information that modern technologies rely on. They're also setting up laws and systems to encourage international companies to bring their business to the region.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">A New Kind of Global Influence</h2>
          
          <p>
            In doing all this, Middle Eastern nations are gaining a new kind of influence. They're no longer just selling oil—they're helping shape the future of how the world works. From smart cities to digital healthcare, they're laying the groundwork for what tomorrow might look like. This rapid scaling and attempt at dominance in what might be the most important aspect of the centuries to come raises many questions. Will the Middle East develop in the tech business as they did in oil? Will the difference in governance forms, monarchy vs democracy, play a crucial role? Who controls the data? How is the technology being used? Will it benefit everyone, or just a few?
          </p>
        </section>
            </div>
    `,
    image: "/oil.jpeg",
    author: authors.find(a => a.username === "aliya-imam")!,
    category: "international",
    date: "2025-06-14",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Middle East", "Technology", "Economic Development", "AI", "Green Technology"],
    featured: true,
    isPublished: true,
  },
  {
    id: "article-142-presidents-debate",
    title: "ARTICLE 142: THE PRESIDENT'S DEBATE AND QUESTIONS THAT FOLLOW",
    slug: "article-142-presidents-debate-questions",
    excerpt: "An analysis of the Presidential reference to the Supreme Court regarding Article 142, exploring its implications for constitutional governance and the balance of power between branches of government.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          May 15th, 2025 witnessed the Hon'ble President of India asking some questions to the Supreme Court over use of powers, of the Supreme Court as well as the Governors and the President itself. The Presidential reference, however, asked questions general in nature, sparked ideas, questions and skepticism about the use of the famous Article 142 by the Supreme Court of India. The question is, is the article a Gauntlet of Thanos, bestowing it with illimited power to intervene in matters? Do the matters in which it was revoked really concern the Supreme Court? In this article, we explore similar waters. In disclaimer, we may or may not come out with absolute answers but will have more questions in mind after reading it, that is something I can assure the readers of.
        </p>

        <p>
          The Presidential reference asked the Supreme Court whether it had power to intervene in the legality or illegality of Bills waiting for assent to become laws. This comes in reference to the Court invoking the article to comment on the legality of about 10 bills which were being held by the Governor of Tamil Nadu for assent. "Can the Constitutional powers of the President/Governors be substituted by a judicial order exercising Article 142? Is Article 142 limited to matters of procedural law or does it extend to issuing directions "contrary to or inconsistent with existing substantive or procedural provisions of the Constitution," it asked.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Article 142</h2>

        <p>
            Before diving into precedents, it is a necessity for us to know what does the article exactly say, what does it convey?
        </p>

        <p>
            In its exact terminologies, the Article 142 of the Indian Constitution states that,
        </p>

        <p>
            "The Supreme Court in the exercise of its jurisdiction may pass such decree or make such order as is necessary for doing complete justice in any cause or matter pending before it, and any decree so passed or order so made shall be enforceable throughout the territory of India in such manner as may be prescribed by or under any law made by Parliament and, until provision in that behalf is so made, in such manner as the President may by order prescribe."
        </p>

        <p>
            "Subject to the provisions of any law made in this behalf by Parliament, the Supreme Court shall, as respects the whole of the territory of India, have all and every power to make any order for the purpose of securing the attendance of any person, the discovery or production of any documents, or the investigation or punishment of any contempt of itself."
        </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">What sparked the debate?</h2>

        <p>
            The President, questioning the use of the powers of supreme court, inquired whether the Supreme Court can really replace or substitute a Governor or the President for that matter by invoking the article and hence, placing an article above the first citizen of the nation and those of the states. Reacting to this the Vice President, Shri Jagdeep Dhankar called the article "nuclear missile against democratic forces", The Hindu reports.
        </p>
          
          <p>
            In defence, Justice Pardiwala did mention later that the article was invoked thoughtfully and that it was used in the benefit of the citizens of Tamil Nadu.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Was the use of the Article justified?</h2>
          
          <p>
            Now, this comes at a time, when a lot of legislation related debates are finding their place in the Court as well as on ground zero, and the Court overriding the legislature may or may not be welcomed by the legislators. The use of the article, though might or not be justified, can be done as the Supreme Court is the final interpreter of the Constitution and hence, holds the power to interpret the Article as and how it deems necessary and crucial, but questions also arise whether the top court gets a say in state bills, when they are not even laws yet?
          </p>

          <p>
            Readers, we should have this understanding, as important is the article to keep a check on legislature's misuse of power, it is also necessary that the judiciary be impeded from barging into the territory of legislature, also, this debate sparks especially when the top court steps into the state bill's territory and declares the action of a Governor moot and illegal, raising questions, whether the governors or even the President for that matter, have any power in their hands or are they just nominal in purview as well?
          </p>

          <p>
            According to a Research published by IIM-Ahmedabad in May 2024 suggests that of the 1579 Supreme Court cases where the terms "Article 142" or "complete justice" were used between 1950 and 2023, the Court "explicitly" used its power under the provision in only half the cases. The Court's deployment of Article 142 was "ambiguous/not used" in almost 40 percent of cases. It expressly rejected the use of the provision in about 10 percent of cases.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The way ahead</h2>
          
          <p>
            The matter is rather fresh as of now to build onto any conclusions, but the questions themselves spark thoughts and ideals. Are the foundations of the iron walls between the three pillars of democracy fumbling? Is the judiciary overpowered? Is it misusing the provision meant to ensure its independence? I, readers, leave it upon you to think, wonder rather and finally sought the answers to my questions, for when the President can ask, why can't you and I?
          </p>
        </section>
      </div>
    `,
    image: "/Ar.jpeg",
    author: authors.find(a => a.username === "atulit-pandey")!,
    category: "national",
    date: "2025-06-14",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Constitution", "Supreme Court", "Article 142", "Governance", "Legal System"],
    featured: true,
    isPublished: true,
  },
  {
    id: "absence-of-geoparks",
    title: "ABSENCE OF GEOPARKS IN INDIA: WASHING AWAY GEOHERITAGE?",
    slug: "absence-of-geoparks-in-india",
    excerpt: "An exploration of India's rich geological heritage and the urgent need for UNESCO Global Geoparks to preserve and showcase our natural history.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          "India's landscape is a living record of the Earth's ancient history, from the towering Himalayan ranges to the volcanic Deccan Traps. This rich geological heritage, coupled with vibrant cultural traditions, makes India an ideal candidate for UNESCO Global Geoparks."
          <br/>
          - Tim Curtis, Director and Representative, UNESCO New Delhi Regional Office for South Asia
        </p>

        <p>
          With the world progressing at pace towards preserving their heritage, cultural, ethnic and geological alike, Global Geoparks come in as the saviour of the geology of a certain region.
        </p>

        <p>
          While Mr. Curtis appreciates India's potential for being the perfect candidate for having UNESCO Global Geoparks, India possesses, noteworthily, none. It is without a doubt, certain, that India possesses extraordinary potential for having geoparks, having undergone extraordinary geological changes, be it the duration of continental drift, the Himalayan orogeny, the Deccan trap formation, India has witnessed a myriad of textbook geological phenomenon and displays a spectrum of features, hardly witnessed anywhere else on Earth.
        </p>

        <section class="article-section">
          <h2 class="section-heading">What are Geoparks?</h2>
          
          <p>
            Introduced in 2015 by UNESCO, the geoparks or UNESCO Global Geoparks is a landmark initiative focusing on the global geoheritage, giving the long-due attention to the geological features of the world, finally appreciating what nature has given us in the form of Earth features, and shifting focus to anthropocentric preservation to a more holistic approach.
          </p>

          <p>
            UNESCO defines Geoparks as:
            <br/>
            "UNESCO Global Geoparks are single, unified geographical areas where sites and landscapes of international geological significance are managed with a holistic concept of protection, education and sustainable development."
          </p>

          <p>
            A UNESCO Global Geopark uses its geological heritage, in connection with all other aspects of the area's natural and cultural heritage, to enhance awareness and understanding of key issues facing society, such as using our earth's resources sustainably, mitigating the effects of climate change and reducing natural hazard-related risks.
          </p>

          <p>
            The British Geological Survey define UNESCO Geoparks as:
            <br/>
            "UNESCO's Global Geoparks are areas with internationally important rocks and landscapes, all of which are managed responsibly for conservation, education and sustainable development. Whilst geology may be their foundation, UNESCO Global Geoparks build upon it by bringing together other aspects of heritage such as archaeology, history, culture and biodiversity. All of this is achieved in collaboration with local people to make UNESCO Global Geoparks better places to work, live and visit."
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">India without a global geopark: what's at stake?</h2>
          
          <p>
            The disadvantages of not having an UNESCO recognised Geopark are as follows:
          </p>

          <ul>
            <li>Loss of international recognition: Without UNESCO status, the geoparks in India miss out on the global visibility that will impact global academic collaboration, may reduce grants or research interest from international conservation bodies</li>
            <li>Effect on geotourism: UNESCO global geoparks attract geotourism which in turn generates revenue and employment, this lack of recognition limits such potential in India's rich geoheritage sites like Lonar Lake in Maharashtra</li>
            <li>Poor protection of geological heritage: sites recognised by UNESCO receive legal or policy protection, decreasing the risk of destruction due to urbanisation, vandalism, and geosites such as St. Mary's Island and Eparchaean Unconformity have suffered irreversible damage due to lack of recognition</li>
            <li>Limited public awareness and education: these sites are also learning territories without such recognition, the focus is less on public education regarding earth sciences for example the Majuli River in Assam world's largest river island with a complex geomorphology receives very little attention in earth science education</li>
          </ul>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          
          <p>
            UNESCO Global Geoparks play a crucial role in conserving geological heritage, promoting education, and supporting sustainable tourism. Despite India's rich geo-diversity, the absence of a recognised Geopark limits both global recognition and local development opportunities. These parks can empower communities, boost eco-tourism, and enhance scientific learning. To change this, India must identify eligible sites, improve infrastructure, involve local communities, and meet UNESCO guidelines. Greater collaboration between government, scientists, and educators is essential. By investing in geopark development, India can preserve its natural legacy while advancing sustainable development and becoming a stronger voice in global geoheritage conservation efforts.
          </p>
        </section>
      </div>
    `,
    image: "/Geoparks.jpeg",
    author: [
      authors.find(a => a.username === "atulit-pandey")!,
      authors.find(a => a.username === "prerna-srivastava")!
    ],
    category: "sci-tech",
    date: "2025-06-15",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Geoparks", "UNESCO", "Geology", "Conservation", "India"],
    featured: true,
    isPublished: true,
  },
  {
    id: "before-the-closet",
    title: "Before the Closet: How different sexual Identities have always been a part of Indian History",
    slug: "before-the-closet-sexual-identities-indian-history",
    excerpt: "A journey through India's rich history of gender fluidity and sexual diversity, exploring how pre-colonial India embraced and celebrated diverse identities.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          We often hear phrases like coming out of the closet, but have you ever paused to ask, "what closet?"
        </p>

        <p>
          Because, truth be told, for centuries, Indian culture didn't even have one when it comes to sexual identity. The idea that LGBTQ+ identities are new or "Western imports" is one of the biggest myths passed off as fact. The truth? Sexual identity existed in India long before the British came with their moral codes and closets.
        </p>

        <p>
          This article is a journey back to a time when gender and sexuality were more fluid, visible, and accepted than we might imagine. It's about what existed before the closet, the laws, the shame, and the silence.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Myths That Bend Gender and Norms</h2>
          
          <p>
            Let's start with our epics: the Mahabharata and Ramayana. They aren't just tales of war and dharma, they're rich with queer-coded narratives.
          </p>

          <p>
            In the Mahabharata, Shikhandi is born a girl but raised as a man and recognized as such. His gender identity is not questioned; he's respected as a warrior. Then there's Arjuna, who, during exile, lives as Brihannala, teaching dance and living in a feminine form. The story doesn't treat this transformation as shameful; it's just a part of the plot.
          </p>

          <p>
            Even the divine gets a fluid makeover. Meet Ardhanarishvara, the iconic fusion of Lord Shiva and Goddess Parvati, depicted as one body split into half-male and half-female. This isn't just a metaphor; it's a sacred representation of gender fluidity, reminding us that the divine was never binary.
          </p>

          <p>
            Bahuchara Mata, another important deity, is worshipped by many from the hijra community. Her mythology and worship show the deep-rooted spiritual roles that third-gender people have played in Indian society for centuries.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Temples, Texts, and the Third Gender</h2>
          
          <p>
            Sexual identity in India wasn't just mythological, it was lived, documented, and even carved into stone.
          </p>

          <p>
            The Kamasutra, written around the 3rd century CE by Vatsyayana, is more than just a sex manual. It openly discusses same-sex relationships, third genders, and people with diverse sexual desires. These were not labeled unnatural; they were treated as other normal aspects of human experience.
          </p>

          <p>
            Take a stroll through temples like Khajuraho(Madhya Pradesh) or Konark(Odisha), and you'll find carvings of men with men, women with women, and non-binary representations. These temples didn't just allow queer imagery, they immortalized it.
          </p>

          <p>
            Historical communities like the hijras(recognized as a third gender in Indian law today) and jogappas(devotees of Goddess Yellamma in Karnataka) held important social and religious roles. Their identities were recognized and never erased.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">When the British Built the Closet</h2>
          
          <p>
            So, if all of this was normal in pre-colonial India, What changed?
          </p>

          <p>
            In 1861, during British rule, Section 377 was introduced into the Indian Penal Code. This law criminalized carnal intercourse against the order of nature. In simpler words: queer people became criminals. The British brought with them Victorian morality, rigid, shame-driven code of conduct where anything outside heterosexual marriage was seen as sinful. Suddenly, sexual identity once a part of stories, temples, and tradition was branded as unnatural, illegal, and shameful. Families began hiding it. Society silenced it. This is how the closet arrived, built, not by Indian culture, but by colonial law and judgment.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Breaking the Closet, Reclaiming the Past</h2>
          
          <p>
            Fast forward to September 6, 2018, a day now etched in queer Indian history. The Supreme Court of India finally struck down Section 377, decriminalizing consensual same-sex relationships. A huge legal win, yes, but that was only the beginning of something bigger: cultural reclamation.
          </p>

          <p>
            Young Indians today are digging deep into history, myths, and art to reclaim what was buried. Social media, documentaries, poetry, and pop culture are all contributing to this revival. Films like Aligarh, Margarita with a Straw, and series like Made in Heaven are shining a spotlight on Indian sexual identity, making it visible again.
          </p>

          <p>
            From queer history pages on Instagram to campus pride parades, today's youth is not importing LGBTQ+ identities, they're rediscovering what was always ours.
          </p>

          <p>
            Before the closet, there were stories, carvings, gods, and people who lived outside the binary and beyond societal boxes. They existed without shame, without fear and with pride.
          </p>

          <p>
            Pride in India didn't start in 2018. It started long ago in our scriptures, our sculptures, and our streets. We're not asking for space in Indian culture. We're simply reclaiming what was already there.
          </p>

          <p>
            And with every step forward, we're not building something new, we're unlocking something ancient.
          </p>
        </section>
      </div>
    `,
    image: "/MS.jpeg",
    author: [
      authors.find(a => a.username === "manasvi-srivastava")!
    ],
    category: "arts-culture",
    date: "2025-06-15",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["LGBTQ+", "Indian History", "Culture", "Gender", "Identity"],
    featured: true,
    isPublished: true,
  },
  {
    id: "ahmedabad-crash",
    title: "Mayday, Mayday, Mayday - Moments before the Ahmedabad Crash",
    slug: "mayday-moments-before-ahmedabad-crash",
    excerpt: "A detailed investigation into the tragic Air India flight crash in Ahmedabad, exploring the events leading up to the disaster and its aftermath.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          The clock struck 1339 hours IST, the calendar showed the date to be 12th June 2025, a pretty ordinary Thursday morning, when suddenly, Ahmedabad shivered with cries, its veins thrilled by huge black clouds of smoke, and the incident? A Boeing 787 Dreamliner, bound for London Gatwick crash landed just a few minutes after taking off, and collided with a hostel building of the BJ Medical College. 242 lives claimed, all innocent, 242 families devastated, and the world, shook to its core.
        </p>

        <p>
          As the world mourns the loss of every life, except one, onboard the aircraft, questions arise. Whose fault was it? What was the reason behind the crash? What happened in the final moments when 1,26,000 liters of fuel charred human bodies? What is the road ahead? What lessons do we take out from it?
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Crash</h2>
          
          <p>
            Air India's flight numbered AI 171, serviced by a Boeing 787 Dreamliner registered as VT-ANB, plummeted in the skies at 475 feet per minute, less than a minute after taking off from the Sardar Vallabhbhai Patel International Airport, Ahmedabad. As reported by Times of India on 14th June 2025, at least 274 people were killed in the crash. This numbers includes 242 people onboard the flight - 230 passengers, two pilots and 10 crew members, and 32 people who were the residents of the medical hostel.
          </p>

          <p>
            The flight took off from the airport at 1339 hours IST, scheduled to reach London Gatwick around 2300 hours IST or 1825 hours BST. In less than a minute of taking off, the plane crashed into BJ Medical College's hostel. The last recorded altitude of the aircraft through Flight Radar 24 stands at 625ft, and the descend is said to be at a rate of around 425ft/minute. The pilots gave the infamous MAYDAY call, but it was too late and no connection could be established. The Flight Data Recorder (FDR) or the Black Box has been recovered from the crash site by the AAIB, though the search for the other black box called the Cockpit Voice Recorder (CVR) is still on. Without the investigation of these recording instruments, it is rather impossible to say anything about the exact cause of the crash, though speculations exist.
          </p>

          <p>
            Some experts are of the view that the flaps were not in optimum position, others say that the landing gears had not been retracted in time which increased the air drag and overpowered the generated thrust of the machine. Some other experts also consider bird strike to be a probable cause, as the airport witnesses a larger than average incidents of bird strikes. Also, this is to be noted that it is the first crash of the 787 since its inception in 2011.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Red flags that were ignored</h2>
          
          <p>
            The causes are still under investigation, but the initial results indicate that not only systematic problems with Air India but also some general issues with Boeing 787-8 Dreamliner aircraft might have been neglected.
          </p>

          <ol>
            <li>
              <strong>The Whistleblower Boeing Warning Was Ignored.</strong>
              <p>There had been concerns before by a former Boeing engineer over structural problems in the 787 model, namely that parts that were not correctly fastened could come loose after several flights. Despite these warnings, Boeing took them as not critical to flight safety. These issues are now under the scanner, thanks to the crash of Flight 171, the first-ever fatal accident involving a 787.</p>
            </li>
            
            <li>
              <strong>Facility and Technical Management</strong>
              <p>It is reported that the air conditioning and communication systems of the plane had given problems to passengers of the previous flights. Despite these complaints Air India has not shown that it made rigorous maintenance checks and acted on these complaints satisfactorily. With effect from June 15, 2025, the Directorate General of Civil Aviation (DGCA) has directed increased safety checks on the complete fleet of Air India Boeing 787.</p>
            </li>

            <li>
              <strong>Transparency and Accountability</strong>
              <p>After the crash, the absence of transparency on the part of Air India and DGCA about the progress of the investigation and its results has been conspicuous. Such communication gap has stirred anger and resentment in the minds of the people regarding the effectiveness of the inquiry and the promise of accountability.</p>
            </li>

            <li>
              <strong>International Investigation and Consequences</strong>
              <p>The incident has raised concern across the globe especially in the United Kingdom where 53 British citizens were on board the plane. The UK has also sent air crash investigators to aid in the investigation which highlights the international consequences of the accident.</p>
            </li>
          </ol>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Air India Clarifies Position Amid Ongoing Crash Investigation</h2>
          
          <p>
            After the catastrophic accident of Air India flight AI 171, which resulted in the death of 242 people, Air India's CEO Campbell Wilson said that is it "a difficult and painful day" and expressed profound sorrow, assuring that the airline is fully cooperating with authorities while focusing on supporting victims' families. Air India is actively working with India's Aircraft Accident Investigation Bureau (AAIB), and Boeing, GE Aerospace, as well as investigators from the US (NTSB) and UK, to determine what went wrong.
          </p>

          <p>
            While it is still unclear what went wrong with flight AI 171, several aviation analysts think that an engine failure caused the crash, possibly due to insufficient thrust during take-off. Experts also pointed to boarder issues, stating that while the aviation industry is expanding rapidly, the safety culture is stagnant. Critical questions are also being raised – like why there was a 3-4 leveled building located so close to the airport runway.
          </p>

          <p>
            People are questioning whether Air India is to blame, however nothing can be said yet, as a full in-dept investigation is underway. The Air India promises that they will cooperate with authorities and will see it through till the end.
          </p>

          <p>
            No matter where the fault lies, the loss of lives of hundreds is an irreversible tragedy, which demands nothing but responsibility and accountability.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The high cost of flight: Boeing's accident history uncovered</h2>
          
          <p>
            This was by no means the first tragic accident. Although there have been many red flags in Boeing's past, the 737 MAX crashes made everyone take notice. Lion Air Flight 610 crashed into the ocean shortly after takeoff in October 2018. Ethiopian Airlines Flight 302 crashed under suspiciously similar circumstances five months later. 346 people died in all. The underlying reason? MCAS is a defective software program that is activated by inaccurate sensor data. The pilots weren't prepared to deal with it, which was the worst part. They had no idea what they were doing. But malfunctioning technology wasn't the only issue. It had to do with a dysfunctional culture.
          </p>

          <p>
            In the past, Boeing was a company driven by engineers. However, following its merger with McDonnell Douglas. Things were different after the 1997 merger. Finance executives were in charge, not the engineers who previously headed Boeing. Profit was the priority. Safety features were cut or self-certified, airlines were rushed, and corners were cut. A couple of insiders did make attempts to resist. Former quality manager John Barnett expressed serious concerns but was reportedly pressured into silence. He was found dead in 2024, just before he was to have testified. The factory was "chaotic" according to Ed Pierson. He was also ignored. Once "an engineering company with a good business plan," Boeing is now merely "a business company that makes plans."
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Aftermath and Insights</h2>
          
          <p>
            This incident leaves us with so many questions, the biggest question of all—safety. Is safety even the priority of such cost-cutting aviation companies? Because this wasn't just an isolated event but a part of a systemic issue. Should India rethink procurement deals with Boeing? This has put Air India under scrutiny too. The incident has also led to a trust deficiency among the passengers. The DGCA has mandated enhanced technical inspections on all Air India 787 Dreamliners with GEnx engines; well, that's a step in the right direction (but too late). The Ministry of Civil Aviation shouldn't wait for another incident to review its policies, training, and fleet safety. In addition to this, authorities must ensure the timely removal of physical obstacles around airports to maintain clear approach and departure paths. This is a call for accountability from the airlines, the manufacturers, and the government because in aviation there's no room for shortcuts—because every takeoff carries a world of lives and stories.
          </p>
        </section>
      </div>
    `,
    image: "/Crash.jpeg",
    author: [
      authors.find(a => a.username === "hetal-kothari")!,
      authors.find(a => a.username === "prerna-srivastava")!,
      authors.find(a => a.username === "atulit-pandey")!,
      authors.find(a => a.username === "aliya-imam")!
    ],
    category: "national",
    date: "2025-06-15",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Aviation", "Air India", "Boeing", "Safety", "Investigation"],
    featured: true,
    isPublished: true,
  },
  {
    id: "passing-the-torch",
    title: "Passing the Torch: Indian Cricket Team in the Post-Rohit-Kohli Era",
    slug: "passing-the-torch-indian-cricket-team-post-rohit-kohli",
    excerpt: "An in-depth analysis of India's cricket future following the retirement of Rohit Sharma and Virat Kohli from Test cricket, exploring the challenges and opportunities ahead.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          With the recent retirement of Rohit Sharma and Virat Kohli from the Test arena, Indian cricket now appears to be on the verge of a significant transition period, with the retirement of star players signifying both an era's end as well as the ushering in of generational transition to India's red-ball future.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Closing Chapters: The Final Tests of Rohit and Kohli</h2>
          
          <p>
            On May 7, 2025, Rohit Sharma, the Test captain of India, announced that he was retiring from Test cricket. After playing 67 matches, he scored 4,301 runs with an average of 40.57, including 12 centuries and 18 half-centuries. Rohit made a mark in Test cricket, especially after moving to the opening spot in 2019, where he particularly excelled in home conditions.
          </p>
          
          <p>
            Just a few days later, on May 12, Virat Kohli, who is one of India's top Test captains and a standout batter, also declared his retirement. Kohli concluded his test career with 123 matches, scoring 9,230 runs at an average of 55.57, along with 30 centuries—second only to Sachin Tendulkar among Indian players. He was captain from 2014 to 2022 and led India to 40 Test victories, creating a bold and aggressive style of play.
          </p>

          <p>
            Although these retirements were anticipated because of their ages and the demands of the game, they mark a clear shift in the team's leadership.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The BCCI's Response and Structural Shift</h2>
          
          <p>
            The BCCI has decided to keep Kohli and Rohit in the Grade A+ contracts for the 2024–25 season, which shows how important they still are to India's plans for white-ball cricket. At the same time, the board is making some changes in leadership. Shubman Gill, 25, has been named the new Test captain for the upcoming series against England. This choice signals a shift to a younger team. He's been prepared for this role through his experiences with India A and some early Tests.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">India's Test Future: Challenges and Focus Areas</h2>
          
          <p>
            The exit of two of the most senior batters and leaders leaves a significant gap in experience, temperament, and on-field guidance. The challenges that lie ahead include:
          </p>

          <p>
            Leadership Stability: With Gill stepping up as captain, the team will need some time to find its groove in terms of consistent leadership.
          </p>

          <p>
            Middle-Order Rebuild: Replacing the reliability and versatility that Kohli and Rohit offered to the middle order won't happen overnight. Young talents like Yashasvi Jaiswal, Ruturaj Gaikwad, and Sarfaraz Khan are set to vie for regular positions.
          </p>

          <p>
            Bowling Balance: The Test bowling lineup, featuring Bumrah, Siraj, and Ashwin, remains strong, providing a sense of continuity. However, developing solid backups for the long haul is crucial.
          </p>

          <p>
            Tough Tours Ahead: With a five-Test home series against England kicking off on June 20, the new team will face early tests—not just in terms of skill, but also in their ability to handle pressure.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion: A New Chapter Begins</h2>
          
          <p>
            The concurrent retirements of Rohit Sharma and Virat Kohli are one of the most monumental shifts in Indian cricket's history. While their departures leave significant voids, they also create opportunities for new talent to set new standards and paradigms of leadership.
          </p>

          <p>
            The BCCI's vision, the selectors' decision making in identifying suitable replacements, and the new players' ability to perform under the close scrutiny that comes with following such legendary forebears will determine how the transition will turn out. The strength and depth of Indian cricket will ultimately be tested in the coming months and starts with the England tour, which could provide the benchmark for the future.
          </p>
        </section>
      </div>
    `,
    image: "/leg.jpeg",
    author: authors.find(a => a.username === "abhinav-upadhyay")!,
    category: "sports",
    date: "2025-06-16",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Cricket", "Sports", "India", "Test Cricket", "Leadership"],
    featured: true,
    isPublished: true,
  },
  {
    id: "india-communalism",
    title: "India at the Crossroads: The Rising Shadow of Communalism",
    slug: "india-crossroads-rising-shadow-communalism",
    excerpt: "An examination of the historical roots and contemporary manifestations of communalism in India, its impact on society, and the path forward for national unity.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          India is a diverse country with a rich history of harmonious coexistence among its numerous communities. Yet, modern times have witnessed the rise of communal clashes, class conflicts, caste struggles, linguistic disputes, and ethnic tensions. Communalism is the belief that people of the same religion share common interests, suggesting that people of different communities have mutually incompatible and hostile ideologies.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Its Roots</h2>
          
          <p>
            Although conflicts did exist in the pre-colonial period, overall, it was a time marked by religious syncretism and harmony. Communalism is a colonial legacy tracing its roots back to various British policies of divide and rule like:
          </p>

          <p>
            • giving harsher punishments to Muslims than Hindus following the revolt of 1857
          </p>

          <p>
            • the partition of Bengal in 1905 along religious lines
          </p>

          <p>
            • introduction of a separate electorate
          </p>

          <p>
            • a communal interpretation of Indian history by James Mill
          </p>

          <p>
            • economic policies that led to stagnation and competition for limited resources and jobs
          </p>

          <p>
            India is founded on the rejection of the very idea that religion should be a determinant of nationhood. Secularism is enshrined in the Preamble and part of the basic structure of the constitution but it has not stopped political leaders and parties, both during the freedom struggle and post-independence, from using religious identities for electoral gains.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Its Impact</h2>
          
          <p>
            Jawaharlal Nehru warned in his book "The Discovery of India" (1946) that the communalism of the majority was especially dangerous because it could present itself as nationalist. Recurrent instances of communal violence and riots result in fatalities, displacement, property damage, and enduring trauma for people and communities. Instances include the 1984 Anti-Sikh riots, the 1992 riots following the Babri Masjid demolition, and the Gujarat riots of 2002.
          </p>

          <p>
            Social media has turned into a medium for spreading misinformation, rumors, and hate speech fostering an "us vs. them" narrative among communities (purposely augmented by communal politics), diminishing India's pluralistic identity, and resulting in societal polarization based on religion in turn threatening India's unity.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          
          <p>
            Addressing past injustices by committing new ones in a different context only deepens the original harm. Tackling communalism in India necessitates a multidimensional approach, including a focus on secular institutions, encouraging interfaith conversations, supporting ethical journalism, ensuring political responsibility, and confronting socio-economic inequalities.
          </p>

          <p>
            Future generations must not be taught to use history as a justification for present-day prejudice. Instead, we must strive to build a unified and harmonious society that looks forward rather than being divided by the past.
          </p>
        </section>
      </div>
    `,
    image: "/communism.jpeg",
    author: authors.find(a => a.username === "trishla-chaudhary")!,
    category: "national",
    date: "2025-06-16",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Communalism", "Society", "Politics", "History", "India"],
    featured: true,
    isPublished: true,
  },
  {
    id: "beyond-rcb-stampede",
    title: "Beyond the RCB Stampede: The Crisis of Toxic Fandom in India",
    slug: "beyond-rcb-stampede-the-crisis-of-toxic-fandom-in-india",
    excerpt: "An in-depth analysis of the tragic RCB stampede incident and the broader issue of toxic fandom in India, exploring how celebration turned into tragedy and what it reveals about our society.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          In India, cricket isn't just a sport—it's emotion, identity, and, for many, a kind of religion. So when RCB finally lifted the IPL trophy after 18 long years, it felt like a dream come true. Streets lit up, chants echoed through the night, and fans poured in by the thousands to be part of something historic. But somewhere between the celebration and the chaos, joy turned into tragedy.
        </p>

        <p>
          A stampede broke out. People who came to cheer ended up crying. 11 lives were lost. 47 people were injured. And a question hung heavy in the air: how could something so beautiful turn so dark?
        </p>

        <p>
          This piece isn't just about one event. It's about a pattern we keep ignoring—the way we put celebrities on pedestals that we tend to forget they're human, and so are we. This is in fact about the system that feeds off our devotion for the games and the system isn't concerned about the safety of others. It's about the way fandom, when pushed too far, stops being about love and starts becoming dangerous.
        </p>

        <p>
          And maybe, just maybe, it's time we start questioning how much is too much, when it comes to worshipping our heroes?
        </p>

        <section class="article-section">
          <h2 class="section-heading">This Isn't Just A One-Off Tragedy</h2>
          
          <p>
            This isn't just a one-off tragedy. What happened wasn't an isolated event—it's a glimpse into a much bigger, deeper issue. The RCB stampede is a symptom of something we've normalized for far too long: toxic fan culture.
          </p>
          
          <p>
            From constant Twitter wars and name-calling hashtags to meme pages viciously trolling teams and players—these may seem trivial on the surface, but they're where it begins. The aggression builds quietly, becoming part of everyday fandom until it explodes into something real, something violent.
          </p>

          <p>
            We've seen it before. Vandalism at Dhoni's House (2012 & 2014) Fans vandalized his Ranchi house after he lost certain matches. It wasn't criticism—it was mob outrage over a game. The infamous SRK–Salman rivalry wasn't just a clash of stars, it created years of online abuse, hate trends, and blind loyalty. Now, the battleground has shifted to YouTube, where digital creators command cult-like devotion. Feuds between influencers often lead to doxxing, harassment, and targeted abuse, all in the name of loyalty. It's almost as if they're trying to please a god, not admire a person. And when devotion turns into blind worship, dissent becomes betrayal, and celebration becomes chaos.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">How Does Fandom Become Toxic</h2>
          
          <p>
            Fandom, at its heart, is just love. It's the joy of watching someone succeed, the comfort of seeing a familiar face on screen, the excitement of waiting for a new match, movie, or video to drop. It's deeply human—to want to cheer for someone, to feel like you're part of something bigger.
          </p>

          <p>
            But sometimes, without even realising it, that love crosses a line.
          </p>

          <p>
            People start tying their self-worth to someone else's success. "If they win, I feel proud. If they lose, I feel small." It stops being about the game or the film or the art. It becomes personal. It becomes mine. And when someone says something against that person, someone you've grown up admiring, defending, even living through, it feels like they're insulting you.
          </p>

          <p>
            That's when admiration turns into obsession.
          </p>

          <p>
            What starts as a harmless debate—"my team is better than yours" slowly becomes a fight. Then a war. Then something uglier. We've seen it happen. People hurl insults over a tweet, sending threats over a film review, breaking things after a match loss, all in the name of being a "true fan."
          </p>

          <p>
            But maybe behind all that noise, there's just a silent hurt. People looking for meaning. For pride. For something that makes them feel alive and seen in a world that often doesn't care. And when they find that in a celebrity or a team or a creator they hold on too tight.
          </p>

          <p>
            There's nothing wrong with loving your heroes. But maybe the question we need to ask is: are we loving them, or are we losing ourselves in them?
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Systematic Failures Feed It</h2>
          
          <p>
            Toxic fandom doesn't happen in isolation. It's not just about over-passionate fans, it's also about the authorities around them that allow, and sometimes even encourage it.
          </p>

          <p>
            Take the example of poor event planning—oversold tickets, unmanned gates, no crowd control. Fans are left to navigate chaos on their own. The tragic case of the KK concert in Kolkata is proof: it wasn't violence, it was negligence.
          </p>

          <p>
            Then marketing comes into the light. Franchises and celebrities aren't just sold as talented, they're sold as identities. "Ee Sala Cup Namde," "Bleed Blue," "SRK Army." The message is: don't just support—belong, defend, fight. But the infrastructure around this emotion? Nowhere to be seen. No safeguards. No mental health checks. No accountability when things go wrong.
          </p>

          <p>
            And the media? They know exactly what they're doing. Headlines like "Who has the most loyal fans?" or "Twitter goes to war over XYZ" aren't harmless—they're the fuel to the fire. What should be entertainment turns into this constant need to be louder, more aggressive, more "loyal."
          </p>

          <p>
            The system profits from obsession—but never takes responsibility when it turns dangerous.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Human Cost</h2>
          
          <p>
            Behind every stampede, every surge of online hate, every fan war that crosses the line—there are people. Not just usernames or crowd counts, but human beings with emotions, families, and stories of their own. Somewhere along the way, in the rush to go viral or break records, we forget that. Fans are reduced to metrics likes, views, ticket sales while the hurt they carry, the fear, the lasting scars, go unseen.
          </p>

          <p>
            And when something does go wrong, the silence from the top is deafening. No accountability. No apology. The same franchises and systems that romanticise undying loyalty—selling slogans, rivalries, and hype and vanish when it's time to take responsibility.
          </p>

          <p>
            The fans are left behind. Not heroes. Not warriors. Just human beings who gave too much and got too little in return.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">What Needs to Change?</h2>
          
          <p>
            Toxic fandom won't fix itself—it needs change, and that change must happen at every level. For fans, it starts with knowing where to draw the line. It's okay to love a team, a celebrity, a creator but not to the point where it becomes your entire identity. Passion shouldn't cost you your peace. And loyalty? It doesn't have to come with anger or hate. In fact, sometimes the most loyal thing you can do is speak up when your own side goes too far.
          </p>

          <p>
            For teams, franchises, and event organisers, the message is simple: stop chasing hype at the cost of responsibility. Fans aren't just crowds or numbers—they're people. They deserve safety, respect, and basic care. And framing aggression as devotion only makes things worse.
          </p>

          <p>
            As a society, we need to think about what this says about us. Why do we tie our pride to a player's win? Why does belonging sometimes mean fighting strangers online? These aren't just sports or film issues, they're about identity, insecurity, and the human need to feel seen.
          </p>

          <p>
            The tragic RCB stampede, which resulted in the loss of many lives and many more injuries, has triggered many serious questions—When did being a fan turn into picking sides like it's a war? It used to be about enjoying what you love—your team, your movie, your music. Now, it feels like you have to fight strangers just to prove you belong. It's not really about sports or films anymore. It's about identity, validation, and feeling seen. But in the middle of all the noise, we forgot the joy.
          </p>

          <p class="conclusion">
            So ask yourself – when did love for the game start costing lives?
          </p>
        </section>
      </div>
    `,
    image: "/toxic.jpeg",
    author: authors.find(a => a.username === "prerna-srivastava")!,
    category: "features",
    date: "2025-06-17",
    readTime: "15 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Sports", "Society", "Culture", "Fandom", "Cricket"],
    featured: true,
    isPublished: true,
  },
  {
    id: "ibc-effective-tool",
    title: "Is the IBC Still an Effective Tool for Resolution?",
    slug: "is-the-ibc-still-an-effective-tool-for-resolution",
    excerpt: "An analysis of the Insolvency and Bankruptcy Code's effectiveness after nearly nine years, examining its successes, challenges, and the road ahead for corporate debt resolution in India.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          After nearly nine years of IBC establishment, corporate debt resolution has seen a sea change in India; however, challenges remain persistent, as the landmark cases of Bhushan Power and Jet Airways show. Is IBC delivering on its promise, or has it begun to show signs of strain?
        </p>

        <section class="article-section">
          <h2 class="section-heading">A Game-Changer in Debt Resolution</h2>
          
          <p>
            The IBC, introduced in 2016, was a law that carved a way for the time-bound and creditor-centric insolvency resolution. Over the years, it has become the primary recovery instrument for bad loans in India. In FY24, bank recoveries through IBC accounted for nearly 48% of their dues, much more favored than traditional recovery methods like the SARFAESI (32%) or Debt Recovery Tribunals (17%). Early cases like Essar Steel (₹1.19 trillion recovered) and Bhushan Steel provided credibility to the IBC.
          </p>
          
          <p>
            By December 2024, more than 8,175 insolvency processes had been initiated, out of which more than 3,485 were "rescued" by way of resolution plans or settlements. Financial creditors were able to realize ₹3.58 lakh crore through 1,119 approved plans approximately, with recovery averaging 163% of liquidation value. However, beneath these early successes, several concerning trends cast doubt over the long-term efficacy of the IBC.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Legislative Push to Address Systemic Gaps</h2>
          
          <p>
            Over the years, endless amendments have been introduced by the government and IBBI to plug the system's gaps.
          </p>

          <p>
            May 2025- Interim finance providers were allowed to attend Committee of Creditors (CoC) meetings and bidders were permitted to make separate plans with respect to individual assets.
          </p>

          <p>
            February 2024- These special rules for real estate firms mandated independent resolution plans and accounts for each project.
          </p>

          <p>
            July-December 2025- New guidelines that seek improvement in the appointment of Insolvency Professionals (IPs) ensuring better accountability and availability.
          </p>

          <p>
            The proliferation of regulations since 2016 and six amendment Acts proves the intention behind fine-tuning the IBC. However, the practical outcomes remain mixed.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Judicial Roadblocks and Landmark Cases</h2>
          
          <p>
            One of the most disruptive events occurred in May 2025, when the Supreme Court set aside JSW Steel's ₹19,700 crore resolution plan for Bhushan Power & Steel—nearly five years after approval by the CoC. The ruling, which turned on discrepancies regarding promoter liabilities, stunned investors and raised serious concerns as to the sanctity of resolution. While the Court did stay liquidation pending review, that very uncertainty was the most severe vulnerability exposed in the IBC architecture.
          </p>

          <p>
            Other famous cases highlight tensions of similar ilk. In November 2024, Jet Airways was eventually liquidated by the Supreme Court after prolonged delays did not crystallize into a feasible resolution. Go First Airlines met a similar fate in January 2025 with the NCLT citing repossession of assets and failed bids as reasons to shut it down.
          </p>

          <p>
            The present cases exemplify litigations and all kinds of inefficiencies in processes that shall derail even brighter resolutions.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Recovery Rates and Timelines Lagging</h2>
          
          <p>
            Despite the high-profile recoveries, average creditor realization remains modest with just 32-33% of admitted claims. While the last few quarters saw recoveries up to 70%, overall outcomes show banks are still taking haircuts of above 60%.
          </p>

          <p>
            Timelines are a growing concern, too. The law allows a maximum of 330 days for resolution; however, presently, the average case spans more than 865 days. Litigation remains the primary reason for delays in almost 78% of all cases beyond the 270 days stipulated in the Act.
          </p>

          <p>
            Such backlogs run counter to the very principle that made the IBC attractive—certainty through speed.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Mixed Views from Experts and Institutions</h2>
          
          <p>
            The government and RBI continue to support the IBC, arguing it has contributed to enhanced credit discipline and larger recoveries. A 2023 study from IIM-Ahmedabad contends that companies resolved under the IBC saw improved profitability and liquidity.
          </p>

          <p>
            However, more sober voices from the industry, amongst others from credit rating agencies, portray a different picture. ICRA mentions the worsening of timelines and that nearly half the cases end up in liquidation. Legal experts contend that the system is susceptible to abuse—by both borrowers seeking to delay proceedings and creditors who want to hastily push for liquidation for asset grabs.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Road Ahead</h2>
          
          <p>
            The IBC remains the most effective tool in India for debt resolution, but it is at a crossroads. Key reforms must be prioritized to keep the momentum:
          </p>

          <ul>
            <li>Strengthening and digitizing the infrastructure of the NCLT/NCLAT</li>
            <li>Setting up dedicated insolvency benches to relieve caseloads</li>
            <li>Fostering operational and employee creditor empowerment</li>
            <li>Refashioning a robust pre-pack framework primarily for large firms</li>
          </ul>

          <p>
            As the Bhushan Power case illustrates, uncertainty is the mortal enemy of the IBC. Swift action is essential not only to amend the law, but also to implement it effectively.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          
          <p>
            With timely reforms and restored confidence in the resolution process, IBC could morph into a world-class regime. The alternative will be a fast slide back into impenetrable recovery regimes—a risk India's financial ecosystem can simply not afford.
          </p>
        </section>
      </div>
    `,
    image: "/IBC.jpeg",
    author: authors.find(a => a.username === "abhinav-upadhyay")!,
    category: "business",
    date: "2025-06-17",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Business", "Finance", "Law", "IBC", "Corporate"],
    featured: true,
    isPublished: true,
  },
  {
    id: "animal-rights-india",
    title: "Animal Rights in India: Speaking Up for the Unheard",
    slug: "animal-rights-india-speaking-up-for-the-unheard",
    excerpt: "A comprehensive look at animal rights in India, exploring the legal framework, everyday challenges, and how each of us can make a difference in protecting our fellow creatures.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          Last month, while walking through the bustling streets of Lucknow, I spotted several stray dogs huddled in a forgotten corner. One of them caught my attention - his ribs protruded sharply beneath his dull coat. He still managed to wag his tail hopefully. That moment stayed with me. Or consider what I once witnessed – a magnificent elephant, chains around her ankles, forced to carry tourists up steep fortress paths in 40-degree heat. Her eyes reflected a deep weariness that words fail to capture. These creatures can't speak our language, but anyone who's truly looking can see they experience the full spectrum of emotions – joy, suffering, terror, and yes, even love.
        </p>

        <p>
          India presents a fascinating paradox. We paint divine status on cows, celebrate Nag Panchami for snakes, and our mythology brims with animal deities from Hanuman to Garuda. You'd think this spiritual reverence would translate to harmonious coexistence, but I've seen firsthand how the reality often falls painfully short. Yet there's hope – our laws offer substantive protections. The problem? Too few people know about them.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Legal Shield Few Know About</h2>
          
          <p>
            I was surprised to learn during my research that India stands among a handful of nations whose Constitution explicitly safeguards animals. Article 51(A) doesn't merely suggest – it mandates that every citizen bears a fundamental duty to protect and show compassion to all living creatures. This isn't flowery language; it's a legal obligation with real teeth.
          </p>
          
          <p>
            The backbone of protection comes from the Prevention of Cruelty to Animals Act, passed back in 1960 but still relevant today. At its heart lies a simple principle: no animal should suffer needlessly. Whether it's the shopkeeper who kicks away the neighborhood stray, the cart owner who whips his exhausted horse through monsoon floods, or the farmer who keeps his cattle perpetually tethered in filthy conditions – the law considers these acts wrong. I've seen each example in my own neighborhood.
          </p>

          <p>
            For our wild heritage, the Wildlife Protection Act of 1972 steps in. Growing up near the Western Ghats, I watched forest areas shrink year by year. This legislation stands as a crucial barrier, prohibiting the hunting of protected species and preserving their habitats within sanctuaries and national parks.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Everyday Cruelties We Walk Past</h2>
          
          <p>
            Most animal suffering in India stems not from deliberate cruelty but from sheer ignorance. I remember my grandmother throwing stones at street dogs, believing them "dirty" and "dangerous" – until I explained how these animals have legal rights to exist unmolested. The Animal Birth Control Rules specifically mandate humane sterilization and vaccination programs rather than culling – though I still occasionally see municipal workers rounding up strays for slaughter despite these protections.
          </p>

          <p>
            Working animals break my heart the most. Last summer in Varanasi, I watched a bullock collapse from heat stroke while pulling an overloaded cart. Few realize that these animals have legally mandated work limits, rest periods, and weight restrictions. The same applies to the goats I've seen packed into trucks headed for slaughter, or the battery hens stuffed into spaces smaller than a sheet of paper – our transport laws require adequate space, food, and rest periods that rarely materialize in practice.
          </p>

          <p>
            Even Bollywood isn't exempt. Remember that blockbuster with the tiger chase scene? Films and circuses must adhere to the Performing Animals Rules, requiring licenses and humane treatment. After witnessing a film shoot where a horse was repeatedly forced to fall for dramatic effect, I filed a complaint with the Animal Welfare Board – they actually took action!
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Courts Stepping Up When Humans Won't</h2>
          
          <p>
            India's judiciary has increasingly championed animal protection. I've followed the Jallikattu controversy for years – the case titled "Animal Welfare Board of India & Ors v. Union of India & Anr" (2023) continues the debate over whether this bull-taming tradition can ever be conducted humanely. Back in 2014, the Supreme Court initially prohibited the practice due to documented cruelties, though political pressures have complicated enforcement.
          </p>

          <p>
            What truly amazed me was the 2016 Uttarakhand High Court ruling that recognized animals as legal persons. When I first read the judgment, it brought tears to my eyes. This revolutionary stance means animals possess inherent rights beyond mere property status – we humans have a duty to honor and protect those rights, not just avoid cruelty.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Beyond Paragraphs in Law Books</h2>
          
          <p>
            Animal rights transcend legal frameworks – they're about moral evolution and empathy.
          </p>

          <p>
            My father taught me to observe animal behaviors – how a cow nuzzles her calf, how birds warn each other of danger, how even the smallest creatures fight to survive. They may lack human speech, but their communication through body language, vocalizations and even profound silence speaks volumes. True compassion requires more than merely preventing harm; it demands recognizing their right to coexist with dignity in our shared world.
          </p>

          <p>
            When you offer water to a panting stray during a heatwave, refuse that elephant ride in Amber Fort despite family pressure, or speak up when your neighbor keeps his dog perpetually chained – you're not just being "nice." You're honoring fundamental rights that even our courts have recognized.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">How You Can Make Real Difference</h2>
          
          <p>
            I've learned that anyone can help:
          </p>

          <ul>
            <li>Document and report cruelty to local police or the Animal Welfare Board of India. I keep their hotline (1962) saved in my phone – one call about a neglected horse last year led to immediate intervention.</li>
            <li>Consider adoption instead of shopping for pets. My rescued street dog Buddy has brought more joy than any pedigreed animal could, while saving a life in the process.</li>
            <li>Use your voice in your community. When our apartment complex wanted to evict resident strays, a few of us rallied enough support to establish a feeding station and vaccination program instead.</li>
            <li>Support grassroots rescue organizations. The dedication I've witnessed at small shelters operating on shoestring budgets has restored my faith in humanity.</li>
            <li>Educate others, especially children. My niece now lectures her whole class about animal kindness after I explained why we shouldn't buy birds in cages.</li>
          </ul>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          
          <p>
            In a world increasingly callous toward vulnerability, choosing compassion becomes a radical act. India's animal protection framework reflects the society we aspire to create – one where each sentient being, regardless of species, deserves dignity and consideration.
          </p>

          <p>
            I still think about that street dog in Lucknow sometimes. Did someone feed him that evening? Does he have shelter during monsoons? But I also remember the elderly vegetable seller who kept a water bowl outside her stall, refilling it throughout the scorching day for thirsty strays. Such small kindnesses remind me of what's best in us.
          </p>

          <p>
            When we protect animals, we don't just save them. We save something essential in ourselves.
          </p>
        </section>
      </div>
    `,
    image: "/Animal.jpeg",
    author: authors.find(a => a.username === "hetal-kothari")!,
    category: "features",
    date: "2025-06-17",
    readTime: "15 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Animal Rights", "Society", "Law", "Environment", "Ethics"],
    featured: true,
    isPublished: true,
  },
  {
    id: "union-to-silence-lucknow-university",
    title: "From Union to Silence: How Criminalization Killed Mass Politics at Lucknow University",
    slug: "from-union-to-silence-how-criminalization-killed-mass-politics-at-lucknow-university",
    excerpt: "An analysis of how student politics at the University of Lucknow transformed from ideological engagement to criminal control, and the consequences of banning student union elections.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          The story of student politics at the University of Lucknow is, in many ways, the story of India itself. A campus that once hosted torchbearers of freedom—where the student union gave honorary membership to Jawaharlal Nehru, Lal Bahadur Shastri, and Khan Abdul Ghaffar Khan—has today been without an elected student union for nearly two decades. The official reasoning behind this decision is violence. But this is not just about violence. This is the story of how criminalization hollowed out a culture of mass political participation and left behind a sterile campus where politics is either elite or criminal—with nothing in between.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Ideological Era</h2>
          
          <p>
            In the post-independence decades, student politics at LU was ideological. AISF, ABVP, NSUI—these were not just acronyms but distinct political positions with real ideological foundations. Debates were fierce, yet based on ideas. Student union elections were political acts, not proxy wars. Atul Anjaan, perhaps the most significant LUSU president, held office during the Emergency and kept the idea of a student union alive when democratic rights were suspended nationwide. His tenure was not marked by fear but by articulation, oratory, and mass work. LU in the '60s and '70s was a campus of politics—not a battlefield.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Criminal Turn</h2>
          
          <p>
            But this balance began to collapse in the '80s, and by the '90s, it was destroyed. The rise of criminal elements—Dhananjay Singh, Abhay Singh—turned student politics into an entry point for mafia operations. Elections were no longer about mandates; they were about territory. Hostel rooms became armories. The union became a ladder to political contracts, not public service. And with this shift came fear. Participation shrank. Only those who could afford physical risk or had patronage entered the fray. Politics moved from the classroom to the corridor of power—and finally into the shadows.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Ban and Its Consequences</h2>
          
          <p>
            The consequence? In 2006, under the guise of implementing Lyngdoh Committee recommendations, elections were banned. Not suspended—banned in practice, if not in name. No LUSU elections have been held since. Students have come and gone without even knowing what collective representation means. And it's not just representation that is lost—it's memory, imagination, and history. A campus that once debated Vietnam, caste, and price hikes is now a campus where student voices are reduced to hashtags, if that.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Deeper Cost of Depoliticization</h2>
          
          <p>
            But what is the deeper cost of this depoliticization? The vacuum of mass participation has not created neutrality—it has created elite and criminal dominance. Those with social capital, family networks, or party backing still rise. They become spokespersons, political managers, or NGO functionaries. The criminal networks didn't disappear either; they just found new forms—controlling admissions, hostels, and extortion rackets informally, without needing an election. What's missing is the middle: the mass student who once voted, once protested, once debated, once dreamt. That student is now absent. And their absence is political.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Serving the Status Quo</h2>
          
          <p>
            This deliberate dismantling of democratic culture was not just an accident. It served the interests of the status quo. For the ruling elite, a campus without a union is a campus without resistance. For the administration, it is calm without accountability. And for political parties, it is the end of a nursery that once produced leaders from working-class and backward backgrounds. Today, most prominent leaders from LU's student past—Brajesh Pathak, Pushkar Dhami, Ravidas Mehrotra, Arvind Gope—are from earlier decades. The system stopped producing new ones when it closed the gates on mass participation.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">What Does Silence Mean?</h2>
          
          <p>
            What does it mean for a public university to be silent? It means that the students are no longer political beings. They become individuals pursuing degrees, not citizens in training. It means that education is stripped of engagement. And that criminalization—which once justified the banning of elections—has actually won. Because it killed its only real opponent: democratic student politics.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Challenge Ahead</h2>
          
          <p>
            The challenge now is not just to restore the union. It is to reclaim politics. Not for a faction. Not for a party. But for a generation that has never voted for its own representatives, never seen a public debate, never been told that politics can belong to them too.
          </p>

          <p class="conclusion">
            Restoring that imagination is the real revolution.
          </p>
        </section>
      </div>
    `,
    image: "/luu.jpeg",
    author: authors.find(a => a.username === "captain-jack-sparrow")!,
    category: "university",
    date: "2025-06-18",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Student Politics", "University", "Democracy", "Education", "Lucknow"],
    featured: true,
    isPublished: true,
  },
  {
    id: "operation-rising-lion-prequel-war",
    title: "OPERATION RISING LION: PREQUEL TO A FULL-SCALE WAR?",
    slug: "operation-rising-lion-prequel-to-a-full-scale-war",
    excerpt: "An analysis of Israel's Operation Rising Lion attack on Iran, examining the strategic implications and the potential for escalation in the Middle East.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          On June 13th, 2025, Israel launched Operation Rising Lion, a full-scale missile-based attack on Iran, targeting its nuclear and military facilities. This comes at a time when Israel is already at a full-blown kinetic conflict in the Gaza strip, and faces retaliation from its neighbours including Lebanon (through Hezbollah), Iran and large-scale condemnation from the world for violating the human rights of the Palestinians. This escalation raises critical questions about regional stability and the evolving nature of Israel's strategic stature.
        </p>
        <p>
          Apart from its boast of the capability to handle multiple conflicts at a time, the operation displays stark intelligence work by the Mossad.
        </p>
        <section class="article-section">
          <h2 class="section-heading">A prelude to the operation: What led to the attack?</h2>
          <p>
            Israel, with the initiation of Khameini's regime, has been walking on a sharp sword when it comes to Iran, both of them being rather adversaries to each other. Since around 1980, Tehran has repeatedly pledged to wipe Israel "off the map", and has invested a lot of time and energy to set up the 'The Axis of Resistance' consisting of various militias, including but not limited to the Houthis and the Hamas. Both the nations have been at conflict on and off.
          </p>
          <p>
            Israel has been at continued trial for dismantling the axis of resistance, Israel assassinated Ismail Haniyeh, the political head of Hamas, in Iran, the fall of the Assad regime also weakened the already weak Hamas, which have been continually hammered in the Gaza strip.
          </p>
          <p>
            The war has never been one sided, both the sides have exchanged fire time and again and have been at proxy wars since 1980, leaving little space for any diplomatic exchange. The US backed Israel has been fearless in launching operations at Iran, but this time, it was different, Operation Rising Lion was launched without the supervision, or lordship rather, of the United States, which has been infamous for fueling wars all over the world under the name of maintaining global peace.
          </p>
        </section>
        <section class="article-section">
          <h2 class="section-heading">The operation</h2>
          <p>
            Amid rising tensions, Iran was allegedly preparing to become a nuclear state. As of May 2025, the IAEA reported that Iran had amassed 409 kg of uranium enriched to 60% (a level just below weapons-grade) enough for approximately ten nuclear bombs if further enriched.
          </p>
          <p>
            Just a day before the strikes, the IAEA found Iran non-compliant with its nuclear obligations.
          </p>
          <p>
            Tel Aviv has long wished to not let Iran become a nuclear state, which would lead to an enhancement of issues on its borders. Iran, being the dissociating, rather irresponsible, theocracy that it is, would be at risk of using nuclear weapons for purposes not admired.
          </p>
          <p>
            The strikes had set their focus on the same lines. It was aimed at two targets, the Nuclear facilities and the Iranian top brass, Hossein Salami, the commander-in-chief of Iran's Islamic Revolutionary Guard and other commanders. The Israeli strikes targeted the main uranium facility at Natanz and ballistic missile sites.
          </p>
          <p>
            The operation decapitated the Iranian nuclear programme, reportedly killing four senior commanders and two nuclear scientists.
          </p>
        </section>
        <section class="article-section">
          <h2 class="section-heading">War of intelligence</h2>
          <p>
            The operation rising lion is not a day's work, nor a month's. It is years of planning and spy-work sewn into the final action. It is reported by Israeli media and anonymous officials that the Mossad had planted drone launching sites in Tehran in the course of several years, impeccably chalking out the attack with utter precision. Not limited to drone, the Mossad also planted high-precision guided weapons in open areas near Iran's surface-to-air missile batteries as well as weapon platforms inside civilian vehicles across Iran. This was accompanied with several sabotage missions by the Mossad.
          </p>
          <p>
            An official told the Times of Israel that the operation used "groundbreaking thinking, bold planning and surgical operation of advanced technologies, special forces and agents operating in the heart of Iran while totally evading the eyes of local intelligence."
          </p>
          <p>
            The attack happened in the heart of Iran, Tehran and the areas surrounding it, under the nose of the local administrations and the Supreme Leaders themselves, with none having a clue.
          </p>
        </section>
        <section class="article-section">
          <h2 class="section-heading">The America Side of things</h2>
          <p>
            With Donal Trump taking the MAGA or Make America Great Again mission more seriously than he takes the welfare of people and students in the nation, Israel was on its own in conducting the mission without the hand of their American overlords on its head. Though, the statement seems a little fogged by Trump's calls and 'advises' to Iran, where he warns Iran that "Israel's attacks will only get worse", he seems to move a little over to the Tel Aviv ground instead of sitting on the neutral fence he was earlier. In his first public comments since Friday's attacks, Trump said on his Truth Social platform that "there is still time to make this slaughter, with the next already planned attacks being even more brutal, come to an end."
          </p>
        </section>
      </div>
    `,
    image: "/voimi.jpeg",
    author: authors.find(a => a.username === "atulit-pandey")!,
    category: "international",
    date: "2025-06-18",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["International Relations", "Israel", "Iran", "Middle East", "Geopolitics"],
    featured: true,
    isPublished: true,
  },
  {
    id: "iit-kharagpur-drum-app",
    title: "IIT Kharagpur's DRUM App: Navigating Toward Cleaner Air for Urban Commuters",
    slug: "iit-kharagpur-drum-app-navigating-toward-cleaner-air-for-urban-commuters",
    excerpt: "In the fast paced world of urban India, where air pollution is an enduring threat to public health and quality of life, an innovative tech solution is coming to light from the IIT Kharagpur labs.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          In the fast paced world of urban India, where air pollution is an enduring threat to public health and quality of life, an innovative tech solution is coming to light from the IIT Kharagpur labs. The DRUM app, Dynamic Route Planning for Urban Mobility, assists commuters in selecting routes that may reduce their exposure to harmful pollutant emissions, thus providing them, in the broader sense, a breath of fresh air.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Addressing a Pressing Urban Health Crisis</h2>
          
          <p>
            Air pollution is not a mere nuisance factor for Indian cities; it is in fact a silent killer. Studies show air pollution contributes to 7.2% of deaths in the urban population per year, while high exposure can even result in a 5-year reduction in life expectancy. From the notorious smog in Delhi to heavy traffic in Mumbai, millions undergo threats to respiratory and cardiovascular health every single day. In the given scenario, DRUM's objective becomes very apparent: to inform the commuters of the healthier travel alternatives based on real-time air quality data.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">How DRUM Works: Technology at the Forefront</h2>
          
          <p>
            DRUM is distinct in that it gathers real-time air quality information from a combination of stationary and mobile sensors deployed in 22 Indian cities. By integrating this information into a rapid-routing algorithm (GraphHopper and Mapbox), the app considers not only the fastest or shortest path types, but also those that minimize pollution exposure. More precisely, the app gives the two-wheeler commuters, in particular, alternate route options considering:
          </p>

          <ul>
            <li>Shortest Route</li>
            <li>Fastest Route</li>
            <li>Least Air Pollution Exposure Route (LEAP)</li>
            <li>Least Energy Consumption Route (LECR)</li>
            <li>Balanced route suggested</li>
          </ul>

          <p>
            For instance, a bike rider in Delhi could be directed away from a very polluted corridor of traffic to a slightly longer but much cleaner alternative, on which he would reveal 40% less exposure compared to usual apps. This is, in essence, the key to flexibility.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">From the Simulations to Real Streets: Progresses and Challenges</h2>
          
          <p>
            Simulations in some major urban centres, including Delhi, kicked off the DRUM development. In these simulations, DRUM found that traditional route planning led to commuters being exposed with higher pollution in congested areas, and that DRUM's alternative routes consistently lowered that risk in simulated situations.
          </p>

          <p>
            Challenges are aplenty when it comes to real-life implementation. Air quality monitoring in India is primarily an unorganised sector, and many cities have sensor distribution only in a scanty manner. To counter this, DRUM makes use of a low-cost sensor system that can be deployed easily and crowdsources its data from users' mobile devices. However, the reliability of the data will be tricky to maintain, especially in the actual-time low pollution guidance.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Road Ahead: Expansion to Broader Coverage and Flexibility</h2>
          
          <p>
            With a view to customise predictive routing by anticipating pollution spikes and thereby providing proactive rerouting to users, some machine learning tools will also be developed in the near future. The expansion of services beyond two wheels to encompass either four wheels or pedestrians will increase the app's relevance across a much larger spectrum of urban commuters.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Contextualizing: What Makes DRUM Different?</h2>
          
          <p>
            While the innovations underpinning DRUM are impressive, it has entered a competitive field where global platforms like Google Maps are piloting features such as Air View+ for air-quality-based routing. Its advantage lies in its focus on Indian cities, flexibility based on local infrastructure, and opportunities for community involvement through sensor networks. In the end, massive uptake and integration of the platform with present mobility frameworks will lend credence to its impact.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Societal Impact: A Lifeline for the Vulnerable</h2>
          
          <p>
            If successful in its implementation, DRUM will go a long way to safeguarding the health of vulnerable populations such as children, the old, and those with chronic health conditions, preventing their exposure to pollution on the streets on a daily basis. Such mitigation would ease the financial load on the backdrop of India's healthcare system while also serving as a salient reference for other nations facing the ravages of urban air pollution.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion: Hope and Caution</h2>
          
          <p>
            DRUM marks a visionary and concrete step toward healthier and sustainable urban mobility in India. The combination of real-time data, smart flexible routing, and future-proofing takes on a whole new level of promise. But success shall largely depend on arriving at a compromise with limitation of data, attaining ease of use for the average user, and achieving the diverse uptake. After leaving the lab and entering its actual testing ground, the app is one of the few sources of inspiration for new ideas and methods to remember the difficult obstacles that cleaner air will face in the future.
          </p>
        </section>
      </div>
    `,
    image: "/ab.jpeg",
    author: authors.find(a => a.username === "abhinav-upadhyay")!,
    category: "sci-tech",
    date: "2025-06-19",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Technology", "Environment", "Urban Development", "Air Pollution", "Innovation", "IIT Kharagpur", "Mobile Apps"],
    featured: true,
    isPublished: true,
  },
  {
    id: "where-have-all-the-daughters-gone-bihar-sex-ratio",
    title: "Where Have All the Daughters Gone? A Deep Dive into Bihar's Shrinking Sex Ratio",
    slug: "where-have-all-the-daughters-gone-bihar-sex-ratio",
    excerpt: "A critical look at Bihar's alarming decline in the sex ratio, exploring the cultural, social, and policy failures behind the crisis.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          Let's not mince words, something deeply wrong is unfolding in Bihar. The numbers are cold, but the implications are chilling. The state is quietly losing its daughters. Not to migration, not to education or opportunities elsewhere, but to a culture still steeped in son-preference, gender bias, and neglect. The data screams, but are we listening?
        </p>
  
        <section class="article-section">
          <h2 class="section-heading">The Numbers Don't Lie — But They Should Make Us Uncomfortable</h2>
          <p>
            Back in 2001, Bihar had 919 women for every 1000 men. A decade later in 2011? 918. Practically no change. But behold, the child sex ratio (girls aged 0–6 years) dropped from 942 to 935 during the same time frame.
          </p>
          <p>
            Fast-forward to 2022–23, that statistic now stands at 895 girls per 1000 boys. That's not a gap, that's a canyon. With the national average climbing to 933, Bihar's situation is the worst in India and is concerning to the core. While the world moves forward, we keep slipping back.
          </p>
          <p>The sex ratio at birth tells an even more brutal truth:</p>
          <ul>
            <li>964 (2020)</li>
            <li>908 (2021)</li>
            <li>891 (2022)</li>
          </ul>
          <p>Each year, fewer baby girls are born. And mind you, this isn't "just happening", it's being engineered. Discreetly, brutally.</p>
        </section>
  
        <section class="article-section">
          <h2 class="section-heading">What Makes Bihar Different, And Not in a Good Way</h2>
          <p>
            While states like Assam, Maharashtra, Gujarat, and even Haryana are starting to reverse their skewed ratios, Bihar seems stuck, or worse, sinking. Bihar is one of the only states where the sex ratio at birth is falling every single year.
          </p>
          <p>
            Even rural Bihar, which traditionally showed slightly better numbers, is no longer a haven. NFHS-5 data puts the rural sex ratio at birth at 903, versus 940 in urban areas. But before you cheer for urban progress, know this, it too fell from 940 to 934 in just five years.
          </p>
          <p>
            Districts like Rohtas and Buxar are case studies in collapse. Rohtas' child sex ratio fell from 885 to 872, and Buxar's from 962 to 886 between NFHS-4 and NFHS-5. In lay-man terms: fewer girls are surviving, or being allowed to be born.
          </p>
        </section>
  
        <section class="article-section">
          <h2 class="section-heading">This Isn't Just About Birth — It's About Beliefs</h2>
          <p>Let's call this what it is, a war against daughters. Not with guns, but with silence, preference, and institutional failure.</p>
          <ul>
            <li>Patriarchy? Check.</li>
            <li>Dowry fears? Check.</li>
            <li>Early marriage? Still rampant.</li>
            <li>Education gap? Still yawning, female literacy sits at 57.8% versus 78.5% for men.</li>
            <li>Child brides? Nearly 41% of young women are married before 18.</li>
          </ul>
          <p>
            These aren't just statistics. These are the everyday realities that are told to a daughter: "You're second-class. You're an expense. You're dispensable."
          </p>
          <p>
            And when parents still see sons as future breadwinners and daughters as liabilities, can we be surprised that prenatal sex selection is still rampant?
          </p>
        </section>
  
        <section class="article-section">
          <h2 class="section-heading">Let's Talk About the Scary Part — It's Not All Pre-Birth</h2>
          <p>
            You'd think the damage stops in the womb. But you'd be wrong. A UNFPA study tells us 65% of Bihar's "missing girls" die after birth. Neglect, undernourishment, lack of healthcare, it's slow violence, and it's killing our daughters silently.
          </p>
          <p>
            Yes, illegal ultrasounds still operate. Yes, raids are conducted (119 clinics were busted in 2023). But enforcement is patchy, and let's be honest, many doctors, technicians, and families simply don't care enough.
          </p>
        </section>
  
        <section class="article-section">
          <h2 class="section-heading">What's the Government Doing? Not Nothing, But Not Enough</h2>
          <ul>
            <li>Mukhyamantri Kanya Suraksha Yojana (₹2000 at girl's birth, but only for BPL families).</li>
            <li>Kanya Utthaan Yojana (₹25K after Class 12, ₹50K after college).</li>
            <li>Ananya Scheme (residential schools for SC/ST girls).</li>
            <li>Liquor ban, DDU-GKY, ASHAs, maternity schemes, and more.</li>
            <li>Plus, central schemes like Beti Bachao Beti Padhao have footprints in Bihar.</li>
          </ul>
          <p>But here's the bitter pill, the outcomes don't match the announcements. Despite these efforts, sex ratios keep dropping.</p>
          <p>
            Even the Chief Secretary tried to deny the CRS data, calling it an "error," instead citing unpublished caste census figures (953 females per 1000). But reality checks don't lie. Bihar had 3.07 million births in 2022. Of those? Just 1.31 million were girls. A gap of 1.6 lakh daughters.
          </p>
        </section>
  
        <section class="article-section">
          <h2 class="section-heading">So What's the Fix?</h2>
          <ul>
            <li><strong>Crack Down, Harder, Louder:</strong> Don't just raid illegal clinics. Publicize them. Name and shame them. Cancel licenses. Broadcast and project the message, louder and clearer than anyone's ever heard.</li>
            <li><strong>Link Cash to Outcomes:</strong> Don't just give ₹2000 for being born. Tie benefits to vaccinations, school retention, health check-ups, and enforce it.</li>
            <li><strong>Invest in Girls' Health:</strong> Girls shouldn't die because they're born. Prioritize their nutrition, postnatal care, and immunization. Bring health to the doorstep.</li>
            <li><strong>Make Girls Visible in Schools:</strong> Expand residential schools. Train and mentor. Delay marriage with education, not just awareness slogans.</li>
            <li><strong>Change the Culture, Not Just the Law:</strong> Start community dialogues. Involve mothers-in-law, teachers, and village leaders. Celebrate daughters publicly. Bihar's women deserve role models and recognition, not shame.</li>
            <li><strong>Transparency is Power:</strong> Make sex ratio data public. Track by district. Create dashboards. Let civil society, media, and voters see what's going wrong.</li>
            <li><strong>End Dowry, For Real:</strong> Not just a law on paper. Real convictions, real deterrents. Only then will daughters stop being seen as liabilities.</li>
          </ul>
        </section>
  
        <section class="article-section">
          <h2 class="section-heading">Because It's Not Just About Girls — It's About the Soul of Bihar</h2>
          <p>
            If we don't act, we're heading towards a future where men outnumber women by staggering margins — leading to trafficking, forced marriages, and unrest. This is not hyperbole. It's already happening in parts of Haryana and Punjab.
          </p>
          <p>
            And remember, this isn't destiny, This is a choice, a conscious, fully aware choice. Other states have pulled back from the brink and so can we.
          </p>
          <p>
            But only if we, as people, as parents, as policymakers — stop tolerating this silent erasure of our daughters.
          </p>
          <p>
            Because the real question isn't "where are the girls?" It's "why aren't we saving them?"
          </p>
        </section>
      </div>
    `,
    image: "/betii.jpeg",
    author: authors.find(a => a.username === "ansesveri-laxmi")!,
    category: "national",
    date: "2025-06-20",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Sex Ratio", "Bihar", "Gender", "Society", "Women", "India", "NFHS", "Policy"],
    featured: true,
    isPublished: true
  },
  {
    id: "world-environment-day-hypocrisy",
    title: "World environment day hypocrisy",
    slug: "world-environment-day-hypocrisy",
    excerpt: "A critical essay on the performativity and contradictions of World Environment Day celebrations.",
    content: `
      <div class="article-content">
        <section class="article-section">
          <h2 class="section-heading">The Green Mask: World Environment Day Hypocrisy</h2>
          <p>
            Every 5th of June, timelines turn green. Twitter is flooded with recycled quotes on saving the world. Companies put up a leaf on top of their logos. Politicians make heartfelt speeches with vows of a greener tomorrow. Schools have poster-making competitions, and businesses plant saplings for a photo-op. For one day, the world appears to care.
          </p>
          <p>
            But when the lights go out and the hashtags disappear, reality bites back. Factories return to belching smoke. Single-use plastics reappear on supermarket shelves. Government schemes chop down forests for highways or industries. The saplings planted for a photo-op are left to wither. The promises are forgotten until next year.
          </p>
          <p>
            World Environment Day has, for most of us, become a ritual of convenience rather than a day of reckoning. It is a yearly show of concern for the environment, more theatre than substance. A PR show in green finery.
          </p>
          <p>
            Corporates are among the largest stakeholders in this green soap opera. Fast fashion giants speak of sustainability while globally churning out millions of inexpensive garments every day, which subsequently end up in landfills. Oil giants promote clean energy while still heavily financing fossil fuels. Beverage companies that produce billions of plastic bottles vow to clean the oceans. This isn’t commitment — it’s greenwashing.
          </p>
        </section>
        <section class="article-section">
          <h2 class="section-heading">Worshipped Rivers, Polluted Realities: India’s Environmental Irony</h2>
          <p>
            Governments are not blameless either. On World Environment Day, politicians deliver their grand speeches. But the same governments often sanction deforestation, downplay pollution data, and fall behind on climate action. India, for instance, talks of climate resilience while ramping up coal mining and approving large-scale infrastructure projects that cause irreversible environmental damage. According to climate action tracker, India's National Electricity Plan (2022) says it will increase its coal power capacity by 18-23% by 2031-32, meaning more coal power plants will be built. This is contradictory to what India promised during the COP26 Glasgow pact—which was to phase down coal use to fight change.
          </p>
          <p>
            In the name of development, forests are felled, wetlands are filled, and biodiversity is lost, such as the Mumbai coastal road project or the Char Dham highway.
          </p>
          <p>
            The state of India’s rivers is a bleak reflection of this hypocrisy. The Yamuna, even after repeated clean-up campaigns and crores of rupees spent on rejuvenation, remains one of the filthiest rivers in the country, often choked with toxic foam and untreated sewage. Delhi has spent 6,856.9 crore over five years – yet most stretches remain unfit for bathing with faecal contamination 500x over the desirable limit. Parliamentary panels, NGT, and Supreme Court have flagged ongoing pollution, underperforming STPs, and pointed out that even spending such a huge sum, the river is even dirtier than before. According to a report by the Central Pollution Control Board (CPCB), the level of faecal coliform bacteria in the Ganga and Yamuna at Prayagraj Sangam is far higher than the safe limit of 2,500 units per 100 ml of water. The Ganga, though revered as sacred, still carries industrial effluents and sewage, despite flagship initiatives like Namami Gange launched in 2014, with 30,000 crores having shown limited measurable improvement. Other rivers like the Mithi in Mumbai, the Musi in Hyderabad, and the Brahmaputra in Assam are no better, having been turned into dumping sites for chemical, domestic, and plastic waste.
          </p>
          <p>
            In theory, we honour our rivers. In practice, we contaminate them.
          </p>
          <p>
            Even individuals, including many well-meaning citizens, get trapped in performative activism. Posting something or marching somewhere is easy, but real change demands lifestyle change — less garbage, less conspicuous consumption, and rethinking transportation habits. In a world of instant content and fleeting trends, it is easier to post than to act — easier to signal concern than to shoulder the responsibility.
          </p>
          <p>
            Schools, ironically, are part of the problem too. Students are taught to create “Save Trees” posters using paper. Even in environmental events, plastic scraps and disposables are often used, revealing the irony. The subliminal message that environmentalism begins with routine individual and institutional responsibility is lost.
          </p>
        </section>
        <section class="article-section">
          <h2 class="section-heading">Beyond Hashtags: Turning Green Promises into Real Action</h2>
          <p>
            Environment Day’s contribution is largely confined to pixels and paper. It has become a day of edited articles and witty one-liners, a stage for the self-projection of a green image by institutions, influencers, and governments. The purpose seems more about mimicking awareness than truly creating it.
          </p>
          <p>
            The irony lies not in celebrating World Environment Day, but in reducing it to symbolism. The world does not need one day of love for the planet, but a lifetime of action and activism — not just by scientists and environmentalists, but by all stakeholders in society.
          </p>
          <p>
            What is to be done? First, acknowledge the hypocrisy. Name the problem. It is the first step toward a solution.
          </p>
          <p>
            Second, substitute PR with policy. Governments must implement environmental laws rigorously. Corporates must be held accountable for their carbon footprints and waste.
          </p>
          <p>
            Third, learning must go beyond events. Environmental consciousness should be integrated into curricula, encouraging not just the acquisition of knowledge but the development of sustainable habits. Finally, citizens must shift from passive learners to active habit-formers. Use less. Waste less. Question more.
          </p>
          <p>
            World Environment Day must not be the day we modestly pretend to care. It must be the day that reminds us to care every day, with awareness and responsibility. Until then, the green we wear on June 5 will remain just a mask, concealing the damage we inflict on all other days.
          </p>
        </section>
      </div>
    `,
    image: "/ne.jpeg",
    author: authors.find(a => a.username === "aliya-imam")!,
    category: "national",
    date: "2025-06-20",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Environment", "World Environment Day", "Greenwashing", "India", "Policy", "Activism", "Rivers", "Pollution"],
    featured: true,
    isPublished: true
  },
  {
    id: "romanticising-summer-break",
    title: "Romanticising the summer break:",
    slug: "romanticising-summer-break",
    excerpt: "Done and dusted with your semester exam? Let's not talk about results just yet (or ever). This summer break is well deserved after all that hard work.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          Done and dusted with your semester exam? Let's not talk about results just yet (or ever). All year long, we have juggled between assignments, classes, practicals, and exams! This summer break is well deserved after all that hard work.
        </p>

        <p>
          Well, this summer vacation should not be the one in which you are doom scrolling on Instagram while rotting in bed. To save you from all those traps, I'm here to help you make this vacay less boring and a lot more fun!
        </p>

        <p>
          A 1.5-month-long summer break isn't a teeny break, people!! If you have the intent to make it a fun and memorable one. The university will be all set to reopen by the mid of July. In the meantime, here are a few ideas to help you enjoy this break while still keeping things meaningful.
        </p>

        <section class="article-section">
          <h2 class="section-heading">A pocketful of things to try</h2>
          
          <p>
            <strong>Upskill yourself:</strong> If you're looking to enhance your skills or learn something new during the vacation, don't worry! YouTube is a fantastic (and free) resource to get started. However, if you're interested in more structured learning with certification, platforms like Udemy and Coursera offer a wide range of courses. Completing a course will provide you with a certificate that can boost your CV and showcase your commitment to personal development.
          </p>

          <p>
            <strong>Look for Internships:</strong> Now that you've brushed up your skills or are in the process of doing so, why don't you look for internships? There are many internships for college students these days, both paid and unpaid. You can find them on sites like Internshala, Upwork.
          </p>

          <p>
            <strong>Read more:</strong> Do you see the pile of books you have gathered? You collected all of it, thinking you would read them. Now it's time to dive right in! Reading is not only a great hobby but also helps broaden your perspective. It's always good to have something amazing to share in a convo "you know, I read this in XYZ book".
          </p>

          <p>
            <strong>Socialise more:</strong> If you are an extroverted person and you love going out, meeting people, well this is your time, to go places and meet people you have been putting off meeting because of your hectic college routine, maybe meet your old school friends, cousins, relatives. Don't just go out and sit there—try to engage, this is you romanticising your life. This is you bringing out the 'main character energy'.
          </p>

          <p>
            <strong>Try out journaling:</strong> This is a cliche I know, but cliches are cliches for a reason. Journaling is an amazing tool for self reflection with the academic calendar ending. Why don't you reflect on this past year—what worked, what didn't? Pen down beautiful memories you had this year, remember the Holi celebration at LU? It was so fun, a first for me definitely. Or the time we all rushed to the Anthro department to ask the professors to extend the assignment submission date because we had just discovered via a last minute WhatsApp forward that the submission was due in an hour (We got an earful, but the dates were extended—so, mission accomplished).
          </p>

          <p>
            <strong>Catch up on the sleep:</strong> Well, yes, you read that right, sleep? How is it productive? It is scientifically proven that sleeping is directly linked to enhanced memory and learning (checkout 'Why We Sleep' by Matthew Walker). Maybe it's to make up for all the sleep that you lost due to college, assignments and exams. Having said that, please note that oversleeping can also disrupt your body clock and affect energy levels.
          </p>

          <p>
            <strong>Building a routine:</strong> The best way to romanticise your life and this summer break is to have a routine, have a morning ritual as soon as you wake up, could be drinking a glass of warm water with lemon (trust me, all the hot girls are doing this) or setting the intention for the day ahead, anything which puts you in the driver's seat and make your romanticize the mundane things. Time blocking is proven to be a helpful time management tool. Use time blocking to schedule time for entertainment, social media, errands, etc. At last, end your day on a peaceful note because it improves the sleep quality. Don't doomscrolling on Insta until your eyes are hurting (note to self: P) instead, maybe read a good book, watch something soothing.
          </p>

          <p>
            A few days ago, I came across this video of a guy who was on a mission to "de-rot his brain rot". He explained how watching low-stimulation cartoons or videos can actually help reset your mind and reduce the effect of digital overload resulting in de rotting your brain rot. Maybe this can be your daily dose of nostalgia—Oswald is a good low-stimulation cartoon to start with (loved his dog!). And through these ways you can add a bit more structure to your day even in the summer break, so when the college reopens you don't have to worry about setting up your routine.
          </p>

          <p>
            <strong>Get your "movies-to-watch-before-I-die" list out:</strong> Do you remember saving 20+ movies on your watchlist, thinking "I'll watch it soon"? Maybe this vacation time is perfect for you to start watching them. With friends or family, how about a watch party? It's a great way to watch together virtually with everyone.
          </p>

          <p>
            <strong>How about a glow-up?</strong> Before the next academic semester begins, why don't you try out some new looks? Maybe experiment a bit with your hair, wear colours you would not normally wear (cmon, take that plunge). Who says glow-up is just physical? A glow-up can be mental, emotional, social and digital. So, which glow-up are you manifesting for yourself?
          </p>

          <p>
            <strong>Read LU Chronicles:</strong> You want to read the news, know what's happening in the world both internationally and locally, why don't you turn to your college newspaper, "The LU Chronicles"? They release articles every day! From international affairs to blogs, they have it all. This vacation time, if you want to have a mental glow up, LU Chronicles is just what you need (plus, the kids there have been working hard, including yours truly :P).
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Perfect Ending</h2>
          <p>
            Well, these were some of the many ways in which you can make the best out of this summer vacation time, but it's okay if you couldn't finish all of the books or are still lagging in the courses you enrolled in. Life's not a To Do List where all of the items needs to be ticked off, it's perfectly human to leave things in between because you realised it was not working out for you.
          </p>

          <p>
            And all that matters in the end is to have a fun vacation, which is different from your mundane college life.
          </p>

          <p>
            And once this vacay ends, let's meet in Gandhi park (or as we fondly call it PMP) so that you can tell me all about how you romanticized your summer break—while I tell you about writing this piece… even at 2:19 AM.
          </p>
        </section>
      </div>
    `,
    image: "/summer.jpeg",
    author: authors.find(a => a.username === "prerna-srivastava")!,
    category: "blogs",
    date: "2025-06-21",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Summer Break", "College Life", "Self-Improvement", "Lifestyle", "Student Life", "LU Chronicles"],
    featured: false,
    isPublished: true
  },
  {
    id: "yoga-through-ages",
    title: "Yoga through the ages: How India gifted the world a way of life",
    slug: "yoga-through-ages",
    excerpt: "On this 11th International Yoga Day, we move not just our bodies — but our consciousness, from mat to mind, echoing the theme: Yoga for One Earth, One Health.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          On this 11th International Yoga Day, we move not just our bodies — but our consciousness, from mat to mind, echoing the theme: Yoga for One Earth, One Health. Yoga is an ancient discipline that has evolved through spiritual, philosophical, and physical traditions. It focuses on harmonizing the mind and body. It is one of the six systems of Vedic philosophy. Maharishi Patanjali, known as the Father of Yoga compiled various aspects of Yoga in his book Yoga Sutras.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The birth of Yoga</h2>
          <p>
            Archaeological evidence indicates that early forms of Yoga existed in the Indus Valley civilization, with the term "Yoga" first appearing in the Rig Veda. Key texts providing information about yoga practices include the Vedas, Upanishads, Smritis, and teachings from Buddhism and Jainism.
          </p>
          <p>
            The Classical period, from 500 BC to 800 C.E., marks a significant time in Yoga's development. The following era, from 800 to 1700 C.E., was influenced by figures such as Adi Shankaracharya and the Natha Yogis, who popularized Hatha Yoga practices.
          </p>
          <p>
            The Modern period, from 1700 to the present day, has seen significant contributions from Yogacharyas such as Ramana Maharshi, Ramakrishna Paramhansa, Paramhansa Yogananda, Vivekananda, B.K.S. Iyengar, Indra Devi, Sadhguru, and Baba Ramdev, who popularized Yoga among the masses.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Benefits</h2>
          <p>
            Yoga offers a variety of benefits which include but are not limited to:
          </p>
          
          <p>
            <strong>1. Physical:</strong> It enhances respiratory health, promotes healthy blood flow, maintains a healthy weight, increases flexibility leading to greater ease of movements, reduces physical tension, boosts the immune system, builds muscle strength, encourages restfulness, improves sleep quality, and alleviates chronic pain conditions like arthritis, migraine, etc.
          </p>

          <p>
            <strong>2. Mental and psychological:</strong> It lowers cortisol levels, reduces stress, and enhances cognitive clarity and mental resilience. It promotes a healthy body which leads to positive self-esteem and it also influences neurotransmitters like GABA, helping regulate mood.
          </p>

          <p>
            <strong>3. Emotional:</strong> It helps to connect with inner consciousness, promotes calmness and help release piled up emotional tension which contributes to happiness and overall well-being.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          <p>
            Yoga combines physical postures, breathing exercises, and meditation to create a holistic practice that benefits every aspect of a person's well-being. World Yoga Day serves as a beautiful reminder of its significance but its practice should not be confined to a single day of celebration. Its essence lies in consistent, daily practice.
          </p>
          <p>
            This yoga day, let's embrace yoga as an essential part of our journey towards a balanced life rather than merely remembering it as a day to create records and Instagram stories.
          </p>
        </section>
      </div>
    `,
    image: "/yoga.jpeg",
    author: {
      id: "14",
      name: "Trishla Chaudhary",
      username: "trishla-chaudhary",
      image: "/Trishla.jpeg"
    },
    category: "features",
    date: "2025-06-21",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Yoga", "International Yoga Day", "India", "Wellness", "Health", "Meditation", "Ancient Wisdom"],
    featured: false,
    isPublished: true
  },
  {
    id: "why-wearing-lip-gloss-doesnt-mean-i-cant-still-be-your-boss",
    title: "Why wearing lip gloss doesn't mean I can't still be your boss",
    slug: "why-wearing-lip-gloss-doesnt-mean-i-cant-still-be-your-boss",
    excerpt: "From the moment a girl picks up lip gloss in one hand and a book in the other, the world starts glitching. Society loves its binaries - you can be pretty or smart, stylish or serious, soft or revolutionary.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          From the moment a girl picks up lip gloss in one hand and a book in the other, the world starts glitching. Society loves its binaries - you can be pretty or smart, stylish or serious, soft or revolutionary. Apparently, if your eyeliner is sharp, your intellect can't be.
        </p>

        <p>
          There's something about a swipe of gloss - the high shine, the flirt of reflection, the unapologetic femininity of it all - that seems to make men underestimate you. As if a tinted sheen on the lips means your words will be just as glossy, just as easy to wipe off. Our competence must come in a matte finish. Anything shiny looks suspicious. Anything Pink makes people nervous.
        </p>

        <p>
          Not scared, necessarily - though they should be - but dismissive. But why must ambition arrive in beige?
        </p>

        <p>
          From Simone de Beauvoir to Megan Thee Stallion, women have been proving - repeatedly, exhaustingly - that critical thinking and cosmetic preference are not mutually exclusive.
        </p>

        <p>
          I still remember the quiet dismissal I got my freshman year – that polite-smirk kind of condescension, the kind that said, "Oh, she's cute for trying." I walked into debates only to be dismissed before I spoke - but yeah I still won. And the best part? I didn't even smudge my lipstick.
        </p>

        <p>
          Turns out, underestimating a girl with lip gloss might be the oldest mistake in the book - and I've always had a thing for rewrites.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Lip Gloss Ceiling</h2>
          <p>
            There's always been this strange cultural panic that femininity dilutes authority. Women have long been expected to erase themselves to be accepted. We've been told to dress "appropriately," to speak in "measured tones," to lean in - but not too much. And for those of us who dare to decorate our intelligence? We're told to "tone it down."
          </p>

          <p>
            Because here's the unspoken rule no one wants to print in the brochure: masculinity is still the dress code of credibility. In classrooms, in courtrooms, in protests - the traits that signal "seriousness" are often coded masculine: control, neutral tones, the illusion of detachment. Meanwhile, femininity - emotional, aesthetic, expressive - is dismissed as frivolous.
          </p>

          <p>
            Scholar Rosalind Gill calls this the "postfeminist masquerade": a double-bind where femininity must be carefully curated to avoid being perceived as either threatening or trivial. You can be a boss, but only if you leave your lip gloss at home.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Elle Woods Was Not a Joke</h2>
          <p>
            Pop culture is sprinkled - no, strategically sequined - with archetypes who challenge this. Elle Woods (Legally Blonde) cracked Harvard Law in pink stilettos. Rory Gilmore, when she wasn't being tragic in Season 6, carried around Proust and perfect fits.
          </p>

          <p>
            But they were often treated as anomalies - the exceptions, not the rule. One-of-a-kind wonders who somehow managed to be smart despite being girly.
          </p>

          <p>
            What's radical now is not just celebrating these women, but recognizing that their "girlishness" didn't dilute their power. It amplified it. Their femininity wasn't a barrier to their ambition. It was a language - one of their own.
          </p>

          <p>
            And if we're being honest, patriarchy doesn't fear a woman who codes like a man. It fears a woman who codes her own language and refuses to translate.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Feminist Case for Being Girly</h2>
          <p>
            Let's be clear: choosing to be "girly" in a world that tells you not to is political. Femininity, when reclaimed on our terms, becomes resistance. Think Audre Lorde's insistence that self-care is political warfare. Think bell hooks writing about love as a radical force. Think about every girl who's been mocked for liking makeup but runs million-dollar businesses out of her bedroom.
          </p>

          <p>
            There is power in softness, if we stop mistaking it for weakness. There is rage in beauty, if we stop dismissing it as vanity. And beauty with brains? That's not a compliment- it's a cage made to sound like praise.
          </p>

          <p>
            We are not confused. We are not compensating. We are complex. And we're not interested in dismantling the master's house while cosplaying as the master. We want new blueprints. Ones with glitter margins.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">In Defense of the "Difficult" Women</h2>
          <p>
            I've always had a soft spot for the women everyone loves to hate. The "too much" girls. The "attention-seekers." The ones who are called dramatic, bossy, high-maintenance, fake, shallow, or dangerous - depending on which part of them made men feel small.
          </p>

          <p>
            Because if men are the ones writing the story, then of course women who take up space, who flirt with power, who cry loudly or walk in like they own the place - will be cast as villains.
          </p>

          <p>
            I loved the women who were mocked for being ambitious. For being pretty and outspoken. For wearing lipstick and wanting the last word.
          </p>

          <p>
            They were punished for being seen through the narrowest lens - one shaped by the male gaze and sharpened by internalized misogyny. 'Cause anything too emotional, too expressive, too loud, too pink? It didn't fit the frame.
          </p>

          <p>
            But I saw them and I learned from them. Because if the world hates a woman, chances are she knew exactly what she was doing.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">So What Now?</h2>
          <p>
            We stop apologizing. For the bows in our hair. For the softness in our voice. For the notebooks covered in stickers. For crying in public and quoting Judith Butler. For listening to Taylor Swift and reading Marx.
          </p>

          <p>
            We take up space - all of it. With our eyeliner sharp and our minds sharper. With lip gloss that doubles as war paint. With rage wrapped in tulle. With glitter that blinds the system.
          </p>

          <p>
            Because I'm not here to pick between being a girl and being a boss. I am both. And the world better get used to it.
          </p>

          <p class="conclusion">
            Sincerely,<br/>
            — Editor-in-chief, typing in lip gloss and logic
          </p>
        </section>
      </div>
    `,
    image: "/lipboss.jpeg",
    author: {
      id: "1",
      name: "Shumaila Khan",
      username: "shumaila-khan",
      image: "/Shumilaprofile.jpeg"
    },
    category: "Op-ed",
    date: "2025-06-22",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Feminism", "Gender", "Leadership", "Society", "Women Empowerment", "Femininity"],
    featured: true,
    isPublished: true
  },
  {
    id: "india-beef-export-story-ethics-legality-cultural-debates",
    title: "India - The Beef Export Story: Ethics, Legality and Cultural Debates",
    slug: "india-beef-export-story-ethics-legality-cultural-debates",
    excerpt: "India is the most prominent exporter of buffalo meat also referred to as carabeef to the world, making it one of the major exporters of meat in the world.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          India is the most prominent exporter of buffalo meat also referred to as carabeef to the world, making it one of the major exporters of meat in the world. During the fiscal year 2023-24, India exported about 1.29 million metric tonnes worth of buffalo meat, which translates to about 3.74 billion U.S. dollars, or more than 82 per cent of its total export in animal products. But beef exportation of cows is still not permitted because of strict legal and cultural obligations.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Government Policies and Legal Framework</h2>
          <p>
            The state law has a stronger influence on whether India will export beef or not. It is stated in the Constitution that states have the power to regulate on cattle slaughter and preservation. Because of this, the slaughtering of cows, bulls and bullocks has a law that has been implemented by most states.
          </p>

          <p>
            The case of Gujarat that has strings attached as cow slaughter carries unimaginable sentences involving imprisonment to life imprisonment. On the contrary, states such as Kerala and West Bengal are less restrictive with controlled slaughtering of bovine animals.
          </p>

          <p>
            Export of meat is regulated by the Agricultural and Processed Food Products Export Development Authority (APEDA), which ensures that the meat-products satisfy the international standards. In 2021, APEDA had dropped the word Halal in its red meat manual reminding that animals need to be slaughtered to meet the requirements of the importing country. This action was geared towards the easing of exportation procedure and the objections of diverse stakeholders.
          </p>

          <p>
            A round table workshop conducted by APEDA and Department of Animal Husbandry and Dairying (DAHD) in June 2025 gave focus on improving the livestock export ecosystem of India. During the workshop, it was emphasized that strengthening of quality, disease prevention and accessing the market remain central activities to establishing India as a leading exporter of livestock in the world.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Cultural and Ethical Aspects</h2>
          <p>
            In India, the drive to consume beef is enveloped with beliefs and traditions. Cows are holy to the Hindus, Jains and the Buddhists and killing them is even seen as a crime against the principle of Ahimsa (non-violence). This devotion has resulted in a prevalence of the ban on cow slaughter in many states. On the other hand, other communities like Muslims and Christian are not bound by such religious proscriptions to beef and thus, may practice beef consumption creating a culture clash and even controversy about food diets.
          </p>

          <p>
            Animal rights groups such as Beauty Without Cruelty are against the killing of cows and require the proper treatment of every living organism. According to them, the life should be sacred, and moral issues should inform the consumption of food and farming.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Global Trade Dynamics</h2>
          <p>
            As you consider the dynamics of global trade, the exportation of buffalo meat by India is outstanding. During the first half of the 2024-25 fiscal year, the country exported predominantly carabeef to the markets in the Middle East, Southeast Asia, and Africa. Vietnam pioneered this with Egypt, Malaysia and Iraq following. Indian buffalo became a standard pick in those areas because of price and quality.
          </p>

          <p>
            According to the United States Department of Agriculture (USDA), beef production in India which amounted to 4.57 million metric tonnes in 2024 is poised to reach 4.64 million metric tonnes in 2025 due to the robust levels of domestic and exports demand. That future expansion illustrates how critical India is to the overall meat trade.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Balancing Ethics, Legality, and Trade</h2>
          <p>
            In case you read or heard the story on India exporting beef, you will observe how all these components, ethics, law, and trade act and come to a clash in a single headline. On the one hand, an export of cow meat remains prohibited due to legal and ethical reasons. In one side, buffalo meat continues to chalk up sales with the government endorsement and robust demand abroad.
          </p>

          <p class="conclusion">
            All this makes the debate active: India must consider a balance of the numerous voices on its soil and the rest of the world in the event it wishes to have a meat-export industry that is both peaceful and sustainable.
          </p>
        </section>
      </div>
    `,
    image: "/beef.jpeg",
    author: {
      id: "2",
      name: "Hetal Kothari",
      username: "hetal-kothari",
      image: "/Hetal.jpeg"
    },
    category: "International",
    date: "2025-06-22",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Beef Export", "India", "Trade", "Ethics", "Culture", "Agriculture", "International Trade"],
    featured: false,
    isPublished: true
  },
  {
    id: "musk-vs-trump-clash-tech-politics-markets",
    title: "Musk vs. Trump: A Clash of Tech, Politics and Markets",
    slug: "musk-vs-trump-clash-tech-politics-markets",
    excerpt: "In late May 2025, Elon Musk stood with President Donald Trump in the Oval Office – a partnership that soon spectacularly unraveled. Public threats and insults became their forte, with veiled barbs traded between them.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          In late May 2025, Elon Musk stood with President Donald Trump in the Oval Office – a partnership that soon spectacularly unraveled. Public threats and insults became their forte, with veiled barbs traded between them. While Musk toyed with the thought of impeaching Trump, he warned that he could repeal "billions and billions" in state subsidies and contracts for Musk's companies. An open, friendly alliance between him, the world's richest man, and the U.S. President, turned sour into a social media melee and fair-game spectacle for news outlets across the world.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Media and Political Significance</h2>
          <p>
            Today, the media-driven politics reflect in Musk's feud with Trump. Analysts noted that Trump suddenly dropped all mentions of Musk from his communication strategy-he used to praise him every week beginning early 2025 but up to now, April, did not mention him even once. A recent analysis by Politico shows that Trump aides and fundraising emails have almost completely stopped invoking the name Musk, once considered a prized right-wing celebrity asset. Public polling reflects this shift: voters now hold a far lower view of Musk than of Trump. The very same kind of commentators tend to call this event worrisome or toddler-like. NPR's Kara Swisher ripened such a comment with the world's most powerful and richest men publicly squabbling like girls on the playground. In short, how personal alliances among political and tech elites can shape news cycles and influence public discourse is what this episode suggests.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Economic and Market Impacts</h2>
          <p>
            Initial reaction from financial markets was rather stark as the argument developed. On June 5, 2025, Tesla stock dropped approximately 14-15%, wiping out nearly $150 billion from the company's market valuation, in a single day. Analysts warn that if this fight continues, Musk "could lose billions," with an effect potentially across all businesses. Tesla's visionary agenda had plans like the self-driving "robotaxis" launch jeopardized: of course, the stock had reached quite a peak on the promise of that rollout only to skid to rest in a 14% decline amid the melee. Tariff clashes and slashes of the U.S. electric-car tax credits, a leading sales stimulus for Tesla vehicles, have also been cited as at least partly resulting from the fallout. Noted one analyst, "Tesla's recent rise was almost entirely driven by robotaxi enthusiasm," and "Musk's war of words with Trump could be a negative."
          </p>

          <p>
            In addition to Tesla, SpaceX may raise concerns because of the statements from the Trump administration. The fact that Trump hinted at canceling SpaceX NASA contracts worth several billions of dollars in launches and ISS missions got Musk thinking that he would retire the only U.S. vehicle to reach the space station - SpaceX's Dragon capsule - but he backtracked quickly. On the same line, the satellite Internet venture Starlink is part of Musk's interests and won important international deals under Trump: some, like India and the Middle East, were highlighted among others during Trump's foreign trips, with uncertainty as to whether the new tensions will endanger them. Even the media platform X (formerly Twitter) seems to be entering the fray: big advertisers had begun to return to X after having fled because of Musk's "relaxed" content rules, but strategists warn Trump's turning against X could again make it "politically radioactive" for brands.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Tech, Business and Politics</h2>
          <p>
            The Musk–Trump episode illustrates the tangled web of tech with politics. Musk became special adviser to the White House, Trump appointing him to head the new Department of Government Efficiency one day a week, thus showing how a tech CEO could become part of government insiders. Ironically, much of Musk's estate exists on government support, entering through airways and Internet satellites to obtain necessary licenses and contracts; cars enjoy tax credits, while Tesla earns hundreds of millions selling regulatory "carbon credits" to rivals. Analysts argued that such a big noise from Musk about "government pork" despite the fact that his companies remain heavily dependent on largesse of the government. Now, regulators might use that dependence: for example, the National Highway Traffic Safety Administration has already probed Tesla's Autopilot software and observers note that Trump could pressure agencies to scrutinize Tesla's driverless-car plans more closely. Summarizing, the showdown stresses how a tech billionaire's policy stance could incite political backlash - and vice versa. As an investor pointed out: "billions of dollars of government contracts are at stake" when the richest person and the most powerful leader collide.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Public Narrative and Reactions</h2>
          <p>
            Public reactions mirrored the hard turn in media coverage. Most Trump supporters and party figures cooled off on Musk following the onset of that feud. According to a recent poll cited by Politico, Musk's approval rating seems to have dropped across demographic lines as Democrats try to portray him as "politically toxic" to their base. Social media was divided over party lines, with liberals posting memes of a grumpy Trump railing at a smirking Musk and with conservatives ridiculing Musk for being ungrateful. The traditional media took the spat as a parable; opinion writers sounded warnings against unaccountable influence of tech billionaires in political affairs; not one of them came out especially good from the fray. Inside some parts of Congress, some Republicans privately admit they "miss" having Musk as an easy talking point, while Democrats seized on Musk's insults (including unfounded claims about Trump in the "Epstein files") to fundraise and campaign. Throughout the entire battle, both sides have fought to claim the moral high ground- Trump as the wounded leader under attack, Musk as the principled entrepreneur"-virtually a potent battleground for 24/7 news.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          <p>
            The Musk–Trump feud transcended personal disagreement to become something greater. Mid-June saw Musk express public regret about his extreme posts while private efforts attempted to soothe tensions. The episode creates an indelible impression according to observers. The intricate connections between Silicon Valley and Washington emerged clearly through private Pentagon briefings alongside space contracts while social media platforms transformed into political megaphones. The implications extend from short-term market disruptions to prolonged political shifts. The Musk–Trump saga represents an intricate examination of the intersection between billionaire wealth, social media dominance, and governmental power which have consequences that stretch far beyond the personal lives of these two powerful figures.
          </p>
        </section>
      </div>
    `,
    image: "/trumpelon.jpeg",
    author: {
      id: "7",
      name: "Abhinav Kumar Upadhyay",
      username: "abhinav-upadhyay",
      image: "/Abhinav Kumar Upadhyay .jpeg"
    },
    category: "International",
    date: "2025-06-23",
    readTime: "15 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Elon Musk", "Donald Trump", "Politics", "Technology", "Business", "Markets", "Tesla", "SpaceX"],
    featured: true,
    isPublished: true
  },
  {
    id: "india-4th-largest-economy-or-is-it",
    title: "INDIA IS THE 4TH LARGEST ECONOMY OR IS IT?",
    slug: "india-4th-largest-economy-or-is-it",
    excerpt: "In the bustling streets of chowk, Raju, a chikankari artisan sells his art, rather struggling to make ends meet. But on May 25th, 2025, the national thinking conglomerate, NITI Aayog, officially announced that India had surpassed Japan to become the fourth largest economy in the world.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          In the bustling streets of chowk, Raju, a chikankari artisan sells his art, rather struggling to make ends meet. But on May 25th, 2025, the national thinking conglomerate, NITI Aayog, officially announced that India had surpassed Japan to become the fourth largest economy in the world, leaving only Germany, China and the USA ahead of it now. The IMF, in its report, recognizes this feat and projects that it will be in third place by 2028. This nation, that is now a $4.3 trillion economy was not always so, it has viewed hardships and bumps innumerable.
        </p>

        <section class="article-section">
          <h2 class="section-heading">India's journey through the years</h2>
          <p>
            India, a relatively young nation, grew at unprecedented rates, becoming the fastest growing nation in the world at present. The transformation from a purely agricultural economy to a multi-faceted techno-agricultural economy was not always a cake walk, neither for the authorities nor the masses. Several events shaped the India that it is today.
          </p>

          <p>
            With the newly-gained independence, we came up with Five-year plans and they were successful indeed, but changing times demanded transformation. Shastri's term came with the textbook ideal of a farming revolution, the Green Revolution. Now, it was finally time that the long-exploited soil could be rejuvenated and the yield be regained through correct manure usage and HYV seeds, giving a large-scale boost to the agri economy, enhancing the farmers' income by as much as 70%!
          </p>

          <p>
            There even came a time when India had to keep 67 tons of gold as a security reserve in the UK and Switzerland. Events like these impeded growth but acted as mirrors to the lawmakers, pleading for change and signifying that old methods don't respond now, it was time for turning tables. In 1991, under Shri Manmohan Singh's supervision, the long followed 'License Raj' was finally done away with, and hence, came the era of private players to step into act and privatization, alongwith government support, became the norm, economic liberalization was the grand idea. Tariffs and interest rates were reduced, and the public monopoly eventually ended.
          </p>

          <p>
            The economy kept giving the legislators reminders for change. The great recession of 2008 is a live example of it. The demonetisation of 2016 can never be excluded from the history of the Indian economy, it was a landmark act marking the end of currency notes, though leading to a little distress but held in itself, potential for curbing widespread and generational corruption that prevailed in the country.
          </p>

          <p>
            The pandemic came with worldwide recession, and India was hit indifferently, what was different was the comeback, stronger, quicker and more robust than ever. The country soon stood back on its feet and displayed growth unprecedented, going on to become the fastest growing nation in the world. Now, to note here is the fact that this all comes in a war-torn world where the global economy is moving towards recession, and the global trade is staggered.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Where does this place us on the global stage?</h2>
          <p>
            Climbing the economic ladder enables opportunities, those of growth, of recognition and of investment. It provides us with powers, hard and soft, and capabilities, to provide for our citizens, a superior quality of life. The economic enhancement opens doors for higher foreign investments, giving boost to private and public sectors alike, hence, more cash!
          </p>

          <p>
            Becoming the 4th largest economy comes with its set of perks. It gives the nation an upper hand in global influence and increased representation in inter-governmental organisations like the G20, BRICS, so on and so forth, leading to the strengthening and widespread of the Indian vision of the world.
          </p>

          <p>
            Although India has overtaken Japan to become the world's fourth-largest economy by nominal GDP, a closer look reveals that this headline achievement is only part of the story. There are loopholes bigger than Pune potholes in the whole story.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">How much are people earning on ground zero?</h2>
          <p>
            India's per capita income remains far below that of Japan. India's per capita income is currently around $2,730, with projections to rise by $2,000 over the next five years potentially reaching $4,700 by the end of the decade. In contrast, Japan's per capita GDP stands at approximately $33,955. This implies that an average Japanese citizen earns over 12 times more than the average Indian.
          </p>

          <p>
            This probably is an indicator that below the cape of Nominal GDP, there is no superman as such, and living standards are not at zenith as that of the economy we boast to be.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Why the India-Japan Comparison Is Misleading: Is it the full story?</h2>
          <p>
            Between the mid-1990s and 2023, Japan's nominal GDP declined from $5.3 trillion to $4.2 trillion. During this time, the Indian economy was growing rapidly, and the nominal GDP more than doubled. Hence, it's not a fair comparison between two growing economies. It is a comparison between a growing and a stagnating economy.
          </p>

          <p>
            India's growth is fueled by a large, youthful population, rapid urbanisation, and ongoing structural reforms. Japan's growth is constrained by demographic decline and a saturated market.
          </p>

          <p>
            Japan invests over 3% of its GDP in R&D, but faces declining patents and productivity. India invests just 0.64% of its GDP in R&D, but is making strides in digital innovation and infrastructure.
          </p>

          <p>
            At present, stark wealth inequality persists in India with the top 1% owning 40.1% of the country's total wealth. In simple words, just a handful of Jack Sparrows possess the majority of dirt jars.
          </p>

          <p>
            In addition to this, India faces significant infrastructure challenges, including road quality, electricity reliability, and digital connectivity. Only 24% of rural households have internet access, compared to 66% in urban areas, creating a pixelated iron wall that limits economic opportunity and social mobility.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">What lies ahead?</h2>
          <p>
            For India to become to have a holistic development, it must address its structural weaknesses:
          </p>

          <ul>
            <li><strong>Boost per capita income and reduce inequality:</strong> Economic growth must translate into higher wages and better living standards for all.</li>
            <li><strong>Invest in infrastructure:</strong> Improving roads, electricity, and digital connectivity is essential for inclusive growth.</li>
            <li><strong>Reform education and skill development:</strong> Aligning education with industry needs will help create a future-ready workforce.</li>
            <li><strong>Increase R&D and innovation:</strong> Higher investment in research and private sector participation is critical for technological leadership.</li>
            <li><strong>Create quality jobs:</strong> The economy must generate enough skilled employment to absorb its growing workforce.</li>
          </ul>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Growth Beyond Numbers: India's Real Test of Progress</h2>
          <p>
            Amazingly, India has become the fourth-largest economy in the world. But does this success affect every citizen? This celebration seems far away to Raju, who hears the news while juggling two meals a day, whose first sale of the day—his bouni—often doesn't happen until 6 PM. It reminds us that even though we've come a long way, much more needs to be done. The true fruit of this success will be when even Raju can sit comfortably in his showroom, take the right price for his art, and analyse and discuss where the economy needs more work. That day, my readers, will we say that INDIA IS A LEADING WORLD ECONOMY.
          </p>
        </section>
      </div>
    `,
    image: "/eco.jpeg",
    author: [
      {
        id: "5",
        name: "Atulit Pandey",
        username: "atulit-pandey",
        image: "/Atlut.jpeg"
      },
      {
        id: "6",
        name: "Prerna Srivastava",
        username: "prerna-srivastava",
        image: "/Perna.jpeg"
      }
    ],
    category: "Business",
    date: "2025-06-23",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["India", "Economy", "GDP", "Japan", "Development", "Inequality", "Infrastructure", "Business"],
    featured: true,
    isPublished: true
  },
  {
    id: "nam-modern-era",
    title: "NAM in the Modern Era: A Timeless Strategy in a Changing Global Order",
    slug: "nam-modern-era-timeless-strategy-changing-global-order",
    excerpt: "The policy of non-alignment has been the foundation of India's foreign policy. When India gained its independence in 1947, the world was divided into two blocs on an ideological basis and geopolitical rivalry, the communist bloc led by the former USSR and the capitalist bloc led by the USA.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          The policy of non-alignment has been the foundation of India's foreign policy. When India gained its independence in 1947, the world was divided into two blocs on an ideological basis and geopolitical rivalry, the communist bloc led by the former USSR and the capitalist bloc led by the USA. In such a situation during the Cold War, India's first Prime Minister, Jawaharlal Nehru, envisioned a foreign policy that would protect sovereignty, promote economic development, and territorial integrity as many newly independent countries became battlegrounds for the Cold War conflicts.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The development of non-alignment in India's foreign policy</h2>
          <p>
            In 1954, Nehru articulated the "Panchsheel" (Five Principles of Peaceful Coexistence), which became the bedrock of non-alignment:
          </p>
          <ul>
            <li>Mutual respect of territorial integrity and sovereignty.</li>
            <li>Mutual non-aggression.</li>
            <li>Mutual non-interference in domestic affairs.</li>
            <li>Equality and mutual benefit.</li>
            <li>Peaceful coexistence</li>
          </ul>
          <p>
            In the 1960s-1980s, India changed its idealism to pragmatism with a strategic tilt towards the Soviet Union as the USA aligned with Pakistan in the Indo-Pak war (1965,1971).
          </p>
          <p>
            With the collapse of the Soviet Union in 1991, India reoriented towards multi-alignment engaging with all major powers and pursuing core principles of promoting economic growth, and ensuring national security.
          </p>
          <p>
            In contemporary times, India engages in issue-based alignments, partnering with different powers based on its national interests.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">How Non-Alignment policy has helped in times of crisis</h2>
          <p>
            While India has been criticized by others for taking inconsistent stances and contradictory positions, NAM has served our interests very directly. It allowed us to make international decisions that served our interests rather than that of the superpowers and we have been able to balance one superpower against the other. It is not about isolationism or neutrality as India plays an active role in mediating and works to prevent war between others.NAM has allowed India the privilege of walking on eggshells as contradictory to global norm of running on the multi-edged sword.
          </p>
          <ul>
            <li>It helped to preserve sovereignty by staying out of military blocs like the Warsaw Pact or NATO and allowed it to focus on development rather than militarization.</li>
            <li>It allows us to take military and economic assistance which is important as India is still a developing country.</li>
            <li>The inherent flexibility allows us to make decisions based on economic pragmatism and adapt our foreign policy to changing global dynamics.</li>
            <li>It helps in advocating for the rights and interests of the Developing World (Global South) as the majority of its members are from developing countries.</li>
          </ul>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          <p>
            The non-alignment policy has evolved into a doctrine of multi-alignment and continues to serve by protecting India's national interest, safeguarding its sovereignty, maintaining its strategic autonomy, and playing a positive role on the global stage. In a world marked by rising conflicts and global divisions, India's legacy of non-alignment stands as a vital strategic asset and a guiding principle for its foreign policy. Today, more than ever, reaffirming non-alignment—not as passive neutrality but as a forward-looking, independent foreign policy—is both timely and essential.
          </p>
        </section>
      </div>
    `,
    image: "/nam.jpeg",
    author: [
      {
        id: "14",
        name: "Trishla Chaudhary",
        username: "trishla-chaudhary",
        image: "/Trishla.jpeg"
      }
    ],
    category: "International",
    date: "2025-06-24",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["NAM", "India", "Foreign Policy", "International Relations", "Geopolitics"],
    featured: true,
    isPublished: true
  },
  {
    id: "pride-at-lu-appeal-to-be-seen",
    title: "Pride at the University of Lucknow: An Appeal to Be Seen",
    slug: "pride-at-university-of-lucknow-appeal-to-be-seen",
    excerpt: "As an openly non-binary, pansexual individual who was assigned the gender of a man at birth — with long curly hair, wearing makeup, and politically active — I have come to realise that my existence itself is an intervention in the everyday violence of the University of Lucknow.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          As an openly non-binary, pansexual individual who was assigned the gender of a man at birth — with long curly hair, wearing makeup, and politically active — I have come to realise that my existence itself is an intervention in the everyday violence of the University of Lucknow.
        </p>

        <p>
          I won't sugarcoat it: the University of Lucknow is not a progressive space. There are days when I walk across the campus and from between large groups of boys, someone shouts “chakka” or “hijra” at me. It's always someone, always hidden among many. These boys are not a one-time encounter. They are the most active presence on this campus. They roam around like they own the space — and in many ways, perhaps they do. They moral police couples, disrupt cultural events, openly fight in front of the police and administration, and there’s never any consequence. None. These boys are not just students — they are the living face of the deep, rooted patriarchy that controls and defines this institution.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Beyond the Enemy</h2>
          <p>
            However, if we see them only as the enemy, we miss the full picture.
          </p>
          <p>
            Most of these boys are not from Lucknow. Many of them come from rural or poor backgrounds, where the pressure on them is immense. Their families send them to the university with one hope — that they will get a job and bring the family out of crisis. But look at the job market — it’s broken. Shrinking. Merciless. And what does this university offer them in return? Is there space here for self-development? Is there community? Is there dignity?
          </p>
          <p>
            There isn’t. So what they find instead is a sense of identity, purpose, and belonging — not in books, or classrooms, or debates — but in collective aggression. They find self-worth in silencing women, targeting the vulnerable, policing morality, and asserting dominance through harassment. It is a tragic irony — those who are themselves abandoned by the system are turned into its foot soldiers.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Visible and Invisible Rot</h2>
          <p>
            But that’s still only the visible layer of the rot. Behind all this is something far more sinister: the complicity of the state and the university administration. These institutions are not failing these students — they are actively using them. The political groups and criminal networks that operate on campus — they don’t just tolerate the violence of these student groups, they feed off it. And the university? It looks the other way. Sometimes, it nods in approval.
          </p>
          <p>
            In the middle of this, women shrink. To survive, they shrink. They walk faster. They speak less. They stay only where they must. Because they have to. And when the space for women is like this, what happens to people like me — queer people?
          </p>
          <p>
            I’ve been here a while. I meet new students every day. I’m a student activist. But not once have I met someone who openly identifies as queer. It’s not because they don’t exist. They do. We do. But we make ourselves invisible. Because it’s not safe. Because to be visibly queer in a space like this is to live with the constant fear of being hounded, harassed, or worse. So we pass — as normal, as masculine, as straight — just to get through the day.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Pride Was Never Meant to Be Quiet</h2>
          <p>
            Pride was born out of protest — not in celebration, but in bricks thrown at police by trans women and queer people at Stonewall. Pride is not a festival — it is an uprising. And it must remain so, especially here. At the University of Lucknow, where patriarchal violence walks in broad daylight and the administration walks past it silently, Pride must not be reduced to visibility alone. It must become a demand to reclaim space. It must break the monopoly of who gets to walk freely, who gets to laugh out loud, who gets to wear what they want, love whom they want, and exist in their own skin — without fear.
          </p>
          <p>
            In a campus where physical space is controlled by patriarchal muscle and administrative complicity, where the corridor is not just a corridor but a minefield for anyone who does not conform, Pride is revolution. It is about showing ourselves not because it is safe to do so — but because not showing ourselves only makes them stronger. We do not appear after the fear is gone — the fear begins to disappear when we show up.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">This Is a Call to Fight</h2>
          <p>
            To all students of the University of Lucknow — I appeal to you: Think. Reflect. Then act. Push back against this fear that has been drilled into us. Show yourself. Take up space. Speak louder. Love who you want. Dress how you want. Take your time. Let go of shame.
          </p>
          <p>
            Because Pride, in places like this, is not about celebration— it is about survival. And about revolt.
          </p>
          <p>
            Let us revolt — not alone, but together.
          </p>
        </section>
      </div>
    `,
    image: "/seen.jpeg",
    author: [
      {
        id: "15",
        name: "Captain Jack Sparrow",
        username: "captain-jack-sparrow",
        image: "/Shantam.jpeg"
      }
    ],
    category: "Op-ed",
    date: "2025-06-24",
    readTime: "5 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Pride", "LGBTQ+", "University of Lucknow", "Activism", "Student Life", "Queer", "Op-ed"],
    featured: true,
    isPublished: true
  },
  {
    id: "you-cant-self-care-your-way-out-of-late-stage-capitalism",
    title: "You Can’t Self-Care Your Way Out of Late-Stage Capitalism",
    slug: "you-cant-self-care-your-way-out-of-late-stage-capitalism",
    excerpt: "I lit a candle that smells like neoliberalism, poured myself a mug of herbal delusion, and tried deep breathing through the existential dread of unpaid internships and overpriced therapy. They told me self-care would save me. Turns out, all it saved was capitalism’s conscience.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          I lit a candle that smells like neoliberalism, poured myself a mug of herbal delusion, and tried deep breathing through the existential dread of unpaid internships and overpriced therapy. They told me self-care would save me. Turns out, all it saved was capitalism’s conscience.
        </p>
        <p>
          This is your gentle reminder - the kind that sounds like a war drum - that you can’t meditate your way out of a system built to exhaust you. You can't face-mask away the fact that rent has outpaced reality. You can't lavender-oil your way past burnout when the burnout is the point.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Origins of the Self-Care Industrial Complex</h2>
          <p>
            Let’s rewind. When Audre Lorde wrote in her 1988 book A Burst of Light “Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare” she was speaking as a Black, queer, chronically ill poet in a society that denied her rest, dignity, and survival. Her notion of self-care was radical - a tool for resistance in a world trying to erase her.
          </p>
          <p>
            Fast forward to 2025, that quote is now plastered on tote bags sold for ₹1,999 by corporations that underpay their women workers in Bangladesh where 80% of garment workers earn below a living wage. The radical has been repackaged as retail.
          </p>
          <blockquote class="border-l-4 border-gray-500 pl-4 italic my-4">
            We’re encouraged to light candles while the world burns.
          </blockquote>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Even Exhaustion Isn’t Equal</h2>
          <p>
            Caste, patriarchy, and racism determine who gets to rest and who is worked to the bone. These systems don’t just oppress - they structure who carries the heaviest burdens of burnout. For example, in India, Dalit and Adivasi women are disproportionately represented in the most precarious, underpaid, and exploitative forms of labor, from sanitation work to garment factories — roles where rest isn’t a right but a risk. Globally, Black and Indigenous women, migrant workers, and queer communities face similar patterns, working longer hours in harsher conditions with fewer protections.
          </p>
          <p>
            A corporate executive sipping turmeric lattes at a wellness retreat isn’t practicing the same “self-care” as a Dalit woman navigating caste and gender violence, or a gig worker juggling multiple jobs to survive. Rest looks different when you’re safe, when your survival isn’t at stake.
          </p>
          <p>
            This is why the politics of care must remain intersectional. The idea that we can solve burnout through lifestyle choices alone erases how capitalism, casteism, racism, and patriarchy combine to keep rest out of reach for the most marginalized. Real self-care isn’t a luxury product; it’s the fight for a world where dignity, rest, and healing aren’t commodities, but rights.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Business of Your Burnout</h2>
          <p>
            Capitalism has a genius for turning your pain into profit. It sells you exhaustion and then markets supplements to cure it. The gig economy - where over 7.7 million Indians now work, often without labor protections - destabilizes your attention span with algorithmic dopamine hits, and then tells you to unplug at a ₹3,000 digital detox retreat.
          </p>
          <p>
            This isn’t self-care. It’s sedation. A glossy pause button on a system that’s eating us alive.
          </p>
          <p>
            Meanwhile, billionaires do yoga on yachts. Wellness influencers sell $80 “charged” moon water while gig workers fall asleep on night buses. Therapy is locked behind a paywall - in India, only 0.75 psychiatrists are available per 100,000 people, (WHO, 2023), far below the recommended standard with costs that put private therapy out of reach for most. Rest is a luxury. And everything that once meant healing - community, art, time - has been redesigned to turn a profit.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Burnout Is Not a Personal Failure</h2>
          <p>
            What’s sinister is how late-stage capitalism reframes structural issues as personal shortcomings.
          </p>
          <ul class="list-disc list-inside my-4">
            <li>Struggling to keep up? Try a productivity planner.</li>
            <li>Can’t afford rent? Maybe you should budget better.</li>
            <li>Anxious and disconnected? You just need more “me time.”</li>
          </ul>
          <p>
            This language makes burnout feel like a failure of character, not the consequence of exploitative systems. But here’s the truth: no one can "optimize" their way out of precarity. No matter how many vision boards you create, you can't manifest your way into affordable housing or labor protections.
          </p>
          <p>
            A 2024 BCG study found 48% of workers worldwide report burnout symptoms, with rates spiking to 62% in India and 61% in Japan, where overwork culture remains deadly (BCG, 2024). In the U.S., burnout costs the economy $300 billion annually, while in Europe, countries like Poland report burnout levels as high as 70% (BCG, 2024; Statista, 2023).
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Right to Rest.</h2>
          <p>
            Of course, rest is essential. Of course, taking care of yourself matters. But self-care, as it’s been co-opted, often becomes another burden - another should. And it’s always uneven.
          </p>
          <p>
            Let’s be clear: You deserve care. You deserve slow mornings, nourished bodies, and lives not dictated by deadlines. But let’s not confuse survival hacks with liberation. The face mask won’t protect you from burnout. The scented candle won’t unionize your workplace. The five-step skincare routine won’t dismantle a system that profits from your insecurity.
          </p>
          <p>
            We don’t need more bath bombs. We need better labor laws. We don’t need more “quiet quitting” think pieces. We need to loudly demand structural change.
          </p>
          <p>
            So go ahead - drink that tea. Nap unapologetically. Journal like your future depends on it (because it does). But don’t stop there. Recognize the trap. Rest is not an end; it’s a weapon. Self-care should refill you for resistance, not numb you into compliance.
          </p>
          <p>
            Because the truth is: you’re not burnt out because you’re weak. You’re burnt out because this system is designed to burn you out. And no amount of serums, smoothies, or Instagram affirmations will save us from that.
          </p>
          <p>
            We will have to save ourselves - together.
          </p>
        </section>
      </div>
    `,
    image: "/self.jpeg",
    author: authors.find((a) => a.username === "shumaila-khan"),
    category: "Editorial",
    date: "2025-06-25",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Self-Care", "Capitalism", "Burnout", "Mental Health", "Politics", "Activism"],
    featured: true,
    isPublished: true
  },
  {
    id: "patriotism-in-the-age-of-social-media",
    title: "Patriotism in the Age of Social Media: A Reflection",
    slug: "patriotism-in-the-age-of-social-media",
    excerpt: "Patriotism is love and dedication towards one's nation—a profound sense of pride and desire to make it better. But with social media dominating our lives, the very meaning of patriotism appears blurry.",
    content: `
      <div class="article-content">
        <section>
          <h2 class="section-heading">The Illusion of Patriotism in a Digital Age</h2>
          <p>
            Patriotism is love and dedication towards one's nation—a profound sense of pride and desire to make it better. But with social media starting to dominate our lives, the very meaning of patriotism appears to be blurry. On 15th August, our feeds are filled with expressions of love for one's country. But within 24 hours, we forget to obey traffic rules, to maintain cleanliness around us, to desist from hate speech, or merely to live in harmony and peace. In idolizing large, sharable acts, we lose track of our daily duties as citizens, swamped with likes and followers.
          </p>
          <p>
            Social media has not just shaped the way we practice patriotism, but also how we define it. It has begun "teaching" us how patriotism must look. Not being vocal about the love of the country is now considered a threat. Instagram and X are filled to the brim with emotional reels and one-liners. WhatsApp is filled with half-baked, outrage-fueled conspiracy theories, usually created to pit people against each other in the name of allegiance. But is it loyalty at all if, in doing so, our own nation is hurt—if we chip away at the very base upon which it stands? Does changing your profile picture to a flag carry the same weight as casting your vote or standing against corruption?
          </p>
        </section>
        <section>
          <h2 class="section-heading">When Patriotism Turns Blind</h2>
          <p>
            Rabindranath Tagore, writing during the height of colonial rule, warned us in his book <em>Nationalism</em> (1917), "Patriotism cannot be our final spiritual shelter; my refuge is humanity." He cautioned against blind patriotism and stressed universal human values. When the youth of a country begin to adopt patriotism blindly, it often morphs into aggressive nationalism, the belief that one’s nation is inherently superior and beyond criticism sprouts and dissent is seen as betrayal. So love turns into obedience and pride converts itself into prejudice. This kind of blind conformity discourages people from questioning the overlords/authorities. And when someone dares to ask questions, they’re often labelled as traitors. This, in turn, weakens democracy. Patriotism starts to excuse censorship, war atrocities, and muzzling of voices, under the guise of national pride.
          </p>
          <p>
            Tagore felt that if patriotism becomes our sole identity, we forget our common humanity. What is a nation, indeed, without people?
          </p>
          <p>
            Our growing ignorance of history and context only deepens this problem. Instead of thinking critically, we follow the blaring political noises. Without a deep understanding of our nation’s past, herd mentality takes over. We forget the ideals our freedom fighters gave their lives for—liberty, justice, and equality. Instead, we follow what’s getting us 90 seconds of fame and a few followers.
          </p>
          <p>
            Yes, social media is a strong tool, it unites people, exchanges ideas, and disseminates information. But there is a dark side to it. We've seen the kind of riots and further polarizations triggered by fake or half-true news. And usually, the most vulnerable—minorities—are caught in the fallout.
          </p>
          <p>
            In this environment, patriotism risks becoming a shallow, divisive identity marker rather than a commitment to collective progress. To preserve its true meaning, patriotism must go beyond digital gestures and embrace informed, inclusive, and constructive participation in the society.
          </p>
          <p>
            This new "social media patriotism" is more performative. It's not being the loudest to sing the national anthem, or commenting smugly on a reel. It's being that voice that speaks up for the ideals the anthem stands for. It's knowing the heart of the nation.
          </p>
        </section>
        <section>
          <h2 class="section-heading">Rekindling Real Patriotism: Beyond Likes and Hashtags</h2>
          <p>
            To rekindle true patriotism, the young people need to read, study the history of the country, learn how to challenge the authorities, and reject cattle behavior. We have to accept imperfections in our system and strive to correct them. As citizens of the era of the internet, it's our responsibility to learn before we opine, because every opinion determines the future of our country. We need greater media literacy, algorithmic transparency, and digital spaces that promote informed, inclusive civic engagement—not viral outrage.
          </p>
          <p>
            The beauty of our nation is in its culture, heritage, diversity, and most importantly, in being one. If we can learn to respect this, if we practice civic responsibility and question narratives, be it in textbooks, news outlets, or WhatsApp forwards, we get closer to actual patriotism.
          </p>
          <p>
            In a world increasingly driven by digital presence, patriotism is no longer just felt—it is posted, liked, and shared. But to be patriotically active today means to remain aware, be compassionate, speak out against injustice, and engage in actual, grass-roots change.
          </p>
          <p>
            Patriotism isn't about crying loudest. It’s about doing the hard, quiet things that truly count—like choosing truth over trend, action over applause and the nation over oneself.
          </p>
        </section>
      </div>
    `,
    image: "/social.jpeg",
    author: [
      authors.find((a) => a.username === "hetal-kothari"),
      authors.find((a) => a.username === "aliya-imam")
    ],
    category: "Editorial",
    date: "2025-06-25",
    readTime: "5 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Patriotism", "Social Media", "India", "Civic Engagement", "Nationalism", "Youth", "Editorial"],
    featured: true,
    isPublished: true
  },
  {
    id: "hate-myth-and-humanity-lgbtq",
    title: "Hate, Myth and humanity : what society gets wrong about LGBTQ+ community",
    slug: "hate-myth-and-humanity-what-society-gets-wrong-about-lgbtq",
    excerpt: "A critical look at the myths, prejudices, and societal failures that continue to harm the LGBTQ+ community, and a call for empathy, dignity, and real equality.",
    content: `
      <div class="article-content">
        <section>
          <h2 class="section-heading">Nature Doesn’t Discriminate, We Do-</h2>
          <p>
            In a world where information is at your fingertips, ignorance continues to exist.
            The struggles of LGBTQ+ community might appear to be easing on the surface level, but negative stereotypes, degrading comments, and denial of fundamental human rights continue to be deep rooted in our society. These harsh realities continue to be sidetracked with excuses based on so-called "unnatural biology," religious purposes, or assertions that society has never been so before.
          </p>
          <p>
            From having been stigmatized to mocked for not being normal according to societies traditional notions of "normal," all the discrimination to which the members of the community are subjected is due to centuries of misinformation, prejudice, and the absence of a modicum of basic human empathy.
            Even among animals, homosexual behaviour has been witnessed. More than 1,500 species, ranging from invertebrates including insects and spiders to vertebrates like birds, mammals, and fish, have shown homosexual behaviour. So, when individuals protest that it's "unnatural," the case falls apart under even the most rudimentary scientific examination. Homosexual relationships are not something new, throughout history and across cultures, from ancient Indian writings to Native American societies.
          </p>
        </section>
        <section>
          <h2 class="section-heading">The Truth About LGBTQ+ Rights-</h2>
          <p>
            The majority of people still believe that those of other sexual orientations are sick in the mind or have personality disorders. Such assertions not only close their very existence off, but also obliterate the type of support which they need. Such a belief is not only outdated but also untrue. In 1973, the American Psychiatric Association—the world's largest psychiatric association, finally deleted homosexuality from the list of mental illnesses. This was done after comprehensive research and a number of debates. But over half a century later, LGBTQ+ activists are still fighting to achieve this reality, while some so called "researchers" and "physicians" try to revive these destructive myths back from the dead, dragging the progress back to square one.
          </p>
          <p>
            The lack of understanding, acceptance, and respect results in bullying, sexual assault, violence, and emotional abuse. It often culminates into depression and suicide. The effect of such hate is catastrophic - it dehumanizes, isolates, takes away  employment, their home, their dignity, and their fundamental rights.
          </p>
          <p>
            One of the most popular reasons for refusing LGBTQ+ individuals’ equality is religion. Society  uses religion as protection to excuse hatred, saying they are "saving" their religion or tradition. But if one believes in God, how does one explain hatred towards God's own people? No faith teaches hate. Holy books instruct love, kindness, and sympathy. So why the brutality? Just because you don't comprehend a person's identity? As humans, we are still in the dark about so many things, we're still learning about the depths of our own bodies and the workings of the brain. It's hateful to despise someone just because their normal is a little different from ours.
          </p>
        </section>
        <section>
          <h2 class="section-heading">Equality Means Everyone-</h2>
          <p>
            Another common argument that is often raised is that trans women are a "threat" to feminism, particularly in athletics. Critics argue that trans women might have physical advantages over cis women and thus deprive them of opportunities. But this concern is not supported by strong evidence. The International Olympic Committee and World Athletics have already put in place strict eligibility requirements, such as hormone rules, to maintain fair competition. Trans women are not "dominating" women's sports as is often argued. Seems a little out of context, let's stick to trans women.
          </p>
          <p>
            Using feminism to justify exclusion of queer people betrays the very nature of feminism itself. Feminism is based on the fight for freedom, equality, and respect for all. Excluding trans women from feminist spaces not only erases their struggles but goes against the principles feminism was built on.
          </p>
          <p>
            Being a member of  LGBTQ+ is not a phase or a trend, it is a part of the natural human spectrum. It always has been and will always be. While it's fine to question or disagree on some subjects, refusing someone's existence is not an opinion — it is dehumanizing. You don't have to get every identity in order to treat someone with kindness and respect.
            If your faith makes you hate, exclude, or hurt others simply because they are who they are- then it's not their identity we need to question, it's our humanity.
          </p>
          <p>
            A society that prides itself on equality and freedom has to start by providing the bare essentials: dignity, love, safety, and rights for all. Because everyone deserves that.
          </p>
        </section>
      </div>
    `,
    image: "/myth.jpeg",
    author: authors.find(a => a.username === "aliya-imam")!,
    category: "Editorial",
    date: "2025-06-26",
    readTime: "7 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["LGBTQ+", "Society", "Myth", "Equality", "Human Rights", "Editorial"],
    featured: true,
    isPublished: true
  },
  {
    id: "akbarnagar-betrayed-children-no-school",
    title: "Akbarnagar’s Betrayed Children: No School Beyond the Rubble",
    slug: "akbarnagar-betrayed-children-no-school-beyond-the-rubble",
    excerpt: "After the demolition of Akbarnagar, displaced families in Basant Kunj face a new crisis: their children have no access to government schools, severing their right to education and hope.",
    content: `
      <div class="article-content">
        <section>
          <p>
            When the state destroyed Akbarnagar, it didn't just demolish homes. It uprooted futures. It crushed the fragile scaffolding on which generations of working-class families had tried to build stability—brick by brick, year by year. And perhaps no one has been more betrayed by this destruction than the children.
          </p>
          <p>
            After the demolition, families were pushed into the Basant Kunj Yojana resettlement colony. It was declared a rehabilitation site, but in reality, it is a dumping ground. No water, no hospital, no proper drainage, no public transport. And most critically—no government school.
          </p>
          <p>
            Let me be clear: not a single government school exists within or even near Basant Kunj. The only schools in the area are private. Some are in name only—tiny rented rooms charging ₹500 per month with no infrastructure. Others are expensive, the kind no displaced worker earning daily wages can even dream of affording. A few children are still traveling 5–10 kilometers to reach their old schools, but that’s increasingly rare. With no transport, no stability, and rising economic stress, families are being pushed to pull their children out.
          </p>
          <p>
            What is the state’s plan for these children? Where are the bridge courses, the emergency enrolment camps, the mobile schools that should have followed the demolition? If the government can send bulldozers overnight, can it not provide even a bus or a teacher?
          </p>
          <p>
            Parents now live with an unbearable choice: pay for housing you didn’t choose, or educate your children. Many are being forced to choose shelter over schooling, not because they don’t care, but because they’ve been made to suffer for surviving poverty.
          </p>
          <p>
            We are told this is ‘rehabilitation’. But what kind of rehabilitation severs children from education? From friendship? From dreams?
          </p>
          <p>
            Article 21A of the Constitution guarantees every child the right to free and compulsory education. The courts have repeatedly held that displaced communities must be given access to education as part of any resettlement. But in Basant Kunj, the children of Akbarnagar are being deliberately abandoned. Their only ‘crime’? Being born to poor families in a locality, the city now wants to erase from its memory.
          </p>
          <p>
            This is not a policy failure. This is a political choice.
          </p>
          <p>
            And it is not just the children who will bear the cost. We all will—because a city that treats its children as collateral damage for beautification projects has no moral right to speak of development.
          </p>
          <p>
            I invite the administration, the media, and every citizen with a conscience to visit Basant Kunj. Look into the eyes of the children there. Ask them why they’re not in school. Then ask yourself: if this happened to your child, what would you call it?
          </p>
          <p>
            We call it what it is: injustice.
          </p>
        </section>
      </div>
    `,
    image: "/cris.jpeg",
    author: authors.find(a => a.username === "captain-jack-sparrow")!,
    category: "city",
    date: "2025-06-26",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Akbarnagar", "Education", "Children", "Resettlement", "Policy", "City", "Injustice"],
    featured: true,
    isPublished: true
  }
];

// Admin users
export const adminUsers: AdminUser[] = [
  {
    username: "admin",
    password: "admin123",
    role: "admin",
  },
];

// Helper function to filter articles by category
export const getArticlesByCategory = (categorySlug: string): Article[] => {
  return articles.filter(
    (article) => article.category.toLowerCase().replace(' ', '-') === categorySlug
  );
};

// Helper function to get articles by author
export const getArticlesByAuthor = (authorUsername: string): Article[] => {
  return articles.filter(
    (article) => article.author.username === authorUsername
  );
};

// Helper function to get author by username
export const getAuthorByUsername = (username: string): Author | undefined => {
  return authors.find((author) => author.username === username);
};

// Helper function to get article by slug
export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug);
};

// Helper function to get category by slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((category) => category.slug === slug);
};

// Helper function to get featured articles
export const getFeaturedArticles = (): Article[] => {
  return articles.filter((article) => article.featured);
};

// Helper function to get latest articles
export const getLatestArticles = (limit: number = 6): Article[] => {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

// Helper function to get top articles by views
export const getTopArticles = (limit: number = 4): Article[] => {
  return [...articles]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, limit);
};

// Helper function to get best author
export const getBestAuthor = (): Author => {
  return authors[0]; // For demo, return founder as best author
};

export const getHeroArticle = (): Article | undefined => {
  return articles.find(article => article.hero === true);
};

