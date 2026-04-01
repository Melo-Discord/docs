# Moderation

The Moderation category covers enforcement actions, case tracking, automod setup, and nickname control.

## Commands

| Command | What it does | Access |
|---|---|---|
| `/automod` | Creates native Discord AutoMod rules | Administrators |
| `/ban` | Bans a user, optionally for a duration | Moderators |
| `/case` | Inspects a moderation case | Moderators |
| `/history` | Views a member’s moderation history | Moderators |
| `/kick` | Kicks a member | Moderators |
| `/mute` | Times out a member | Moderators |
| `/setnick` | Changes a member’s nickname | Moderators |
| `/unban` | Removes a ban | Moderators |
| `/unmute` | Removes a timeout | Moderators |
| `/warn` | Issues a warning | Moderators |

## Ban and timeout flow

`/ban` supports a duration, so you can use it for temporary or permanent enforcement.

```text
/ban user:@user reason:Spam duration:1d
/ban user:@user reason:Severe violation confirm_permanent:true
/mute user:@user duration:30m reason:Cooldown
```

### Important details

- Permanent bans require explicit confirmation.
- Time-based bans accept compact durations such as `1d`, `2h`, or `30m`.
- The bot checks that it can actually act on the target before executing the action.

## Warnings and case tracking

`/warn` creates a moderation case and pushes the action into the logging pipeline when configured.

Use `/case` and `/history` when you need context on what happened before.

## AutoMod

`/automod` creates Discord native AutoMod rules for:

- flagged words
- invite links
- spam
- mention spam
- custom keywords

### What to know

- Flagged-word rules can use the Discord preset list.
- Mention spam requires a threshold.
- Invite and keyword rules are capped by Discord’s rule limits.

## Moderation philosophy

Melo moderation works best when your team follows a consistent flow:

1. Warn first where possible.
2. Escalate to timeouts or bans when needed.
3. Log the reason every time.
4. Review cases later through `/case` or `/history`.

!!! warning "Use the minimum force that solves the problem"
    The bot supports strong enforcement actions, but the cleanest moderation history comes from using the lightest action that still protects the server.