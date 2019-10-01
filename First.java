import java.util.*;
import java.io.*;

class First{
        public static void main(String[] args)throws IOException{
                PrintWriter pr = new PrintWriter(System.out, true);
                pr.println("What is your name?");
                Scanner sc = new Scanner(System.in);
                String str = sc.nexrLine();
                pr.printf("Hello %s, Welcome to my page",str);
                
        }
}
