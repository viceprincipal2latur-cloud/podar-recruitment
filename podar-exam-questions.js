// PODAR INTERNATIONAL SCHOOL - COMPREHENSIVE QUESTION DATABASE
// Interview Drive - January 2026
// With Random Question Selection

// ============================================
// TEACHER APTITUDE - COMMON FOR ALL CANDIDATES
// ============================================

// SECTION 1: BASIC ENGLISH KNOWLEDGE
// Database: 20 questions, Exam selects: 10 random
const basicEnglishDatabase = [
    { question: "Choose the correct spelling:", options: ["Occassion", "Occasion", "Ocasion", "Occation"], correct: 1 },
    { question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childes", "Childrens"], correct: 1 },
    { question: "Identify the noun: She sings beautifully.", options: ["She", "sings", "beautifully", "None"], correct: 0 },
    { question: "Which is the correct sentence?", options: ["He don't know", "He doesn't know", "He not know", "He didn't knew"], correct: 1 },
    { question: "What is the past tense of 'go'?", options: ["Goed", "Went", "Gone", "Going"], correct: 1 },
    { question: "Identify the adjective: The quick brown fox.", options: ["quick", "brown", "Both A and B", "fox"], correct: 2 },
    { question: "What is a synonym for 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], correct: 1 },
    { question: "What is an antonym for 'hot'?", options: ["Warm", "Cold", "Cool", "Freezing"], correct: 1 },
    { question: "Identify the verb: She dances gracefully.", options: ["She", "dances", "gracefully", "None"], correct: 1 },
    { question: "What punctuation ends a question?", options: ["Period", "Comma", "Question mark", "Exclamation"], correct: 2 },
    { question: "What is a pronoun?", options: ["Person", "Place", "Word replacing noun", "Action"], correct: 2 },
    { question: "Choose correct article: ___ apple a day", options: ["A", "An", "The", "No article"], correct: 1 },
    { question: "What is the superlative of 'good'?", options: ["Gooder", "Goodest", "Better", "Best"], correct: 3 },
    { question: "Identify the adverb: He runs quickly.", options: ["He", "runs", "quickly", "None"], correct: 2 },
    { question: "What is a compound word?", options: ["Long word", "Two words combined", "Foreign word", "Slang"], correct: 1 },
    { question: "What is alliteration?", options: ["Rhyming", "Repetition of sounds", "Metaphor", "Simile"], correct: 1 },
    { question: "Choose the correct form: She ___ to school daily", options: ["go", "goes", "going", "went"], correct: 1 },
    { question: "What is a conjunction?", options: ["Noun", "Verb", "Connecting word", "Adjective"], correct: 2 },
    { question: "Identify preposition: The book is on the table.", options: ["book", "is", "on", "table"], correct: 2 },
    { question: "What is the comparative of 'big'?", options: ["Biger", "Bigger", "Biggest", "More big"], correct: 1 }
];

// SECTION 2: COMPUTER KNOWLEDGE
// Database: 10 questions, Exam selects: 5 random
const computerKnowledgeDatabase = [
    { question: "What does CPU stand for?", options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Unit"], correct: 1 },
    { question: "What is the brain of the computer?", options: ["Monitor", "CPU", "Keyboard", "Mouse"], correct: 1 },
    { question: "What does RAM stand for?", options: ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"], correct: 0 },
    { question: "Which is an input device?", options: ["Monitor", "Printer", "Keyboard", "Speaker"], correct: 2 },
    { question: "What is software?", options: ["Physical parts", "Programs", "Monitor", "Keyboard"], correct: 1 },
    { question: "What does WWW stand for?", options: ["World Wide Web", "World Web Wide", "Web World Wide", "Wide World Web"], correct: 0 },
    { question: "Which is an output device?", options: ["Mouse", "Scanner", "Monitor", "Microphone"], correct: 2 },
    { question: "What is an operating system?", options: ["Hardware", "System software", "Application", "Network"], correct: 1 },
    { question: "What does URL stand for?", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Reference Locator", "Universal Reference Locator"], correct: 0 },
    { question: "What is a byte?", options: ["1 bit", "4 bits", "8 bits", "16 bits"], correct: 2 }
];

// SECTION 3: CLASSROOM MANAGEMENT
// Database: 10 questions, Exam selects: 5 random
const classroomManagementDatabase = [
    { question: "What is the best way to handle a disruptive student?", options: ["Ignore them", "Address privately after class", "Shout at them", "Send out immediately"], correct: 1 },
    { question: "What promotes positive classroom environment?", options: ["Strict rules only", "Mutual respect", "Silent classroom", "No rules"], correct: 1 },
    { question: "How to maintain student attention?", options: ["Long lectures", "Interactive activities", "Threats", "Extra homework"], correct: 1 },
    { question: "What is effective classroom arrangement?", options: ["All face wall", "Groups for collaboration", "Random seating", "No arrangement"], correct: 1 },
    { question: "How to handle diverse learners?", options: ["Same method for all", "Differentiated instruction", "Ignore differences", "Group by ability only"], correct: 1 },
    { question: "What is formative assessment?", options: ["Final exam only", "Ongoing feedback", "Punishment", "Grading"], correct: 1 },
    { question: "How to encourage participation?", options: ["Call same students", "Create safe space", "Punish silence", "Ignore quiet students"], correct: 1 },
    { question: "What is classroom discipline?", options: ["Punishment only", "Structure and respect", "Fear-based", "No rules"], correct: 1 },
    { question: "How to manage time effectively?", options: ["No planning", "Clear schedule", "Extend arbitrarily", "Skip activities"], correct: 1 },
    { question: "What builds student motivation?", options: ["Threats", "Encouragement and goals", "Competition only", "Pressure"], correct: 1 }
];

// ============================================
// SUBJECT APTITUDE DATABASES - 16 SUBJECTS
// Each subject has: 10 Easy, 15 Moderate, 15 Difficult
// Exam selects: 4 Easy, 8 Moderate, 8 Difficult = 20 total
// ============================================

// PRT ENGLISH
const prtEnglishDatabase = {
    easy: [
        { question: "What is a vowel?", options: ["A, E, I, O, U", "B, C, D", "All letters", "Consonants"], correct: 0 },
        { question: "How many letters in English alphabet?", options: ["24", "25", "26", "27"], correct: 2 },
        { question: "What is a sentence?", options: ["Single word", "Complete thought", "Question only", "Paragraph"], correct: 1 },
        { question: "What is rhyming?", options: ["Same meaning", "Same sound at end", "Same spelling", "Same length"], correct: 1 },
        { question: "What is a story?", options: ["Poem", "Narrative with events", "List", "Description"], correct: 1 },
        { question: "What is capital letter used for?", options: ["Small words", "Start of sentence", "Middle of word", "End of sentence"], correct: 1 },
        { question: "What is full stop used for?", options: ["Start sentence", "End sentence", "Ask question", "Show excitement"], correct: 1 },
        { question: "What is phonics?", options: ["Math", "Sound-letter relationship", "Drawing", "Sports"], correct: 1 },
        { question: "What is reading?", options: ["Writing", "Understanding written text", "Speaking", "Listening"], correct: 1 },
        { question: "What is spelling?", options: ["Math", "Correct letter order", "Drawing", "Coloring"], correct: 1 }
    ],
    moderate: [
        { question: "What is a simile?", options: ["Direct comparison", "Comparison using like/as", "Exaggeration", "Sound word"], correct: 1 },
        { question: "What is comprehension?", options: ["Writing", "Understanding meaning", "Spelling", "Grammar"], correct: 1 },
        { question: "What is a paragraph?", options: ["Single sentence", "Group of related sentences", "Title", "Poem"], correct: 1 },
        { question: "What is punctuation?", options: ["Spelling", "Marks for clarity", "Grammar", "Vocabulary"], correct: 1 },
        { question: "What is vocabulary?", options: ["Grammar rules", "Words we know", "Punctuation", "Handwriting"], correct: 1 },
        { question: "What is creative writing?", options: ["Copying", "Original composition", "Reading", "Listening"], correct: 1 },
        { question: "What is a main idea?", options: ["Title", "Central point", "Last sentence", "First word"], correct: 1 },
        { question: "What is prediction in reading?", options: ["Guessing", "Anticipating what comes next", "Memorizing", "Copying"], correct: 1 },
        { question: "What is sequence?", options: ["Random order", "Correct order of events", "Title", "Ending"], correct: 1 },
        { question: "What is character in story?", options: ["Title", "Person/animal in story", "Setting", "Plot"], correct: 1 },
        { question: "What is setting?", options: ["Characters", "Time and place", "Plot", "Theme"], correct: 1 },
        { question: "What is dialogue?", options: ["Description", "Conversation", "Title", "Summary"], correct: 1 },
        { question: "What is cause and effect?", options: ["Random events", "Reason and result", "Title", "Character"], correct: 1 },
        { question: "What is inference?", options: ["Direct statement", "Conclusion from clues", "Title", "Summary"], correct: 1 },
        { question: "What is fluency in reading?", options: ["Slow reading", "Smooth and accurate reading", "Loud reading", "Silent reading"], correct: 1 }
    ],
    difficult: [
        { question: "What is differentiated instruction?", options: ["Same for all", "Tailored to needs", "Advanced only", "Basic only"], correct: 1 },
        { question: "What is phonological awareness?", options: ["Letters", "Sound recognition", "Grammar", "Vocabulary"], correct: 1 },
        { question: "What is scaffolding in teaching?", options: ["Building", "Support for learning", "Assessment", "Discipline"], correct: 1 },
        { question: "What is metacognition?", options: ["Memory", "Thinking about thinking", "Reading", "Writing"], correct: 1 },
        { question: "What is genre?", options: ["Grammar", "Category of literature", "Punctuation", "Spelling"], correct: 1 },
        { question: "What is context clues?", options: ["Dictionary", "Surrounding words for meaning", "Title", "Pictures"], correct: 1 },
        { question: "What is narrative voice?", options: ["Loud", "Perspective of storyteller", "Silent", "Soft"], correct: 1 },
        { question: "What is literary device?", options: ["Computer", "Technique for effect", "Book", "Paper"], correct: 1 },
        { question: "What is summarizing?", options: ["Copying all", "Brief main points", "Title", "Introduction"], correct: 1 },
        { question: "What is text structure?", options: ["Font", "Organization pattern", "Size", "Color"], correct: 1 },
        { question: "What is author's purpose?", options: ["Name", "Reason for writing", "Title", "Length"], correct: 1 },
        { question: "What is critical thinking?", options: ["Criticism", "Analytical evaluation", "Memorization", "Copying"], correct: 1 },
        { question: "What is formative assessment in reading?", options: ["Final test", "Ongoing feedback", "Grades only", "Punishment"], correct: 1 },
        { question: "What is reading strategy?", options: ["Random", "Planned approach", "Guessing", "Skipping"], correct: 1 },
        { question: "What is multimodal literacy?", options: ["One method", "Multiple forms of communication", "Reading only", "Writing only"], correct: 1 }
    ]
};

// TGT ENGLISH
const tgtEnglishDatabase = {
    easy: [
        { question: "Who wrote 'Romeo and Juliet'?", options: ["Dickens", "Shakespeare", "Austen", "Wordsworth"], correct: 1 },
        { question: "What is poetry?", options: ["Prose", "Expressive writing in verse", "Essay", "Letter"], correct: 1 },
        { question: "What is a novel?", options: ["Short story", "Long narrative fiction", "Poem", "Play"], correct: 1 },
        { question: "What is grammar?", options: ["Vocabulary", "Rules of language", "Pronunciation", "Spelling"], correct: 1 },
        { question: "What is a metaphor?", options: ["Literal meaning", "Direct comparison", "Exaggeration", "Sound"], correct: 1 },
        { question: "What is prose?", options: ["Poetry", "Normal written language", "Drama", "Verse"], correct: 1 },
        { question: "What is a verb?", options: ["Person", "Action word", "Place", "Thing"], correct: 1 },
        { question: "What is alliteration?", options: ["Rhyme", "Repetition of initial sounds", "Metaphor", "Simile"], correct: 1 },
        { question: "What is a clause?", options: ["Word", "Group with subject-verb", "Letter", "Sentence"], correct: 1 },
        { question: "What is syntax?", options: ["Meaning", "Sentence structure", "Pronunciation", "Vocabulary"], correct: 1 }
    ],
    moderate: [
        { question: "What is romanticism in literature?", options: ["Love stories", "Emphasis on emotion and nature", "Modern style", "Ancient style"], correct: 1 },
        { question: "What is irony?", options: ["Literal meaning", "Opposite of expected", "Repetition", "Exaggeration"], correct: 1 },
        { question: "What is theme?", options: ["Title", "Central idea", "Character", "Setting"], correct: 1 },
        { question: "What is dramatic irony?", options: ["Loud drama", "Audience knows more than character", "Comedy", "Tragedy"], correct: 1 },
        { question: "What is foreshadowing?", options: ["Flashback", "Hint of future events", "Summary", "Conclusion"], correct: 1 },
        { question: "What is symbolism?", options: ["Signs", "Objects representing ideas", "Letters", "Numbers"], correct: 1 },
        { question: "What is tone?", options: ["Sound", "Author's attitude", "Volume", "Pitch"], correct: 1 },
        { question: "What is imagery?", options: ["Pictures", "Descriptive language", "Photos", "Videos"], correct: 1 },
        { question: "What is characterization?", options: ["Summary", "Creating characters", "Plot", "Setting"], correct: 1 },
        { question: "What is conflict?", options: ["Agreement", "Struggle in story", "Peace", "Harmony"], correct: 1 },
        { question: "What is point of view?", options: ["Opinion", "Narrative perspective", "Setting", "Theme"], correct: 1 },
        { question: "What is personification?", options: ["Character", "Human traits to non-human", "Person", "Description"], correct: 1 },
        { question: "What is hyperbole?", options: ["Understatement", "Exaggeration", "Truth", "Fact"], correct: 1 },
        { question: "What is onomatopoeia?", options: ["Name", "Sound word", "Title", "Character"], correct: 1 },
        { question: "What is satire?", options: ["Praise", "Criticism through humor", "Description", "Narration"], correct: 1 }
    ],
    difficult: [
        { question: "What is postmodernism?", options: ["Old style", "Rejection of absolute truths", "Classical", "Romantic"], correct: 1 },
        { question: "What is deconstructionism?", options: ["Building", "Analyzing underlying assumptions", "Construction", "Creation"], correct: 1 },
        { question: "What is epistolary novel?", options: ["Diary", "Written in letters", "Poem", "Play"], correct: 1 },
        { question: "What is bildungsroman?", options: ["Romance", "Coming-of-age story", "Mystery", "Horror"], correct: 1 },
        { question: "What is stream of consciousness?", options: ["River", "Continuous thought flow", "Plot", "Setting"], correct: 1 },
        { question: "What is allegory?", options: ["Story", "Symbolic narrative", "Fact", "Biography"], correct: 1 },
        { question: "What is caesura?", options: ["Cut", "Pause in line of poetry", "Rhyme", "Meter"], correct: 1 },
        { question: "What is enjambment?", options: ["End", "Continuation across lines", "Stop", "Pause"], correct: 1 },
        { question: "What is juxtaposition?", options: ["Separation", "Placing contrasts together", "Agreement", "Similarity"], correct: 1 },
        { question: "What is denouement?", options: ["Beginning", "Resolution of plot", "Climax", "Introduction"], correct: 1 },
        { question: "What is verisimilitude?", options: ["Fiction", "Appearance of truth", "Fantasy", "Imagination"], correct: 1 },
        { question: "What is diction?", options: ["Dictionary", "Word choice", "Grammar", "Punctuation"], correct: 1 },
        { question: "What is motif?", options: ["Motor", "Recurring element", "Character", "Setting"], correct: 1 },
        { question: "What is anachronism?", options: ["Time error", "Misplaced in time", "Correct time", "Future"], correct: 1 },
        { question: "What is euphemism?", options: ["Harsh word", "Mild expression", "Exaggeration", "Repetition"], correct: 1 }
    ]
};

// PRT MATHS - Sample questions (you'll add 40 total per subject)
const prtMathsDatabase = {
    easy: [
        { question: "What is 5 + 3?", options: ["6", "7", "8", "9"], correct: 2 },
        { question: "What is 10 - 4?", options: ["5", "6", "7", "8"], correct: 1 },
        { question: "What is 2 × 3?", options: ["5", "6", "7", "8"], correct: 1 },
        { question: "What is 12 ÷ 3?", options: ["3", "4", "5", "6"], correct: 1 },
        { question: "What comes after 19?", options: ["18", "20", "21", "22"], correct: 1 },
        { question: "What is half of 10?", options: ["3", "4", "5", "6"], correct: 2 },
        { question: "How many sides in triangle?", options: ["2", "3", "4", "5"], correct: 1 },
        { question: "What is 7 + 7?", options: ["12", "13", "14", "15"], correct: 2 },
        { question: "Count by 2s: 2, 4, 6, __?", options: ["7", "8", "9", "10"], correct: 1 },
        { question: "What is place value of 3 in 35?", options: ["Ones", "Tens", "Hundreds", "Thousands"], correct: 1 }
    ],
    moderate: [
        { question: "What is 15 + 28?", options: ["41", "42", "43", "44"], correct: 2 },
        { question: "What is area of square with side 4?", options: ["8", "12", "16", "20"], correct: 2 },
        { question: "What is 56 ÷ 7?", options: ["6", "7", "8", "9"], correct: 2 },
        { question: "What is perimeter of rectangle 5×3?", options: ["8", "15", "16", "20"], correct: 2 },
        { question: "What is 1/2 + 1/4?", options: ["1/6", "2/6", "3/4", "1/3"], correct: 2 },
        { question: "Convert 2 hours to minutes", options: ["60", "100", "120", "140"], correct: 2 },
        { question: "What is 25% of 100?", options: ["20", "25", "30", "35"], correct: 1 },
        { question: "Round 47 to nearest ten", options: ["40", "45", "50", "55"], correct: 2 },
        { question: "What is LCM of 3 and 4?", options: ["7", "12", "15", "16"], correct: 1 },
        { question: "3² equals?", options: ["6", "9", "12", "15"], correct: 1 },
        { question: "What is HCF of 12 and 18?", options: ["3", "4", "6", "9"], correct: 2 },
        { question: "Compare: 0.5 __ 0.05", options: ["<", ">", "=", "≠"], correct: 1 },
        { question: "What is median of 3,5,7?", options: ["3", "5", "7", "15"], correct: 1 },
        { question: "Solve: 3x = 12, x = ?", options: ["3", "4", "5", "6"], correct: 1 },
        { question: "How many edges in cube?", options: ["6", "8", "10", "12"], correct: 3 }
    ],
    difficult: [
        { question: "Teaching strategy for place value?", options: ["Memorization", "Base-10 blocks", "Drill only", "Ignore"], correct: 1 },
        { question: "What is number sense?", options: ["Counting", "Understanding numbers", "Addition", "Subtraction"], correct: 1 },
        { question: "Best method for teaching fractions?", options: ["Abstract only", "Visual models", "Formulas only", "Skip"], correct: 1 },
        { question: "What is concrete-pictorial-abstract?", options: ["Theory", "Teaching progression", "Assessment", "Punishment"], correct: 1 },
        { question: "How to teach problem-solving?", options: ["Give answers", "Model strategies", "Skip", "Ignore"], correct: 1 },
        { question: "What is mathematical reasoning?", options: ["Calculation", "Logical thinking", "Memorization", "Speed"], correct: 1 },
        { question: "Best way to teach times tables?", options: ["Rote only", "Patterns and practice", "Skip", "Ignore"], correct: 1 },
        { question: "What is diagnostic assessment?", options: ["Final test", "Identifying gaps", "Grades", "Punishment"], correct: 1 },
        { question: "How to develop mental math?", options: ["Calculator only", "Strategies and practice", "Skip", "Avoid"], correct: 1 },
        { question: "What is math anxiety?", options: ["Love of math", "Fear of math", "Math skill", "Math game"], correct: 1 },
        { question: "How to make math engaging?", options: ["Lectures only", "Games and activities", "Tests only", "Skip"], correct: 1 },
        { question: "What is formative assessment in math?", options: ["Final exam", "Ongoing feedback", "Grades only", "Skip"], correct: 1 },
        { question: "How to teach geometry?", options: ["Abstract only", "Hands-on shapes", "Skip", "Ignore"], correct: 1 },
        { question: "What is mathematical discourse?", options: ["Silence", "Student discussion", "Teacher talk only", "No talk"], correct: 1 },
        { question: "How to differentiate math instruction?", options: ["Same for all", "Varied approaches", "Advanced only", "Basic only"], correct: 1 }
    ]
};

// TGT MATHS - Sample (full 40 questions to be added)
const tgtMathsDatabase = {
    easy: [
        { question: "What is the value of π?", options: ["3.12", "3.14", "3.16", "3.18"], correct: 1 },
        { question: "What is √144?", options: ["10", "11", "12", "13"], correct: 2 },
        { question: "What is 7 × 8?", options: ["54", "56", "58", "60"], correct: 1 },
        { question: "If x + 5 = 12, x = ?", options: ["5", "6", "7", "8"], correct: 2 },
        { question: "What is the sum of angles in triangle?", options: ["90°", "180°", "270°", "360°"], correct: 1 },
        { question: "What is 2³?", options: ["6", "8", "9", "12"], correct: 1 },
        { question: "What is 25% of 80?", options: ["15", "20", "25", "30"], correct: 1 },
        { question: "What is LCM of 4 and 6?", options: ["10", "12", "14", "16"], correct: 1 },
        { question: "What is HCF of 12 and 18?", options: ["3", "4", "6", "9"], correct: 2 },
        { question: "Solve: 2x + 3 = 11, x = ?", options: ["3", "4", "5", "6"], correct: 1 }
    ],
    moderate: [
        { question: "What is quadratic equation?", options: ["Linear", "ax²+bx+c=0", "Cubic", "Constant"], correct: 1 },
        { question: "What is Pythagoras theorem?", options: ["a+b=c", "a²+b²=c²", "a-b=c", "abc=1"], correct: 1 },
        { question: "What is derivative of x²?", options: ["x", "2x", "x²", "2x²"], correct: 1 },
        { question: "What is sin 30°?", options: ["0", "0.5", "1", "√3/2"], correct: 1 },
        { question: "What is arithmetic mean of 2,4,6?", options: ["3", "4", "5", "6"], correct: 1 },
        { question: "What is slope formula?", options: ["m=x/y", "m=(y₂-y₁)/(x₂-x₁)", "m=x+y", "m=xy"], correct: 1 },
        { question: "What is area of circle?", options: ["πr", "πr²", "2πr", "πd"], correct: 1 },
        { question: "What is ∫x dx?", options: ["x", "x²", "x²/2", "2x"], correct: 2 },
        { question: "What is log₁₀100?", options: ["1", "2", "10", "100"], correct: 1 },
        { question: "What is factorial of 5?", options: ["25", "60", "120", "125"], correct: 2 },
        { question: "What is cos 60°?", options: ["0", "0.5", "1", "√3/2"], correct: 1 },
        { question: "What is standard deviation?", options: ["Mean", "Spread measure", "Mode", "Median"], correct: 1 },
        { question: "What is matrix?", options: ["Number", "Array of numbers", "Graph", "Equation"], correct: 1 },
        { question: "What is probability of coin toss?", options: ["0.25", "0.5", "0.75", "1"], correct: 1 },
        { question: "What is permutation formula?", options: ["n!", "nPr=n!/(n-r)!", "nCr", "n²"], correct: 1 }
    ],
    difficult: [
        { question: "What is Rolle's theorem?", options: ["Derivative theorem", "f'(c)=0 in interval", "Integration", "Limit"], correct: 1 },
        { question: "What is Lagrange's mean value theorem?", options: ["Derivative", "f'(c)=(f(b)-f(a))/(b-a)", "Integral", "Limit"], correct: 1 },
        { question: "What is eigenvalue?", options: ["Matrix value", "λ in Av=λv", "Determinant", "Trace"], correct: 1 },
        { question: "What is Fourier series?", options: ["Sum", "Periodic function representation", "Derivative", "Integral"], correct: 1 },
        { question: "What is Laplace transform?", options: ["Integration", "Integral transform", "Derivative", "Sum"], correct: 1 },
        { question: "What is Green's theorem?", options: ["Derivative", "Line to double integral", "Integral", "Limit"], correct: 1 },
        { question: "What is Cauchy sequence?", options: ["Series", "Convergent sequence", "Divergent", "Infinite"], correct: 1 },
        { question: "What is L'Hôpital's rule?", options: ["Limit", "Evaluate 0/0 form", "Derivative", "Integral"], correct: 1 },
        { question: "What is Taylor series?", options: ["Sum", "Function approximation", "Derivative", "Integral"], correct: 1 },
        { question: "What is Stokes theorem?", options: ["Volume", "Surface to line integral", "Area", "Length"], correct: 1 },
        { question: "What is Jacobian?", options: ["Matrix", "Transformation matrix", "Determinant", "Vector"], correct: 1 },
        { question: "What is Riemann integral?", options: ["Sum", "Area under curve", "Derivative", "Limit"], correct: 1 },
        { question: "What is differential equation?", options: ["Equation", "Equation with derivatives", "Algebra", "Geometry"], correct: 1 },
        { question: "What is vector space?", options: ["Set", "Mathematical structure", "Number", "Function"], correct: 1 },
        { question: "What is Gaussian elimination?", options: ["Addition", "Matrix row reduction", "Multiplication", "Division"], correct: 1 }
    ]
};

// ============================================
// PLACEHOLDER for remaining 12 subjects
// (You'll populate these with 40 questions each)
// ============================================

const prtEVSDatabase = { easy: [], moderate: [], difficult: [] };
const tgtScienceDatabase = { easy: [], moderate: [], difficult: [] };
const tgtBiologyDatabase = { easy: [], moderate: [], difficult: [] };
const tgtChemistryDatabase = { easy: [], moderate: [], difficult: [] };
const tgtPhysicsDatabase = { easy: [], moderate: [], difficult: [] };
const prtComputerDatabase = { easy: [], moderate: [], difficult: [] };
const tgtComputerDatabase = { easy: [], moderate: [], difficult: [] };
const tgtSocialScienceDatabase = { easy: [], moderate: [], difficult: [] };
const prtMarathiDatabase = { easy: [], moderate: [], difficult: [] };
const tgtMarathiDatabase = { easy: [], moderate: [], difficult: [] };
const prtHindiDatabase = { easy: [], moderate: [], difficult: [] };
const tgtHindiDatabase = { easy: [], moderate: [], difficult: [] };

// ============================================
// RANDOM SELECTION FUNCTION
// ============================================

function selectRandomQuestions(database, count) {
    const shuffled = [...database].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// ============================================
// EXAM QUESTION GENERATOR
// ============================================

function generateExamQuestions(subjectPaper) {
    // Get subject database
    const subjectDB = getSubjectDatabase(subjectPaper);
    
    // Generate exam with random questions
    const examQuestions = {
        // Section 1: Basic English (10 from 20)
        basicEnglish: selectRandomQuestions(basicEnglishDatabase, 10),
        
        // Section 2: Computer Knowledge (5 from 10)
        computerKnowledge: selectRandomQuestions(computerKnowledgeDatabase, 5),
        
        // Section 3: Classroom Management (5 from 10)
        classroomManagement: selectRandomQuestions(classroomManagementDatabase, 5),
        
        // Section 4: Subject Aptitude (20 total: 4 easy, 8 moderate, 8 difficult)
        subjectEasy: selectRandomQuestions(subjectDB.easy, 4),
        subjectModerate: selectRandomQuestions(subjectDB.moderate, 8),
        subjectDifficult: selectRandomQuestions(subjectDB.difficult, 8)
    };
    
    return examQuestions;
}

function getSubjectDatabase(subjectPaper) {
    const databases = {
        'PRT English': prtEnglishDatabase,
        'TGT English': tgtEnglishDatabase,
        'PRT Maths': prtMathsDatabase,
        'TGT Maths': tgtMathsDatabase,
        'PRT EVS': prtEVSDatabase,
        'TGT Science': tgtScienceDatabase,
        'TGT Biology': tgtBiologyDatabase,
        'TGT Chemistry': tgtChemistryDatabase,
        'TGT Physics': tgtPhysicsDatabase,
        'PRT Computer': prtComputerDatabase,
        'TGT Computer': tgtComputerDatabase,
        'TGT Social Science': tgtSocialScienceDatabase,
        'PRT Marathi': prtMarathiDatabase,
        'TGT Marathi': tgtMarathiDatabase,
        'PRT Hindi': prtHindiDatabase,
        'TGT Hindi': tgtHindiDatabase
    };
    
    return databases[subjectPaper] || prtEnglishDatabase;
}
