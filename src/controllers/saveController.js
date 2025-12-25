import userServices from "../services/saveService.js";
const UserServices = new userServices();
export const create = async (req, res) => {
    try {
        req.body.createdBy = req.user.user._id;
        const data = req.body;
        const save = await UserServices.create(data);
        return res.status(201).json({
            data: save,
            error: {},
            success: true,
            message: "User Created Successfully"
        });

    }
    catch (err) {
        return res.status(500).json({
            data: {},
            error: err,
            success: false,
            message: "Internal Server Error"
        });
    }

}
export const getDecrypted = async (req, res) => {
    try {
        const save = await UserServices.getDecrypted(req.params.id);
        return res.status(200).json({
            data: save,
            error: {},
            success: true,
            });
        }catch (err) {
            return res.status(500).json({
                data: {},
                error: err,
                success: false,
                message: "Internal Server Error"
            });
        }
    }
export const getAll = async (req, res) => {
    try {
        const saves = await UserServices.getAll(req.user.user._id);
        return res.status(200).json({
            data: saves,
            error: {},
            success: true,
            });
        }catch (err) {
            return res.status(500).json({
                data: {},
                error: err,
                success: false,
                message: "Internal Server Error"
            });
        }
    }
export const update = async (req, res) => {
    try {
        const save = await UserServices.update(req.params.id, req.body);
        return res.status(200).json({
            data: save,
            error: {},
            success: true,
            });
        }
        catch (err) {
             return res.status(500).json({
                data: {},
                error: err,
                success: false,
                message: "Internal Server Error"
            });
        }
    }
export const deleteSave = async (req, res) => {
    try {
        const save = await UserServices.delete(req.params.id);
        return res.status(200).json({
            data: save,
            error: {},
            success: true,
            });
        }
        catch (err) {
             return res.status(500).json({
                data: {},
                error: err,
                success: false,
                message: "Internal Server Error"
            });
        }
    }
    

