import {/* inject, */ BindingScope, injectable} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class CalculateService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */
  sum(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo;
  }

  /**
   * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
   * You may assume that each input would have exactly one solution, and you may not use the same element twice.
   * You can return the answer in any order.
   * Input: nums = [2,7,11,15], target = 9
   * Output: [0,1]
   * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
   * @param nums [2,7,11,15]
   * @param target 9
   * @returns [0,1]
   */
  twoSum(nums: Array<number>, target: number) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      const x = target - nums[i];

      if (map.has(x)) {
        return [map.get(x), i];
      }

      map.set(nums[i], i);
    }

    // return [];
    throw new Error('not match');
  }
}
