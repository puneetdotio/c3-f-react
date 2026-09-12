type ID = string | number;

type Status = "error" | "pending" | "success";

type User = {
    name: string;
    age: number;
}

interface Users{
    name: string;
    age: number;
}

interface Admin extends User{
    permissions: string[];
}