function buildArray(nums: number[]): number[] {
    let a:number[]=[]
    for(let i=0; i<nums.length; i++){
        a.push(nums[nums[i]])
    }
    return a
};