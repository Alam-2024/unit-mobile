# Refactor — Guía de instalación

Este paquete contiene los archivos refactorizados de la app, listos para integrar al proyecto Expo + Firebase + React Native existente. Acompañan al documento **Auditoria_y_Plan_Refactor.docx**.

## 1. Estructura de los archivos entregados

```
refactor/
├── constants/
│   └── designTokens.ts          ← paleta, tipografía, spacing, radios
├── components/
│   └── auth/
│       ├── AuthScreen.tsx       ← reemplaza el actual
│       └── authStyles.ts        ← reemplaza el actual
├── hooks/
│   └── useContextHook.tsx       ← reemplaza el actual
├── views/
│   └── admin/
│       └── admin.tsx            ← reemplaza el actual
├── payments/
│   ├── types.ts
│   ├── usePaywall.ts
│   └── PlanSelector.tsx
├── functions/
│   └── index.ts                 ← Cloud Functions (deploy aparte)
└── firestore.rules              ← deploy con `firebase deploy --only firestore:rules`
```

## 2. Dependencias a instalar

### App (root del proyecto)

```bash
npm i firebase \
      @react-native-async-storage/async-storage \
      expo-secure-store \
      expo-web-browser \
      expo-crypto \
      zxcvbn \
      yup
```

`@expo/vector-icons` y `firebase` ya los tenés en el proyecto. Si todavía no usás Stripe Payment Sheet (no es necesario para checkout en webview), no agregues `@stripe/stripe-react-native`.

### Backend (carpeta `functions/`)

```bash
cd functions
npm i firebase-admin firebase-functions stripe
```

## 3. Pasos de integración (orden sugerido)

1. **Copiar `constants/designTokens.ts`** a tu proyecto. Verificar que el alias `@/constants/...` funcione (ajustá tsconfig si hace falta).
2. **Reemplazar `components/auth/authStyles.ts` y `AuthScreen.tsx`** por los nuevos.
3. **Reemplazar `hooks/useContextHook.tsx`**. Importante: la API pública del hook cambia — ahora expone `user`, `claims`, `isAdmin`, `signOut`, `refreshClaims`, `canAccessUnit`. Buscá usos del hook viejo y migrá:
   - `loggedInUser` → `user`
   - `isAuthenticated` → `isAuthenticated`
   - `isAdmin` → `isAdmin`
4. **Borrar la lógica de login en el cliente que escribía `role`/`baned`/`pk3...`/etc**. Ahora sucede server-side (`beforeUserCreate` + `inviteUser`).
5. **Deploy reglas Firestore**: `firebase deploy --only firestore:rules`.
6. **Cloud Functions**:
   ```bash
   cd functions
   firebase deploy --only functions:inviteUser,functions:beforeUserCreate,functions:syncClaimsOnSubChange
   ```
7. **Stripe + extensión** (recomendado):
   ```bash
   firebase ext:install stripe/firestore-stripe-payments
   ```
   Configurar webhook en el Stripe Dashboard (`https://<region>-<project>.cloudfunctions.net/ext-firestore-stripe-payments-handleWebhookEvents`) y crear productos con `metadata.entitlements="pk3,pk4,kg,..."` y `metadata.plan="pro"`.
8. **Reemplazar `views/admin/admin.tsx`** por el nuevo. La columna de switches por unidad desaparece.
9. **Agregar el flujo de paywall**: cuando una vista detecta una unidad bloqueada, mostrar `<PlanSelector onClose={...} />`.
10. **App Check**: activar en Firebase Console → App Check → DeviceCheck (iOS) y Play Integrity (Android), y en código:
    ```ts
    import {
      initializeAppCheck,
      ReCaptchaV3Provider,
    } from "firebase/app-check";
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider("..."),
      isTokenAutoRefreshEnabled: true,
    });
    ```

## 4. Migración de usuarios existentes

Ejecutar una sola vez como script Node (ver `functions/scripts/migrateExistingUsers.ts` que podemos generar después). El script:

1. Lee cada doc en `users-data`.
2. Para cada uno calcula `entitlements` a partir de los booleanos por unidad que tenías.
3. Llama `admin.auth().setCustomUserClaims(uid, { role, plan, entitlements })`.
4. Limpia los campos por unidad del doc y deja sólo el plan derivado.

## 5. Variables de entorno

`.env` (no se commitea):

```
EXPO_PUBLIC_FIREBASE_API_KEY=...
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=...
EXPO_PUBLIC_FIREBASE_PROJECT_ID=...
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=...
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
EXPO_PUBLIC_FIREBASE_APP_ID=...
```

Backend (`functions/.env` o secret manager):

```
STRIPE_API_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## 6. Test rápido del refactor

1. `npm start` y abrir la app en simulator.
2. Registrar un usuario con un email no-verificado → ver banner de info.
3. Verificar email → al volver, `useAppContext().isAuthenticated` pasa a `true`.
4. Desde la consola de Firebase, en custom claims, asignar `role: "admin"` a tu uid → forzar refresh con `getIdToken(true)`. La app revela la pantalla de admin.
5. Crear un producto en Stripe con `metadata.plan="pro"` y `metadata.entitlements="pk3,pk4,kg,first"`.
6. En la app, abrir `<PlanSelector />`, elegir el plan → el webhook de Stripe sincroniza claims → unidades desbloqueadas.

## 7. Tests recomendados (siguiente fase)

- `AuthScreen`: validación email, password rules, generador, bloqueo tras 5 fallos (rate limit visible).
- `usePaywall`: mocks de `firestore-stripe-payments` para `openCheckout`.
- `admin.tsx`: filtros, drawer, confirmación de delete.

Cualquier duda concreta sobre integración te la resuelvo directo en el siguiente turno.
