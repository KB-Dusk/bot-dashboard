// --- MOCK DATA ---
// simulates data that would come from a real Discord bot API
const botData = {
    stats: {
        servers: 3,
        users: 47,
        commandsRun: 312,
        warnings: 8
    },
    recentActivity: [
        { icon: '⚠️', text: '<strong>KB DUSK</strong> warned <strong>user123</strong> — spamming', time: '2m ago' },
        { icon: '💰', text: '<strong>Dusk_Dev</strong> claimed daily coins — balance: 450', time: '5m ago' },
        { icon: '🛒', text: '<strong>NightOwl</strong> bought <strong>VIP</strong> from the shop', time: '12m ago' },
        { icon: '🔨', text: '<strong>KB DUSK</strong> banned <strong>spammer99</strong> — raiding', time: '1h ago' },
        { icon: '💸', text: '<strong>Dusk_Dev</strong> sent 100 coins to <strong>NightOwl</strong>', time: '2h ago' },
        { icon: '✅', text: '<strong>NightOwl</strong> joined the server', time: '3h ago' },
    ],
    leaderboard: [
        { name: 'Dusk_Dev', coins: 1250 },
        { name: 'NightOwl', coins: 980 },
        { name: 'KB DUSK', coins: 750 },
        { name: 'CodeWizard', coins: 620 },
        { name: 'PixelKing', coins: 410 },
    ],
    warnings: [
        { user: 'user123', reason: 'spamming', count: 2, date: '23 Aug 2026' },
        { user: 'spammer99', reason: 'raiding', count: 5, date: '23 Aug 2026' },
        { user: 'troll44', reason: 'harassment', count: 1, date: '22 Aug 2026' },
        { user: 'bad_actor', reason: 'NSFW content', count: 3, date: '21 Aug 2026' },
    ],
    commands: [
        { name: '!warn', desc: 'Issues a warning to a user and saves it to the database', usage: '!warn @user reason', category: 'moderation' },
        { name: '!ban', desc: 'Permanently bans a user from the server', usage: '!ban @user reason', category: 'moderation' },
        { name: '!kick', desc: 'Kicks a user from the server', usage: '!kick @user reason', category: 'moderation' },
        { name: '!clear', desc: 'Deletes a specified number of messages', usage: '!clear amount', category: 'moderation' },
        { name: '!warnings', desc: 'Displays all warnings for a user', usage: '!warnings @user', category: 'moderation' },
        { name: '!clearwarnings', desc: 'Clears all warnings for a user', usage: '!clearwarnings @user', category: 'moderation' },
        { name: '!daily', desc: 'Claim 100 coins once every 24 hours', usage: '!daily', category: 'economy' },
        { name: '!balance', desc: 'Check your coin balance', usage: '!balance', category: 'economy' },
        { name: '!pay', desc: 'Transfer coins to another user', usage: '!pay @user amount', category: 'economy' },
        { name: '!shop', desc: 'View items available to buy', usage: '!shop', category: 'economy' },
        { name: '!buy', desc: 'Purchase an item from the shop', usage: '!buy itemname', category: 'economy' },
        { name: '!leaderboard', desc: 'Shows the top 10 richest users', usage: '!leaderboard', category: 'economy' },
    ],
    shop: [
        { name: 'VIP', price: 100, description: 'Special VIP role for top members' },
        { name: 'Custom Role', price: 500, description: 'Pick your own role colour' },
        { name: 'Nickname Change', price: 50, description: 'Change your server nickname' },
    ]
};

// --- PAGE TEMPLATES ---

