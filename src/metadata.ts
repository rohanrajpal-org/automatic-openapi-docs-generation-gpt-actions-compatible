/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./user/dto/create-user.dto"), { "CreateUserDto": { name: { required: true, type: () => String } } }], [import("./user/dto/update-user.dto"), { "UpdateUserDto": {} }], [import("./user/entities/user.entity"), { "User": {} }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String } } }], [import("./user/user.controller"), { "UserController": { "create": { type: String }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: String }, "remove": { type: String } } }]] } };
};