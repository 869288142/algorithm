/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 时间复杂度Onums1 + nums2 + nums1
// 空间复杂度O unique nums1 + nums2 
 */
var intersect = function(nums1, nums2) {
    // 记录交集
    let ret = []
    // 描述集合1
    let map1 = new Map()
    for(let i = 0; i < nums1.length; i++) {
        if(map1.has(nums1[i])) {
            map1.set(nums1[i], map1.get(nums1[i]) + 1)
        }else {
            map1.set(nums1[i], 1)
        }
    }
    // 描述集合2
    let map2 = new Map()
    for(let i = 0; i < nums2.length; i++) {
        if(map2.has(nums2[i])) {
            map2.set(nums2[i], map2.get(nums2[i]) + 1)
        }else {
            map2.set(nums2[i], 1)
        }
    }
    // 求集合交集
    for(let num of map1.keys()) {
        let num1Count =  map1.get(num) 
        let num2Count =  map2.get(num)
        if(num1Count && num2Count) {
            let minCount = Math.min(num1Count, num2Count)
            for(let i = 1; i <= minCount; i++) {
                ret.push(num)
            }
        }
    }

    return ret
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 考虑2集合的数字完全不同，那么可以以On2的时间解决问题
 * 如何管理重复元素？
 */
var intersect = function(nums1, nums2) {
    // 记录交集
    let ret = []

    return ret
};