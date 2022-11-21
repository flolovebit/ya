import {
  AnimationReferenceMetadata,
  animation,
  query,
  style,
  group,
  animate,
  AnimationKeyframesSequenceMetadata,
  keyframes,
} from '@angular/animations';

export const sharedStyles = {
  position: 'fixed',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  transformStyle: 'preserve-3d',
  //  transform: 'translate3d(0,0,0)'
};
export const moveFromLeftKeyframes: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({ transform: 'translateX(-100%)', offset: 0, 'z-index': '9999' }),
    style({ transform: 'translateX(0%)', offset: 1 }),
  ]);
export const fadeFrames: AnimationKeyframesSequenceMetadata = keyframes([
  style({ opacity: '1', offset: 0 }),
  style({ opacity: '0.3', offset: 1 }),
]);
export const moveFromLeftFade: AnimationReferenceMetadata = animation(
  [
    query(':enter, :leave', style(sharedStyles), { optional: true }),
    group([
      query(
        ':enter',
        [
          animate(
            '{{enterTiming}}s {{enterDelay}}s ease',
            moveFromLeftKeyframes
          ),
        ],
        { optional: true }
      ),

      query(
        ':leave',
        [animate('{{leaveTiming}}s {{leaveDelay}}s ease', fadeFrames)],
        { optional: true }
      ),
    ]),
  ],
  {
    params: {
      enterTiming: '.6',
      leaveTiming: '0.7',
      enterDelay: '0',
      leaveDelay: '0',
    },
  }
);
