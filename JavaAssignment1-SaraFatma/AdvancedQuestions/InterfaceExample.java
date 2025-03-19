import java.util.*;
interface Vehicle {
    int MAX_SPEED = 120;  

    void drive();
    default void showSpeedLimit() {
        System.out.println("Max speed is " + MAX_SPEED + " km/h");
    }
}
class Car implements Vehicle {
    @Override
    public void drive() {
        System.out.println("Car is driving...");
    }
}
public class InterfaceExample {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.drive();
        myCar.showSpeedLimit(); 
    }
}
