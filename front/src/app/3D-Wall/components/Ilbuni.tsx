import React from 'react';
import Character from '@/components/Character/character';
import HeadFront from '$/images/ilbuni_head_front.png';
import HeadBack from '$/images/ilbuni_head_back.png';
import BodyFront from '$/images/ilbuni_body_front.png';
import BodyBack from '$/images/ilbuni_body_back.png';
import ArmLeft from '$/images/ilbuni_arm_0.png';
import ArmRight from '$/images/ilbuni_arm_1.png';
import LegLeft from '$/images/ilbuni_leg_0.png';
import LegRight from '$/images/ilbuni_leg_1.png';
import { CharacterDirection } from '@/components/Character/typing';

type Props = {
  startX: number;
  direction: CharacterDirection;
};

function Ilbuni({ startX, direction }: Props) {
  return (
    <Character startX={startX} direction={direction}>
      <Character.Part className="character-head">
        <Character.Part.Front src={HeadFront} />
        <Character.Part.Back src={HeadBack} />
      </Character.Part>
      <Character.Part className="character-torso">
        <Character.Part.Front src={BodyFront} />
        <Character.Part.Back src={BodyBack} />
      </Character.Part>
      <Character.Part className="character-arm-right">
        <Character.Part.Front src={ArmLeft} />
        <Character.Part.Back src={ArmRight} />
      </Character.Part>
      <Character.Part className="character-arm-left">
        <Character.Part.Front src={ArmRight} />
        <Character.Part.Back src={ArmLeft} />
      </Character.Part>
      <Character.Part className="character-leg-right">
        <Character.Part.Front src={LegLeft} />
        <Character.Part.Back src={LegRight} />
      </Character.Part>
      <Character.Part className="character-leg-left">
        <Character.Part.Front src={LegRight} />
        <Character.Part.Back src={LegLeft} />
      </Character.Part>
    </Character>
  );
}

export default Ilbuni;
