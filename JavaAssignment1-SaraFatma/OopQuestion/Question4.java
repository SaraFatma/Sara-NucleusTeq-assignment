//Explain the concept of encapsulation with a suitable example.
import java.util.*;
 
class Person {
    // (data hiding)
    private String name;

    
    public void setName(String name) {
        this.name = name;
    }

   
    public String getName() {
        return name;
    }
}
public class Question4 {
    public static void main(String[] args) {
        Person p = new Person();   
        p.setName("Sara Fatma");  
        System.out.println("Name: " + p.getName()); 
    }
}
