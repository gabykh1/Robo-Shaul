#include <Servo.h>

Servo myservo;

void setup() {
  myservo.attach(3);
}

void loop() {
  for (int pos = 0; pos <= 180; pos += 7) {
    myservo.write(pos);
    delay(35); // Decrease this delay value to make the servo move faster
  }
  for (int pos = 180; pos >= 0; pos -= 7) {
    myservo.write(pos);
    delay(35); // Decrease this delay value to make the servo move faster
  }
}
