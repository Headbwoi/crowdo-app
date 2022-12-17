var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//@desc     Gets User Data
//@route    GET /api/user/:userID
//@access   private
export const getProductUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "get user" });
});
//@desc     Registers a User
//@route    PUT /api/products/:id
//@access   private
export const registerProductOwner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "get products" });
});
//@desc     Updates a Product
//@route    PUT /api/products/:id
//@access   private
export const loginProductOwner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "get products" });
});
