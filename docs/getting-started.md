# Getting Started

This guide shows how to invite Melo, give the right permissions, and finish first-time setup.

## 1. Invite Melo

Use Discord’s OAuth2 URL generator in the [Developer Portal](https://discord.com/developers/applications) to create an invite for Melo’s bot application.

Invite links should include these scopes:

- `bot`
- `applications.commands`

!!! tip
    Melo is slash-command only, so the invite link only needs the `bot` and `applications.commands` scopes.

=== "Invite checklist"
    - Create or open the bot application in Discord’s Developer Portal.
    - Generate an OAuth2 URL with the correct scopes.
    - Give the bot only the permissions your server actually needs.
    - Add Melo to a test server first if you want to validate setup before rolling it out widely.

=== "Recommended permissions"
    | Permission | Why it matters |
    |---|---|
    | View Channels | Lets Melo see the channels where commands are used |
    | Send Messages | Lets Melo respond to slash commands |
    | Embed Links | Renders rich responses correctly |
    | Read Message History | Helps with moderation, logging, and context-sensitive commands |
    | Manage Messages | Needed for cleanup and moderation actions |
    | Moderate Members | Required for timeouts and related moderation actions |
    | Kick Members / Ban Members | Required for enforcement commands |
    | Manage Roles | Needed if you want the setup wizard to create role templates |

## 2. Configure the Bot

Once Melo is in your server, run the setup wizard in a server where you have the required permissions. The `/setup` command is owner-only:

```
/setup start roles:Yes
/setup status
/setup reset
```

`/setup start` creates the guild record and can optionally create manager, admin, and moderator roles for your server.

`roles:Yes` creates the recommended role set. Choose `roles:No` if you want to manage roles yourself.

`/setup status` shows the current onboarding progress, and `/setup reset` clears the saved progress so you can start over.

!!! warning "First-run behavior"
    The wizard writes the guild record to the database as it progresses. If you reset the setup, you are only clearing the onboarding state, not deleting every other server setting.

### What the wizard creates

The setup flow can create a recommended role template for:

- Manager
- Admin
- Moderator

It also records onboarding progress so `/setup status` can tell you exactly where the server is in the process.

## 3. Verify Everything Works

Run `/ping` to confirm Melo is online and responding:

```
/ping
```

You should see a response like:

> 🏓 Pong! Latency: **42 ms**

---

## Next Steps

- Browse the **[Command Reference](commands/index.md)** to see every public command category.
- Join the **[Support Server](https://discord.gg/QwVTNzHSDY)** if you need help.
- Read the **[Permissions Guide](guides/permissions.md)** if you want to understand who can use each command family.
