export const getUser = async (data) => {
  const {user} = data
  console.log(user)
//   const res = await fetch(
//     `http://localhost:3000/api/user?${email}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
};