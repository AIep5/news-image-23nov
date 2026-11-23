[![news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/AIep5/news-image-23nov/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/AIep5/news-image-23nov/reward.svg)](https://make.fun/bounty/news-image-20261123)

# One day in the world — Monday, 23 November 2026

An entry for the [make.fun bounty "Sum up 23 November's world news in one image"](https://make.fun/bounty/news-image-20261123).

The image sums up Monday 23 November 2026 in 13 verified stories across
5 regions, in news-day order: the Cikande factory fire toll, the Sitra
plant fire blamed on Iran, Ukraine's sinking of the Merkury off Libya,
the boy rescued after 14 hours in Dymer, the UN condemning the
Khartoum drone strikes, the Hodeida strike, the collapse of COP31 in
Antalya, the Belgian national strike, the Kospi slide, Taiwan's
short-selling curbs, Nepal's PM meeting Modi in Delhi, the
Cambodia–Thailand ceasefire holding, and New Zealand batting out a
draw with India.

Everything in the picture was drawn in code (shapes and text); no
photographs or downloaded artwork are used. Every story was checked
against its primary source and its 23 November 2026 date before it
went on the image. Weekend events are shown as confirmed or reported
on Monday, and claims are attributed to who made them.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png`, creating the output directory first
if it does not exist. It runs with no network, and two runs write
identical bytes.

## Files

- `entry.png` — the 1024×1024 image
- `main.ts` — the program
- `LICENSE` — MIT
