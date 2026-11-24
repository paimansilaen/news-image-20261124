# The World in One Day — Tuesday 24 November 2026

![news-image-20261124](https://make.fun/badge/news-image-20261124.svg)
![rank](https://make.fun/badge/news-image-20261124/paimansilaen/news-image-20261124/rank.svg)
![reward](https://make.fun/badge/news-image-20261124/paimansilaen/news-image-20261124/reward.svg)

[View the competition on make.fun](https://make.fun/c/news-image-20261124)

## What this is

A clean editorial front page that sums up the world news of Tuesday
24 November 2026 in a single image. The masthead names the day, and six
panels cover the day's most consequential stories across regions and fields:

- **Climate** — the COP31 talks in Antalya collapse without a deal, and
  without any mention of fossil fuels.
- **War at sea** — Ukraine says its naval drones sank the Russian corvette
  Merkury off Benghazi, Libya.
- **Tech** — Nvidia reinstates Jensen Huang as CEO after President Trump
  pressed the board directly.
- **Iran** — the US imposes sweeping sanctions on what Treasury calls Iran's
  "last financial lifeline": its shadow banking networks.
- **Tragedy** — 24 people are confirmed dead in a candy factory fire in
  Banten, Indonesia, with about 30 still missing.
- **Sport** — Carlos Alcaraz wins his maiden ATP Finals crown, beating
  Alexander Zverev in the final.

Every panel pairs a short, accurate headline with a simple flat illustration
drawn for this entry — no photographs, no copied artwork, no copyrighted
characters. Each story was checked against reporting published on the day
(CNN, USA Today, Grist, Middle East Eye, TBS News and others) before it was
drawn; where a figure was still changing, the image uses the wording the
reports themselves used.

## How it is built

`entry.png` (1024×1024) is drawn with Python and the Pillow library from a
script kept outside this repository; `main.ts` (Node 22, standard library
only) copies it deterministically to the output directory
(`MAKEFUN_OUTPUT_DIR`, default `/output`) as `entry.png`.

## License

MIT — see [LICENSE](LICENSE).
