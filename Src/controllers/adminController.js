exports.createAdmin = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create Admin" });
};

exports.readAdmin = async (req, res) => {
  res.status(200).json({ status: "success", data: "Get Admin" });
};

exports.deleteAdmin = async (req, res) => {
  res.status(200).json({ status: "success", data: "delete Admin" });
};

exports.updateAdmin = async (req, res) => {
  res.status(200).json({ status: "success", data: "update Admin" });
};
