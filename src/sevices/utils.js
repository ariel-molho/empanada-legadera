import { db, auth } from './firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const getItems = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'));
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });
  return docs;
};

export const saveOrder = (newOrder) =>
  addDoc(collection(db, "orders"), newOrder);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!validURL(website.url))
  //     return toast("invalid url", { type: "warning", autoClose: 1000 });

  //   if (!params.id) {
  //     await saveWebsite(website);
  //     toast("New Link Added", {
  //       type: "success",
  //     });
  //   } else {
  //     await updateWebsite(params.id, website);
  //     toast("Updated", {
  //       type: "success",
  //     });
  //   }

// const itemCollection = db.collection("products");
// const orderCollection = db.collection("orders");


// export function createOrder(buyer, items, total) {
//   return orderCollection
//     .add({
//       buyer: buyer,
//       items: items,
//       date: firebase.firestore.Timestamp.fromDate(new Date()),
//       total: total,
//     })
//     .then(function (oderId) {
//       return oderId.id;
//     })
//     .catch(function (error) {
//       return error;
//     });
//   }  

export const registerUser = async (registerEmail, registerPassword) => {
  const user = await createUserWithEmailAndPassword(
    auth,
    registerEmail,
    registerPassword
  ).catch(err => {
    return err;
  });
  // console.log(user);//para control
  let token = ("Bearer " + user?.user.accessToken);
  sessionStorage.setItem("token", JSON.stringify(token));
  return user
};

export const loginUser = async (loginEmail, loginPassword) => {
  const user = await signInWithEmailAndPassword(
    auth,
    loginEmail,
    loginPassword
  ).catch(err => {
    return err;
  });
  // console.log(user);//para control
  let token = ("Bearer " + user?.user.accessToken);
  sessionStorage.setItem("token", JSON.stringify(token));
  return user
};

export const logout = async () => {
  await signOut(auth);
  sessionStorage.clear();
};

export const currentUser = onAuthStateChanged(auth, (currentUser) => {
  // console.log(currentUser);//para control
  return currentUser;
});