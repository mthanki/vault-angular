import { trigger, transition, style, animate } from "@angular/animations";


export const fadeUp = trigger('fadeUp', [ 
  transition('void => *', [
    style({ opacity: 0,  transform: 'translateY(10px)'}), 
    animate(200, style({opacity: 1, transform: 'translateY(0px)'}))
  ]),
  transition('* => void', [
    style({ opacity: 1}), 
    animate(300, style({opacity: 0}))
  ])
])