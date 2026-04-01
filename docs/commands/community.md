# Community

Community commands help you drive activity with polls, giveaways, and thanks posts.

## Commands

| Command | What it does | Access |
|---|---|---|
| `/poll` | Creates and manages polls | Public |
| `/giveaway` | Starts, ends, or rerolls giveaways | Moderators / admins |
| `/thanks` | Sends reputation-based thanks to another member | Public |

## Polls

`/poll` supports two formats:

- `create` for multi-option polls with up to five choices
- `yesno` for a simple yes/no choice

Useful options include:

- `duration` for scheduled endings such as `30m`, `1h`, or `1d`
- `anonymous` to hide voter identities
- `multi_select` to allow more than one answer
- `thread` to create a discussion thread beside the poll

```text
/poll create question:Best game night? option1:Valorant option2:Minecraft option3:Jackbox duration:1d thread:true
/poll yesno question:Should we run an event tonight? duration:6h anonymous:true
```

### Results and endings

- `/poll results message_id:<id>` shows live results privately.
- `/poll end message_id:<id>` ends a poll early and displays the final outcome.
- The original poll creator or a moderator can end a live poll.

!!! note "Premium duration caps"
    Poll duration limits depend on whether the server has Melo Premium enabled. Free servers have shorter caps than premium servers.

## Giveaways

`/giveaway start` creates a reaction-based giveaway and records the end time.

```text
/giveaway start prize:Nitro duration:1d winners:1
/giveaway end message_id:<id>
/giveaway reroll message_id:<id>
```

### Good uses

- Run event prizes with a fixed end time.
- End a giveaway early if the schedule changes.
- Reroll winners after the original giveaway finishes.

## Thanks

`/thanks` adds to the guild reputation system and keeps a running count of who has given and received thanks.

### Behaviour to know

- You cannot thank yourself.
- You cannot target bots.
- The command enforces rate limits so users cannot spam reputation changes.

```text
/thanks user:@helper reason:Helped with the setup
```