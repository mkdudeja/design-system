module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-mkdudeja`
  extends: ["mkdudeja"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
