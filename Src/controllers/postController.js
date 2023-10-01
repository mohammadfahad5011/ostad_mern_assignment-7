exports.createPost = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create post" });
};

exports.readPost = async (req, res) => {
  res.status(200).json({ status: "success", data: "Get post" });
};

exports.deletePost = async (req, res) => {
  res.status(200).json({ status: "success", data: "delete post" });
};

exports.updatePost = async (req, res) => {
  res.status(200).json({ status: "success", data: "update post" });
};
