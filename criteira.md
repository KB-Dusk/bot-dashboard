# Project Criteria — Bot Dashboard

## Overview
Build a multi-page browser dashboard for the Dusk Discord bot suite using vanilla HTML, CSS and JavaScript, displaying stats, commands, economy data and moderation logs via mock data.

## Core Requirements

| Requirement | Status |
|---|---|
| Build a multi-page dashboard using only vanilla HTML, CSS and JavaScript | ✅ Met |
| Implement a sidebar with navigation between four pages | ✅ Met |
| Display bot stats (servers, users, commands run, warnings) on the overview page | ✅ Met |
| Show a recent activity feed on the overview page | ✅ Met |
| Show a coin leaderboard on the overview page | ✅ Met |
| List all bot commands with usage syntax and category badges on the commands page | ✅ Met |
| Show economy leaderboard and shop items on the economy page | ✅ Met |
| Show a warning log with severity colour coding on the moderation page | ✅ Met |
| Match the dusk gradient theme from the portfolio and To-Do app | ✅ Met |
| Push to GitHub with a professional README | ✅ Met |

## Success Scenario
Opening the dashboard loads the overview page with all four stat cards, the activity feed and leaderboard visible. Clicking each sidebar nav item switches the page content and updates the header title. All 12 commands display correctly on the commands page. Warning severity is colour coded correctly on the moderation page.

## Evaluation
- **Navigation:** All four pages render correctly with no errors
- **Data display:** Mock data renders accurately across all pages
- **Design:** Consistent dusk gradient theme across all pages
- **Code quality:** Each page is a separate function returning HTML, keeping logic clean
