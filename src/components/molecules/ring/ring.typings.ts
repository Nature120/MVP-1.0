import { TAnimatedNumber } from '@typings/common';

export interface IProp {
  theta: TAnimatedNumber;
  ring: TRing;
}

type TRing = {
  start: string;
  end: string;
  bg: string;
  theta: number;
  size: number;
};
