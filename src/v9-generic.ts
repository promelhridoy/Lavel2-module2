const wrapInArray = <T>(value: T) => {
    return [value];
}


const stringArr = wrapInArray<string>("afgdsfg");
const numberArr = wrapInArray<number>(2334);

stringArr.map((item) => item.toUpperCase());


interface User {
        name: string;
        role: string;
}

interface Blog {
        title: string;
        description: string;
        date: string;
}

interface ApiResponse <T> {
    data: T;
    success: boolean;
    statusCode: number;
    message: string;
}

type UserRes = ApiResponse<User>;
type BlogRes = ApiResponse<Blog>;

// const userRes: UserRes = {
//     statusCode: 200,
//     success: true,
//     message: "data "
//     data: {
//         name: "Promel",
//         role: "Worker"
//     }
// }

//TODO: promises

const fetchUser = async () : Promise<User | undefined> => {
    try {
        const res = await fetch("/api/v1/some-endpoint")
    const data = (await res.json()) as ApiResponse<User>;

    if(!res.ok || data.success) {
        throw new Error(`Failed fetch user data: ${data.message}`);
        
    }

    return data.data;
    } catch (error) {
        if(error instanceof Error) {
            console.error(error.message);
            
        } else {
            console.log("Something went Wrong");
            
        }
    };



    
}

const userData = await fetchUser()

if(userData) {
    console.log(userData.name);
    
}