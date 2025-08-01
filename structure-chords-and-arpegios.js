$: s("sd").bank("tr909").beat("4,12", 16)
$: s("bd").bank("tr909").beat("2,3,5 10,11, 13", 16)

$: n(`<[0,2,4,6]
[-1,0,2,4]
[1,4,5,7]
[-1,0,1,3]
>`).scale("C2:minor").s("gm_church_organ").gain(.3) // Acordes
  ._pianoroll()

$: n(`<[6 4 2 0]*4
[-1 0 2 4]*4
[7 5 4 1]*4
[-1 0 1 3]*4
>`).scale("C5:minor").s("gm_electric_guitar_jazz")
  .clip(2)
  .legato(.8)
  .room(".6:2") // Arpegio
  ._pianoroll()
