$: n(`<[4 0 2]*2
[6 0 3]*2
[5 1 3]*2
[3 -1 1]*2
>`).scale("A3:minor").s("gm_glockenspiel")
  .clip(2)
  .legato(.8)
  .room(".8:2") // Arpegio
  ._pianoroll()
