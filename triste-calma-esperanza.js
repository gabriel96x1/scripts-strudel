setcpm(120/4)
const drums = sound("[hh*2 - - ], [sd*2], [- bd*2 - bd], [- - - cp]").gain(0.3)
  .bank("RolandTR707")

const base_notes= note(`<
[0,3,7] [0,4,7] [0,4,7] [0,3,7]
>`.add(`<
a d f e
>`)).slow(2).sustain(2)
  .sound("piano")
  .color("white")
  ._pianoroll()
const notes_2 = n("0 2 4 [7,9]")
  .scale("C5:minor").sound("piano").fast(2)

const a = stack(drums, base_notes)
const b = stack(drums)
const c = stack(drums)
const d = stack(drums)

seq(a)
