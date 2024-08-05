function BinarySearch(nums: number[], target: number): number {
    let lo: number = 0;
    let hi: number = nums.length-1;

    while(lo<=hi){
        let m=Math.floor((lo+hi)/2)
        if(nums[m]==target){
            return m
        }else if(target<nums[m]){
            hi=m-1
        }else lo = m+1
    }
    return -1;

};