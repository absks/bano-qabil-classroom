# Bano Qabil Digital Skills Classroom

Six independent courses adapted from the supplied Bano Qabil outlines. Each course has eight weekly sessions, seven slides per session, worked examples, a lab, trainer notes, official reference links, a five-question weekly quiz, an eight-question final test, and a capstone. The syllabus map links each teaching week to its original outline weeks. Scores are saved in the current browser under separate course and week keys.

## Open locally

Open `index.html` in a browser, or run `python -m http.server 8000` and visit http://localhost:8000. No API keys, dependencies, or accounts are needed. Quiz keys are present in the client so the assessments are intended for practice and classroom self-checks.

## Edit and deploy

Edit `bq001.txt`, `bq005.txt`, `bq006.txt`, `bq007.txt`, `bq023.txt`, or `bq024.txt` and `references.txt`. Run `python build.py` and commit the regenerated course JavaScript along with the text source. The builder validates all 48 weeks, their source coverage, and the assessment counts. The correct answer is the first option in each source question. The builder rotates displayed positions.

The repository's `vercel.json` stages the static browser assets without installing dependencies.

## Teacher Studio upgrade

Each of the 48 weekly sessions now includes a word-for-word teacher script with 14 timed teaching stages, everyday explanations, model answers, lab coaching, quiz discussion, and homework. Open a week and choose **Teacher guide**. Download the plain-text guide or use **Print / Save PDF**. The Presentation tab also exposes the script for the current slide.

Presentations use six subject colour themes, three-part lesson visuals, separate idea/application cards, classroom example panels, and slide progress indicators. Keyboard navigation and presentation mode remain available.

Edit `teaching.json` for each lesson's main idea, everyday explanation, three-part visual, and misconception. `teaching.py` builds the rehearsal scripts from these additions and the subject-specific content in `bq*.txt`. Run `python build.py` and commit the generated `bq*.js` files. Vercel serves these committed generated assets without requiring Python during deployment.

Live classroom: https://bano-qabil-classroom.vercel.app/
