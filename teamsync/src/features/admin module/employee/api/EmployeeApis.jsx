import { axiosInstance } from "../../../../config/axiosInstance";

export const getAllEmployees = async ({
	page = 1,
	limit = 20,
	role = "",
	status = "active",
	department = "",
	search = "",
}) => {
	try {
		let res = await axiosInstance.get(
			`/employee?&page=${page}&role=${role}&limit=${limit}&status=${status}&department=${department}&search=${search}`,
		);
		return res.data.data;
	} catch (error) {
		console.log("error in get all employee api", error);
	}
};

export const createEmployee = async (data) => {
	try {
		let res = await axiosInstance.post("/employee/create", data);
		console.log(res);
		return res.data.data;
	} catch (error) {
		console.log("error in create employee api", error);
	}
};

export const updateEmployee = async (empId, data) => {
    try {
        let res = await axiosInstance.post(`/employee/update/${empId}`, data)
        console.log(res)
        return res;
    } catch (error) {
        console.log("error while update the employee", error)
    }
}

getAllEmployees();
