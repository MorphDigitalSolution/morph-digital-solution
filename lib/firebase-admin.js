import admin from "firebase-admin";

function getServiceAccount() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    throw new Error("FIREBASE_SERVICE_ACCOUNT_JSON is missing");
  }

  const parsed = JSON.parse(raw);
  return {
    ...parsed,
    private_key: parsed.private_key?.replace(/\\n/g, "\n"),
  };
}

function getFirebaseApp() {
  if (admin.apps.length > 0) {
    return admin.apps[0];
  }

  return admin.initializeApp({
    credential: admin.credential.cert(getServiceAccount()),
  });
}

export function getFirestore() {
  return admin.firestore(getFirebaseApp());
}

export { admin };
