function getConcatenation(nums: number[]): number[] {
    let ans:number[]=[]
    let dist=nums.length
    for(let i=0; i<dist*2; i++){
        ans.push(nums[i%dist])
    }
    return ans
};