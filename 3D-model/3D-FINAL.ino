
#include <Servo.h>

int soundSensorPin = 2;      // Connected to digital output of KY-038 sound sensor module
int servoPin = 3;            // Connected to servo control pin

Servo myservo;
boolean isSoundDetected = false;  // Track if sound is detected

void setup() {
  pinMode(soundSensorPin, INPUT);   // Setting the sound sensor pin as input
  myservo.attach(servoPin);         // Attaching the servo to the servo pin
}

void loop() {
  int soundLevel = digitalRead(soundSensorPin);  // Reading sound level from the sensor

  if (soundLevel == HIGH) {  // Sound is detected
    
      for (int pos = 80; pos <= 125; pos += 7) {
        myservo.write(pos);
        delay(35);  // Decrease this delay value to make the servo move faster
    }
  } else {  // No sound detected
    if (isSoundDetected) {  // Only execute once when sound is initially not detected
      for (int pos = 125; pos >= 80; pos -= 7) {
        myservo.write(pos);
        delay(35);  // Decrease this delay value to make the servo move faster
      }
      isSoundDetected = false;
    }
  }
}
