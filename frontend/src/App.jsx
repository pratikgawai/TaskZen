// import AppRoutes from "./routes/AppRoutes";
// import { Toaster } from "react-hot-toast";
// import { AnimatePresence } from "framer-motion";


// function App() {
//   return (
//     <>
//       <Toaster
//         position="top-right"
//         reverseOrder={false}
//         toastOptions={{
//           duration: 2500,
//           style: {
//             borderRadius: "12px",
//             background: "#0f172a",
//             color: "#fff",
//             padding: "16px",
//           },
//         }}
//       />

//       <AnimatePresence mode="wait">
//         <AppRoutes />

//         <Route
//   path="/forgot-password"
//   element={<ForgotPassword />}
// />
//       </AnimatePresence>
//     </>
//   );
// }

// export default App;

import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2500,
          style: {
            borderRadius: "12px",
            background: "#0f172a",
            color: "#fff",
            padding: "16px",
          },
        }}
      />

      <AnimatePresence mode="wait">
        <AppRoutes />
      </AnimatePresence>
    </>
  );
}

export default App;