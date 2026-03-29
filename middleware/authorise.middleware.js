export const authorize = (permittedRoles) => {
  return (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          message: "Authentication required",
        });
      }

      if (!permittedRoles.includes(req.user.role)) {
        return res.status(403).json({
          message: "Access denied",
        });
      }

      next();
    } catch (error) {
      return res.status(500).json({
        message: "Authorization middleware error",
      });
    }
  };
};