function overviewPage() {
    return `
        <div class="stats-grid">
            <div class="stat-card">
                <span class="stat-icon">🖥️</span>
                <div class="stat-value">${botData.stats.servers}</div>
                <div class="stat-label">servers</div>
            </div>
            <div class="stat-card">
                <span class="stat-icon">👥</span>
                <div class="stat-value">${botData.stats.users}</div>
                <div class="stat-label">total users</div>
            </div>
            <div class="stat-card">
                <span class="stat-icon">⚡</span>
                <div class="stat-value">${botData.stats.commandsRun}</div>
                <div class="stat-label">commands run</div>
            </div>
            <div class="stat-card">
                <span class="stat-icon">⚠️</span>
                <div class="stat-value">${botData.stats.warnings}</div>
                <div class="stat-label">active warnings</div>
            </div>
        </div>

        <div class="two-col">
            <div>
                <p class="section-title">// recent activity</p>
                <div class="table-container">
                    ${botData.recentActivity.map(item => `
                        <div class="activity-item">
                            <span class="activity-icon">${item.icon}</span>
                            <span class="activity-text">${item.text}</span>
                            <span class="activity-time">${item.time}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div>
                <p class="section-title">// coin leaderboard</p>
                <div class="table-container">
                    ${botData.leaderboard.map((entry, i) => `
                        <div class="leaderboard-item">
                            <span class="rank">#${i + 1}</span>
                            <span class="lb-name">${entry.name}</span>
                            <span class="lb-coins">🪙 ${entry.coins}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function commandsPage() {
    return `
        <p class="section-title">// all commands (${botData.commands.length} total)</p>
        <div class="commands-grid">
            ${botData.commands.map(cmd => `
                <div class="command-card">
                    <div class="command-name">${cmd.name}</div>
                    <div class="command-desc">${cmd.desc}</div>
                    <span class="command-usage">${cmd.usage}</span>
                    <span class="badge ${cmd.category === 'moderation' ? 'badge-pink' : 'badge-orange'}" style="margin-left: 0.5rem">
                        ${cmd.category}
                    </span>
                </div>
            `).join('')}
        </div>
    `;
}

function economyPage() {
    return `
        <div class="two-col">
            <div>
                <p class="section-title">// coin leaderboard</p>
                <div class="table-container">
                    ${botData.leaderboard.map((entry, i) => `
                        <div class="leaderboard-item">
                            <span class="rank">#${i + 1}</span>
                            <span class="lb-name">${entry.name}</span>
                            <span class="lb-coins">🪙 ${entry.coins}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div>
                <p class="section-title">// shop items</p>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>item</th>
                                <th>price</th>
                                <th>description</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${botData.shop.map(item => `
                                <tr>
                                    <td><strong style="color:#ffffff">${item.name}</strong></td>
                                    <td><span class="badge badge-orange">🪙 ${item.price}</span></td>
                                    <td>${item.description}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function moderationPage() {
    return `
        <p class="section-title">// warning log</p>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>user</th>
                        <th>reason</th>
                        <th>warnings</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                    ${botData.warnings.map(w => `
                        <tr>
                            <td><strong style="color:#ffffff">${w.user}</strong></td>
                            <td>${w.reason}</td>
                            <td>
                                <span class="badge ${w.count >= 3 ? 'badge-pink' : 'badge-purple'}">
                                    ${w.count} warning${w.count !== 1 ? 's' : ''}
                                </span>
                            </td>
                            <td>${w.date}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// --- NAVIGATION ---

const pages = {
    overview: { title: '// overview', subtitle: 'bot performance at a glance', render: overviewPage },
    commands: { title: '// commands', subtitle: 'all available bot commands', render: commandsPage },
    economy: { title: '// economy', subtitle: 'coins, shop and leaderboard', render: economyPage },
    moderation: { title: '// moderation', subtitle: 'warnings and mod log', render: moderationPage },
};

function navigate(pageName) {
    const page = pages[pageName];
    if (!page) return;

    // updates header
    document.getElementById('page-title').textContent = page.title;
    document.getElementById('page-subtitle').textContent = page.subtitle;

    // updates content
    document.getElementById('content').innerHTML = page.render();

    // updates active nav item
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-page') === pageName) {
            btn.classList.add('active');
        }
    });
}

// --- EVENT LISTENERS ---

document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
        navigate(btn.getAttribute('data-page'));
    });
});

// --- INIT ---
navigate('overview');