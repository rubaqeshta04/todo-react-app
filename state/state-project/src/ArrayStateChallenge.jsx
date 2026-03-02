// import { useState } from "react";

// const initialProducts = [
//   {
//     id: 0,
//     name: "Baklava",
//     count: 1,
//   },
//   {
//     id: 1,
//     name: "Cheese",
//     count: 5,
//   },
//   {
//     id: 2,
//     name: "Spaghetti",
//     count: 2,
//   },
// ];

// export default function ShoppingCart() {
//   const [products, setProducts] = useState(initialProducts);

//   function handleIncreaseClick(productId) {
//     setProducts(
//       products.map((product) =>
//         product.id === productId
//           ? { ...product, count: product.count + 1 }
//           : product,
//       ),
//     );
//   }

//   function handleDeleteClicked(productId) {
//     const newProducts = products.map((product) => {
//       if (product.id === productId) {
//         return { ...product, count: product.count - 1 };
//       }
//       return product;
//     });
//     const filteredProducts = newProducts.filter(product => product.count > 0);
//     setProducts(filteredProducts);
//   }

//   return (
//     <ul>
//       {products.map((product) => (
//         <li key={product.id}>
//           {product.name} (<b>{product.count}</b>)
//           <button
//             onClick={() => {
//               handleIncreaseClick(product.id);
//             }}
//           >
//             +
//           </button>
//           <button onClick={() => handleDeleteClicked(product.id)}>–</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// import { useState } from "react";

// const initialProducts = [
//   {
//     id: 0,
//     name: "Baklava",
//     count: 1,
//   },
//   {
//     id: 1,
//     name: "Cheese",
//     count: 5,
//   },
//   {
//     id: 2,
//     name: "Spaghetti",
//     count: 2,
//   },
// ];

// export default function ShoppingCart() {
//   const [products, setProducts] = useState(initialProducts);

//  function handleIncreaseClick(productId){
//   const newProducts = products.map((product) => {
//     if(product.id === productId){
//       return {...product , count : product.count +1}
//     }else{
//       return product;
//     }
//   })
//   setProducts(newProducts);
//  }

//   function handleDeleteClicked(productId) {
//     setProducts(
//       products.map((product) =>
//         product.id === productId
//           ? { ...product, count: product.count - 1 }
//           : product,
//       ),

//     );
//   }

//   return (
//     <ul>
//       {products.map((product) => (
//         <li key={product.id}>
//           {product.name} (<b>{product.count}</b>)
//           <button
//             onClick={() => {
//               handleIncreaseClick(product.id);
//             }}
//           >
//             +
//           </button>
//           <button onClick={() => handleDeleteClicked(product.id)}>–</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// import { useState } from "react";

// export default function ShoppingCart() {
//   const [count, setCount] = useState(0);
//   function handelPlusClick() {
// const newCount = count +2;
// setCount(newCount);
// setCount(count+2);
//     setCount((c) => {
//       return c + 1;
//     });
//     setCount((c) => {
//       return c + 1;
//     });
//   }
//   return (
//     <>
//       <div>
//         <h1>The count is : {count}</h1>
//         <button onClick={handelPlusClick}>+</button>
//       </div>
//     </>
//   );
// }

import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    // setPending(pending + 1);
    // await delay(3000);
    // setPending(pending - 1);
    // setCompleted(completed + 1);
    setPending((p) => p + 1);
    await delay(3000);
    setPending((p) => p - 1);
    setCompleted((c) => c + 1);
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
