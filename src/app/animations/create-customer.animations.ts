import { trigger, transition, group, style, animate, query } from '@angular/animations';

export const CreateCustomerAnimation = trigger('routeAnimations', [
  transition('* => CustomerCreate', [
    query(':enter div.card', [
        style({
        'clip-path': 'circle(25% at 25% 25%)',
        // 'background': 'linear-gradient(to right, #3d5afe 50%, white 50%)',
        // 'background-size': '200% 100%',
        // 'background-position': 'right bottom',
        'box-shadow': 'none'
      }),
    ], { optional: true }),
    query(':enter div.card-action, :enter div.card-content', [
        style({ 'opacity': '0' }),
    ], { optional: true }),
    query(':enter div.card', [
      animate('.25s cubic-bezier(0.215, 0.61, 0.355, 1)', style({ 
        'clip-path': 'circle(100% at 50% 50%)',
        // 'background-position': 'left bottom'
      }))
    ], { optional: true }),
    query(':enter div.card-action, :enter div.card-content', [
      animate('.25s cubic-bezier(0.215, 0.61, 0.355, 1)', style({ 'opacity': '1' }))
    ], { optional: true }),
    query(':enter div.card', [
      animate('.25s cubic-bezier(0.215, 0.61, 0.355, 1)', style({ 
        'box-shadow': '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)' 
      }))
    ], { optional: true })
  ]),

  transition('CustomerCreate => *', [
    query(':enter', [
      style({ 'display': 'none' }),
    ], { optional: true }),
    query(':leave div.card', [
      style({
        'clip-path': 'circle(100% at 50% 50%)',
        // 'background': 'linear-gradient(to right, #3d5afe 50%, white 50%)',
        // 'background-size': '200% 100%',
        // 'background-position': 'left bottom',
        'box-shadow': 'none'
      }),
    ], { optional: true }),
    group([
      query(':leave div.card-action, :leave div.card-content', [
        animate('.25s cubic-bezier(0.215, 0.61, 0.355, 1)', style({ 'opacity': '0' }))
      ], { optional: true }),
      query(':leave div.card', [
        animate('.25s cubic-bezier(0.55, 0.085, 0.68, 0.53)', style({
          'clip-path': 'circle(20% at 25% 25%)',
          'opacity': '0'
          // 'background-position': 'right bottom'
        }))
      ], { optional: true })
    ])
  ]),
]);
