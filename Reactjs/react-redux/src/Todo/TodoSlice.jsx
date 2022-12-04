// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         current: {},
//         settings: {}

//     }
//     ,
//     ///tự tạo ra 1 action creator vs  cai name o tren la =>{type:"counter/increase"}
//     reducers: {

//     },
// });

// const { actions, reducers } = userSlice;
// export const { addJob, removeJob, setJob } = actions;
// export default userSlice;
// // export default reducers;




































import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "todo",
    initialState: {
        job: {
            title: "",
            status: ""

        },
        jobs: [
            {


                title: "eat",
                status: "new"
            },
        ]


    }
    ,
    ///tự tạo ra 1 action creator vs  cai name o tren la =>{type:"counter/increase"}
    reducers: {
        setJob(state, action) {
            //k can phai ...state nhu reduce cũ
            // return state + 1;
            return {
                ...state,
                job: action.payload
            }
            console.log(action.payload)


        }
        ,
        addJob(state, action) {
            ////k can phai ...state nhu reduce cũ
            // return state + 1;

            let newJob = [...state.jobs];
            // newJob.push(action.payload)

            return {
                ...state,
                jobs: [...newJob, action.payload]

            }

        },
        removeJob(state, action) {
            const newjobs = [...state.jobs]
            newjobs.splice(action.payload, 1)

            return {
                ...state,
                jobs: newjobs


            }
        },
    },
});

const { actions, reducers } = TodoSlice;
export const { addJob, removeJob, setJob } = actions;
export default TodoSlice;
// export default reducers;




