import React, { useState, useEffect } from "react";
import "./PlansScreen.css";
import db from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";

function PlansScreen() {
  const [Products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [Sub, setSub] = useState(null);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (Sub) => {
          setSub({
            role: Sub.data().role,
            current_period_end: Sub.data().current_period_end.seconds,
            current_period_start: Sub.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  console.log(Products);
  console.log(Sub);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51MKMBmC4TlidQDTrYJ09lLnIFl9IHNNoP9hfHVVUZlGqCm3ZfjthsjEw9R4Cng188MvwWAgJG2s0HteB7RSsLjH100CSIVeJiE"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="plansScreen">
    {Sub && <p className="plansScreen__renewal">Renewal Date: {new Date(Sub?.current_period_end
    * 1000).toLocaleDateString()}</p>}
      {Object.entries(Products).map(([productID, productData]) => {
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(Sub?.role);

        return (
          <div
            key={productID}
            className={`${
              isCurrentPackage && "plansScreen__plan--disabled"
            } plansScreen__plan`}
          >
            <div className="plansScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
              {/* <h6>{productID}</h6> */}
            </div>

            <button
              onClick={() =>
                !isCurrentPackage && loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrentPackage ? "CURRENT PACKAGE" : "SUBSCRIBE"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
