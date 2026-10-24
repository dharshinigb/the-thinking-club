THE THINKING CLUB — AI QUIZ GAME
=================================
Files:
- index.html: website structure
- style.css: visual design and responsive layout
- script.js: quiz interactions, scoring, timer, hints, results
- questions.js: 50-question bank

RUN IN VS CODE
1. Extract the ZIP into a folder.
2. Open that folder in VS Code.
3. Recommended: install the "Live Server" extension.
4. Right-click index.html → Open with Live Server.
   You can also open index.html directly in Chrome.

PUBLISH WITH GITHUB PAGES
1. Create a public GitHub repository.
2. Upload all four files to the repository root.
3. Open Settings → Pages.
4. Choose "Deploy from a branch", select main and /(root), then Save.
5. Open the published URL shown in Settings → Pages.

NOTES
- Google Fonts load when you have internet access; fallback fonts are included.
- Recent scores are stored only in the same browser via localStorage.
- A shared leaderboard requires a backend/database; this version does not claim to provide one.
- Quick Play and Topic Quest select up to 10 questions; Brain Boss uses all questions matching the chosen difficulty.

QUESTION FORMAT CHECK
The 50-question bank includes:
- MCQs
- True/False
- Assertion–Reason
- Fill in the Blanks
- Match the Following
- Real-world scenario/application questions (at least 10)
- Search/state-space problem-solving questions (at least 5)
