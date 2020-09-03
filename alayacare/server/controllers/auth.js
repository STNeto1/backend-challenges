const User = require("../models/User");
const AsyncHandler = require("../middlewares/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

exports.register = AsyncHandler(async (req, res, next) => {
  // Create user
  const user = await User.create(req.body);

  // Generate jwt token
  const token = await user.getSignedJwtToken();

  res.status(200).json({ success: true, token });
});

exports.login = AsyncHandler(async (req, res, next) => {
  // Getting email and password
  const { email, password } = req.body;

  // Check is info is missing
  if (!email || !password) {
    return next(new ErrorResponse(`Please provide an email and password`, 400));
  }

  // Check user
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse(`Invalid credentials`, 401));
  }

  if (!(await user.matchPassword(password))) {
    return next(new ErrorResponse(`Invalid credentials`, 401));
  }

  // Generate jwt token
  const token = await user.getSignedJwtToken();

  res.status(200).json({ success: true, token });
});

exports.getUserInfo = AsyncHandler(async (req, res, next) => {
  // Get user info
  const user = await User.findById(req.user.id);
  if (!user) {
    return next(new ErrorResponse(`Invalid credentials`, 401));
  }

  res.status(200).json({ success: true, data: user });
});
