import React, {useEffect, useState} from 'react';
import { collection, updateDoc, getDocs, doc } from "firebase/firestore"; 
import db from './firebase';
import LeaderUI from './LeaderUI'



const LeaderBoard = () => {

    const [data, setData] = useState('');
    const [loading, setLoading] = useState('');
     
    useEffect(() => {
        const fetchData = async () => {

            // try {
            //     const docRef = await addDoc(collection(db, "userss"), {
            //       first: "Ada",
            //       last: "Lovelace",
            //       born: 1815
            //     });
            //     const docRef2 = await addDoc(collection(db, "userss"), {
            //       first: "Ada2",
            //       last: "Lovelace2",
            //       born: 1817
            //     });
            //     console.log("Document written with ID: ", docRef2.id);
            //   } catch (e) {
            //     console.error("Error adding document: ", e);
            //   }
            
            const washingtonRef = doc(db, "userss", "3tV6eTgsd8gM8XwxMuAG");

// // Set the "capital" field of the city 'DC'
// await updateDoc(washingtonRef, {
//   first: 'kanishk'
// });


//                 const querySnapshot = await getDocs(collection(db, "userss"));
            
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
// });
let arr = [];
const querySnapshot = await getDocs(collection(db, "userss"));
querySnapshot.forEach((doc) => {
// doc.data() is never undefined for query doc snapshots
console.log(doc.data());
arr.push(calculateFinalScore(doc.data()));


});
let res = arr.sort((a, b) => a.score > b.score ? -1 : 1).map((el, idx) => {
    return {
        ...el,
        name: idx+1
    }
})

setData(res);
        
        };
    
        fetchData();
        }, []);
    
        const calculateFinalScore = (data) => {
            const {orderCount, totalImpression, uniqueImpression, cancelledOrderCount} = data;
            const score = Math.ceil(orderCount * 0.5 + totalImpression * 0.1 + uniqueImpression * 0.4 - cancelledOrderCount * 0.1);
            return {...data, score: score}
        }
    
     

    return <div><LeaderUI data={data} /></div>
}

export default LeaderBoard;