const nums = [-1,0,1,2,-1,-4];
const cnst;

for (let i = 0; i < nums.length; i++) {
    
    cnst = nums[i];
    let j = i+1;
    const set = new Set();
    while(j<nums.length){
        let sum = Math.abs(nums[j]-cnst)
        if(!set.has(sum) ){
            set.add(nums)
        }
    }
}