# 🏥 Telecare AI — Authentication UI

A pixel-perfect React Native (Expo) implementation of a healthcare app authentication flow — **Sign In**, **Sign Up**, and **Forgot Password** — built from a [Dribbble design reference](https://dribbble.com/shots/24783022-osler-AI-Telehealth-Telemedicine-App-Sign-In-Sign-Up-UI).

<br />

> **Assignment**: Recreate the Dribbble-inspired authentication UI using React Native, Expo, and only core React Native components — no UI libraries.

---

## 📱 App Screenshot

> _Take a screenshot on your device/emulator and replace the placeholder below._

```
[ Add your screenshot here ]
Replace this block with:
![App Screenshot](./assets/screenshots/preview.png)
```

**Suggested layout for your screenshot section:**

|                   Sign In                    |                   Sign Up                    |                   Forgot Password                   |
| :------------------------------------------: | :------------------------------------------: | :-------------------------------------------------: |
| ![sign-in](./assets/screenshots/sign-in.png) | ![sign-up](./assets/screenshots/sign-up.png) | ![forgot](./assets/screenshots/forgot-password.png) |

> **How to capture screenshots:**
>
> - **iOS Simulator**: `Cmd + S`
> - **Android Emulator**: Camera icon in emulator toolbar
> - **Physical device**: Standard phone screenshot, then pull from device

---

## ✨ Features

- **Sign In** — Email + password inputs with focus highlight, eye toggle, Facebook / Google / Instagram social login buttons, links to Sign Up and Forgot Password
- **Sign Up** — Email, password, and confirm password fields with live mismatch error state and validation banner
- **Forgot Password** — Three selectable reset method cards (Email, 2FA, Google Authenticator) with active highlight state and back navigation
- Fully responsive across iOS and Android
- Keyboard-aware layout (`KeyboardAvoidingView`)
- `SafeAreaView` for notch / home-bar handling
- Centralised design tokens (colours, spacing, typography, radii)
- All icons from `@expo/vector-icons` — zero emoji

---

## 🗂 Project Structure

```
my-app/
├── app/
│   ├── _layout.tsx          # Root Stack layout (Expo Router)
│   ├── index.tsx            # Sign In screen  → route: /
│   ├── sign-up.tsx          # Sign Up screen  → route: /sign-up
│   └── forgot-password.tsx  # Forgot Password → route: /forgot-password
├── components/
│   └── CrossLogo.tsx        # Reusable green + logo mark
├── constants/
│   └── theme.ts             # Design tokens (Colors, Typography, Spacing, Radius)
├── assets/
│   └── screenshots/         # ← Put your app screenshots here
├── app.json
├── package.json
└── tsconfig.json
```

---

## 🧭 Navigation Flow

```
app/index.tsx  (Sign In)
    │
    ├── "Sign Up."  ──────────────────────→  app/sign-up.tsx
    │                                              │
    │                                         "Sign In."  ──→  app/index.tsx
    │
    └── "Forgot your password?"  ───────→  app/forgot-password.tsx
                                                   │
                                              ← Back button (router.back())
```

Navigation is handled entirely by **Expo Router** — no manual `NavigationContainer` setup required. Routes are derived from the file system.

---

## 🛠 Tech Stack

| Technology                                                                                    | Version | Purpose                                                 |
| --------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------- |
| [Expo](https://expo.dev)                                                                      | ~56.0.8 | SDK + tooling                                           |
| [React Native](https://reactnative.dev)                                                       | 0.85.3  | Core framework                                          |
| [React](https://react.dev)                                                                    | 19.2.3  | UI runtime                                              |
| [Expo Router](https://expo.github.io/router)                                                  | ~56.2.8 | File-based navigation                                   |
| [@expo/vector-icons](https://docs.expo.dev/guides/icons/)                                     | ^15.1.1 | Feather, FontAwesome, AntDesign, MaterialCommunityIcons |
| [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) | ~5.7.0  | Safe area insets                                        |
| [react-native-screens](https://github.com/software-mansion/react-native-screens)              | 4.25.2  | Native screen optimisation                              |
| TypeScript                                                                                    | ~6.0.3  | Static typing                                           |

> **No external UI libraries** — all layout is built with core React Native primitives: `View`, `Text`, `TextInput`, `TouchableOpacity`, `ScrollView`, `KeyboardAvoidingView`, `StyleSheet`.

---

## 🚀 Getting Started

### Prerequisites

| Tool             | Minimum Version | Install                                                                                                                            |
| ---------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Node.js          | 20.x LTS        | [nodejs.org](https://nodejs.org)                                                                                                   |
| npm              | 10.x            | bundled with Node                                                                                                                  |
| Expo Go (device) | latest          | [iOS](https://apps.apple.com/app/expo-go/id982107779) · [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) |

### 1 — Clone the repository

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2 — Install dependencies

```bash
npm install
```

### 3 — Start the development server

```bash
npx expo start
```

You will see a QR code in the terminal.

### 4 — Open on your device

| Platform             | How                                                               |
| -------------------- | ----------------------------------------------------------------- |
| **Physical device**  | Open Expo Go → scan the QR code                                   |
| **Android emulator** | Press `a` in the terminal (requires Android Studio + running AVD) |
| **iOS simulator**    | Press `i` in the terminal (macOS + Xcode only)                    |
| **Web**              | Press `w` in the terminal                                         |

---

## 🎨 Design Approach

### Design Reference

[Dribbble — Osler AI Telehealth App](https://dribbble.com/shots/24783022-osler-AI-Telehealth-Telemedicine-App-Sign-In-Sign-Up-UI)

### Implementation Strategy

**1. Design tokens first** — All colours, spacing, typography, and border radii are extracted into `constants/theme.ts` before any screen code. This guarantees visual consistency and makes future changes trivial.

**2. Component decomposition** — The `CrossLogo` component is extracted and reused across Sign In and Sign Up, rather than duplicating markup.

**3. Expo Router file-based navigation** — Screens map directly to files in `app/`. No boilerplate `NavigationContainer` or manual stack config needed. Deep-linking and web support come for free.

**4. Validation on interaction** — Password mismatch errors only surface after the first submit attempt (`attempted` flag), preventing premature error states that frustrate users.

**5. Keyboard handling** — `KeyboardAvoidingView` with platform-aware `behavior` prop (`padding` on iOS, `height` on Android) ensures inputs are never hidden behind the software keyboard.

**6. Icon system** — `@expo/vector-icons` provides Feather (general UI), FontAwesome (Facebook), AntDesign (Google, Instagram), and MaterialCommunityIcons (reset options) — all from a single, tree-shakeable package already included in Expo.

---

## 📐 Screen Details

### Sign In (`app/index.tsx`)

- Green border highlight on focused inputs
- Eye toggle button on the password field
- Primary CTA button with green shadow elevation
- Horizontal divider with "or continue with" label
- Facebook, Google, Instagram social login buttons
- "Sign Up" and "Forgot your password?" text links via Expo Router `<Link>`

### Sign Up (`app/sign-up.tsx`)

- Three inputs: email, password, confirm password
- Red border on both password fields when mismatch is detected
- `alert-triangle` error banner: _"ERROR: Password do not match!"_
- Validation only triggers after first submit attempt

### Forgot Password (`app/forgot-password.tsx`)

- Circular back button → `router.back()`
- Three tappable cards: Email Address, 2 Factor Authentication, Google Authenticator
- Selected card: green border, green background tint, white icon on green badge
- Unselected cards: neutral grey badge
- "Reset Password →" CTA button

---

## 🔧 Troubleshooting

**Metro bundler cache issue**

```bash
npx expo start --clear
```

**Module not found after `npm install`**

```bash
rm -rf node_modules
npm install
```

**Expo Go version mismatch**  
Update Expo Go on your device to the latest version from the App Store / Play Store.

**`gap` style warning**  
`gap` is fully supported in React Native 0.85 / Expo SDK 56. If you see a warning you are on an older SDK — update or replace `gap` with `marginRight` on child elements.

**TypeScript path alias `@/` not resolving**  
Ensure `tsconfig.json` contains:

```json
{
  "compilerOptions": {
    "paths": { "@/*": ["./src/*", "./*"] }
  }
}
```

and `app.json` has `"experiments": { "typedRoutes": true }`.

---

## 📄 License

This project is for educational/assignment purposes.  
Design credit: [Dribbble — osler AI Telehealth Telemedicine App UI](https://dribbble.com/shots/24783022)
