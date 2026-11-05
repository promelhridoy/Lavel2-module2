const wrapInArray = (value) => {
    return [value];
};
const stringArr = wrapInArray("afgdsfg");
const numberArr = wrapInArray(2334);
stringArr.map((item) => item.toUpperCase());
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
const fetchUser = async () => {
    try {
        const res = await fetch("/api/v1/some-endpoint");
        const data = (await res.json());
        if (!res.ok || data.success) {
            throw new Error(`Failed fetch user data: ${data.message}`);
        }
        return data.data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.log("Something went Wrong");
        }
    }
    ;
};
const userData = await fetchUser();
if (userData) {
    console.log(userData.name);
}
export {};
