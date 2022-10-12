import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";

const useFetch = (docRef) => {

  let id = []
  useEffect(() => {
    getDocs(docRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          id.push(doc.id)
        })
      })

  }, [docRef]);

  return { id }
}

export default useFetch