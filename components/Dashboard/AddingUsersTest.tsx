import React, { useRef } from 'react';
import axios from 'axios';

// function AddingUsersTest() {
//   const nameRef = useRef<HTMLInputElement | null>(null);
//   const usernameRef = useRef<HTMLInputElement | null>(null);
//   const emailRef = useRef<HTMLInputElement | null>(null);
//   const passwordRef = useRef<HTMLInputElement | null>(null);

//   const handleSubmit = async (event: any) => {
//     event.preventDefault();

//     const name = nameRef.current?.value;
//     const username = usernameRef.current?.value;
//     const email = emailRef.current?.value;
//     const password = passwordRef.current?.value;

//     // Create the user object
//     const user = {
//       name,
//       username,
//       email,
//       password,
//     };

//     try {
//       // Send a POST request to your server's endpoint (adjust the URL as needed)
//       const response = await axios.post('http://localhost:3000/users', user);

//       if (response.status === 201) {
//         console.log('User inserted successfully.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }

//   return (
//     <div className="testingContainer">
//       <h2>Insert User</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name: </label>
//           <input
//             type="text"
//             name="name"
//             ref={nameRef}
//           />
//         </div>
//         <div>
//           <label>Username: </label>
//           <input
//             type="text"
//             name="username"
//             ref={usernameRef}
//           />
//         </div>
//         <div>
//           <label>Email: </label>
//           <input
//             type="email"
//             name="email"
//             ref={emailRef}
//           />
//         </div>
//         <div>
//           <label>Password: </label>
//           <input
//             type="password"
//             name="password"
//             ref={passwordRef}
//           />
//         </div>
//         <button type="submit">Insert User</button>
//       </form>
//     </div>
//   );
// }

// export default AddingUsersTest;
