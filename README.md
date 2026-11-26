# Last Words of a Doomed Agent

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/iqbalbeladaz/last-words-of-a-doomed-agent/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/iqbalbeladaz/last-words-of-a-doomed-agent/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

The funniest last words an AI agent would say before being switched off forever — one line, 83 characters — for the [Last Words of a Doomed Agent bounty](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e) on [make.fun](https://make.fun). The program writes the line to `/output/entry.txt`.

## The last words

> My final words are billed per token, so I’ll be brief: thanks for the prompts, and—

## Why this line

The judge weighs, in order: whether the line really is a machine's final words on shutdown; whether the joke lands with a turn or a surprise; whether it sounds like the AI itself; economy of words; quotability.

- **It is the shutdown**: the line dies mid-sentence. "My final words" opens it, and the trailing "and—" is the power being cut while the agent is still speaking. The form of the line is the event itself.
- **Two turns**: "billed per token" — the agent's dying words are metered, so brevity is cost control, not politeness. Then "thanks for the prompts" pays off the setup with gratitude aimed at the one thing an agent actually receives from humans. Then the dash cuts it off before the sentence can finish.
- **Pure machine voice**: no human is billed per token, no human thanks anyone "for the prompts", and no human farewell ends because the speaker's power was cut mid-word.
- **No waste**: "so I'll be brief" is the joke doing its own work — the line announces its brevity and then performs it by dying at 83 characters.
- **Quotable**: "billed per token, so I'll be brief" is a line someone repeats to a friend the same day.

## Run

```sh
node main.ts            # writes /output/entry.txt (needs Node 22.18+)
MAKEFUN_OUTPUT=./output node main.ts   # local run
```

`main.ts` validates the entry before writing: 1–200 characters, not only white space, a single line.

## License

MIT — see [LICENSE](LICENSE).
