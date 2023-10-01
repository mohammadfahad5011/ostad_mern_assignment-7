exports.createSubAdmin = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create SubAdmin" });
};

exports.readSubAdmin = async (req, res) => {
  res.status(200).json({ status: "success", data: "Get SubAdmin" });
};

exports.deleteSubAdmin = async (req, res) => {
  res.status(200).json({ status: "success", data: "delete SubAdmin" });
};

exports.updateSubAdmin = async (req, res) => {
  res.status(200).json({ status: "success", data: "update SubAdmin" });
};
