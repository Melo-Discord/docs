# Config

The Config category covers setup, language, server settings, and backup/restore. Use this category when adding Melo to a new server or recovering from config mistakes.

## Commands

| Command | What it does | Access |
|---|---|---|
| `/setup` | Runs the onboarding wizard | Server owner only |
| `/settings` | Opens the interactive settings panel | Administrators / authorised users |
| `/language` | Changes the server locale | Server managers |
| `/config` | Creates, lists, or restores config snapshots | Server managers |

## `/setup`

The setup wizard creates the guild record, tracks onboarding progress, and can optionally create a recommended role template.

```text
/setup start roles:Yes
/setup status
/setup reset
```

### Role template

If you choose `roles:Yes`, Melo can create:

- Manager
- Admin
- Moderator

Those roles are then saved into the guild settings so later moderation and setup tooling can reference them.

## `/settings`

`/settings` opens an interactive panel with configuration groups for:

- modules
- permissions

The panel is designed for admins or explicitly authorised roles and users. It is ephemeral, so it stays out of public channels.

## `/language`

`/language` switches the guild locale using one of the supported language choices.

```text
/language locale:en
/language locale:de
```

## `/config`

The config command works with snapshots. You can save and restore your server's core configuration state.

### What gets captured

- Locale and timezone
- Manager, admin, and moderator role IDs
- Automod status
- Premium flags
- Logging channels
- Temporary voice channel settings

### Usage examples

```text
/config backup
/config list
/config restore index:1
```

!!! warning "Restores overwrite live configuration"
    Restoring a snapshot updates the live guild record. Treat it as a recovery tool, not a casual toggle.