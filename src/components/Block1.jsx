// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import '../styles/App.css';


// export default function Block1() {

//     const [post, setPost] = useState(false);
//     const [mydata,setMydata] = useState();
//     const [detail, setDetail] = useState({
//         "title": "",
//         "description": "",
//         "image": "",
//         "upvote":0,
//         "downvote":0,
//     })
   
//    const postData = () => {
//         if (detail.title === "") {
//             return alert("Something Wrong!");
//         }
//         else if (detail.description === "") {
//             return alert("Something Wrong");
//         }
//         let myData = localStorage.getItem("postdetail");
//         if (myData == null) {
//          myData = [];
//             myData.push(detail);
//             localStorage.setItem("postdetail", JSON.stringify(myData));
//             } else {
//             let data = JSON.parse(myData);
//              data.push(detail);
//             localStorage.setItem("postdetail", JSON.stringify(data));
//         }
//     };
   
//     useEffect(()=>{
//         const getData = localStorage.getItem("postdetail");
//         if(getData){
//             setMydata(JSON.parse(getData));
//         }
//         },[detail])

//      function upvote(key){
//         const data = localStorage.getItem("postdetail");
//         const data1 = JSON.parse(data);
//         if (data1) {
//            data1[key].upvote = data1[key].upvote+1;
//          //  console.log(data1);
//             localStorage.setItem("postdetail", JSON.stringify(data1));
//          }
//       //  console.log(data1);
//      }
//      function downvote(key){
//         const data = localStorage.getItem("postdetail");
//         const data1 = JSON.parse(data);
//         if (data1) {
//            data1[key].downvote = data1[key].downvote-1;
//         //   console.log(data1);
//             localStorage.setItem("postdetail", JSON.stringify(data1));
//          }
//      }

//     return (
//         <div>
//             <nav className='nav-bar'>
//                 <button type='button' className='btn' onClick={() => setPost(true)}> Add new post</button>
//             </nav>
//             <main>
//                 <div className='parent'>
//                 {post && <PostDetail />}
//                     {
//                        mydata &&  mydata.map((ele,index)=>{
//                             return <>
//                              <div className='child' key={index}>

//                                 <div className='btn-child'>
//                                 <div>
//                                      <button type='button' onClick={()=>upvote(index)}className='upBtn'>Upvote</button>
//                                      <div className='inr-der'>{ele.upvote}</div>
//                                  </div>
//                                 <div>
//                              <button type='button'  className='downbtn'onClick={()=>downvote(index)} >Downvote</button>
//                                     <div className='inr-der'>{ele.downvote}</div>
//                                 </div>
//                             </div>
//                             <div className='description'>
//                                 <h3 className='title'>{ele.title}</h3>
//                                 <p className='my-post'>{ele.description}</p>
//                             </div>
//                             </div>
//                         </>
//                     })
//                     }  
//                 </div>
//             </main>
//          </div>
//     );

   
//     function PostDetail() {
//          return (
//             <div className='form-div'>
//                 <div className='myForm'>
//                     <h1>Add new post</h1>
//                     <form>

//                         Post Title <br></br>
//                         <textarea required name="title" value={detail.title} onChange={(e) => {
//                          setDetail({ ...detail, [e.target.name]: e.target.value });
//                         }}></textarea><br></br>

//                          Description <br></br>
//                         <textarea required name="description" value={detail.description} onChange={(e) => {
//                          setDetail({ ...detail, [e.target.name]: e.target.value });
//                              }}></textarea><br></br>

//                             <input type="file" name="image" value={detail.image} onChange={(e) => {
//                             setDetail({ ...detail, [e.target.name]: e.target.value });
//                         }}></input><br></br>

//                         <button type='submit' onClick={postData}>Save</button>

//                         <button type='button' onClick={() => setPost(false)}>Close</button>

//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

