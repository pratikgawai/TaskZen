// import { useEffect, useState } from "react";
// import { getDashboard } from "../api/dashboard";

// import MainLayout from "../layouts/MainLayout";
// import StatCard from "../components/cards/StatCard";

// export default function Dashboard() {
//   return (
//     <MainLayout>
//       <h1 className="text-3xl font-bold mb-8">
//         <h1 className="text-3xl font-bold mb-8">

//     👋 Welcome {dashboard.name}

// </h1>
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

//         <StatCard
//           title="📋 Total Tasks"
//           value={dashboard.total_tasks}
//         />

//         <StatCard
//           title="✅ Completed"
//           value={dashboard.completed_tasks}
//         />

//         <StatCard
//           title="🔥 Current Streak"
//           value={dashboard.current_streak}
//         />

//         <StatCard
//           title="🏆 Best Streak"
//           value={dashboard.best_streak}
//         />

//       </div>
//     </MainLayout>
//   );
// }

// const [dashboard, setDashboard] = useState({

//     total_tasks: 0,

//     completed_tasks: 0,

//     current_streak: 0,

//     best_streak: 0,

//     name: ""

// });

// useEffect(() => {

//     const fetchDashboard = async () => {

//         try {

//             const res = await getDashboard();

//             setDashboard(res.data);

//         }

//         catch (err) {

//             console.log(err);

//         }

//     };

//     fetchDashboard();

// }, []);

import { useEffect, useState } from "react";
import { getDashboard } from "../api/dashboard";

import MainLayout from "../layouts/MainLayout";
import StatCard from "../components/cards/StatCard";

export default function Dashboard() {

  const [dashboard, setDashboard] = useState({
    total_tasks: 0,
    completed_tasks: 0,
    current_streak: 0,
    best_streak: 0,
    name: "",
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await getDashboard();
        setDashboard(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">
        👋 Welcome {dashboard.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="📋 Total Tasks"
          value={dashboard.total_tasks}
        />

        <StatCard
          title="✅ Completed"
          value={dashboard.completed_tasks}
        />

        <StatCard
          title="🔥 Current Streak"
          value={dashboard.current_streak}
        />

        <StatCard
          title="🏆 Best Streak"
          value={dashboard.best_streak}
        />

      </div>
    </MainLayout>
  );
}