function LinearSearch(nums: number[], target: number): number {

    for(let i: number =0; i<=nums.length-1; i++){
        if(nums[i]==target){
            return i
        }
    }
    return -1

};