class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        st = set()
        ans = []
        for i in range(len(nums)):
            hashset = set()
            for j in range(i+1, len(nums)):
                k = - (nums[i] + nums[j])
                if k in hashset:
                    temp = [nums[i], nums[j], k]
                    temp.sort()
                    st.add(tuple(temp))
                hashset.add(nums[j])
        return [list(x) for x in st]
                        
