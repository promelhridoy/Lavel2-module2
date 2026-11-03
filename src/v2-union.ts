
 
//  const greetings = () => {
//     console.log("Hello Promel")
// }

// greetings();

//* Literal Type

type Status = "pending"
const status: Status = 'pending';
console.log(status)

//* Basic Union

type Identity = string | number
const id : Identity = 2344
console.log(id)

//* Literal Union

type Role = "user" | "admin" | "manager"

const userRole : Role = "admin"
console.log(userRole)

//* Object union

type Admin = {id: number, role: "admin", privileges: string[]}
type Member = {id: number, role: "member", plans: string[]}
type User = Admin | Member

const user : User = {id: 123, role: "member", plans:["ssgg", "sssd"]}