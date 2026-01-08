# 🎓 PODAR INTERNATIONAL SCHOOL - ENHANCED RECRUITMENT SYSTEM
## Interview Drive - January 2026

---

## 🆕 COMPLETE SYSTEM SPECIFICATIONS

### **School Branding:**
- **School Name:** Podar International School
- **Event:** Interview Drive - January 2026
- **Logo:** Podar tree logo (purple/blue)

---

## 📋 NEW EXAM STRUCTURE

### **Total Test Duration:** 30 minutes
### **Total Marks:** 40 marks
### **Total Questions:** 40 questions (1 mark each)

---

## 📚 SECTION BREAKDOWN

### **TEACHER APTITUDE (Common for All)** - 20 marks

#### **Section 1: Basic English Knowledge** - 10 marks
- **Exam Questions:** 10
- **Question Database:** 20 questions
- **Selection:** Random 10 from 20

#### **Section 2: Computer Knowledge** - 5 marks
- **Exam Questions:** 5
- **Question Database:** 10 questions
- **Selection:** Random 5 from 10

#### **Section 3: Classroom Management** - 5 marks
- **Exam Questions:** 5
- **Question Database:** 10 questions
- **Selection:** Random 5 from 10

### **SUBJECT APTITUDE (Subject-Specific)** - 20 marks

#### **Difficulty-Based Selection:**

**Easy Level:** 4 questions
- Database: 10 questions
- Random selection: 4 from 10

**Moderate Level:** 8 questions
- Database: 15 questions
- Random selection: 8 from 15

**Difficult Level:** 8 questions
- Database: 15 questions
- Random selection: 8 from 15

**Total Subject Questions:** 20 (4 Easy + 8 Moderate + 8 Difficult)

---

## 🎯 SUBJECT PAPERS AVAILABLE

### **PRT Level (Primary Teacher):**
1. PRT English
2. PRT Maths
3. PRT EVS
4. PRT Computer
5. PRT Marathi
6. PRT Hindi

### **TGT Level (Trained Graduate Teacher):**
1. TGT English
2. TGT Maths
3. TGT Science
4. TGT Biology
5. TGT Chemistry
6. TGT Physics
7. TGT Computer
8. TGT Social Science
9. TGT Marathi
10. TGT Hindi

**Total Papers:** 16 different test papers

---

## 🔄 RANDOM QUESTION LOGIC

### **How It Works:**

1. **Teacher Aptitude Sections (Same for Everyone):**
   - System has 20 Basic English questions
   - Randomly picks 10 for each candidate
   - System has 10 Computer Knowledge questions
   - Randomly picks 5 for each candidate
   - System has 10 Classroom Management questions
   - Randomly picks 5 for each candidate

2. **Subject Aptitude (Different for Each Subject):**
   - Each subject has 40 questions total:
     - 10 Easy
     - 15 Moderate
     - 15 Difficult
   - System randomly selects:
     - 4 from Easy pool
     - 8 from Moderate pool
     - 8 from Difficult pool

3. **Result:**
   - Every candidate gets different questions
   - Even candidates taking same subject get different questions
   - Maintains fairness through random distribution

---

## 📊 UPDATED GOOGLE SHEET STRUCTURE

| Column | Data | Source |
|--------|------|--------|
| A | Timestamp | Registration |
| B | Token Number | Auto-generated |
| C | Candidate Name | Registration |
| D | Email | Registration |
| E | Phone | Registration |
| F | Qualification | Registration |
| G | Subject Applied | Registration |
| H | Test Level (PRT/TGT) | Registration |
| I | **Basic English Score** (/10) | Exam |
| J | **Computer Knowledge Score** (/5) | Exam |
| K | **Classroom Management Score** (/5) | Exam |
| L | **Subject Aptitude Score** (/20) | Exam |
| M | **Total Exam Score** (/40) | Auto-calculated |
| N | Language Quality (/5) | Demo Examiner |
| O | Subject Content (/5) | Demo Examiner |
| P | Presentation (/5) | Demo Examiner |
| Q | Confidence (/5) | Demo Examiner |
| R | Total Demo Score (/20) | Auto-calculated |
| S | Demo Remarks | Demo Examiner |
| T | **Grand Total** (/60) | Auto-calculated |
| U | Final Decision | Interview Panel |

---

## 🎯 UPDATED WORKFLOW

```
REGISTRATION
    ↓
Select Subject + Level (PRT/TGT)
    ↓
Get Token Number (e.g., PISL234)
    ↓
Write on paper + Screenshot
    ↓
ONLINE EXAM (30 min)
    ↓
Section 1: Basic English (10Q - random from 20)
Section 2: Computer Knowledge (5Q - random from 10)
Section 3: Classroom Management (5Q - random from 10)
Section 4: Subject Aptitude (20Q - 4 Easy, 8 Moderate, 8 Difficult)
    ↓
Submit (Scores saved, NOT shown to candidate)
    ↓
DEMO EXAMINATION
    ↓
Examiner grades 4 parameters (/20 total)
    ↓
INTERVIEW PANEL
    ↓
Reviews complete profile:
- Teacher Aptitude: /20
- Subject Aptitude: /20
- Demo Score: /20
- Total: /60
    ↓
HIRING DECISION
```

---

## 🔐 UPDATED PASSWORDS (Subject-Specific)

