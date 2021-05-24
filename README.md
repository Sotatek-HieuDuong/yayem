## Getting Started - Yayem

1. Run `yarn` or `npm install` to install dependencies
2. Start the packager with `npm start`
3. Connect a mobile device to your development machine
4. Install Pods with `npx pod-install`
5. Run the test application:
- On Android:
  - Run `yarn android` or Use Android Studio (Recommended)
- On iOS:
  - Run `yarn android` to open test app on Xcode

## Troubleshooting
- unset npm_config_prefix:
  - Go to file `find-node.sh` add `unset npm_config_prefix` & `unset PREFIX` in head file.
