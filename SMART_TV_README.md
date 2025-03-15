# Smart TV Platform Setup Instructions

## Prerequisites

### For WebOS
1. Install WebOS SDK from http://webostv.developer.lge.com/
2. Install CLI tools: `npm install -g @webosose/ares-cli`
3. Setup your device/emulator using `ares-setup-device`

### For Tizen
1. Install Tizen Studio from https://developer.tizen.org/development/tizen-studio/download
2. Install Samsung TV Extensions in Package Manager
3. Generate a Samsung certificate using Certificate Manager

## Building and Deploying

### WebOS
1. Create required icons:
   - Place `icon.png` (80x80px)
   - Place `largeIcon.png` (130x130px)
   - Place `splash.png` (1920x1080px)
   in the `webos-meta` directory

2. Build the app:
   ```bash
   npm run build:webos
   ```
   This will create a .ipk file in the build directory

3. Install to device/emulator:
   ```bash
   ares-install --device YOUR_DEVICE build/*.ipk
   ```

4. Launch the app:
   ```bash
   ares-launch --device YOUR_DEVICE com.company.ctv.streaming.app
   ```

### Tizen
1. Create required icons:
   - Place `icon.png` (115x115px)
   in the `tizen-meta` directory

2. Build the app:
   ```bash
   npm run build:tizen
   ```
   This will create a .wgt file in the build directory

3. Install using Tizen Studio or CLI:
   ```bash
   tizen install -n YOUR_APP.wgt -t YOUR_TARGET
   ```

## Development Notes

- Test thoroughly on both platforms as there might be slight differences in behavior
- Ensure your app handles TV remote control navigation properly
- Consider implementing features like deep linking and voice control for better integration
- Follow platform-specific UI/UX guidelines for the best user experience