| Subject | Password | Access |
|---------|----------|--------|
| English (PRT/TGT) | ENG2026 | Both levels |
| Maths (PRT/TGT) | MATH2026 | Both levels |
| Science/EVS | SCI2026 | TGT Science, PRT EVS |
| Biology | BIO2026 | TGT only |
| Chemistry | CHEM2026 | TGT only |
| Physics | PHY2026 | TGT only |
| Computer (PRT/TGT) | COMP2026 | Both levels |
| Social Science | SOCIAL2026 | TGT only |
| Marathi (PRT/TGT) | MARATHI2026 | Both levels |
| Hindi (PRT/TGT) | HINDI2026 | Both levels |

---

## 💾 QUESTION DATABASE STRUCTURE

### **Teacher Aptitude Questions:**
```javascript
basicEnglishDatabase = [20 questions]; // Random 10 selected
computerKnowledgeDatabase = [10 questions]; // Random 5 selected
classroomManagementDatabase = [10 questions]; // Random 5 selected
```

### **Subject Aptitude Questions (Per Subject):**
```javascript
prtEnglish = {
    easy: [10 questions], // Random 4 selected
    moderate: [15 questions], // Random 8 selected
    difficult: [15 questions] // Random 8 selected
}

tgtEnglish = {
    easy: [10 questions], // Random 4 selected
    moderate: [15 questions], // Random 8 selected
    difficult: [15 questions] // Random 8 selected
}

// Same structure for all 16 papers
```

---

## 📱 UPDATED USER INTERFACE

### **Registration Portal:**
```
[PODAR LOGO]
PODAR INTERNATIONAL SCHOOL
Interview Drive - January 2026

Registration Form:
- Name
- Email
- Phone
- Qualification
- Subject Applying For: [Dropdown with all 16 options]
  * PRT English
  * PRT Maths
  * PRT EVS
  * PRT Computer
  * PRT Marathi
  * PRT Hindi
  * TGT English
  * TGT Maths
  * TGT Science
  * TGT Biology
  * TGT Chemistry
  * TGT Physics
  * TGT Computer
  * TGT Social Science
  * TGT Marathi
  * TGT Hindi

[Register Button]

↓ After submission ↓

YOUR TOKEN NUMBER
    PISL234

✍️ WRITE ON PAPER
📸 TAKE SCREENSHOT
```

### **Exam Portal:**
```
[PODAR LOGO]
PODAR INTERNATIONAL SCHOOL
Interview Drive - January 2026

Enter Token Number: [____]

↓ After verification ↓

Welcome, [Candidate Name]
Subject: [PRT/TGT English]

⏱️ Time Remaining: 30:00

SECTION 1: Basic English Knowledge (10 questions)
SECTION 2: Computer Knowledge (5 questions)
SECTION 3: Classroom Management (5 questions)
SECTION 4: [Subject] Aptitude (20 questions)

[Navigation showing 40 total questions]

[Submit Exam]

↓ After submission ↓

Thank You!
Your examination has been completed.
Proceed to Demo Hall.
```

---

## 🎨 BRANDING ELEMENTS

### **Colors:**
- Primary: Purple (#7B2D8E) - from logo
- Secondary: Blue (#0066B2) - from logo
- Accent: Gold (#D4AF37)
- Background: Light (#FAF8F5)

### **Logo Placement:**
- Top center on all pages
- Size: 120px height
- "Since 1927" tagline visible

### **Typography:**
- Headers: Crimson Pro (elegant serif)
- Body: DM Sans (clean sans-serif)
- Professional, educational look

---

## 🔧 TECHNICAL IMPLEMENTATION

### **Random Question Selection Algorithm:**
```javascript
function selectRandomQuestions(database, count) {
    const shuffled = database.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// For each exam:
const examQuestions = {
    basicEnglish: selectRandomQuestions(basicEnglishDB, 10),
    computerKnowledge: selectRandomQuestions(computerKnowledgeDB, 5),
    classroomManagement: selectRandomQuestions(classroomMgmtDB, 5),
    subjectEasy: selectRandomQuestions(subjectEasyDB, 4),
    subjectModerate: selectRandomQuestions(subjectModerateDB, 8),
    subjectDifficult: selectRandomQuestions(subjectDifficultDB, 8)
};
```

---

## 📊 SCORE CALCULATION

### **Exam Portal:**
```javascript
basicEnglishScore = correctAnswers / 10 * 10;
computerScore = correctAnswers / 5 * 5;
classroomScore = correctAnswers / 5 * 5;
subjectScore = correctAnswers / 20 * 20;
totalExamScore = basicEnglishScore + computerScore + classroomScore + subjectScore; // /40
```

### **Demo Portal:**
```javascript
demoScore = languageQuality + subjectContent + presentation + confidence; // /20
```

### **Grand Total:**
```javascript
grandTotal = totalExamScore + demoScore; // /60
```

---

## 📝 NEXT STEPS TO IMPLEMENT

1. **Create Enhanced Question Database** (40 questions per subject × 16 subjects = 640 questions)
2. **Update Registration Portal** with Podar branding and 16 subject options
3. **Update Exam Portal** with 4-section structure and random selection
4. **Update Google Apps Script** for new column structure
5. **Update Demo Portal** with new scoring
6. **Create All Documentation** with Podar branding

---

## ⚠️ IMPORTANT NOTES

- Random selection ensures exam integrity
- Same difficulty distribution for all candidates
- Teacher Aptitude common for all ensures baseline comparison
- Subject Aptitude tests specific knowledge
- Total assessment now /60 instead of /50

---

This enhanced system provides:
✅ Fair randomized testing
✅ Comprehensive aptitude assessment
✅ Subject-specific evaluation
✅ Professional Podar branding
✅ Scalable to 16 different papers
✅ Difficulty-based question distribution

Ready to implement! 🚀
