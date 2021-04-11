import java.util.*;

import javax.naming.spi.DirStateFactory.Result;

import jdk.jshell.spi.ExecutionControl.RunException;

public class roman
{
    static int value(char r)
    {
        if(r=='I')
        {
            return 1;
            
        }
        if(r=='V')
        {
            return 5;
        }
        if(r=='X')
        {
            return 10;
        }
        if(r=='L')
        {
            return 50;
        }
        
        if(r=='C')
        {
            return 100;
            
        }
        if(r=='D')
        {
            return 500;
            
        }
        if(r=='M')
        {
            return 1000;
            
        }
        return 0;        

    }
    int result(String str)
    {
        

    }
     public static void main(String[] args) {
         roman ob= new roman();
        Scanner sc=new Scanner(System.in);
       System.out.print("Enter the string :");
       String str=sc.nextLine();
       int result =0;
       for(int i=0;i<str.length();i++)
       {
           int a=value(str.charAt(i));
           if(i+1 < str.length() )
           {
               int b=value(str.charAt(i+1));
               if(a >= b )
               {
                   result =result + a + b;
                   i++;


               }
               else 
               {
                   result=result + (b-a);
                   i++;
                
               }
           }
           else 
           {
               result =result+a;
               
           }
           

       }
       System.out.println(result);


   } 
}
