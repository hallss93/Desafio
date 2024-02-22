import { randomInt } from 'crypto';
export default function randomIntFromInterval(min: number, max: number) {
  return randomInt(min, max);
}
