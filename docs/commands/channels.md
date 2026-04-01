# Channels

The Channels category helps you control message pace and temporary voice access. These commands are usually used by moderators or admins.

## Commands

| Command | What it does | Access |
|---|---|---|
| `/slowmode` | Sets slowmode in the current channel or a target channel | Moderators |
| `/tempvc` | Registers a voice channel as a temporary voice spawn point | Administrators |

## `/slowmode`

`/slowmode` accepts a duration such as `5s`, `5m`, `5h`, or `5d`. You can also disable slowmode with `0` or `off`.

```text
/slowmode time:5m
/slowmode time:0
/slowmode time:10s channel:#announcements
```

### Good uses

- Slow down fast-moving announcement channels.
- Cool off heated discussion without locking a channel.
- Apply temporary rate limits during events or raids.

## `/tempvc`

`/tempvc set-channel` stores the voice channel that users should join to create temporary voice channels.

```text
/tempvc set-channel channel:#join-to-create
```

### Good uses

- Create self-serve voice rooms for gaming or events.
- Keep your channel list tidy by removing empty temporary rooms automatically.

!!! tip "Practical advice"
    Temporary voice channels work best when the spawn channel is easy to find, with a clear name like Join to Create.