# Troubleshooting

This guide covers common setup and runtime issues in Melo.

## Commands are missing

If slash commands do not appear in Discord:

1. Confirm the bot was invited with the `applications.commands` scope.
2. Run `npm run register` in the bot repo if you are managing the deployment yourself.
3. Wait for Discord’s global command cache if you recently changed command definitions.

## The bot does not respond

Check the following in order:

- the bot token is configured correctly
- the bot is online in the server
- Melo has permission to view and send messages in the target channel
- the channel is not blocked by your server’s own moderation rules

## Setup is stuck or incomplete

Use the setup commands in this order:

```text
/setup status
/setup start roles:Yes
/setup reset
```

If the setup wizard created a partially configured state, reset it and start again from the server owner account.

## Logging looks empty

If `/logging status` shows disabled channels or event families, check:

- whether logging is enabled at all
- whether the correct channel family is selected
- whether Discord permissions allow Melo to post in the target channel

## Economy data looks wrong

The economy system depends on the database. If balances, rewards, or profiles look stale:

- confirm the database connection is healthy
- verify the economy tables exist
- retry the command after the database has finished syncing

## Temporary voice channels are not spawning

Confirm that:

- `/tempvc set-channel` was pointed at a voice channel
- the bot can manage channels in that category
- the spawn channel is still the intended one

!!! tip "When in doubt, start small"
    Most Melo issues are easier to diagnose when you test one command family at a time instead of changing setup, logging, moderation, and economy at once.