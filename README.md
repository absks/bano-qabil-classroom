# Bano Qabil Digital Skills Classroom

An eight-lecture teaching intensive adapted from six Bano Qabil outlines. Each lecture has seven browser slides, examples, a practical lab, instructor preparation notes, an eight-question quiz and documentation links. The course includes a separate 16-question final test, a capstone, and a roadmap to all six source outlines.

## Open locally

Open `index.html` in a browser. For a local HTTP preview, run:

```sh
python -m http.server 8000 --directory .
```

Then open http://localhost:8000. No API keys, dependencies, or accounts are needed. Quiz best scores are saved on the current browser. The teacher notes and quiz keys are visible in the site source and the teacher tab, so the quizzes are suitable for practice rather than secure graded exams.

## Edit course content

Edit the plain-text files named `01-04.txt`, `05-08.txt`, `final.txt`, and `roadmap.txt` and run `python build.py` with Python 3.9 or later. Commit the generated `course.js` along with the source edit. Mark exactly one answer per MCQ with an asterisk before the option. The site needs only the five web assets copied by the Vercel build command.

## Deploy on Vercel

Import this GitHub repository. Select the Other framework preset if prompted. The committed `vercel.json` copies the five web assets into the deployment directory without installing any dependencies. Connect the `main` branch for future deployments.
