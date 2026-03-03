import { createUserWithEmailAndPassword, getAdditionalUserInfo, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updatePassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase.ts";


export const doCreateUserWithEmailAndPassword = async (email: string, password: string) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    const defaultName = email.split('@')[0];

    await updateProfile(user, {
        displayName: defaultName ?? null
    });
    const docRef = doc(db, "users", res.user.uid);
    await setDoc(docRef, {
        username: res.user.displayName,
    });

    return res;
};

export const doSignInWithEmailAndPassword = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const { isNewUser } = getAdditionalUserInfo(result) || {};
    if (isNewUser) {
        const docRef = doc(db, "users", result.user.uid);
        await setDoc(docRef, {
            username: result.user.displayName,
        });
    }


    return result;
};

export const doPasswordReset = (email: string) => {
    return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password: string) => {
    if (!auth.currentUser) throw new Error("No user logged in");
    return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
    if (!auth.currentUser) throw new Error("No user logged in");
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/#`,
    });
};

export const doUpdateDisplayName = async (displayName: any) => {
    if (auth.currentUser) {
        return updateProfile(auth.currentUser, { displayName });
    }
};