# Logging

Melo's logging system uses one public command to control whether logging is enabled, where logs are sent, and which event families are active.

## Command

| Command | What it does | Access |
|---|---|---|
| `/logging` | Configures the audit logging system | Administrators |

## Subcommands

| Subcommand | What it does |
|---|---|
| `enable` | Turns logging on for the server |
| `disable` | Turns logging off for the server |
| `setchannel` | Chooses the log channel and log family |
| `toggle` | Enables or disables an event type |
| `status` | Shows the current logging configuration |

## Channels

`/logging setchannel` supports these families:

- main
- messages
- members
- voice
- roles
- channels
- moderation

```text
/logging setchannel channel:#audit-logs type:main
/logging setchannel channel:#member-logs type:members
/logging setchannel channel:#mod-logs type:moderation
```

## Events

The command can toggle individual event types for message, member, voice, and moderation activity.

### Message events

- message delete
- message edit
- message bulk delete

### Member events

- member join
- member leave
- member ban
- member unban
- member roles
- member nickname

### Voice events

- voice join
- voice leave
- voice switch

### Moderation events

- mod ban
- mod kick
- mod mute
- mod unmute
- mod warn
- mod unban

## Best practice

Keep one main logging channel and only split out the families you actually need. That keeps the audit trail readable and prevents low-value logs from burying important events.

!!! tip "Start with status"
    If logging feels confusing, open with `/logging status` first. It shows what is currently enabled before you change anything.