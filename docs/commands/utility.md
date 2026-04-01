# Utility

Utility commands are the general-purpose tools most people use first. They cover bot status, member lookups, permission checks, embeds, invites, and more.

## Commands

| Command | What it does | Access |
|---|---|---|
| `/avatar` | Shows a user’s avatar | Public |
| `/embed` | Builds or sends a custom embed | Administrators |
| `/emoji` | Inspects or copies an emoji | Public |
| `/help` | Browses commands or looks up one command | Public |
| `/info` | Shows bot information | Public |
| `/invite` | Displays the bot invite link | Public |
| `/membercount` | Shows member counts | Public |
| `/permissions` | Simulates whether a user or role can run a command | Managers |
| `/ping` | Checks latency | Public |
| `/server` | Shows server information | Public |
| `/support` | Displays support links | Public |
| `/uptime` | Shows bot uptime | Public |
| `/whois` | Shows a member profile | Public |

## Recommended first commands

If you are new to Melo, start with these:

1. `/help` to browse the command tree.
2. `/ping` to confirm the bot is responsive.
3. `/info` to confirm the bot version and uptime.
4. `/server` to inspect the guild overview.

## Member lookups

`/whois` and `/avatar` are useful for moderation reviews and identity checks.

```text
/whois user:@member
/avatar
```

`/avatar` currently returns your own avatar.

### `/whois` highlights

- joined server and Discord dates
- reputation counters
- roles
- badges and notable flags
- key permissions

## Diagnostics

`/permissions` is especially useful when a command seems missing or gated. It can simulate whether a user or role would pass Melo’s access checks for a specific command.

```text
/permissions check command:ban user:@moderator
/permissions check command:logging role:@Admins
```

## Sharing and support

- `/invite` returns the bot invite link.
- `/support` returns the support server link.
- `/embed` helps you produce structured announcements or rich messages.

!!! tip "Use /help early"
    `/help` is the quickest way to confirm Melo loaded correctly after setup or deployment.