$: n(`<[0,2,4]
[2,5,8]
[1,3,5]
[[3,6,9] [2,5,8]]
>`).scale("C4:minor").s("supersaw").gain(.4).clip(".6:2") // Acordes
  ._pianoroll()

$: n(`<[4 0 2]*4
[8 2 5]*4
[5 1 3]*4
[9 3 6]*4
>`).scale("C5:minor").s("gm_electric_guitar_muted")
  .clip(2)
  .legato(.8)
  .room(".6:2") // Arpegio
  ._pianoroll()
