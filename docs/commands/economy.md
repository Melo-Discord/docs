# Economy

Economy is Melo’s largest public command category. It covers wallet and bank balances, transfers, daily/weekly rewards, games, progression, and manager tools.

## Commands at a glance

| Command | What it does | Access |
|---|---|---|
| `/balance` | Shows a user’s wallet balance | Public |
| `/bank` | Opens or checks bank functionality | Public |
| `/daily` | Claims the daily reward | Public |
| `/weekly` | Claims the weekly reward | Public |
| `/work` | Earns currency through work | Public |
| `/give` | Gives money directly to another user | Public |
| `/transfer` | Transfers bank funds to another user | Public |
| `/leaderboard` | Shows the top users by wallet, bank, or total value | Public |
| `/profile` | Shows an economy profile | Public |
| `/quests` | Reviews quest progress | Public |
| `/wheel` | Spins the reward wheel | Public |
| `/blackjack` | Plays blackjack | Public |
| `/roulette` | Plays roulette | Public |
| `/slots` | Plays slots | Public |
| `/crime` | Attempts a crime action | Public |
| `/rob` | Attempts to rob another user | Public |
| `/business` | Manages or views business progress | Public |
| `/crypto` | Views crypto-related status | Public |
| `/add` | Adds currency to a wallet or bank | Managers / admins / owner / economy manager |
| `/take` | Removes currency from a wallet or bank | Managers / admins / owner / economy manager |

## Core wallet and bank flow

The basic loop is:

1. Check your balance with `/balance`.
2. Claim rewards with `/daily`, `/weekly`, or `/work`.
3. Move currency around with `/give` or `/transfer`.
4. Use `/bank` and `/profile` when you want a fuller view of the account.

### Important differences

- `/give` moves wallet currency between users.
- `/transfer` moves bank currency, and both users need bank accounts.
- `/add` and `/take` are administrative economy actions. They require one of: Manage Server, Administrator, server owner, or the configured economy manager role.

## Rewards and progression

`/daily` uses a 24-hour cooldown, and premium users can receive a bonus based on guild configuration.

```text
/daily
/weekly
/work
/quests
/wheel
```

## Games and risk

Melo includes both low-stakes and high-stakes ways to engage with the economy:

- `/blackjack`
- `/roulette`
- `/slots`
- `/crime`
- `/rob`
- `/business`
- `/crypto`

!!! note "Account safety"
    Commands that move money between users include safeguards like bot checks, self-target checks, and insufficient-funds checks.

## Leaderboards

Use `/leaderboard` to compare wallet, bank, or total wealth across the server.

```text
/leaderboard type:Wallet
/leaderboard type:bank
/leaderboard type:total
```

!!! tip "If you are setting up a new economy"
    Decide early whether your server should be casual or tightly controlled. Reward amounts and pacing are easier to tune before users build large balances.