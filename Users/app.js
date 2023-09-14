// const users = [
//     {
//       name: "John Doe",
//       age: 15,
//       gender: "Male",
//       location: "New York"
//     },
//     {
//       name: "Jane Smith",
//       age: 30,
//       gender: "Female",
//       location: "Los Angeles"
//     },
//     {
//       name: "Alex Johnson",
//       age: 22,
//       gender: "Non-binary",
//       location: "San Francisco"
//     },
//     {
//       name: "Emily Brown",
//       age: 28,
//       gender: "Female",
//       location: "Chicago"
//     },
//     {
//         name: "Sanika Mandhare",
//         age: 20,
//         gender: "Female",
//         location: "Satara"
//     },
//     {
//         name: "Prerna Pawar",
//         age: 20,
//         gender: "Female",
//         location: "Yavatmal"
//     },
//     {
//         name: "Snehal Mhasavekar",
//         age: 20,
//         gender: "Female",
//         location: "Kolhapur"
//     },
//     {
//         name: "Shravani Umare",
//         age: 15,
//         gender: "Female",
//         location: "Jaysighpur"
//     },
//     {
//         name: "Yashashwi Patil",
//         age: 10,
//         gender: "Female",
//         location: "Dhule"
//     },
//     {
//         name: "Vaishnavi Patil",
//         age: 28,
//         gender: "Female",
//         location: "Chattisgarh"
//     },

//     {
//         name: "Saniya Warake",
//         age: 8,
//         gender: "Female",
//         location: "Jamshedpur"
//     },
//     {
//         name: "Ayush Mandhare",
//         age: 18,
//         gender: "Male",
//         location: "Wai"
//     },
//     {
//         name: "Kundalik Deshmukh",
//         age: 52,
//         gender: "Male",
//         location: "Alibag"
//     },
//     {
//         name: "Rohan Arora",
//         age: 9,
//         gender: "Male",
//         location: "Tokyo"
//     },
//     {
//         name: "Preeti Zinta",
//         age: 12,
//         gender: "Female",
//         location: "Britain"
//     }
//   ];
//   function isAdult(user) {
//     if(user.age>=18)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
//   }

//  function getFullName(user)
//  {
//     return user.name+" "+user.location;
//  }

//  const adultUsers=users.filter((user)=>{
//     return isAdult(user)===true;
//  })

//  const userNames=users.map((user)=>{
//     return getFullName(user);
//  })
// //  console.log(adultUsers);
// //  console.log(userNames);
// function filterbyGender(user,gender)
// {
//     return user.gender==gender;
// }
// const femaleUsers=users.filter((user)=>{
//     let gender='Female';
//     return filterbyGender(user,gender)==true;
// })
// const getfemaleName=femaleUsers.map((female)=>{
//     return getFullName(female)
// })
// // console.log(femaleUsers);
// // console.log(getfemaleName);

// const movies = [
//     {
//       title: "Inception",
//       genre: "Science Fiction",
//       year: 2010,
//       rating: 8.8
//     },
//     {
//       title: "The Shawshank Redemption",
//       genre: "Action",
//       year: 1994,
//       rating: 9.3
//     },
//     {
//       title: "The Dark Knight",
//       genre: "Action",
//       year: 2008,
//       rating: 9.0
//     },
//     {
//       title: "Pulp Fiction",
//       genre: "Crime",
//       year: 1994,
//       rating: 8.9
//     },
//     {
//       title: "Forrest Gump",
//       genre: "Drama",
//       year: 1994,
//       rating: 8.8
//     },
//     {
//       title: "Avatar",
//       genre: "Science Fiction",
//       year: 2009,
//       rating: 7.8
//     },
//     {
//       title: "The Matrix",
//       genre: "Science Fiction",
//       year: 1999,
//       rating: 8.7
//     },
//     {
//       title: "Jurassic Park",
//       genre: "Adventure",
//       year: 1993,
//       rating: 8.1
//     },
//     {
//       title: "The Lord of the Rings: The Fellowship of the Ring",
//       genre: "Fantasy",
//       year: 2001,
//       rating: 8.8
//     },
//     {
//       title: "Toy Story",
//       genre: "Animation",
//       year: 1995,
//       rating: 8.3
//     }
//   ];
//   let filterbyGenre=(user,genre)=>{
//     return user.genre===genre;
//   }
//   let actionMovies=movies.filter((movie)=>{
//     genre='Action'
//     return filterbyGenre(movie,genre)==true;
//   })
//   let scienceFictionMovies=movies.filter((movie)=>{
//     genre='Science Fiction'
//     return filterbyGenre(movie,genre)==true;
//   })
// //   console.log(actionMovies);
// //   console.log(scienceFictionMovies);
// const movieTitles=actionMovies.map((movie)=>{
//     return movie.title;
//  })
// //  console.log(movieTitles)
// let combinedResults={
//     'userNames':userNames,
//     'adultUsers':adultUsers,
//     'femaleUsers':femaleUsers,
//     'femaleNames':getfemaleName,
//     'movieTitles':movieTitles
// }
// console.log(combinedResults);
// let username=document.getElementById('username');
// console.log(username);
function addUser()
{
    let username=document.getElementById('username');
    if(username.value=="")
    {
       console.log("Invalid");
    }
    else{
        console.log("User Added");
    }
}