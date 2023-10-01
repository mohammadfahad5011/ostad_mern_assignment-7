exports.createUser = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create User" });
};

exports.readUser = async (req, res) => {
  res.status(200).json({ status: "success", data: "Get User" });
};

exports.deleteUser = async (req, res) => {
  res.status(200).json({ status: "success", data: "delete User" });
};

exports.updateUser = async (req, res) => {
  res.status(200).json({ status: "success", data: "update User" });
};
