class Solution {
    public String longestCommonPrefix(String[] strs) {
        
       
        String result="";
        int flag=0;
        if(strs.length==0)
        {
            return "";
        }
        for(int i=0;i<strs[0].length();i++)
        {
            char c=strs[0].charAt(i);
            for(int j=1;j<strs.length;j++)
            {
                if(strs[j].length() <= i)
                {
                    flag=1;
                    break;                    
                }
                else
                {
                    if(c!=strs[j].charAt(i))
                    {
                        flag=1;
                    }
                }

            }
            if(flag==0)
            {
                result=result+c;

            }
            else
            {
                break;
            }
        }
        return result;
        
    }
}
