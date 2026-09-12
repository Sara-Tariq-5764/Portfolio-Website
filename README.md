# Sara Tariq — Portfolio Site

Static multi-page portfolio. No build step, no framework, no dependencies.
Open `index.html` in a browser and it runs.

---

## File tree

```
04_PORTFOLIO_SITE/
├── index.html                  Landing page — hero, snapshot, profile, projects, experience, education, contact
├── projects.html               Filterable project lab + case-study modals
├── resume.html                 Embedded PDF viewer + download
├── styles.css                  Design system (tokens → components → responsive → print)
├── script.js                   Particles, counters, reveal, nav, filters, modal, fit-text, PROJECT DATA
├── favicon.svg                 ST monogram
├── assets/
│   ├── SaraTariq_Resume.pdf                        ← every Resume CTA points here
│   ├── Loreal_AI_Chatbot_Explanation_Report.pdf    ← opened by the L'Oréal card
│   ├── Slice_Slice_Baby_Fix_Chatbot_Report.pdf     ← opened by the Slice Slice Baby card
│   ├── headshot.jpg            ← NOT PRESENT YET (see below)
│   └── project-*.jpg           ← poster art, 1280×720, one per project
├── archive/                    NOT DEPLOYED — originals and superseded work
│   ├── source-images/          full-resolution AI images (~1.8 MB each)
│   ├── posters-svg/            earlier generated SVG posters + generator
│   └── v1-plansheet.html       first single-page design
