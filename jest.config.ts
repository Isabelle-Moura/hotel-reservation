export default {
   preset: "ts-jest",
   testEnvironment: "node",
   transform: {
      "^.+\\.ts?$": "ts-jest",
   },
   moduleFileExtensions: ["ts", "js", "json", "node"],
   extensionsToTreatAsEsm: [".ts"],
};
