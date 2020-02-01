import { trigger, transition, style, animate, query } from '@angular/animations';

export const ModalAnimation = trigger('routeAnimations', [
  transition('* => Modal', [
    query('.modal', [
      style({
      'opacity': '0',
      'transform': 'scaleX(.8) scaleY(.8)'
    })
    ]),
    query('.modal', [
      animate('250ms cubic-bezier(0.215, 0.61, 0.355, 1)', style({
        'opacity': '1',
        'transform': 'scaleX(1) scaleY(1)'
       }))
    ])
  ])
]);
