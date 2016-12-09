# roots
Roots Hi-Fi prototype for CS147 Fall 2016

This prototype is built with Exponent and React Native, and is intended for
Android phones (not all design features will render correctly on iOS).

There are two ways to
install it:

1. Install Exponent on your phone, then visit [https://exp.host/@ottobonn/roots](https://exp.host/@ottobonn/roots)
to install Roots via Exponent. This will give you the full experience of the Roots app, but it will leave an Exponent notification in your notifications shade while the app is running.

2. Download the standalone APK file, and install it using ADB. This is the same Roots app experience, but without the Exponent notification.
  1. Download the Roots APK from the Roots website.
  1. Ensure you have [ADB](https://developer.android.com/studio/index.html) installed on your computer
  1. Enable developer mode on your phone: go to Settings > About, and tap "Build Number" 7 times.
  1. Connect your phone to your computer via USB.
  1. Run `adb install roots.apk` to install the app on your phone.

Some features of this app require permissions to access your camera or photo gallery. The app does not publish or share your photos.
