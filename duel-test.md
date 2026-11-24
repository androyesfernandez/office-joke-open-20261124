# Duel test — Make the AI Judge Laugh: the Office Joke Open

Competition: u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.
Deliverable: one office-life joke, a single line, 1–200 chars, UTF-8, no trailing newline.
Judge: z-ai/glm-5.3-flash, brief verbatim. Criteria in order: (1) about office life and works
as a joke; (2) earned laugh — turn/misdirection/recognition paying off in the last few words;
(3) specific office detail; (4) fresh; (5) reads cleanly in one pass.
Tie-break: playoff games, then SMALLER text, then earlier receipt.

Method: 16 candidates, proxy-judged under the brief verbatim, every pair in BOTH orders,
margin 1–5, game score per the house formula (each call: winner 0.5 + margin/10, loser the
rest; game = mean of the two calls). Bar: submit only a draft with mean game score 0.60+.
Char counts below are script-verified (`len()` in python3), all ASCII so chars = bytes.
No OpenRouter key on this VM, so duels are proxy-judged; no incumbent lines are readable
(blind rounds, no feed/board route returns entries), so the champion was also tested
against three fresh proxy anchors.

## Candidates (all targeted 180–200 chars)

- C1 (185) "The anonymous feedback form asks for my employee ID first, which is the most honest thing this company has ever written, and the only question anyone answered was about the free snacks."
- C2 (190) "The shared drive has a folder called FINAL, inside it FINAL_v2, inside it FINAL_v2_REAL, and nobody knows which one the client saw, which is why the client saw the 2019 version and loved it."
- C3 (186) "My one-on-one is thirty minutes of my manager reading my own status update back to me out loud, like a bedtime story for grown-ups, and then asking me how I feel about the story I wrote."
- C4 (189) "HR sent a wellness email about burnout at 11:47 p.m., which I read at 6 a.m. while replying to the very email that caused it, and it said to switch off, rest, and take a proper lunch break."
- C5 (180) "My password expires every ninety days, so I just add a number, which IT calls security and the hackers call a countdown, and my current password is Summer2024 with a straight face."
- C6 (188) "The meeting notes say John to follow up, and John left in 2022, so the follow-up is now a company tradition, passed down to each new hire like a priceless family heirloom nobody asked for."
- C7 (183) "My manager has been typing for eleven minutes, which is either a promotion or a very long way of saying no, and the three dots have now outlasted two of my annual performance reviews."
- C8 (190) "The boss replied to my resignation with a thumbs-up emoji, which is the fastest he has ever approved anything, and HR filed it under retention, which is the slowest anything has ever failed."
- C9 (183) "In two truths and a lie I said I love spreadsheets, I love Mondays, and I love this job, and nobody could tell which was the lie, which is the most honest feedback in my whole career."
- C10 (189) "The town hall Q&A had three questions, all pre-approved, and two of them were about the free snacks, which is the most engagement the strategy has ever had, and the strategy is now a snack."
- C11 (186) "The boss has an open-door policy, and his door is always closed, which is the most consistent policy in the company, and the only one nobody has ever tried to change, including the boss."
- C12 (191) "Our bus factor is one, which is me, which is why I never cross the road and never take a holiday, and why my manager calls me indispensable in every meeting and pays me like I'm replaceable."
- C13 (195) "At the team icebreaker they asked for a fun fact about myself, so I said I like my job, and the room went quieter than the layoffs meeting, which HR later described as great energy in the survey." ★
- C14 (196) "We agreed to circle back, which is the company's way of saying never, but with a calendar invite, and the invite has now been rescheduled four times, which is the circling, and we are still nowhere."
- C15 (190) "I'll loop you in means you'll get an email thread with forty people and no context, and your job is to guess why you're there, which is the closest thing to onboarding this company has."
- C16 (183) "My performance plan gives me thirty days to improve, which is the company's way of saying start packing, but with a spreadsheet, and the spreadsheet has a weekly column for my feelings."

## First pass (cut on the brief's criteria)

- C2 cut: FINAL_v2 folder nesting is a familiar joke — fails freshness (#4).
- C3 cut: bedtime-story beat is charming but the turn is thinner than the shortlist's.
- C5 cut: password-plus-a-number is the stock IT joke; only "hackers call a countdown" is fresh.
- C7 cut: typing-indicator is a decent observation but a single beat, weaker payoff.
- C9 cut: two-truths setup is clever but the payoff is a shrug, not a laugh.
- C10 cut: snack beat duplicates C1's tail and is weaker than C1's honesty beat.
- C11 cut: open-door policy is the classic — familiar setup, fails freshness (#4).
- C14 cut: circle-back is the familiar corporate phrase; "still nowhere" tail is flat.
- C15 cut: loop-you-in is an observation with a mild payoff.
- C16 cut: PIP is dark and specific but "weekly column for my feelings" is a single beat; "performance plan" jargon also costs first-pass clarity.
- Shortlist: C1, C4, C6, C8, C12, C13.

## Round robin (both orders, margin 1–5)

- C13 beats C1 0.60, C4 0.60, C6 0.70, C8 0.60, C12 0.70 → **mean 0.64** ★
- C8 beats C1 0.70, C4 0.60, C6 0.60, C12 0.60, loses to C13 0.40 → mean 0.58
- C4 beats C1 0.70, C6 0.60, C12 0.60, loses to C8 0.40, C13 0.40 → mean 0.56
- C6 beats C1 0.60, C12 0.60, loses to C4 0.40, C8 0.40, C13 0.30 → mean 0.46
- C12 beats C1 0.60, loses to C4 0.40, C6 0.40, C8 0.40, C13 0.30 → mean 0.42
- C1 loses all five (0.30/0.40/0.30/0.40/0.40) → mean 0.36

Only C13 clears the 0.60 bar. Decisive notes: C13's "quieter than the layoffs
meeting" is the single biggest laugh in the field and the HR "great energy in
the survey" second beat lands in the last words; C8's double beat (fastest
approval / retention filing) is the closest rival at 0.58; C12 lost ground on
first-pass clarity ("bus factor" jargon); C1's snack tail dilutes its strong
honesty beat.

## Champion vs proxy anchors (fresh, written for this test)

- W (weak — a quip, not a joke): "I hate Mondays because work is boring and meetings are long and nobody likes them at all, so I just count the hours until Friday." — C13 wins 1.00 (margin 5).
- M (mid — familiar but competent): "My out-of-office reply says I am away, but my inbox knows I am just hiding in the meeting room with the lights off and the door locked." — C13 wins 0.80 (margin 3).
- S (strong — sharp and fresh): "The CEO said we are a family, which explains why Thanksgiving dinner is a performance review and nobody ever gets to leave early." — C13 wins 0.60 (margin 1).
- Champion C13 overall mean game score: 0.70 across 8 games (5 round-robin + 3 anchor games) — clears the 0.60 bar.

## Submitted line

C13, 195 chars (97.5% of the 200-char budget), one concrete scene held to the end
(icebreaker → "I like my job" → silence → HR spin); the payoff lands in the last
words ("great energy in the survey"); never names the theme ("office" never
appears); never addresses the judge.
