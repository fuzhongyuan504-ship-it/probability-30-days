# 30 Days of Probability

A free, self-contained website that teaches probability theory in 30 daily lessons — grounded in real examples from everyday life, work, and startups. No install, no backend, no account. Just open it and start Day 1.

![Dashboard screenshot](screenshot.png)

## Features

- **30 daily lessons** across 4 themed weeks: Foundations → Distributions & Patterns → Thinking Clearly → Work & Startups
- **Bilingual, switchable anytime** — every lesson, exercise, and UI label exists in both English and Chinese
- **Progress dashboard** — tracks completed lessons, day streak, and quiz accuracy, saved locally in your browser
- **Interactive exercises** after every lesson, with instant feedback and explanations
- **Zero setup** — pure HTML/CSS/JS, no build step, no dependencies, no server required

## How to use it

Just open `index.html` in any modern browser:

```bash
git clone https://github.com/fuzhongyuan504-ship-it/probability-30-days.git
cd probability-30-days
open index.html      # macOS
# or double-click index.html in Finder / Explorer
```

Your progress and language preference are saved automatically in the browser's local storage — close the tab and come back anytime.

## Project structure

```
index.html         Dashboard + lesson viewer shell
css/style.css       All styling (light/dark aware)
js/app.js           Rendering, progress tracking, quiz logic
js/i18n.js           English/Chinese UI strings
data/week1.js       Days 1-7:   Foundations
data/week2.js       Days 8-14:  Distributions & Patterns
data/week3.js       Days 15-21: Thinking Clearly
data/week4.js       Days 22-30: Work & Startups (capstone on Day 30)
```

## Curriculum overview

| Week | Days | Focus |
|---|---|---|
| 1 · Foundations | 1–7 | Probability basics, conditional probability, independence, Bayes' theorem |
| 2 · Distributions & Patterns | 8–14 | Random variables, expected value, variance, binomial/Poisson/normal distributions, Law of Large Numbers |
| 3 · Thinking Clearly | 15–21 | Correlation vs. causation, base rate fallacy, gambler's fallacy, risk & utility, confidence intervals, A/B testing |
| 4 · Work & Startups | 22–30 | Startup success estimation, decision trees, Bayesian updating in business, portfolio thinking, black swans, negotiation, capstone framework |

## Contributing / Making your own version

This repo's `main` branch is the maintained, original course, and it isn't open to direct edits — only the repo owner can push here. That's intentional: it keeps the original curriculum stable and predictable for anyone relying on it.

If you'd like to build on it, **fork the repo**. Forking gives you your own full copy to modify freely — translate it into another language, retarget it at a different subject, restructure the lessons, restyle the UI, whatever you like. It's the standard GitHub way to create your own version without touching the original.

A few ideas for forks:
- A version for a different subject (statistics, game theory, negotiation, etc.), reusing the same dashboard/quiz engine
- Additional language tracks beyond English/Chinese
- Extended or alternate exercise sets per lesson
- Visual/theme redesigns

If you build something you think improves the original in a small, focused way (a bug fix, a clearer explanation, an accessibility fix), feel free to open a pull request — it'll be reviewed and merged at the maintainer's discretion. For larger reinterpretations, a fork is the better home for it.

## License

MIT — see [LICENSE](LICENSE). Free to use, modify, fork, and share, including for commercial purposes, as long as the original copyright notice is retained.
