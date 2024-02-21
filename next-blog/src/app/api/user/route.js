// export const GET = async (req, { email }) => {
//   const { email } = email;

//   try {
//     const user = await prisma.user.findOne({
//       where: { email }
//     });

//     return new NextResponse(JSON.stringify(user, { status: 200 }));
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
//     );
//   }
// };