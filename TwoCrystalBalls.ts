function search(nums: number[]=[1]): number {

    let hi: number= Math.floor(Math.sqrt(nums.length))
    let i=hi
    //console.log(hi)
    for(;i<nums.length;i=i+hi){
      if(nums[i]==1){
        //console.log(nums[i],hi)
        break;
      }
      }
      i=i-hi 

    for(let j=0;j<hi;j++){
      if(nums[i]){
        return i
      }
      i++
    }

    return -1
};