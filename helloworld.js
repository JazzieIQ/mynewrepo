// Name of programmer: Matthew
// Name of program: Hello World
// Date started: 01/26/2023
//
// Description of program: Ask user for his/her first name and echo back in a greeting.
// Input/Processing/Output: user input in console, output is System.out in console
// Purpose of program: CIT-63 assignment Spring 2023
//
// References:
// https://www.w3schools.com/java/java_user_input.asp

import java.util.Scanner; // import the Scanner class 

class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);
    String userName;
    
    // Enter username and press Enter
    System.out.println("Enter username"); 
    userName = myObj.nextLine();   
       
    System.out.println("Username is: " + userName);        
  }
}

import java.util.Scanner;
public class HelloWorld01 {
    public static void main(String[] args) {
        // Variable declaration section.
        String userName = "";
        String greeting = "";
        Scanner userInput = new Scanner(System.in);

        System.out.println("\n\n");
        // Input: get user name
        System.out.println("Hello user, enter your preferred name: ");
        userName = userInput.nextLine();

        // Processing: Create a greeting
        greeting = "Hello " + userName + " how are you today?";

        // Output:
        System.out.println("\n\n" + greeting + "\n\n");

    }
}