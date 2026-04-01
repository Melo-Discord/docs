# Permissions Guide

Melo does not use one flat permission model. Access depends on command type, your guild role setup, and Discord permissions.

## Main access layers

| Layer | What it means |
|---|---|
| Server owner | Highest access level for setup and server-wide configuration |
| Server manager | Used by many configuration and economy-admin actions |
| Server admin | Used for settings, logging, automod, and strong moderation actions |
| Server moderator | Used for routine moderation commands |
| Authorised settings roles and users | Explicitly allowed to open `/settings` |

## Common examples

- `/setup` is owner-only.
- `/settings` checks for administrator access, server ownership, authorised roles, or authorised users.
- `/logging` is for administrators.
- Moderation commands use the moderator layer.
- Economy admin commands like `/add` and `/take` are limited to economy managers, server managers, admins, or owners.

## How to check access

Use the permissions simulator when you are not sure why something is unavailable.

```text
/permissions check command:ban user:@Moderator
/permissions check command:logging role:@Admins
```

### What the simulator shows

- which access checks passed
- which access checks failed
- whether the command is runnable for the selected user or role

## Configuring settings access

The settings panel can be opened by administrators, the server owner, authorised roles, or authorised users. That lets you delegate configuration work without handing over the entire server.

!!! note "Keep access intentional"
    A clean setup is usually one moderation role, one configuration role, and one or two trusted users for `/settings` instead of giving everyone admin.