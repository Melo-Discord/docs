# Roles

The Roles category is small but useful. It helps you inspect role details quickly without opening Discord's role editor.

## Command

| Command | What it does | Access |
|---|---|---|
| `/roleinfo` | Shows role metadata, stats, and key permissions | Public |

## What you get

`/roleinfo` surfaces:

- name
- ID
- colour
- creation date
- member count
- position
- mentionable state
- hoist state
- managed state
- key permissions

```text
/roleinfo role:@Moderators
```

## When it is useful

- Audit a role before using it in setup or permission panels.
- Confirm whether a role is mentionable or hoisted.
- Compare the role’s key permissions to the expectations of your moderation setup.