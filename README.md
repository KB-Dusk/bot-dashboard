# Dusk Bot Dashboard

A JavaScript dashboard for the Dusk Discord bot suite. Displays bot stats, command reference, economy leaderboard, shop items and moderation logs. Built with vanilla HTML, CSS and JavaScript using mock data simulating a real bot API. Built as part of a freelance portfolio.

## Features
- Multi-page dashboard with sidebar navigation
- Overview page with stats, activity feed and coin leaderboard
- Commands page listing all bot commands with usage and category
- Economy page with leaderboard and shop items
- Moderation page with warning log and severity badges
- Dusk gradient theme matching portfolio and To-Do app
- Fully responsive sidebar layout

## Tech Stack
- HTML5
- CSS3 (Flexbox, Grid, CSS variables, animations)
- JavaScript (DOM manipulation, template literals, array methods)
- Google Fonts (Fira Code, Inter)

## Pages
| Page | Description |
|---|---|
| Overview | Stats cards, recent activity feed, coin leaderboard |
| Commands | All 12 bot commands with usage and category badges |
| Economy | Coin leaderboard and shop items table |
| Moderation | Warning log with severity colour coding |

## Setup

1. Clone the repository:
   git clone https://github.com/KB-Dusk/bot-dashboard.git

2. Navigate into the folder:
   cd bot-dashboard

3. Open in browser:
   open index.html

   Or serve locally:
   python3 -m http.server 8000

## Notes
- Uses mock data to simulate a real Discord bot API
- No frameworks or libraries — pure vanilla JavaScript
- Data structure mirrors what a real Flask API connected to discord.py would return
- Built as the frontend companion to the Dusk Discord Bots project