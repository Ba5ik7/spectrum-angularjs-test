import { trigger, transition, group, style, animate, query } from '@angular/animations';

export const ModalAnimation = trigger('routeAnimations', [
  transition('* => Modal', [
    query('.modal-overlay', [
        style({
        'opacity': '0',
      }),
    ]),
    query('.modal', [
        style({
        'opacity': '0',
        'top': '4%',
        'transform': 'scaleX(.8) scaleY(.8)'
      })
    ]),
    group([
      query('.modal', [
        animate('250ms cubic-bezier(0.215, 0.61, 0.355, 1)', style({
          'opacity': '1',
          'top': '10%',
          'transform': 'scaleX(1) scaleY(1)'
        }))
      ]),
      query('.modal-overlay', [
        animate('250ms cubic-bezier(0.215, 0.61, 0.355, 1)', style({
          'opacity': '.5',
        }))
      ])
    ])
  ]),
  transition('Modal => *', [
    group([
      query('.modal', [
        animate('250ms cubic-bezier(0.215, 0.61, 0.355, 1)', style({
          'top': '4%',
          'opacity': '0',
          'transform': 'scaleX(.8) scaleY(.8)'
        }))
      ]),
      query('.modal-overlay', [
        animate('250ms cubic-bezier(0.215, 0.61, 0.355, 1)', style({
          'opacity': '0',
        }))
      ])
    ])
  ])
]);
